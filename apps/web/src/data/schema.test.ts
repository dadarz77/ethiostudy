import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  LessonSchema, UnitLessonsSchema, CurriculumSchema, TopicIndexSchema,
} from './schema';

const DIR = join(__dirname, 'lessons');
const DATA = join(__dirname);

const unitFiles = readdirSync(DIR).filter(f => f.endsWith('.json') && !f.endsWith('.test.json'));

describe('content integrity', () => {
  it('has all 100 unit files', () => {
    expect(unitFiles.length).toBe(100);
  });

  it('every lesson validates against LessonSchema (380 topics)', () => {
    let topics = 0;
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
        topics++;
        const r = LessonSchema.safeParse(lesson);
        if (!r.success) errors.push(`${f}/${tid}: ${r.error.issues[0].path.join('.')} — ${r.error.issues[0].message}`);
      }
    }
    expect(errors).toEqual([]);
    // 380 total topics; all four G12 subjects authored (math 23, physics 29, chemistry 21, biology 28).
    expect(topics).toBe(380);
  });

  it('curriculum.json validates and covers all four grades', () => {
    const cur = CurriculumSchema.parse(JSON.parse(readFileSync(join(DATA, 'curriculum.json'), 'utf8')));
    expect(Object.keys(cur)).toEqual(expect.arrayContaining(['9', '10', '11', '12']));
    const units = Object.values(cur).flatMap(g => Object.values(g)).reduce((s, subj) => s + subj.units.length, 0);
    expect(units).toBe(100);
  });

  it('topics.json has 380 entries with _id matching keys', () => {
    const idx = TopicIndexSchema.parse(JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')));
    expect(Object.keys(idx).length).toBe(380);
    for (const [k, t] of Object.entries(idx)) expect(t._id).toBe(k);
  });

  it('every AUTHORED topic has a lesson file entry (G12 staged)', () => {
    const idx = TopicIndexSchema.parse(JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')));
    const seen = new Set<string>();
    for (const f of unitFiles) {
      for (const tid of Object.keys(JSON.parse(readFileSync(join(DIR, f), 'utf8')))) seen.add(tid);
    }
    for (const tid of Object.keys(idx)) if (!tid.startsWith('g12-')) expect(seen.has(tid)).toBe(true);
    // and every lesson entry must correspond to a real topic
    for (const tid of seen) expect(idx[tid]).toBeTruthy();
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

  it('mcq answers in range; calc answers numeric; only mcq/calc types', () => {
    for (const x of authItems) {
      expect(['mcq', 'calc']).toContain(x.type);
      if (x.type === 'mcq') {
        const opts = x.options as string[];
        expect(Array.isArray(opts) && opts.length >= 2 && opts.length <= 5).toBe(true);
        expect(Number.isInteger(x.answer) && (x.answer as number) >= 0 && (x.answer as number) < opts.length).toBe(true);
      } else {
        expect(x.options === undefined).toBe(true);
        const a = x.answer;
        expect(typeof a === 'number' || /^-?\d[\d.eE+-]*$/.test(String(a).trim()), 'calc answer: ' + String(a)).toBe(true);
      }
    }
  });

  it('no duplicate authored stems', () => {
    const seen = new Set<string>();
    for (const x of authItems) {
      const k = (x.q as string).toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 80);
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
