"""Night-shift health monitor for nat-exams OCR (run every ~20 min via cron).

Checks RAM + CPU (temp sensors are blocked on this board — RAM pressure and
sustained CPU are the practical thermal proxies). Creates PAUSE.flag to make
the OCR worker rest between pages, removes it to resume. Scheduled rest break
03:00-03:30 local + a 5-min break after every 2h of continuous work.
Also restarts the worker if it died (unless paused). Idempotent, silent.
"""
import os, sys, json, time, subprocess, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
PAUSE = os.path.join(HERE, 'PAUSE.flag')
STATE = os.path.join(HERE, 'health_state.json')
LOG = os.path.join(HERE, 'health.log')
PY = sys.executable

import psutil

def log(msg):
    line = f'{datetime.datetime.now():%H:%M:%S} {msg}'
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(line + '\n')

def load_state():
    try:
        return json.load(open(STATE, encoding='utf-8'))
    except Exception:
        return {'work_since_break': 0}

def save_state(s):
    json.dump(s, open(STATE, 'w', encoding='utf-8'))

ram_mb = psutil.virtual_memory().available // 1048576
cpu = psutil.cpu_percent(interval=3)
now = datetime.datetime.now()
st = load_state()

# --- decide pause/resume ---
reason = None
if ram_mb < 700:
    reason = f'low RAM {ram_mb}MB'
elif cpu > 97:
    reason = f'CPU pegged {cpu:.0f}%'
# scheduled rest window 03:00-03:30
if now.hour == 3 and now.minute < 30:
    reason = reason or 'scheduled 03:00 rest break'
# continuous-work break: 5 min after 2h
st['work_since_break'] = st.get('work_since_break', 0) + 20 / 60  # ~20 min per cron tick
if st['work_since_break'] >= 2 and not os.path.exists(PAUSE):
    reason = f'2h continuous work break'
    st['break_until'] = (now + datetime.timedelta(minutes=6)).isoformat()

if reason:
    until = st.get('break_until')
    if os.path.exists(PAUSE) and until and now.isoformat() < until and 'work break' in (st.get('pause_reason') or ''):
        pass  # already in a timed break, let it run out
    else:
        open(PAUSE, 'a').close()
        st['pause_reason'] = reason
        log(f'PAUSE: {reason} (ram={ram_mb}MB cpu={cpu:.0f}%)')
else:
    until = st.get('break_until')
    if os.path.exists(PAUSE) and until and now.isoformat() < until:
        pass  # timed break not over
    elif os.path.exists(PAUSE):
        os.remove(PAUSE)
        st['work_since_break'] = 0
        st['break_until'] = None
        st['pause_reason'] = None
        log(f'RESUME: healthy (ram={ram_mb}MB cpu={cpu:.0f}%)')

# --- worker liveness (skip while paused — don't fight the break) ---
if not os.path.exists(PAUSE):
    chk = subprocess.run(
        ['powershell', '-NoProfile', '-Command',
         "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | "
         "Where-Object { $_.CommandLine -like '*ocr_batch*' } | Measure-Object | Select-Object -ExpandProperty Count"],
        capture_output=True, text=True, timeout=60)
    if chk.stdout.strip() == '0':
        # ONLY when count is a verified zero — never top up, never double-spawn
        subprocess.Popen([PY, os.path.join(HERE, 'ocr_batch.py')], cwd=HERE,
                         creationflags=0x00000008)
        log('RESTARTED ocr_batch (crew was fully dead)')
    elif chk.stdout.strip() not in ('1', '2', '3', '4', '5'):
        log(f'SPAWN SKIPPED: worker count unreadable ({chk.stdout.strip()!r}) — not spawning blind')

save_state(st)

# --- completion check ---
n = len([f for f in os.listdir(os.path.join(HERE, 'ocr')) if f.endswith('.txt')]) if os.path.isdir(os.path.join(HERE, 'ocr')) else 0
if n >= 72 and not os.path.exists(os.path.join(HERE, 'ALL_DONE.flag')):
    open(os.path.join(HERE, 'ALL_DONE.flag'), 'w').write('ocr complete\n')
    print(f'NAT-EXAMS: OCR COMPLETE {n}/72 papers')
