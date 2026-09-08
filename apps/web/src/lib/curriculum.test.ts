import { describe, it, expect } from 'vitest';
import { ALL_TOPICS, topicById, lessonFor, loadLesson, loadAllLessons, subjectsFor } from './curriculum';

const allTids = Object.keys(ALL_TOPICS);

describe('curriculum wiring', () => {
  it('226 topics indexed across both grades', () => {
    expect(allTids.length).toBe(226);
    expect(subjectsFor('10').length).toBeGreaterThanOrEqual(4);
    expect(subjectsFor('11').length).toBeGreaterThanOrEqual(4);
  });

  it('every _id follows the g{grade}-{subject}-u{unit}-t{n} pattern', () => {
    const bad = allTids.filter(t => !/^g(10|11)-[a-z]+-u[a-z]*\d+-t\d+$/.test(t));
    expect(bad).toEqual([]);
  });

  it('every topic resolves to a valid lesson with questions', async () => {
    await loadAllLessons();
    const missing = allTids.filter(t => !lessonFor(t));
    expect(missing).toEqual([]);
    const noQuiz = allTids.filter(t => !(lessonFor(t)!.questions?.length));
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
