"""Keep the nat-exams OCR batch alive + healthy + parse finished pairs. Idempotent."""
import subprocess, sys, os, datetime
HERE = os.path.dirname(os.path.abspath(__file__))
PY = sys.executable

# 1) health monitor: RAM/CPU checks, rest breaks (PAUSE.flag), restart if dead
subprocess.run([PY, os.path.join(HERE, 'health_monitor.py')], cwd=HERE,
               capture_output=True, text=True, timeout=200)

# 2) parse whatever pairs are ready (skips unfinished)
subprocess.run([PY, os.path.join(HERE, 'parse_papers.py')], cwd=HERE,
               capture_output=True, text=True, timeout=300)
n = len([f for f in os.listdir(os.path.join(HERE, 'ocr')) if f.endswith('.txt')]) if os.path.isdir(os.path.join(HERE, 'ocr')) else 0
items = len(os.listdir(os.path.join(HERE, 'items'))) if os.path.isdir(os.path.join(HERE, 'items')) else 0
done_flag = os.path.join(HERE, 'ALL_DONE.flag')
if n >= 72 and not os.path.exists(done_flag):
    open(done_flag, 'w').write('ocr complete\n')
    print(f'NAT-EXAMS: OCR COMPLETE {n}/72 papers, {items} item files parsed')
# otherwise stay silent: health_monitor keeps the batch alive/rested
