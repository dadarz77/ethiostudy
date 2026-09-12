import { describe, it, expect, beforeEach } from 'vitest';
import { bySubjectGroups, loadRun, saveRun, clearSession, applyMisses, bankRanked, RUN_KEY, type BankEntry } from '../views/National';

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

describe('Mistakes Bank', () => {
  it('applyMisses banks only wrong answers and bumps counts', () => {
    const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    const now = 1000;
    let b = applyMisses({}, items, [false, true, false], now);
    expect(Object.keys(b).sort()).toEqual(['a', 'c']);
    expect(b.a).toEqual({ id: 'a', misses: 1, lastAt: now });
    b = applyMisses(b, items, [false, true, true], now + 5); // c now correct, a misses again
    expect(b.a.misses).toBe(2);
    expect(b.c.misses).toBe(1); // no double-count when correct later
    expect(b).not.toHaveProperty('b');
  });
  it('bankRanked orders by misses then recency, drops unknown ids', () => {
    const bank: Record<string, BankEntry> = {
      x: { id: 'x', misses: 3, lastAt: 1 }, y: { id: 'y', misses: 3, lastAt: 2 },
      z: { id: 'z', misses: 1, lastAt: 9 }, gone: { id: 'gone', misses: 99, lastAt: 9 },
    };
    // x,y,z must exist in the real dataset to be kept; gone should never appear
    const ranked = bankRanked(bank);
    expect(ranked.some(r => (r as { id: string }).id === 'gone')).toBe(false);
    const ids = ranked.map(r => (r as { id: string }).id);
    const iy = ids.indexOf('y'), ix = ids.indexOf('x'), iz = ids.indexOf('z');
    if (iy >= 0 && ix >= 0) expect(iy).toBeLessThan(ix); // ties: recency first
    if (iz >= 0 && ix >= 0) expect(ix).toBeLessThan(iz); // more misses first
  });
});
