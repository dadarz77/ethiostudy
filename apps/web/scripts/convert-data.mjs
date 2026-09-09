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
const cur = load([join(DATA, 'curriculum-g9.js'), join(DATA, 'curriculum-g10.js'), join(DATA, 'curriculum-g11.js'), join(DATA, 'curriculum-g12.js')]);
const L = load(contentFiles.map(f => join(DATA, f)));

const curriculum = cur.CURRICULUM_ALL; // { "9": [...], "10": [...], "11": [...subj...] }
// Grade 9: ship subjects whose lessons are fully authored (Math, Biology, Chemistry, Physics).
curriculum["9"] = cur.CURRICULUM_G9;
// Grade 12: map registered (staged rollout — topics browse, lessons arrive per subject).
curriculum["12"] = cur.CURRICULUM_G12;
const lessons = L.Lessons ?? {};
// Rebuild flat topic index over all grades (curriculum-g11 builds only 10+11 at load time).
const topicIndex = {};
for (const [grade, subjects] of Object.entries(curriculum)) {
  for (const [subjKey, subj] of Object.entries(subjects)) {
    for (const unit of subj.units) {
      for (const topic of unit.topics) {
        const tid = `g${grade}-${subjKey}-u${unit.id.split('-')[0]}-t${topic.id.split('-')[1]}`;
        topic._id = tid; topic._grade = grade; topic._subject = subjKey;
        topic._unit = unit.id; topic._unitTitle = unit.title;
        topic._subjectTitle = subj.title; topic._subjectIcon = subj.icon; topic._subjectColor = subj.color;
        topicIndex[tid] = topic;
      }
    }
  }
}
if (!curriculum?.["9"] || !curriculum?.["10"] || !curriculum?.["11"] || !curriculum?.["12"]) {
  console.error('CURRICULUM_ALL missing grades — check globals'); process.exit(1);
}

/* ---- invariants (same as the Sept 7 sweep) ---- */
const topicIds = Object.keys(topicIndex);
const lessonKeys = Object.keys(lessons);
const orphans = lessonKeys.filter(k => !topicIndex[k]);
// Grade 12 is a staged rollout: map shipped, lessons authored subject-by-subject.
// Missing-lesson invariant applies to every grade EXCEPT 12; G12 counts are reported.
const missing = topicIds.filter(k => !lessons[k] && topicIndex[k]._grade !== '12');
const g12NoLesson = topicIds.filter(k => topicIndex[k]._grade === '12' && !lessons[k]).length;
console.log(`curriculum topics: ${topicIds.length}`);
console.log(`lesson keys: ${lessonKeys.length}`);
console.log(`ORPHAN keys (in content, not in curriculum): ${orphans.length}`);
console.log(`TOPICS without lesson (excl. G12 staged): ${missing.length}`);
console.log(`G12 topics awaiting lessons: ${g12NoLesson}`);
const totalTopics = Object.keys(topicIndex).length;
const authoredTarget = totalTopics - g12NoLesson;
if (orphans.length || missing.length || topicIds.length !== 380 || authoredTarget !== lessonKeys.length) {
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
