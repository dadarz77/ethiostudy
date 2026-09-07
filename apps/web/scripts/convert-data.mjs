#!/usr/bin/env node
/* ============================================================
   EthioStudy data converter — vanilla window.X scripts → typed JSON
   Reads ../../data/*.js (curriculum + content), emits:
     src/data/curriculum.json      (nested tree, both grades)
     src/data/topics.json          (flat topic index, no lesson bodies)
     src/data/lessons/<unit>.json  (52 files, lazy-loadable)
     src/data/lessons/all-questions.test.json  (grader regression fixture)
   Run from apps/web:  node scripts/convert-data.mjs
   ============================================================ */
import { readFileSync, readdirSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');   // repo root (ethiopian-study)
const DATA = join(ROOT, 'data');
const OUT = join(ROOT, 'apps', 'web', 'src', 'data');

function load(files) {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  for (const f of files) vm.runInContext(readFileSync(f, 'utf8'), ctx);
  return ctx;
}

const contentFiles = readdirSync(DATA).filter(f => f.startsWith('content-')).sort();
const cur = load([join(DATA, 'curriculum-g10.js'), join(DATA, 'curriculum-g11.js')]);
const L = load(contentFiles.map(f => join(DATA, f)));

const curriculum = cur.CURRICULUM_ALL; // { "10": [...subjects], "11": [...subjects] }
const topicIndex = cur.topicIndex ?? {};
const lessons = L.Lessons ?? {};
if (!curriculum?.["10"] || !curriculum?.["11"]) {
  console.error('CURRICULUM_ALL missing grades — check globals'); process.exit(1);
}

/* ---- invariants (same as the Sept 7 sweep) ---- */
const topicIds = Object.keys(topicIndex);
const lessonKeys = Object.keys(lessons);
const orphans = lessonKeys.filter(k => !topicIndex[k]);
const missing = topicIds.filter(k => !lessons[k]);
console.log(`curriculum topics: ${topicIds.length}`);
console.log(`lesson keys: ${lessonKeys.length}`);
console.log(`ORPHAN keys (in content, not in curriculum): ${orphans.length}`);
console.log(`TOPICS without lesson: ${missing.length}`);
if (orphans.length || missing.length || topicIds.length !== 226) {
  console.error('INVARIANT FAILED — aborting, nothing written.');
  process.exit(1);
}

/* ---- group lessons by unit (tid = g<grade>-<subject>-u<N>-t<M>) ---- */
const byUnit = {};
for (const tid of lessonKeys) {
  const m = tid.match(/^(g\d+)-([a-z]+)-u[a-z]*\d+/);
  if (!m) throw new Error(`unparseable topic id: ${tid}`);
  const unitKey = tid.replace(/-t\d+$/, '');
  (byUnit[unitKey] ??= {})[tid] = lessons[tid];
}

/* ---- write outputs ---- */
rmSync(join(OUT, 'lessons'), { recursive: true, force: true });
mkdirSync(join(OUT, 'lessons'), { recursive: true });

writeFileSync(join(OUT, 'curriculum.json'), JSON.stringify(curriculum));
// topics.json: strip nothing heavy — topicIndex entries are metadata only
writeFileSync(join(OUT, 'topics.json'), JSON.stringify(topicIndex));

let qTotal = 0;
const allQuestions = [];
for (const [unitKey, unit] of Object.entries(byUnit)) {
  writeFileSync(join(OUT, 'lessons', unitKey + '.json'), JSON.stringify(unit));
  for (const [tid, lesson] of Object.entries(unit)) {
    for (const q of lesson.questions ?? []) {
      qTotal++;
      allQuestions.push({ tid, q });
    }
  }
}
writeFileSync(
  join(OUT, 'lessons', 'all-questions.test.json'),
  JSON.stringify(allQuestions)
);

console.log(`units written: ${Object.keys(byUnit).length}`);
console.log(`questions: ${qTotal}`);
console.log('CONVERT_OK');
