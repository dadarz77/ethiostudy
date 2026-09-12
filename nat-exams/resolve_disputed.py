"""Disputed-item resolution: grid-vs-tick answer conflicts ship as 'unresolved'
unless overrides.json (from expert solver pass) carries a verified letter.

emit: python resolve_disputed.py          -> disputed.json packet for solvers
apply: load_overrides() used by parse_papers.py"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OVERRIDES = os.path.join(HERE, 'overrides.json')
DISPUTED = os.path.join(HERE, 'disputed.json')


def load_overrides():
    """map item id -> letter (A-D), empty if none."""
    if os.path.exists(OVERRIDES):
        try:
            d = json.load(open(OVERRIDES, encoding='utf-8'))
            return {k: v for k, v in d.items() if v in 'ABCD'}
        except Exception:
            return {}
    return {}


def build_packet(papers):
    """papers: list of (subj, yr, qitems-merged-dict, grid) — collect disputed
    entries into disputed.json for solver fan-out. Returns count."""
    packet = []
    for subj, yr, qitems, grid in papers:
        for n, r in sorted(qitems.items()):
            if not r.get('complete'):
                continue
            g = grid.get(n)
            ticks = list(r.get('ticks', []))
            t = ticks[0] if len(ticks) == 1 else None
            if g and t and g != t and g in r['opts'] and t in r['opts']:
                packet.append({
                    'id': f'natl-{subj}-{yr}-{n:03d}',
                    'subject': subj, 'year': int(yr), 'n': n,
                    'q': r['q'], 'options': [r['opts'][l] for l in 'ABCD' if l in r['opts']],
                    'option_letters': [l for l in 'ABCD' if l in r['opts']],
                    'grid': g, 'tick': t,
                })
    json.dump(packet, open(DISPUTED, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    return len(packet)


if __name__ == '__main__':
    import sys
    sys.path.insert(0, HERE)
    import parse_papers as P
    import glob
    papers = []
    for f in sorted(glob.glob(os.path.join(P.OCR, '*-answers.txt'))):
        name = os.path.basename(f)[:-12]
        subj, yr = name.rsplit('-', 1)
        atxt = open(f, encoding='utf-8').read()
        qitems = P.parse_paper_questions(atxt)
        qp = os.path.join(P.OCR, f'{subj}-{yr}-questions.txt')
        if os.path.exists(qp):
            for n, r in P.parse_paper_questions(open(qp, encoding='utf-8').read()).items():
                if n not in qitems or (not qitems[n]['complete'] and r['complete']):
                    qitems.setdefault(n, r)
        papers.append((subj, yr, qitems, P.parse_grid(atxt)))
    print(build_packet(papers), 'disputed items -> disputed.json')
