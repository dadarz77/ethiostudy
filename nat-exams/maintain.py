"""Keep the nat-exams OCR batch alive + parse finished pairs. Idempotent."""
import subprocess, sys, os, datetime
HERE = os.path.dirname(os.path.abspath(__file__))
PY = sys.executable

def ocr_alive():
    try:
        out = subprocess.run(['tasklist'], capture_output=True, text=True, timeout=30).stdout
        # count python processes running ocr_batch (wmic-free check via powershell fallback)
        chk = subprocess.run(
            ['powershell', '-NoProfile', '-Command',
             "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | "
             "Where-Object { $_.CommandLine -like '*ocr_batch*' } | Measure-Object | Select-Object -ExpandProperty Count"],
            capture_output=True, text=True, timeout=60)
        return chk.stdout.strip() != '0' and chk.returncode == 0
    except Exception:
        return True  # on check failure assume alive; don't double-launch

if not ocr_alive():
    logp = os.path.join(HERE, 'ocr_restarts.log')
    with open(logp, 'a', encoding='utf-8') as f:
        f.write(f'{datetime.datetime.now()} restarting ocr_batch\n')
    subprocess.Popen([PY, os.path.join(HERE, 'ocr_batch.py')],
                     cwd=HERE, creationflags=0x00000008)  # DETACHED

# parse whatever pairs are ready (skips unfinished)
subprocess.run([PY, os.path.join(HERE, 'parse_papers.py')], cwd=HERE,
               capture_output=True, text=True, timeout=300)
n = len([f for f in os.listdir(os.path.join(HERE, 'ocr')) if f.endswith('.txt')]) if os.path.isdir(os.path.join(HERE, 'ocr')) else 0
items = len(os.listdir(os.path.join(HERE, 'items'))) if os.path.isdir(os.path.join(HERE, 'items')) else 0
done_flag = os.path.join(HERE, 'ALL_DONE.flag')
if n >= 72 and not os.path.exists(done_flag):
    open(done_flag, 'w').write('ocr complete\n')
    print(f'NAT-EXAMS: OCR COMPLETE {n}/72 papers, {items} item files parsed')
elif not os.path.exists(done_flag) and (ocr_alive() or n < 72):
    pass  # stay silent: either still grinding, or restart fired above
