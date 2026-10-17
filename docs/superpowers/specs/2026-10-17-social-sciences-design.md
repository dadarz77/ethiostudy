# EthioStudy Social Sciences Expansion — Design

## Goal

Add complete, spec-v2 social-science content to EthioStudy for grades 9–12, restore `data/` as the single authoring source of truth, and present subjects grouped as **Science** vs **Social Sciences** in the app.

Subjects covered: **History, Geography, Economics** (grades 9–12) and **Citizenship Education** (grades 9–10, see decision 3). Every topic is authored to full `AUTHORING-SPEC.md` v2 parity — the same depth as the existing Physics/Chemistry/Biology/Mathematics lessons.

## Current state

- The shipped app covers grades 9–12. The generated `apps/web/src/data/curriculum.json` contains 847 topics.
- Social subjects already appear in the **generated** data only:
  - History — 36 units / 193 topics
  - Geography — 32 units / 143 topics
  - Economics — 31 units / 131 topics
  - Total social = **99 units / 467 topics**
- Science/Mathematics = **380 topics** (the converter's hardcoded invariant).
- Social lessons are **stubs**: ~82–102 average `detailed` words, **0 visuals**, ~7 questions, ~2 key terms. Science baseline: 260–437 words, 3 visuals, 9–11 questions, 6–8 key terms.

### The pipeline is broken (the core risk)

- `data/` contains `curriculum-g9..g12.js` and science content files only. It has **no social curriculum entries and no social content files**.
- `apps/web/scripts/convert-data.mjs` **`rmSync`s `apps/web/src/data/lessons/`** and rebuilds everything from `data/`.
- The converter aborts on a hardcoded `topicIds.length !== 380` invariant.
- Consequence: the 467 social topics live **only** in generated JSON. Any converter run today either aborts (masking the loss) or, once the count is "fixed", deletes every social lesson. **No converter run is safe until the pipeline is restored.**

## Research findings (verified against sources)

The civics question drove most of the research. Findings, with sources:

| Question | Answer | Source |
|---|---|---|
| New-curriculum subject set, G9–G10 | Includes **Citizenship Education** (8 units each) | abrari.app/textbooks, kehulum.com, anrseb.gov.et |
| New-curriculum subject set, G11–G12 | **No Citizenship/Civics** — streamed (Biology/Chemistry/Physics/Math + Economics/Geography/History) | abrari.app/textbooks, kehulum.com, ethiobookreview.com |
| Old curriculum | Had "Civics and Ethical Education" in G9–G12 (11 units in G12) — explains the 544 civics items in `nat-exams.json` | files.ethiopialearning.com, neaea.com |
| Social unit maps (WIP JSON) | **Match the official textbook tables of contents** exactly, including unit counts and titles | Downloaded MoE PDFs |
| History G9 vs G11 near-identical titles | **Genuine**: the curriculum is spiral — G9 and G11 both span world history, G11 deeper. Not a data bug. | MoE Grade 9 & Grade 11 History TOC |

### Unit counts (from official textbooks)

| Subject | G9 | G10 | G11 | G12 |
|---|---|---|---|---|
| History | 9 u / 51 t | 9 u / 46 t | 9 u / 51 t | 9 u / 45 t |
| Geography | 8 u / 39 t | 8 u / 33 t | 8 u / 35 t | 8 u / 36 t |
| Economics | 8 u / 34 t | 8 u / 34 t | 7 u / 32 t | 8 u / 31 t |
| Citizenship | 8 u | 8 u | — | — |

### Primary sources for authoring (official MoE textbooks, free OER)

- **abrari.app** — new-curriculum G9–12 student textbooks, readable in-browser (all social subjects + Citizenship 9 & 10). Primary reference.
- **kehulum.com** / **fetena.net** — downloadable PDFs (`bfile_asset`/`books_asset` paths) for G9–G12 History, Geography, Economics, Citizenship.
- **anrseb.gov.et** — Amhara Education Bureau official Government PDFs (e.g. `G9-Citizenship-STB-2023-ANRSEB.pdf`).
- **files.ethiopialearning.com** — old-curriculum Civics & Ethical Education (reference only).
- Local copies already fetched to `%TEMP%\opencode\ethio-research\` (citizenship G9/G10, history G9/G11).

## Decisions

1. **Source of truth = `data/*.js` + the converter.** Restore the authoring pipeline; generated JSON is a build artifact again.
2. **Social subjects = History, Geography, Economics for grades 9–12**, all upgraded to full spec-v2 parity.
3. **Citizenship Education = grades 9–10 only.** This follows the actual new-curriculum structure (G11–12 have no citizenship book). The existing `nat-exams` civics bank stays available as exam practice, but no G11–12 civics lessons are authored, because they would not correspond to a real course.
4. **UI grouping = Science vs Social Sciences** (not a flat list, not a stream filter).
5. **Civics subject key = `civics`** (aligns with the `nat-exams` key), unit ids `c1..c8`, content files `content-g{9|10}-civics-u{n}.js` (follows the `-chem-` abbreviated-file precedent).

## Architecture

### Layer 1 — Pipeline restore (must happen first)

- Add the social + civics subject trees to the `data/curriculum-g{9..12}.js` sources (new `data/curriculum-social.js` merged into `CURRICULUM_ALL`, or inline per grade — match existing style).
- Add authored content files: `data/content-g{grade}-{subject}-u{unit}.js`.
- Update `convert-data.mjs`:
  - Replace the hardcoded `!== 380` with a **derived** expected count.
  - Keep the staged-rollout rule, but recompute it from the data.
  - The `readdirSync(... 'content-')` glob already picks up new files; no change needed there.
- **Before any converter run**, snapshot `apps/web/src/data/lessons/` (the only copy of current social data) to a backup path.

### Layer 2 — Content authoring (spec v2)

- One file per unit, all topics in the unit, exactly per `AUTHORING-SPEC.md`: `overview`, 5 `objectives`, `simple` (~120 w), `detailed` (5–8 paragraphs, deeper), 6–8 `keyTerms`, `formulas`/calc steps, 4–5 `workedExamples`, 5–7 `commonMistakes`, 5–6 `applications` (Ethiopian context), `summary`, **3 `visuals`**, **9–11 `questions`**.
- Lesson key must match the generated `_id`: `g{grade}-{subject}-u{unit.id}-t{n}` (e.g. `g9-history-uh1-t1`, `g10-economics-ue3-t2`, `g9-civics-uc2-t1`).
- Source material: the official textbook for that unit. History/Geography/Economics values are re-authored from textbook content; civics from the Citizenship textbooks.
- Per-unit gate: run the `AUTHORING-SPEC.md` self-check command until it prints `UNIT OK`.

### Layer 3 — App integration

- `apps/web/src/lib/curriculum.ts`: add a subject→group map + `subjectsByGroup(grade)` helper (Science: mathematics, biology, chemistry, physics; Social: history, geography, economics, civics).
- Dashboard and Browse: render two labelled groups; keep existing routing untouched.
- `apps/web/src/views/TopicView.tsx`: extend `SUBJECT_DATA` accent map for history, geography, economics, civics.
- `apps/web/src/styles.css`: add the missing `.subject-civics` accent (history/geography/economics accents were started in the WIP work).

### Layer 4 — Verification

- `apps/web/src/data/schema.test.ts` and `apps/web/src/lib/curriculum.test.ts`: **derive** file/topic counts from data instead of hardcoding 199/847. (Run with `--pool=threads`; the default `forks` pool times out in this environment.)
- Converter invariants recomputed; converter run must print `CONVERT_OK`.
- Manual QA: Dashboard/Browse grouping, a sample upgraded lesson per subject, civics shows only for grades 9–10, no console errors.

## Phasing

| Phase | Work | Output |
|---|---|---|
| 0 | Backup `lessons/`; restore curriculum sources + converter invariants | Pipeline green, social data preserved |
| 1 | Author Civics G9–G10 (~16 units, ~70 topics) | New subject live |
| 2 | Upgrade History G9–G12 (36 units, 193 topics) | Parity |
| 3 | Upgrade Geography G9–G12 (32 units, 143 topics) | Parity |
| 4 | Upgrade Economics G9–G12 (31 units, 131 topics) | Parity |
| 5 | UI grouping, accents, derived tests, docs | Release |

Total authoring ≈ **99 social units + 16 civics units ≈ 115 units / ~540 lessons**.

## Risks

- **Data loss**: any `convert-data.mjs` run before Phase 0 destroys the only copy of social content. Phase 0 backup is mandatory.
- **Scale**: ~540 spec-v2 lessons is comparable to the entire existing science corpus. Phasing keeps each step shippable and verifiable.
- **Source fidelity**: re-authoring from textbooks can drift from the official syllabus; each unit is pinned to a named textbook + unit.
- **Civics G11–12**: if the user wants them regardless of the new-curriculum structure, they must be sourced from the old "Civics and Ethical Education" books and flagged as legacy.

## Open decision

Civics is authored for **grades 9–10** (curriculum-faithful). Confirm, or extend to G11–12 using the legacy Civics and Ethical Education textbooks.
