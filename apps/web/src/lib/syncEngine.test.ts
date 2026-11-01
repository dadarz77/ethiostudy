import { describe, it, expect } from 'vitest';
import { mergeProgress } from './syncEngine';
import { defaults, type PersistedState } from '../store/useAppStore';
import { emptyProgress, type TopicProgress, type Counters } from './scoring';

describe('syncEngine — mergeProgress', () => {
  it('merges local and cloud progress taking the maximum mastery and combined scores', () => {
    const local = defaults();
    local.progress = {
      t1: {
        mastery: 60,
        studySec: 300,
        attempts: 2,
        bestScore: 60,
        quizScores: [60],
        lastStudy: null,
        lastQuiz: null,
        correct: 6,
        totalQ: 10,
        wrongStreak: 0,
      },
    };

    const cloud: Partial<PersistedState> = {
      progress: {
        t1: {
          mastery: 80,
          studySec: 500,
          attempts: 3,
          bestScore: 80,
          quizScores: [80],
          lastStudy: null,
          lastQuiz: null,
          correct: 12,
          totalQ: 15,
          wrongStreak: 0,
        },
        t2: {
          mastery: 90,
          studySec: 600,
          attempts: 1,
          bestScore: 100,
          quizScores: [100],
          lastStudy: null,
          lastQuiz: null,
          correct: 5,
          totalQ: 5,
          wrongStreak: 0,
        },
      },
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].mastery).toBe(80);
    expect(merged.progress!['t1'].studySec).toBe(500);
    expect(merged.progress!['t1'].attempts).toBe(3);
    expect(merged.progress!['t1'].quizScores).toEqual([60, 80]);
    expect(merged.progress!['t2'].mastery).toBe(90);
  });

  it('merges bookmarks without duplicates', () => {
    const local = defaults();
    local.bookmarks = [
      { id: 'b1', kind: 'topic', topicId: 't1', label: 'Algebra', at: 100 },
    ];

    const cloud: Partial<PersistedState> = {
      bookmarks: [
        { id: 'b1', kind: 'topic', topicId: 't1', label: 'Algebra', at: 100 },
        { id: 'b2', kind: 'formula', topicId: 't2', label: 'Newton Law', at: 200 },
      ],
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.bookmarks?.length).toBe(2);
    expect(merged.bookmarks?.map(b => b.id)).toEqual(['b1', 'b2']);
  });

  it('keeps highest streak values', () => {
    const local = defaults();
    local.streak = { current: 5, best: 8, lastDate: '2026-09-19' };

    const cloud: Partial<PersistedState> = {
      streak: { current: 3, best: 12, lastDate: '2026-09-18' },
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.streak?.current).toBe(5);
    expect(merged.streak?.best).toBe(12);
  });

  it('ignores __proto__/constructor keys in cloud notes (regression: TypeError + prototype pollution)', () => {
    // A malicious/accidental cloud payload can carry an own enumerable
    // '__proto__' key. Before the fix, mergedNotes['__proto__'] resolved to
    // Object.prototype and .map threw; assigning the key polluted prototypes.
    const local = defaults();

    const cloud = JSON.parse(`{
      "notes": {
        "__proto__": [{ "text": "evil", "at": 1 }],
        "constructor": [{ "text": "evil2", "at": 1 }],
        "prototype": [{ "text": "evil3", "at": 1 }]
      }
    }`) as Partial<PersistedState>;

    const merged = mergeProgress(local, cloud);

    // No throw (this test would previously crash), and the unsafe keys are dropped
    expect(Object.keys(merged.notes ?? {})).not.toContain('__proto__');
    expect(Object.keys(merged.notes ?? {})).not.toContain('constructor');
    expect(Object.keys(merged.notes ?? {})).not.toContain('prototype');

    // Prototypes not polluted
    expect((merged as unknown as Record<string, unknown>).polluted).toBeUndefined();
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
  });

  it('ignores __proto__ key in cloud progress', () => {
    const local = defaults();

    const cloud = JSON.parse(`{
      "progress": {
        "__proto__": { "mastery": 999 }
      }
    }`) as Partial<PersistedState>;

    const merged = mergeProgress(local, cloud);
    expect(Object.keys(merged.progress ?? {})).not.toContain('__proto__');
    expect(({} as Record<string, unknown>).mastery).toBeUndefined();
  });

  it('merges real notes alongside a __proto__ payload and keeps them', () => {
    const local = defaults();
    local.notes = {
      t1: [{ text: 'local note', at: 100 }],
    };

    const cloud = JSON.parse(`{
      "notes": {
        "__proto__": [{ "text": "evil", "at": 1 }],
        "t2": [{ "text": "cloud note", "at": 200 }]
      }
    }`) as Partial<PersistedState>;

    const merged = mergeProgress(local, cloud);
    expect(merged.notes!['t1'].map(n => n.text)).toEqual(['local note']);
    expect(merged.notes!['t2'].map(n => n.text)).toEqual(['cloud note']);
  });
});

