"""Cross-check answer-grid vs inline checkmark ticks in practice-site answer papers."""
import re, sys
sys.path.insert(0, '.')
import parse_papers as p

path = sys.argv[1] if len(sys.argv) > 1 else 'ocr/biology-2005-answers.txt'
txt = open(path, encoding='utf-8').read()
grid = p.parse_answers(txt)

# question blocks in the answer paper
blocks = re.split(r'\n\s*(?=\d{1,3}[\.\)]\s)', txt)
tick = {}
for b in blocks:
    qm = re.match(r'(\d{1,3})[\.\)]', b)
    if not qm:
        continue
    n = int(qm.group(1))
    for om in re.finditer(r'([A-D])\)\s*([^\n]*)', b):
        tail = om.group(2).rstrip()
        # a tick = text ending with checkmark-ish char (√ v < x ✓) but not a real word end
        if len(tail) > 2 and (tail.endswith('√') or tail.endswith('✓') or re.search(r'(?:[a-z)][v<x])$', tail)):
            tick.setdefault(n, om.group(1))

agree = sum(1 for k in tick if grid.get(k) == tick[k])
dis = [(k, grid.get(k), tick[k]) for k in sorted(tick) if grid.get(k) != tick[k]]
print(f'grid={len(grid)} ticked={len(tick)} agree={agree} disagree={len(dis)}')
print('disagreements:', dis[:20])
# sample a few agreements
both = [k for k in tick if grid.get(k) == tick[k]]
print('sample agree:', [(k, grid[k]) for k in both[:10]])
