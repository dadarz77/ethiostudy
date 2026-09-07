import { describe, it, expect } from 'vitest';
import {
  touchStreak, recomputeMastery, applyQuiz, applyStudy, emptyProgress,
  statsFor, weakTopicIds, DAY, type TopicProgress, type Streak,
} from './scoring';

const NOW = new Date('2026-09-07T12:00:00Z').getTime();
const iso = (ms: number) => new Date(ms).toISOString().slice(0, 10);

describe('streak', () => {
  const s = (over = {}): Streak => ({ current: 3, best: 5, lastDate: iso(NOW - DAY), ...over });
  it('consecutive day increments', () => {
    expect(touchStreak(s(), new Date(NOW)).current).toBe(4);
  });
  it('gap resets to 1', () => {
    expect(touchStreak(s({ lastDate: iso(NOW - 2 * DAY) }), new Date(NOW)).current).toBe(1);
  });
  it('same day is a no-op', () => {
    const cur = s({ lastDate: iso(NOW) });
    const out = touchStreak(cur, new Date(NOW));
    expect(out.current).toBe(3);
    expect(out).toBe(cur); // identity — untouched
  });
  it('first ever day starts at 1 and updates best', () => {
    const out = touchStreak({ current: 0, best: 0, lastDate: null }, new Date(NOW));
    expect(out).toMatchObject({ current: 1, best: 1, lastDate: iso(NOW) });
  });
});

describe('mastery blend (60/15/15/10)', () => {
  it('untouched topic is 0', () => {
    expect(recomputeMastery(emptyProgress(), NOW)).toBe(0);
  });
  it('fresh 100% quiz, 1 attempt, 0 study: 60 + 3 + 0 + 10 = 73', () => {
    const p: TopicProgress = { ...emptyProgress(), attempts: 1, totalQ: 10, correct: 10, quizScores: [100], lastStudy: NOW };
    expect(recomputeMastery(p, NOW)).toBe(73);
  });
  it('recency tiers: 2 days -> 70 tier, 5 days -> 40 tier, 10 days -> 15 tier', () => {
    const base: TopicProgress = { ...emptyProgress(), attempts: 1, totalQ: 10, correct: 10, quizScores: [100] };
    const at = (days: number) => recomputeMastery({ ...base, lastStudy: NOW - days * DAY }, NOW);
    expect(at(2)).toBe(Math.round(60 + 3 + 7));    // 70 * 0.1
    expect(at(5)).toBe(Math.round(60 + 3 + 4));    // 40 * 0.1
    expect(at(10)).toBe(Math.round(60 + 3 + 1.5)); // 15 * 0.1
  });
  it('recent-3 average only (old scores forgotten)', () => {
    const p: TopicProgress = { ...emptyProgress(), attempts: 4, totalQ: 40, quizScores: [100, 0, 0, 100], lastStudy: NOW };
    // recent 3 = [0,0,100] avg 33.3 -> 20 + 15(attempts capped? 4*20=80 ->12) + 0 + 10
    expect(recomputeMastery(p, NOW)).toBe(Math.round(33.333333 * 0.6 + 80 * 0.15 + 100 * 0.1));
  });
  it('study time caps at 15 min', () => {
    const p = { ...emptyProgress(), studySec: 99999, lastStudy: NOW };
    expect(recomputeMastery(p, NOW)).toBe(Math.round(15 + 10));
  });
});

describe('applyQuiz / applyStudy', () => {
  it('applyQuiz tracks best, caps history at 30, sets wrongStreak', () => {
    let p = emptyProgress();
    for (let i = 0; i < 35; i++) p = applyQuiz(p, 3, 10, 30, NOW);
    expect(p.quizScores.length).toBe(30);
    expect(p.wrongStreak).toBe(35);
    expect(p.bestScore).toBe(30);
    p = applyQuiz(p, 10, 10, 100, NOW);
    expect(p.wrongStreak).toBe(0);
    expect(p.bestScore).toBe(100);
  });
  it('applyStudy ignores <5s noise', () => {
    expect(applyStudy(emptyProgress(), 3, NOW)).toBeNull();
    expect(applyStudy(emptyProgress(), 60, NOW)?.studySec).toBe(60);
  });
});

describe('aggregates', () => {
  const cur = {
    '10': {
      mathematics: { units: [{ topics: [{ _id: 'a' }, { _id: 'b' }] }] },
      biology: { units: [{ topics: [{ _id: 'c' }] }] },
    },
  } as never;
  const progress = {
    a: { ...emptyProgress(), attempts: 1, totalQ: 10, quizScores: [80], lastStudy: NOW },
    b: emptyProgress(),
    c: { ...emptyProgress(), attempts: 1, totalQ: 5, quizScores: [60], lastStudy: NOW },
  };
  it('statsFor subject filters by grade+subject', () => {
    const s = statsFor(cur, progress, { grade: '10', subjectKey: 'mathematics' }, NOW);
    expect(s.total).toBe(2);
    expect(s.studied).toBe(1);
    expect(s.avgScore).toBe(80);
  });
  it('statsFor whole grade', () => {
    const s = statsFor(cur, progress, { grade: '10' }, NOW);
    expect(s.total).toBe(3);
    expect(s.studied).toBe(2);
  });
  it('weakTopicIds sorts by mastery asc, wrongs desc tiebreak', () => {
    const p2 = {
      ...progress,
      b: { ...emptyProgress(), attempts: 1, totalQ: 10, quizScores: [20], lastStudy: NOW },
    };
    const w = weakTopicIds(cur as never, p2, { b: 3 }, '10');
    expect(w[0].tid).toBe('b');
    expect(w.map(x => x.tid)).toContain('c');
  });
});
