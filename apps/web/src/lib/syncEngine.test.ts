import { describe, it, expect } from 'vitest';
import { mergeProgress } from './syncEngine';
import { defaults, type PersistedState } from '../store/useAppStore';

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
