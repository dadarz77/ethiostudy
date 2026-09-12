"""Parse OCR'd ESSLCE papers -> items/<subj>-<yr>.json

Both PDFs are practice-site screenshots; the ANSWERS file is the richer source
(stems + options + inline ticks + end grid). Questions file = fallback stems.

Answer confidence: grid letter + tick letter agree -> 'grid+tick'; one only ->
that one; disagree -> flagged for vision review (excluded from clean items).
"""
import os, re, json, sys

HERE = os.path.dirname(os.path.abspath(__file__))
OCR = os.path.join(HERE, 'ocr')
ITEMS = os.path.join(HERE, 'items')
os.makedirs(ITEMS, exist_ok=True)

Q_START = re.compile(r'^\s*(\d{1,3})[\.\)]\s*(?=[a-zA-Z])(?![A-D](?:\s*$|\s+\d))')
GRID_TOKEN = re.compile(r'\b\d{1,3}\.[A-D]\b')
OPT_LINE = re.compile(r'^\s*[O0○）\)\]—-]?\s*\(?\s*([A-D])\s*[\)\].\uFF09:]\s*(.*)$')
RADIO_FIX = re.compile(r'^(\s*)[O0○]\s+([A-D])\s+(\S.*)$')
ANS_ROW = re.compile(r'^\s*(\d{1,3})\s*[\.\-–:]?\s*([A-D])\b')
BANNER = re.compile(r'PAGE \d+|National|Exam|Subject|Time Allowed|Instructions|Not Answered|BOOKLET|SUBJECT\s*CODE|NUMBER\s*OF\s*ITEMS|TIME\s*ALLOWED|^\d+/\d+/\d+|^\d+/\d+$|euee\.epizy|Contents/exam', re.I)
TICK_END = re.compile(r'(?:[√✓]|[a-z][vx<])$')

# Greek letters rapidocr commonly misreads as CJK/fullwidth look-alikes.
# The CJK block in the gauntlet test exists to catch stray Chinese OCR output;
# 入/△ are legitimate lambda/delta misreads in physics/chem formula options.
GLYPH_FIX = str.maketrans({'入': 'λ', '△': 'Δ', '∧': 'λ', '□': '', 'μ': 'μ'})

def clean(s):
    s = s.translate(GLYPH_FIX)
    s = re.sub(r'\s+', ' ', s).strip()
    # strip practice-site UI artifacts that appear INLINE in long OCR lines
    s = re.sub(r'\|?\s*Not Answered\s*', ' ', s)
    s = re.sub(r'euee\.epizy\.com/\S*', ' ', s)
    s = re.sub(r'\d{1,2}/\d{1,2}/\d{2},?\s*\d{1,2}:\d{2}\s*[AP]M', ' ', s)
    # strip OCR radio/tick artifacts at EDGES only when not part of a word:
    # leading "O " counts as artifact only if next token starts uppercase w/o rest-of-word (radio glyph), rare — skip leading strip.
    s = re.sub(r'(?:\s*[O○]|\s*[√✓]|\s+[vx<])+$', '', s)
    return s.strip()

def blocks_from(txt):
    """Yield (num, body_lines) question blocks."""
    out, num, cur = [], None, []
    for ln in txt.splitlines():
        if len(ln) < 70 and BANNER.search(ln):
            continue
        m = Q_START.match(ln)
        if m:
            if num is not None:
                out.append((num, cur))
            num = int(m.group(1))
            rest = ln[m.end():]
            cur = [rest] if rest else [ln.lstrip()[len(str(num)):].lstrip('.) ')]
        elif num is not None:
            cur.append(ln)
    if num is not None:
        out.append((num, cur))
    return out

