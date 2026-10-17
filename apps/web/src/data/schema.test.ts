import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  LessonSchema, UnitLessonsSchema, CurriculumSchema, TopicIndexSchema,
} from './schema';

const DIR = join(__dirname, 'lessons');
const DATA = join(__dirname);

const unitFiles = readdirSync(DIR).filter(f => f.endsWith('.json') && !f.endsWith('.test.json'));

/* Subjects that ship curriculum structure before their lessons are authored.
   Empty: every subject now has authored lessons. Kept generic for future staging. */
const STAGED_SUBJECTS = new Set<string>([]);
const subjectOf = (tid: string) => tid.split('-')[1];
const unitOf = (tid: string) => tid.replace(/-t\d+$/, '');

const rawTopics = JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')) as Record<string, unknown>;
const allTopicIds = Object.keys(rawTopics);

function lessonIds(): Set<string> {
  const seen = new Set<string>();
  for (const f of unitFiles) {
    for (const tid of Object.keys(JSON.parse(readFileSync(join(DIR, f), 'utf8')))) seen.add(tid);
  }
  return seen;
}

describe('content integrity', () => {
  it('every lesson validates against LessonSchema', () => {
    const errors: string[] = [];
    for (const f of unitFiles) {
      const unit = JSON.parse(readFileSync(join(DIR, f), 'utf8'));
      const parsed = UnitLessonsSchema.safeParse(unit);
      if (!parsed.success) {
        const i = parsed.error.issues[0];
        errors.push(f + ': ' + i.path.join('.') + ' — ' + i.message);
        continue;
      }
      for (const [tid, lesson] of Object.entries(parsed.data)) {
        const r = LessonSchema.safeParse(lesson);
        if (!r.success) errors.push(`${f}/${tid}: ${r.error.issues[0].path.join('.')} — ${r.error.issues[0].message}`);
      }
    }
    expect(errors).toEqual([]);
  }, 30000);

  it('curriculum.json and topics.json describe the same tree across all four grades', () => {
    const cur = CurriculumSchema.parse(JSON.parse(readFileSync(join(DATA, 'curriculum.json'), 'utf8')));
    expect(Object.keys(cur)).toEqual(expect.arrayContaining(['9', '10', '11', '12']));
    const idx = TopicIndexSchema.parse(JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')));
    // Counts are derived, never hardcoded: the flat index must equal the tree.
    const curriculumTopics = Object.values(cur)
      .flatMap(g => Object.values(g))
      .reduce((s, subj) => s + subj.units.reduce((n, u) => n + u.topics.length, 0), 0);
    expect(Object.keys(idx).length).toBe(curriculumTopics);
    for (const [k, t] of Object.entries(idx)) expect(t._id).toBe(k);
  });

  it('unit files exactly cover the authored units', () => {
    const authoredUnits = new Set([...lessonIds()].map(unitOf));
    const fileUnits = new Set(unitFiles.map(f => f.replace(/\.json$/, '')));
    expect(fileUnits).toEqual(authoredUnits);
  });

  it('every non-staged topic has a lesson; every lesson maps to a real topic', () => {
    const seen = lessonIds();
    const missing = allTopicIds.filter(t => !seen.has(t) && !STAGED_SUBJECTS.has(subjectOf(t)));
    expect(missing).toEqual([]);
    for (const tid of seen) expect(rawTopics[tid]).toBeTruthy();
  });
});

/* ---------- authored international bank (thin-pool originals) ---------- */
const AUTHORED_PATH = join(DATA, 'authored-intl.json');
const authItems = JSON.parse(readFileSync(AUTHORED_PATH, 'utf8')) as Record<string, unknown>[];
const AUTH_KNOWN = new Set(['type', 'q', 'options', 'answer', 'difficulty', 'explanation', 'tolerance', 'altAnswers', 'answer_note', 'examId', 'areaId', 'source', 'id']);

describe('authored intl bank', () => {
  it('every authored item has required fields and known keys', () => {
    for (const x of authItems) {
      for (const k of Object.keys(x)) expect(AUTH_KNOWN.has(k), 'unknown key ' + k).toBe(true);
      expect(typeof x.q).toBe('string');
      expect((x.q as string).length).toBeGreaterThanOrEqual(12);
      expect(typeof x.explanation).toBe('string');
      expect((x.explanation as string).length).toBeGreaterThan(15);
      expect([1, 2, 3]).toContain(x.difficulty);
      expect(typeof x.examId).toBe('string');
      expect(typeof x.areaId).toBe('string');
    }
  });

  it('mcq answers in range; text types have a string answer; only mcq/calc/short/tf types', () => {
    for (const x of authItems) {
      expect(['mcq', 'calc', 'short', 'tf', 'ordering']).toContain(x.type);
      if (x.type === 'mcq' || x.type === 'ordering') {
        const opts = x.options as string[];
        expect(Array.isArray(opts) && opts.length >= 2 && opts.length <= 5).toBe(true);
        expect(Number.isInteger(x.answer) && (x.answer as number) >= 0 && (x.answer as number) < opts.length).toBe(true);
      } else if (x.type === 'tf') {
        expect(x.answer === true || x.answer === false).toBe(true);
      } else if (x.type === 'calc') {
        expect(x.options === undefined).toBe(true);
        const a = x.answer;
        expect(typeof a === 'number' || /^-?\d[\d.eE+-]*$/.test(String(a).trim()), 'calc answer: ' + String(a)).toBe(true);
      } else {
        // short: a text answer (possibly pipe-separated alternatives), no options
        expect(x.options === undefined).toBe(true);
        expect(typeof x.answer === 'string' && (x.answer as string).length > 0).toBe(true);
      }
    }
  });

  it('no duplicate authored stems', () => {
    const seen = new Set<string>();
    for (const x of authItems) {
      // SAT-style items pair boilerplate question stems ("Which choice...") with
      // unique passages, and two items may share a passage with unique questions.
      // Full-text equality is the real duplicate signal.
      const raw = (x.q as string).toLowerCase().replace(/[^a-z0-9]/g, '');
      const k = raw;
      expect(seen.has(k), 'duplicate: ' + String(x.q).slice(0, 50)).toBe(false);
      seen.add(k);
    }
  });

  it('authored items are ASCII-only (no CJK/stray unicode)', () => {
    const bad = (s: string) => [...s].some(c => c.charCodeAt(0) > 126);
    for (const x of authItems) {
      expect(!bad(x.q as string), 'non-ascii stem: ' + String(x.q).slice(0, 40)).toBe(true);
      for (const o of (x.options as string[]) ?? []) expect(!bad(o), 'non-ascii option').toBe(true);
      expect(!bad(x.explanation as string), 'non-ascii explanation').toBe(true);
    }
  });
});
