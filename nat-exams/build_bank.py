"""Build apps/web/src/data/nat-exams.json from parsed items/*.json"""
import json, os, glob
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'apps', 'web', 'src', 'data', 'nat-exams.json')
SUBJ = {'biology': 'Biology', 'chemistry': 'Chemistry', 'physics': 'Physics',
        'mathematics': 'Mathematics', 'civics': 'Civics', 'english': 'English'}
items = []
for f in sorted(glob.glob(os.path.join(HERE, 'items', '*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    for it in d['items']:
        items.append({
            'id': it['id'], 'subject': it['subject'], 'year': it['year'],
            'q': it['q'], 'options': it['options'], 'answer': it['answer'],
            'type': 'mcq',
            'explanation': f"Ethiopian ESSLCE {SUBJ[it['subject']]} {it['year']} E.C., question {int(it['id'].rsplit('-',1)[1])}.",
        })
json.dump(items, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('wrote', len(items), 'items ->', OUT)
