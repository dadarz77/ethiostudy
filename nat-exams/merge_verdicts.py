import json, sys
src, tag = sys.argv[1], (sys.argv[2] if len(sys.argv)>2 else 'solver-crew')
raw = open(src, encoding='utf-8').read()
s = raw.find('[')
e = raw.rfind(']')
arr = json.loads(raw[s:e+1])
ov = json.load(open('overrides.json', encoding='utf-8'))
have = {v['id'] for v in ov}
added = held = 0
for v in arr:
    if v['id'] in have: continue
    ok = (v.get('letter') or '') in 'ABCD' and not v.get('question_garbled')
    if ok:
        ov.append({'id': v['id'], 'letter': v['letter'],
            'confidence': v.get('confidence'), 'resolved_by': tag,
            'reasoning': v.get('reasoning','')})
        added += 1
    else: held += 1
json.dump(ov, open('overrides.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)
print('staged', added, 'total', len(ov), 'held', held)
