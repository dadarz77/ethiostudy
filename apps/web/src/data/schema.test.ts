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
  it('has all 79 unit files', () => {
    expect(unitFiles.length).toBe(79);
  });

  it('every lesson validates against LessonSchema (279 topics)', () => {
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
    expect(topics).toBe(279);
  });

  it('curriculum.json validates and covers all three grades', () => {
    const cur = CurriculumSchema.parse(JSON.parse(readFileSync(join(DATA, 'curriculum.json'), 'utf8')));
    expect(Object.keys(cur)).toEqual(expect.arrayContaining(['9', '10', '11']));
    const units = Object.values(cur).flatMap(g => Object.values(g)).reduce((s, subj) => s + subj.units.length, 0);
    expect(units).toBe(79);
  });

  it('topics.json has 226 entries with _id matching keys', () => {
    const idx = TopicIndexSchema.parse(JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')));
    expect(Object.keys(idx).length).toBe(279);
    for (const [k, t] of Object.entries(idx)) expect(t._id).toBe(k);
  });

  it('every topic in curriculum has a lesson file entry', () => {
    const idx = TopicIndexSchema.parse(JSON.parse(readFileSync(join(DATA, 'topics.json'), 'utf8')));
    const seen = new Set<string>();
    for (const f of unitFiles) {
      for (const tid of Object.keys(JSON.parse(readFileSync(join(DIR, f), 'utf8')))) seen.add(tid);
    }
    for (const tid of Object.keys(idx)) expect(seen.has(tid)).toBe(true);
  });
});
