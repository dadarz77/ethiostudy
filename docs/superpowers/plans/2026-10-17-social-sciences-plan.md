# Social Sciences Expansion — Implementation Plan

**Design:** `docs/superpowers/specs/2026-10-17-social-sciences-design.md`

**Status (updated 2026-10-20):** COMPLETE — all phases done. Phase 0 pipeline restored. Phase 1 civics: 16 units / 69 topics (G9-10), spec v2. Phase 2 history: 36 units / 193 topics. Phase 3 geography: 32 units / 143 topics. Phase 4 economics: 31 units / 134 topics. Phase 5 UI grouping (Science vs Social Sciences) + accents + derived tests done. Final gates: converter 215 units / 9,228 questions / `CONVERT_OK`, 0 orphans; vitest 103/103; `tsc -b` exit 0. All 799 social-science lessons at full spec-v2 parity (no stubs or phased upgrades remaining).


**Goal:** Bring History, Geography, Economics (grades 9–12) and Citizenship Education (grades 9–10) to full `AUTHORING-SPEC.md` v2 parity, restore `data/` as the source of truth, and group subjects as Science vs Social Sciences.

**Approach:** Each phase is independently shippable and verifiable. Phases can be done in any order after Phase 0, but the order below front-loads the new subject (Civics) and the highest-value grades.

---

## Guardrails (read before touching anything)

1. **Do NOT run `node apps/web/scripts/convert-data.mjs`** until Phase 0 is complete and the pre-flight backup exists. It deletes `apps/web/src/data/lessons/` and rebuilds from `data/`, which currently has no social content.
2. Social data currently lives **only** in uncommitted working-tree files:
   - `apps/web/src/data/curriculum.json`, `topics.json` (modified)
   - `apps/web/src/data/lessons/*.json` (the social unit files)
   These must be backed up **and** their social lesson bodies migrated into `data/content-*.js` before the converter is ever run.
3. Keep changes consistent with existing patterns: content files self-register with `window.Lessons`, one file per unit, lesson keys match generated `_id`.
4. Run tests with `--pool=threads` (the default `forks` pool times out here).

---

## Phase 0 — Pipeline restore (blocking)