describe('syncEngine — cumulative counters (per-device G-Counter)', () => {
  const topic = (o: Partial<TopicProgress> = {}): TopicProgress => ({ ...emptyProgress(), ...o });
  const counters = (o: Partial<Counters> = {}): Counters => ({ attempts: 0, correct: 0, totalQ: 0, studySec: 0, ...o });

  it('sums distinct devices instead of taking the max', () => {
    // Phone did 5 attempts, laptop did 7 — the student did 12. Max() reported 7.
    const local = defaults();
    local.progress = { t1: topic({ dev: { phone: counters({ attempts: 7, totalQ: 7, studySec: 200 }) } }) };

    const cloud: Partial<PersistedState> = {
      progress: { t1: topic({ dev: { laptop: counters({ attempts: 5, totalQ: 5, studySec: 100 }) } }) },
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].attempts).toBe(12);
    expect(merged.progress!['t1'].totalQ).toBe(12);
    expect(merged.progress!['t1'].studySec).toBe(300);
  });

  it('is idempotent — merging the same cloud payload again never inflates', () => {
    // This is what a naive `a + b` on counters gets wrong: the cloud row already
    // holds this device's history, so every sync would double-count it.
    const local = defaults();
    local.progress = { t1: topic({ dev: { me: counters({ attempts: 3, totalQ: 30, studySec: 600 }) } }) };

    const cloud: Partial<PersistedState> = {
      progress: { t1: topic({ dev: { me: counters({ attempts: 3, totalQ: 30, studySec: 600 }), other: counters({ attempts: 2, totalQ: 20, studySec: 300 }) } }) },
    };

    const once = mergeProgress(local, cloud);
    expect(once.progress!['t1'].attempts).toBe(5);
    expect(once.progress!['t1'].studySec).toBe(900);

    const twice = mergeProgress({ ...local, ...once } as PersistedState, cloud);
    expect(twice.progress!['t1'].attempts).toBe(5);
    expect(twice.progress!['t1'].studySec).toBe(900);
  });

  it('treats pre-upgrade flat counters as a single bucket, so nothing inflates', () => {
    // A row written before per-device tracking has no `dev` map. Both sides
    // describe the same history, so this must stay 5 — not 10.
    const local = defaults();
    local.progress = { t1: topic({ attempts: 5, totalQ: 50, studySec: 400, correct: 40 }) };

    const cloud: Partial<PersistedState> = {
      progress: { t1: topic({ attempts: 5, totalQ: 50, studySec: 400, correct: 40 }) },
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].attempts).toBe(5);
    expect(merged.progress!['t1'].studySec).toBe(400);
  });

  it('keeps new work added on top of a legacy bucket', () => {
    const local = defaults();
    local.progress = { t1: topic({ attempts: 5, totalQ: 50, studySec: 400, dev: { legacy: counters({ attempts: 5, totalQ: 50, studySec: 400 }), phone: counters({ attempts: 2, totalQ: 20, studySec: 60 }) } }) };

    const cloud: Partial<PersistedState> = {
      progress: { t1: topic({ dev: { legacy: counters({ attempts: 5, totalQ: 50, studySec: 400 }) } }) },
    };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].attempts).toBe(7);
    expect(merged.progress!['t1'].studySec).toBe(460);
  });

  it('pulls weakMap from the cloud (it was pushed but never read back)', () => {
    const local = defaults();
    local.weakMap = { t1: 2 };

    const cloud: Partial<PersistedState> = { weakMap: { t1: 1, t2: 4 } };

    const merged = mergeProgress(local, cloud);
    expect(merged.weakMap).toEqual({ t1: 2, t2: 4 });
  });

  it('unions quizScores without duplicating an identical history', () => {
    const local = defaults();
    local.progress = { t1: topic({ quizScores: [60, 80] }) };

    const cloud: Partial<PersistedState> = { progress: { t1: topic({ quizScores: [60, 80] }) } };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].quizScores).toEqual([60, 80]);
  });

  it('derives totalStudySec from per-topic study time', () => {
    const local = defaults();
    local.progress = { t1: topic({ studySec: 120 }), t2: topic({ studySec: 60 }) };

    const cloud: Partial<PersistedState> = { progress: { t1: topic({ studySec: 300 }) } };

    const merged = mergeProgress(local, cloud);
    expect(merged.progress!['t1'].studySec).toBe(300);
    expect(merged.totalStudySec).toBe(360);
  });
});
