"""Resumable OCR of ESSLCE past-paper PDFs -> ocr/<name>.txt

Each pdf/<name>.pdf gets ocr/<name>.txt when complete (skip if present).
Render 200 dpi via pymupdf, OCR via rapidocr (CPU, low-spec friendly).
Run:  python ocr_batch.py [limit] [shard] [nshards]   # shard = this worker's index (0-based); files assigned by index % nshards
"""
import sys, os, time, json

HERE = os.path.dirname(os.path.abspath(__file__))
PDF_DIR = os.path.join(HERE, 'pdf')
OCR_DIR = os.path.join(HERE, 'ocr')
PROG = os.path.join(HERE, 'ocr_progress.json')
os.makedirs(OCR_DIR, exist_ok=True)

import pymupdf
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()

# night-shift courtesy: never outrank the user's own apps
try:
    import psutil
    psutil.Process().nice(psutil.IDLE_PRIORITY_CLASS)
except Exception:
    pass

PAUSE_FLAG = os.path.join(HERE, 'PAUSE.flag')

def rest_if_asked():
    """Block between pages while PAUSE.flag exists (health monitor creates it)."""
    paused = False
    while os.path.exists(PAUSE_FLAG):
        if not paused:
            log('PAUSED for machine rest break'); paused = True
        time.sleep(20)
    if paused:
        log('resumed after rest break')

def log(msg):
    print(f'[{time.strftime("%H:%M:%S")}] {msg}', flush=True)

def load_prog():
    try:
        return json.load(open(PROG, encoding='utf-8'))
    except Exception:
        return {}

pdfs = sorted(f for f in os.listdir(PDF_DIR) if f.endswith('.pdf') and os.path.getsize(os.path.join(PDF_DIR, f)) > 10000)
todo = [p for p in pdfs if not os.path.exists(os.path.join(OCR_DIR, p[:-4] + '.txt'))]
limit = int(sys.argv[1]) if len(sys.argv) > 1 else 999
shard = int(sys.argv[2]) if len(sys.argv) > 2 else 0
nshards = int(sys.argv[3]) if len(sys.argv) > 3 else 1
todo = [p for i, p in enumerate(todo) if i % nshards == shard]
log(f'shard {shard}/{nshards}: {len(todo)} files to OCR, doing {min(len(todo), limit)} this run')

for p in todo[:limit]:
    t0 = time.time()
    name = p[:-4]
    out = os.path.join(OCR_DIR, name + '.txt')
    part = out + '.part'
    try:
        doc = pymupdf.open(os.path.join(PDF_DIR, p))
        lines = []
        for i, page in enumerate(doc):
            pg_txt = []
            pix = page.get_pixmap(dpi=200)
            img = part + f'.p{i}.png'
            pix.save(img)
            res, _ = ocr(img)
            os.remove(img)
            if res:
                for r in res:
                    pg_txt.append(r[1])
            lines.append(f'\n----- PAGE {i+1} -----\n' + '\n'.join(pg_txt))
            log(f'{name} page {i+1}/{len(doc)} ({time.time()-t0:.0f}s)')
        with open(out, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        prog = load_prog(); prog[name] = {'pages': len(doc), 'secs': round(time.time()-t0)}
        json.dump(prog, open(PROG, 'w', encoding='utf-8'))
        log(f'DONE {name} ({time.time()-t0:.0f}s)')
    except Exception as e:
        log(f'ERROR {name}: {e}')

log('batch finished')
