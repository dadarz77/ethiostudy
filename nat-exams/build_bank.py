"""Build apps/web/src/data/nat-exams.json from parsed items/*.json"""
import json, os, glob
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'apps', 'web', 'src', 'data', 'nat-exams.json')
SUBJ = {'biology': 'Biology', 'chemistry': 'Chemistry', 'physics': 'Physics',
        'mathematics': 'Mathematics', 'civics': 'Civics', 'english': 'English'}
items = []
TICK_V = __import__('re').compile(r'v$')
# tokens that legitimately end in v (real words / unit symbols) — never strip these
# rare real words that legitimately end in 'v' — never shave their final letter
V_WORDS = __import__('re').compile(r'(pavlov|maglev|monorailv?|subsystem)$', __import__('re').I)
def strip_tick(o):
    o = o.rstrip()
    if not o or not TICK_V.search(o):
        return o
    if V_WORDS.search(o.rstrip()):
        return o
    s = o[:-1].rstrip()
    return s if s else o

# --- stray '?' OCR-artifact cleaner -------------------------------------
# Real exam options legitimately end in '?' (English dialogue questions), so
# we NEVER blanket-strip. Only these classes are removed/repaired:
#  1. leading '?'  — artifact glued after the option letter marker ("A)?Foo")
#  2. interior "word?s" — mangled apostrophe (particle?s -> particle's,
#     persons? -> persons' when the word already ends in s)
#  3. lone interior '?' surrounded by spaces or glued to a lowercase word
#     with a space before it — junk ( "Insight ?learning", "thylakoid ?membrane")
#  4. trailing '?' on a NON-question (noun fragment / declarative) — artifact
#     migrated from the stem's end or a misread period.
# Everything else (genuine questions, math notation like "sp?d") is left alone.
import re as _re
Q_WORD = _re.compile(
    r"(\b(What|Who|Whom|Whose|Which|When|Where|Why|How|Do|Does|Did|Is|Are|Was|Were|"
    r"Can|Could|Will|Would|Shall|Should|May|Might|Must|Have|Has|Had)"
    r"|^(What|Who|Whom|Whose|Which|When|Where|Why|How|Do|Does|Did|Is|Are|Was|Were|"
    r"Can|Could|Will|Would|Shall|Should|May|Might|Must|Have|Has|Had)[a-z])", _re.I)
def clean_qmarks(o):
    s = o
    s = _re.sub(r"^\?+", '', s).lstrip()                       # 1 leading
    # 2 apostrophe: word?s -> word's ; word-s? -> s' ONLY when a lowercase
    #   word follows ("persons? curiosity" -> persons'); a capital or clause
    #   end after the mark means it's a real '?' ("serious? You..." keep).
    s = _re.sub(r"(?<=[A-Za-z])\?s(?=[\s.,;:!?)])", "'s", s)
    s = _re.sub(r"(?<=[A-Za-z])s\?(?=\s+[a-z(])", "s'", s)
    # 3 junk '?' glued to a following word (' ?membrane') — only when the '?'
    #    is NOT sitting at the end of a real clause (next char is a letter)
    s = _re.sub(r"(?<=\s)\?(?=[A-Za-z(])", '', s)
    s = _re.sub(r"\s{2,}", ' ', s).strip()
    # 4 trailing '?' only when clearly NOT a question
    if s.endswith('?') and s.count('?') == 1:
        body = s[:-1].strip()
        # a genuine question has an auxiliary/WH-word somewhere OR ends on a
        # verb-ish fragment; artifacts sit on noun phrases / declaratives with
        # no question vocabulary at all ("Map of an area?", "Pi generation ?")
        # Keep if body trails into ',' or '.' — those '?' carry meaning
        # ("3,5,7,9,11,?" = missing-term placeholder; "or....?" = ellipsis).
        is_q = bool(Q_WORD.search(body)) or body.lower().endswith(('not', 'guess')) \
               or "n't" in body  # any aux contraction => real question ("amn't i?")
        if body.endswith((',', '.')) or body.rstrip('.').endswith('..'):
            is_q = True
        if not is_q:
            s = body.rstrip(' ,;:')
            if s and not s.endswith(('.', '!', '?')):
                pass  # leave unpunctuated; UI renders it fine
    return s
for f in sorted(glob.glob(os.path.join(HERE, 'items', '*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    for it in d['items']:
        items.append({
            'id': it['id'], 'subject': it['subject'], 'year': it['year'],
            'q': it['q'], 'options': [clean_qmarks(strip_tick(o)) for o in it['options']], 'answer': it['answer'],
            'type': 'mcq',
            'explanation': f"Ethiopian ESSLCE {SUBJ[it['subject']]} {it['year']} E.C., question {int(it['id'].rsplit('-',1)[1])}.",
        })
json.dump(items, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('wrote', len(items), 'items ->', OUT)
