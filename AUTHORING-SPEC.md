# EthioStudy Content Authoring Spec (v2 — visual-rich)

You are authoring lesson content files for the EthioStudy app (Ethiopian Grade 10–11 curriculum).

## File naming & lesson IDs
- File: `data/content-g{10|11}-{subj}-{unitkey}.js` — physics: `content-g10-physics-u1.js`; chemistry: `content-g10-chem-u2.js`; biology: `content-g10-bio-u1.js`; math: `content-g10-math-u1.js`
- Lesson key: `Lessons["g{grade}-{subject}-u{unit.id}-t{n}"]` — MUST match the topic `_id` the app generates.
  - Physics: unit ids are numbers → `g10-physics-u1-t1`
  - Chemistry unit ids c1..c6 → `g10-chemistry-uc2-t1`; Biology b1..b6 → `g10-biology-ub3-t2`; Mathematics m1..m7 → `g10-mathematics-um4-t1` (always `u` + unit.id + `-t` + topic number)
  - n = topic number within the unit (topic id `b3-2` → t2 of ub3)
- Verify your IDs: run the check command at the bottom.

## Required file skeleton
```js
/* Content: Grade X Subject — Unit N: Title (n topics) */
window.Lessons = window.Lessons || {};

Lessons["g10-chemistry-uc2-t1"] = {
  overview: "...",        // 1–2 sentences, why this topic matters
  objectives: ["...", ...],   // 5 items, "Verb + skill"
  simple: "...",          // plain-language explanation, ~120 words, friendly voice
  detailed: "<p>...</p>", // HTML string, 5–8 paragraphs, DEEPER than simple — full theory
  keyTerms: [{ term: "...", def: "..." }, ...],  // 6–8
  formulas: [{ name, formula, meaning, vars: [{name, meaning, unit}], units, when, example }, ...], // 2–4 (for math-heavy topics; use calculation steps for others)
  workedExamples: [{ problem, given, formula, substitution, calculation, answer }, ...], // 4–5, step-by-step, realistic numbers you have verified yourself
  commonMistakes: ["...", ...],  // 5–7 real student errors
  applications: ["...", ...],    // 5–6, include at least one Ethiopian/local example where natural
  summary: "...",         // 2–3 dense sentences recapping everything
  visuals: [ /* 3 visuals — see below */ ],
  questions: [ /* 9–11 questions — see below */ ]
};
```

## Visuals — EXACTLY 3 per lesson (students learn visually — this is the point)
Supported types and their configs (all render to SVG/HTML automatically):
```js
{ type: "steps", config: { title: "...", steps: [{ label: "...", detail: "..." }, ...] } }        // 4–6 steps
{ type: "comparison", config: { title: "...", left: { name: "...", items: ["...", ...] }, right: { name: "...", items: [...] } } }  // 4–5 items each side
{ type: "qa", config: { title: "...", pairs: [{ q: "...", a: "..." }, ...] } }                     // 3–4 exam-style pairs; a may contain <b>
{ type: "barChart", config: { title: "...", labels: ["..."], values: [num, ...], unit: "..." } }   // 4–8 bars
{ type: "lineGraph", config: { title: "...", points: [{x: num, y: num}, ...], xLabel: "...", yLabel: "..." } }  // 4–8 points
{ type: "cycleDiagram", config: { title: "...", nodes: ["...", ...] } }                            // 3–6 short node labels (≤2 words each)
{ type: "flowChart", config: { title: "...", steps: ["...", ...] } }                               // 4–7 short strings
{ type: "mindMap", config: { center: "...", branches: [{ label: "...", items: ["..."] }, ...] } }  // 4–6 branches
{ type: "formulaDerivation", config: { title: "...", lines: [{ expr: "...", note: "..." }, ...] } } // 3–6 lines
{ type: "tableVisual", config: { title: "...", headers: ["..."], rows: [["...", ...], ...] } }      // ≤4 cols, ≤6 rows, SHORT cells
{ type: "timeline", config: { title: "...", events: [{ year/label, text }] } }  // check js/visuals.js for exact config before use
```
Mix types across lessons — don't use the same trio everywhere. Pick what fits the content: processes → steps/flowChart/cycleDiagram; contrasts → comparison; data → barChart/lineGraph; revision → qa; concept maps → mindMap; derivations → formulaDerivation.
Keep text inside visuals SHORT (labels wrap badly if long).

## Questions — 9–11 per lesson, mixed types
```js
{ type: "mcq", q: "...", options: ["A","B","C","D"], answer: 0, difficulty: 1-3, explanation: "..." }
{ type: "calc", q: "...", answer: "3.2e-11", difficulty: 2, explanation: "...", tolerance: 0.05 }   // numeric; tolerance = abs OR set relTol; altAnswers: ["..."] optional
{ type: "tf", q: "...", answer: true, difficulty: 1, explanation: "..." }
{ type: "short", q: "...", answer: "neutron|n", difficulty: 1, explanation: "..." }                 // "|" = accepted alternatives
{ type: "concept", q: "...", answer: "key words|other phrasing", difficulty: 2, explanation: "..." } // word-matching: ALL words of one alternative must appear
{ type: "ordering", q: "...", options: ["seq A","seq B","seq C","seq D"], answer: [1], difficulty: 2, explanation: "..." }  // answer = index of correct sequence
```
- difficulty: 1 easy, 2 medium, 3 hard. Spread: ~3 easy, ~5 medium, ~2–3 hard.
- For `concept`/`short` answers: pick distinctive keywords students would naturally write. Test mentally: would a correct student's phrasing contain every word of one alternative?
- Every question needs `explanation`.
- CALC QUESTIONS: compute the arithmetic yourself and double-check. Verify powers of ten.

## Quality bar
- `detailed` must genuinely go deeper than `simple` (mechanisms, edge cases, why-behind-what).
- Worked examples: realistic Ethiopian-context numbers where natural (ETB, Addis, local industry), fully correct arithmetic.
- No filler: every sentence should teach something.
- Escape nothing in JS strings except quotes; use Unicode subscripts (H₂O, CO₂, ²³⁵U) freely.

## Register + verify (the ORCHESTRATOR does registration; you must verify)
After writing your file(s):
```bash
cd /c/Users/zewge/ethiopian-study
node --check data/content-g10-chem-u2.js   # syntax
node -e "global.window=global;const fs=require('fs');eval(fs.readFileSync('data/curriculum-g10.js','utf8'));eval(fs.readFileSync('data/curriculum-g11.js','utf8'));eval(fs.readFileSync('data/YOURFILE.js','utf8'));const ids=window.allTopics.filter(t=>t._id.startsWith('g10-chemistry-uc2')).map(t=>t._id);let ok=true;for(const i of ids){const l=window.Lessons[i];if(!l){console.log('MISSING',i);ok=false;continue}for(const k of ['overview','objectives','simple','detailed','keyTerms','formulas','workedExamples','commonMistakes','applications','summary','visuals','questions'])if(!(k in l)){console.log('NO',k,i);ok=false}if(l.visuals.length<3){console.log('FEW VISUALS',i);ok=false}if(l.questions.length<9){console.log('FEW Q',i);ok=false}}console.log(ok?'UNIT OK':'FIX ERRORS')"
```
Fix everything until it prints UNIT OK. Report which units you completed and the final check output.
