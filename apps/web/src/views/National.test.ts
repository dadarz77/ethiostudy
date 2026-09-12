import { describe, it, expect } from 'vitest';
import { bySubjectGroups } from '../views/National';

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