### Task 0.1 — Back up the only copy of social data
- Copy `apps/web/src/data/lessons/` to `%TEMP%\opencode\ethio-social-backup\lessons\`.
- Snapshot `apps/web/src/data/curriculum.json` and `topics.json` to the same backup dir.
- **Verify:** the backup dir contains all social unit JSONs (history/geography/economics) and the counts match 99 social units.

### Task 0.2 — Add social + civics trees to the curriculum sources
- Add History, Geography, Economics to `data/curriculum-g9.js` … `curriculum-g12.js` (or a shared `data/curriculum-social.js` loaded by the g11 aggregation file).
- Add Citizenship Education to `data/curriculum-g9.js` and `curriculum-g10.js` only:
  - Unit ids `c1..c8`, unit titles as in the design doc.
  - Subject: `{ id: "civics", title: "Citizenship Education", icon, color }`.
- Use the **already-verified** unit/topic maps from `apps/web/src/data/curriculum.json` for social (they match the textbooks).
- **Verify:** a node script that evals the four curriculum files and prints per-grade subject topic counts equal to the 847 baseline (social included) plus the new civics topics.

### Task 0.3 — Fix converter invariants
- In `apps/web/scripts/convert-data.mjs`, replace the hardcoded `topicIds.length !== 380` with a derived expectation:
  - Expected topics = count of all curriculum topics.
  - Expected lessons = topics in grades 9–11 plus authored G12 topics.
- Keep the G12 staged-rollout exemption, but compute `g12NoLesson` from data (already done) and target from the actual authored set.
- **Verify:** run the converter **after** Phase 0.2 + at least one migrated content file; it prints `CONVERT_OK`, and `git status` shows `curriculum.json`/`topics.json` unchanged except for the new civics entries.

### Task 0.4 — Migrate existing social content into `data/`
- For each social unit, write `data/content-g{grade}-{subject}-u{unit}.js` from the current generated lesson JSON (mechanical transform: emit `window.Lessons[...] = {...}` per topic).
- File naming per unit id: `content-g9-history-uh1.js`, `content-g9-geography-ug1.js`, `content-g9-economics-ue1.js`.
- **Verify:** the `AUTHORING-SPEC.md` self-check prints `UNIT OK` for a migrated unit (structure present, since these are stubs it will pass on shape, not quality).

> After Phase 0, the pipeline is green and social data is safe. Phases 1–4 then rewrite content in place, one unit at a time, re-running the converter + tests after each batch.

---

## Phase 1 — Citizenship Education (new subject)

Author `data/content-g9-civics-uc{n}.js` and `data/content-g10-civics-uc{n}.js`.

### Unit maps (from the official textbooks)

**Grade 9 — Citizenship Education (8 units, ~31 topics)**
| Unit | Title | Lessons |
|---|---|---|
| c1 | Ethical Values | 4 |
| c2 | The Culture of Using Digital Technology | 6 |
| c3 | Constitution and Constitutionalism | 3 |
| c4 | Understanding Indigenous Knowledge | 3 |
| c5 | Multiculturalism in Ethiopia | 4 |
| c6 | National Unity Through Diversity | 4 |
| c7 | Problem Solving Skills | 4 |
| c8 | Ethiopia's Foreign Relations in East Africa | 3 |

**Grade 10 — Citizenship Education (8 units, ~38 topics)**
| Unit | Title | Lessons |
|---|---|---|
| c1 | Democracy and Democratization | 6 |
| c2 | Citizens in the Digital Technology Age | 4 |
| c3 | Understanding Good Governance | 6 |
| c4 | Peace and Indigenous Conflict | 5 |
| c5 | Federalism in Ethiopia | 5 |
| c6 | Human Rights | 3 |
| c7 | Patriotism | 5 |
| c8 | Globalization and Global Issues | 4 |

### Per-unit procedure (repeat for each unit)
1. Read the textbook unit (source list in design doc; local copies in `%TEMP%\opencode\ethio-research\`).
2. Author one topic per textbook lesson to spec v2 (3 visuals, 9–11 questions, 6–8 key terms, 4–5 worked examples/calc steps).
3. Lesson key = `g{9|10}-civics-u{unit.id}-t{n}`.
4. Run the spec self-check `node -e "..."` until `UNIT OK`.
5. Run `node --check` on the file.

### Phase 1 verification
- Converter prints `CONVERT_OK`; civics appears only for grades 9–10.
- `schema.test.ts` passes on a sample of civics lessons.
- Manual: Dashboard for G9/G10 shows Citizenship under Social Sciences; no civics for G11/G12.

---

## Phase 2 — History (grades 9–12, 36 units / 193 topics)

Upgrade each `data/content-g{9..12}-history-uh{n}.js` from stub to spec v2, using the per-unit procedure. Unit titles are already in `curriculum.json` and verified against the textbooks.

- Batch by grade; after each grade: converter + `schema.test.ts` + spot-check 3 lessons.
- History G9 and G11 overlap by design — author each grade against its own textbook, do not copy across.

---

## Phase 3 — Geography (grades 9–12, 32 units / 143 topics)

Same procedure, `data/content-g{9..12}-geography-ug{n}.js`. Visuals favor `barChart`/`lineGraph`/`tableVisual` for data units and `flowChart`/`cycleDiagram` for process units.

---

## Phase 4 — Economics (grades 9–12, 31 units / 131 topics)

Same procedure, `data/content-g{9..12}-economics-ue{n}.js`. Visuals favor `lineGraph` (demand/supply), `tableVisual`, `formulaDerivation`, `cycleDiagram` (circular flow).

---

## Phase 5 — App integration + hardening

### Task 5.1 — Subject grouping helper
- `apps/web/src/lib/curriculum.ts`: add `SUBJECT_GROUP` map and `subjectsByGroup(grade)`; Science = mathematics/biology/chemistry/physics, Social = history/geography/economics/civics.

### Task 5.2 — Grouped UI
- Dashboard + Browse: render two labelled groups using `subjectsByGroup`. Routing unchanged.

### Task 5.3 — Accents
- `apps/web/src/views/TopicView.tsx` `SUBJECT_DATA`: add history, geography, economics, civics.
- `apps/web/src/styles.css`: add `.subject-civics` (history/geography/economics were started in WIP).

### Task 5.4 — Derive test counts
- `apps/web/src/data/schema.test.ts` and `apps/web/src/lib/curriculum.test.ts`: replace hardcoded 199 files / 847 topics with values derived from the data.

### Task 5.5 — Docs
- Update `AUTHORING-SPEC.md` header note (subject list / grades).
- Add a short `docs/` note on the restored pipeline.

### Phase 5 verification
- `npx vitest run --pool=threads` green.
- `node apps/web/scripts/convert-data.mjs` prints `CONVERT_OK`.
- Manual QA: grouping correct per grade; civics absent in G11/G12; sample lessons render all 3 visuals and quiz works; light/dark + mobile + keyboard.

---

## Completion criteria

- [ ] `data/` is the source of truth; converter is green and non-destructive.
- [ ] Every social topic (467) and civics topic (~69) is spec-v2: 3 visuals, 9–11 questions, ≥6 key terms, full `detailed`.
- [ ] Civics exists for G9–10 only; social for G9–12.
- [ ] Subjects grouped Science vs Social Sciences in Dashboard/Browse.
- [ ] Tests derive their counts and pass; converter prints `CONVERT_OK`.

## Effort note

≈ 115 unit files rewritten/authored (≈ 540 lessons). This is comparable to the entire existing science corpus. Phases are ordered so each one lands green on its own.
