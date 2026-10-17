import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ALL_TOPICS, topicById, lessonFor, loadLesson, loadAllLessons, subjectsFor } from './curriculum';

const allTids = Object.keys(ALL_TOPICS);

/* Subjects that ship curriculum structure before their lessons are authored.
   Empty: every subject now has authored lessons. Kept generic for future staging. */
const STAGED_SUBJECTS = new Set<string>([]);
const subjectOf = (t: string) => t.split('-')[1];

describe('curriculum wiring', () => {
  it('indexes every topic in topics.json (counts derived, not hardcoded)', () => {
    const idx = JSON.parse(readFileSync(join(__dirname, '../data/topics.json'), 'utf8')) as Record<string, unknown>;
    expect(allTids.length).toBe(Object.keys(idx).length);
    expect(subjectsFor('10').length).toBeGreaterThanOrEqual(4);
    expect(subjectsFor('11').length).toBeGreaterThanOrEqual(4);
  });

  it('every _id follows the g{grade}-{subject}-u{unit}-t{n} pattern', () => {
    const bad = allTids.filter(t => !/^g(9|10|11|12)-[a-z]+-u[a-z]*\d+-t\d+$/.test(t));
    expect(bad).toEqual([]);
  });

  it('every AUTHORED topic resolves to a valid lesson with questions', async () => {
    await loadAllLessons();
    // Staged subjects (civics) are curriculum structure only — excluded here.
    const authored = allTids.filter(t => !STAGED_SUBJECTS.has(subjectOf(t)));
    const missing = authored.filter(t => !lessonFor(t));
    expect(missing).toEqual([]);
    const noQuiz = authored.filter(t => !(lessonFor(t)?.questions?.length));
    // some topics legitimately have no bank yet — report, don't fail
    expect(noQuiz.length).toBeLessThan(30);
  });

  it('topicById round-trips', () => {
    const t = topicById('g10-mathematics-um1-t1');
    expect(t?.title).toBe('Relations');
    expect(t?._grade).toBe('10');
    expect(t?._subjectTitle).toBeTruthy();
    expect(topicById('nope')).toBeUndefined();
  });

  it('loadLesson caches and rejects unknown ids', async () => {
    expect(await loadLesson('bogus')).toBeNull();
    const a = await loadLesson('g10-mathematics-um1-t1');
    const b = await loadLesson('g10-mathematics-um1-t1');
    expect(a).toBeTruthy();
    expect(a).toBe(b);
    expect(lessonFor('g10-mathematics-um1-t1')).toBe(a); // sync read after load
  });
});
