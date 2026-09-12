import { describe, it, expect, beforeEach } from 'vitest';
import { bySubjectGroups, loadRun, saveRun, clearSession, RUN_KEY } from '../views/National';

describe('bySubjectGroups — national exam results → progress engine', () => {
  it('groups correct/incorrect tallies per subject', () => {
    const subjectOf = ['biology', 'physics', 'biology', 'civics'];
    const perQ = [{ correct: true }, { correct: false }, { correct: false }, { correct: true }];
    expect(bySubjectGroups(subjectOf, perQ)).toEqual({
      biology: { c: 1, n: 2 },
      physics: { c: 0, n: 1 },
      civics: { c: 1, n: 1 },
    });
  });
  it('handles an empty run', () => {
    expect(bySubjectGroups([], [])).toEqual({});
  });
  it('all-correct subject scores 100 when divided', () => {
    const g = bySubjectGroups(['english', 'english'], [{ correct: true }, { correct: true }]);
    expect(Math.round((g.english.c / g.english.n) * 100)).toBe(100);
  });
});

describe('refresh-proof run persistence', () => {
  beforeEach(() => clearSession());
  it('round-trips a run through localStorage', () => {
    const run = { title: 'Biology', icon: '🧬', qs: [{ id: 'x', q: 'Q?', options: ['a', 'b'], answer: 0, type: 'mcq' as const }], yearOf: [2008], subjectOf: ['biology'], seconds: 600, startedAt: 123 };
    saveRun(run as never);
    const back = loadRun();
    expect(back?.startedAt).toBe(123);
    expect(back?.qs.length).toBe(1);
  });
  it('null/garbage storage loads as null', () => {
    localStorage.setItem(RUN_KEY, '{oops');
    expect(loadRun()).toBeNull();
    expect(localStorage.getItem(RUN_KEY)).toBe('{oops'); // doesn't throw during read
  });
  it('clearSession wipes the key', () => {
    saveRun({ qs: [{ id: 'a' }] } as never);
    clearSession();
    expect(localStorage.getItem(RUN_KEY)).toBeNull();
  });
});
