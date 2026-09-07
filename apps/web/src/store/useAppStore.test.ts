import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore, migrateV1, defaults } from './useAppStore';

beforeEach(() => {
  useAppStore.setState({ ...defaults() });
});

describe('migrateV1 (legacy js/state.js blobs)', () => {
  it('null/garbage falls back to defaults', () => {
    expect(migrateV1(null).settings.theme).toBe('dark');
    expect(migrateV1('nope').progress).toEqual({});
  });

  it('full legacy blob survives with all fields', () => {
    const legacy = {
      settings: { theme: 'light', grade: '11', language: 'am', sound: false, quizLen: 5, examLen: 10 },
      progress: { 'g11-mathematics-um1-t1': { mastery: 42, attempts: 3, bestScore: 90, quizScores: [60, 80, 90], studySec: 600, lastStudy: 1, lastQuiz: 2, correct: 20, totalQ: 30, wrongStreak: 0 } },
      bookmarks: [{ id: 'b1', kind: 'topic', topicId: 'x', label: 'L', at: 1 }],
      notes: { x: [{ text: 'hello', at: 1 }] },
      streak: { current: 7, best: 12, lastDate: '2026-09-06' },
      history: [{ type: 'quiz', topicId: 'x', score: 90, at: 1 }],
      totalStudySec: 3600,
      weakMap: { y: 2 },
    };
    const m = migrateV1(legacy);
    expect(m.settings).toEqual(legacy.settings);
    expect(m.progress['g11-mathematics-um1-t1'].bestScore).toBe(90);
    expect(m.streak).toEqual({ current: 7, best: 12, lastDate: '2026-09-06' });
    expect(m.totalStudySec).toBe(3600);
    expect(m.weakMap.y).toBe(2);
  });

  it('partial blob fills gaps from defaults', () => {
    const m = migrateV1({ settings: { grade: '11' } });
    expect(m.settings.grade).toBe('11');
    expect(m.settings.theme).toBe('dark');
    expect(m.streak.current).toBe(0);
  });
});

describe('store actions', () => {
  it('logQuiz updates progress, history, weakMap, streak', () => {
    useAppStore.getState().logQuiz('t1', 8, 10, 80, ['t1', 't2']);
    const s = useAppStore.getState();
    expect(s.progress.t1.attempts).toBe(1);
    expect(s.progress.t1.bestScore).toBe(80);
    expect(s.weakMap).toEqual({ t1: 1, t2: 1 });
    expect(s.history[0]).toMatchObject({ type: 'quiz', topicId: 't1', score: 80 });
    expect(s.streak.current).toBe(1);
  });

  it('logStudy ignores <5s, counts >=5s', () => {
    useAppStore.getState().logStudy('t1', 3);
    expect(useAppStore.getState().progress.t1).toBeUndefined();
    useAppStore.getState().logStudy('t1', 60);
    expect(useAppStore.getState().progress.t1.studySec).toBe(60);
    expect(useAppStore.getState().totalStudySec).toBe(60);
  });

  it('mastery reflects the blend', () => {
    useAppStore.getState().logQuiz('t1', 10, 10, 100);
    // 60 + 3 + 0 + 10 = 73 (fresh, 1 attempt)
    expect(useAppStore.getState().mastery('t1')).toBe(73);
    expect(useAppStore.getState().mastery('nope')).toBe(0);
  });

  it('bookmarks toggle + dedupe', () => {
    const b = { id: 'x1', kind: 'topic' as const, topicId: 't', label: 'L' };
    expect(useAppStore.getState().addBookmark(b)).toBe(true);
    expect(useAppStore.getState().addBookmark(b)).toBe(false);
    expect(useAppStore.getState().isBookmarked('x1')).toBe(true);
    expect(useAppStore.getState().toggleBookmark(b)).toBe(false);
    expect(useAppStore.getState().isBookmarked('x1')).toBe(false);
  });

  it('notes add/delete per topic', () => {
    useAppStore.getState().addNote('t1', 'first');
    useAppStore.getState().addNote('t1', 'second');
    expect(useAppStore.getState().notes.t1.map(n => n.text)).toEqual(['second', 'first']);
    useAppStore.getState().deleteNote('t1', 0);
    expect(useAppStore.getState().notes.t1.map(n => n.text)).toEqual(['first']);
  });

  it('resetAll wipes everything', () => {
    useAppStore.getState().logQuiz('t1', 5, 10, 50);
    useAppStore.getState().resetAll();
    expect(useAppStore.getState().progress).toEqual({});
    expect(useAppStore.getState().streak.current).toBe(0);
  });

  it('history caps at 500', () => {
    for (let i = 0; i < 510; i++) useAppStore.getState().logStudy('t1', 10);
    expect(useAppStore.getState().history.length).toBe(500);
  });
});
