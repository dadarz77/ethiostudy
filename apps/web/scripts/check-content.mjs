#!/usr/bin/env node
/* Content self-check for AUTHORING-SPEC v2 lesson files.
   Usage:  node scripts/check-content.mjs data/content-g9-civics-uc1.js [more files...]
   Loads the curriculum sources + your content file(s) in a sandbox, then verifies
   every lesson key exists in the curriculum and has the required spec-v2 shape. */
import { readFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');
const DATA = join(ROOT, 'data');

const REQUIRED = ['overview', 'objectives', 'simple', 'detailed', 'keyTerms', 'formulas',
  'workedExamples', 'commonMistakes', 'applications', 'summary', 'visuals', 'questions'];

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: check-content.mjs <content-file...>'); process.exit(2); }

const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
// Load curriculum first so topic ids exist for reference.
for (const g of ['9', '10', '11', '12']) {
  vm.runInContext(readFileSync(join(DATA, `curriculum-g${g}.js`), 'utf8'), ctx);
}
// Build a topic index over every grade (the curriculum-g11 build only covers 10/11).
const topicIndex = {};
for (const g of ['9', '10', '11', '12']) {
  const C = ctx[`CURRICULUM_G${g}`];
  for (const [subjKey, subj] of Object.entries(C)) {
    for (const unit of subj.units) {
      for (const topic of unit.topics) {
        const tid = `g${g}-${subjKey}-u${unit.id.split('-')[0]}-t${topic.id.split('-')[1]}`;
        topicIndex[tid] = { unit: unit.id, subject: subjKey, grade: g };
      }
    }
  }
}
for (const f of files) vm.runInContext(readFileSync(resolve(f), 'utf8'), ctx);
const lessons = ctx.Lessons ?? {};

let ok = true;
for (const [tid, l] of Object.entries(lessons)) {
  const problems = [];
  if (!topicIndex[tid]) problems.push('ORPHAN (not in curriculum)');
  for (const k of REQUIRED) if (!(k in l)) problems.push(`missing ${k}`);
  if (Array.isArray(l.visuals) && l.visuals.length < 3) problems.push(`only ${l.visuals.length} visuals (need 3)`);
  if (Array.isArray(l.questions) && l.questions.length < 9) problems.push(`only ${l.questions.length} questions (need 9-11)`);
  if (Array.isArray(l.keyTerms) && l.keyTerms.length < 6) problems.push(`only ${l.keyTerms.length} key terms (need 6-8)`);
  if (Array.isArray(l.objectives) && l.objectives.length < 5) problems.push(`only ${l.objectives.length} objectives (need 5)`);
  if (problems.length) { ok = false; console.log('FAIL', tid, '->', problems.join('; ')); }
  else console.log('ok  ', tid, `(${l.visuals.length}v, ${l.questions.length}q, ${l.keyTerms.length}kt)`);
}
if (!Object.keys(lessons).length) { ok = false; console.log('no Lessons found in', files.join(', ')); }
console.log(ok ? 'UNIT OK' : 'FIX ERRORS');
process.exit(ok ? 0 : 1);