def parse_block(num, lines):
    """Return dict q, opts{A-D}, ticks{letter}, complete flag."""
    q_parts, opts, order = [], {}, []
    for ln in lines:
        ln = RADIO_FIX.sub(r'\1\2) \3', ln)  # 'O B text' -> 'B) text'
        m = OPT_LINE.match(ln)
        if m and (not order or m.group(1) == chr(ord(order[-1]) + 1)):
            order.append(m.group(1))
            opts[m.group(1)] = [m.group(2).strip()]
        elif order:
            opts[order[-1]].append(ln.strip())
        else:
            q_parts.append(ln.strip())
    res = {'q': clean(' '.join(q_parts)),
           'opts': {k: clean(' '.join(v)) for k, v in opts.items()}}
    # inline ticks: option text ending in checkmark artifact
    ticks = {}
    for k, v in res['opts'].items():
        raw = ' '.join(opts[k]).rstrip()
        if TICK_END.search(raw) and len(raw) > 3:
            ticks[k] = True
    res['ticks'] = ticks
    res['complete'] = len(order) >= 2 and all(len(o) >= 1 for o in res['opts'].values())
    return res

def parse_paper_questions(txt):
    items = {}
    for num, lines in blocks_from(txt):
        if num in items:
            continue  # duplicate number = OCR artifact, keep first
        r = parse_block(num, lines)
        if r['q'] and r['complete']:
            items[num] = r
    return items

def parse_grid(txt):
    ans = {}
    for ln in txt.splitlines():
        m = ANS_ROW.match(ln)
        if m:
            n = int(m.group(1))
            if 1 <= n <= 250 and n not in ans:
                ans[n] = m.group(2).upper()
    return ans

def parse_pair(subj, yr):
    ap = os.path.join(OCR, f'{subj}-{yr}-answers.txt')
    qp = os.path.join(OCR, f'{subj}-{yr}-questions.txt')
    if not os.path.exists(ap):
        return None
    atxt = open(ap, encoding='utf-8').read()
    qitems = parse_paper_questions(atxt)
    if os.path.exists(qp):
        for n, r in parse_paper_questions(open(qp, encoding='utf-8').read()).items():
            if n not in qitems or (not qitems[n]['complete'] and r['complete']):
                qitems.setdefault(n, r)
                if r['complete'] and n in qitems and not qitems[n]['complete']:
                    qitems[n] = r
    grid = parse_grid(atxt)
    out, flagged = [], []
    for n, r in sorted(qitems.items()):
        if not r['complete']:
            continue
        g, t = grid.get(n), (list(r['ticks'])[0] if len(r['ticks']) == 1 else None)
        if g and t and g != t:
            flagged.append({'n': n, 'grid': g, 'tick': t, 'q': r['q'][:80]})
            continue
        letter = g or t
        if not letter or letter not in r['opts']:
            continue
        order = [l for l in 'ABCD' if l in r['opts']]
        opt_texts = [r['opts'][l] for l in order]
        if len(set(o.lower().strip() for o in opt_texts)) != len(opt_texts):
            flagged.append({'n': n, 'grid': g or '?', 'tick': '?', 'q': r['q'][:80], 'why': 'duplicate options'})
            continue
        q = r['q']
        q = q[0].upper() + q[1:] if q else q
        out.append({
            'id': f'natl-{subj}-{yr}-{n:03d}',
            'subject': subj, 'year': int(yr), 'yearCal': 'EC',
            'q': q,
            'options': opt_texts,
            'answer': order.index(letter),
            'confidence': 'grid+tick' if (g and t) else ('grid' if g else 'tick'),
            'type': 'mcq',
        })
    stats = {'questions': len(qitems), 'items': len(out), 'flagged': len(flagged),
             'grid': len(grid),
             'conf': {c: sum(1 for x in out if x['confidence'] == c) for c in ('grid+tick', 'grid', 'tick')}}
    return {'items': out, 'flagged': flagged, 'stats': stats}

if __name__ == '__main__':
    subs = ['biology', 'chemistry', 'physics', 'mathematics', 'civics', 'english']
    yrs = ['2005', '2006', '2007', '2008', '2009', '2010']
    done = 0
    for s in subs:
        for y in yrs:
            out = os.path.join(ITEMS, f'{s}-{y}.json')
            if os.path.exists(out):
                continue
            r = parse_pair(s, y)
            if r is None:
                continue
            json.dump(r, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
            done += 1
            print(f'{s}-{y}: {r["stats"]}')
    print(f'parsed {done} new')
