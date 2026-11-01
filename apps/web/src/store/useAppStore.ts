/* ============================================================
   EthioStudy app store — Zustand + persist.
   Reads the legacy localStorage key "ethiostudy_v1" written by
   js/state.js so existing students keep all progress on cutover.
   ============================================================ */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  type TopicProgress, type Streak, emptyProgress, todayStr,
  touchStreak, recomputeMastery, applyQuiz, applyStudy,
} from '../lib/scoring';

export interface Bookmark {
  id: string; kind: 'topic' | 'question' | 'formula';
  topicId: string; label: string; sub?: string; at: number;
}
export interface Note { text: string; at: number }
export interface HistoryEntry {
  type: 'study' | 'quiz'; topicId: string; at: number; score?: number; sec?: number; correct?: number; total?: number;
}
export interface Settings {
  theme: 'dark' | 'light'; grade: '9' | '10' | '11' | '12'; language: 'en' | 'am';
  sound: boolean; quizLen: number; examLen: number; motion: 'full' | 'low';
}

export interface PersistedState {
  /** Stable per-browser id; keys the grow-only progress counters so two
   *  devices never double-count each other's work. */
  deviceId: string;
  settings: Settings;
  progress: Record<string, TopicProgress>;
  bookmarks: Bookmark[];
  notes: Record<string, Note[]>;
  streak: Streak;
  history: HistoryEntry[];
  totalStudySec: number;
  weakMap: Record<string, number>;
}

export interface AppStore extends PersistedState {
  setSetting: <K extends keyof Settings>(k: K, v: Settings[K]) => void;
  logStudy: (tid: string, seconds: number) => void;
  logQuiz: (tid: string, correct: number, total: number, scorePct: number, wrongIds?: string[]) => void;
  mastery: (tid: string) => number;
  addBookmark: (b: Omit<Bookmark, 'at'>) => boolean;
  removeBookmark: (id: string) => void;
  toggleBookmark: (b: Omit<Bookmark, 'at'>) => boolean;
  isBookmarked: (id: string) => boolean;
  addNote: (tid: string, text: string) => void;
  deleteNote: (tid: string, idx: number) => void;
  resetAll: () => void;
}

/** Stable per-browser id for the progress G-Counter. Persisted, so it survives reloads. */
function newDeviceId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  } catch { /* insecure context / old browser — fall through */ }
  return `dev-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export const defaults = (): PersistedState => ({
  deviceId: newDeviceId(),
  settings: { theme: 'dark', grade: '10', language: 'en', sound: true, quizLen: 10, examLen: 10, motion: 'full' },
  progress: {},
  bookmarks: [],
  notes: {},
  streak: { current: 0, best: 0, lastDate: null },
  history: [],
  totalStudySec: 0,
  weakMap: {},
});

/** Merge a legacy v1 blob (js/state.js shape) over defaults — same keys, so it's a deep-ish merge. */
export function migrateV1(raw: unknown): PersistedState {
  const d = defaults();
  if (!raw || typeof raw !== 'object') return d;
  const r = raw as Partial<PersistedState>;
  return {
    deviceId: typeof r.deviceId === 'string' && r.deviceId ? r.deviceId : d.deviceId,
    settings: { ...d.settings, ...(r.settings ?? {}) },
    progress: r.progress ?? {},
    bookmarks: Array.isArray(r.bookmarks) ? r.bookmarks : [],
    notes: r.notes ?? {},
    streak: { ...d.streak, ...(r.streak ?? {}) },
    history: Array.isArray(r.history) ? r.history : [],
    totalStudySec: typeof r.totalStudySec === 'number' ? r.totalStudySec : 0,
    weakMap: r.weakMap ?? {},
  };
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...defaults(),

      setSetting: (k, v) => set(s => ({ settings: { ...s.settings, [k]: v } })),

      logStudy: (tid, seconds) => set(s => {
        const applied = applyStudy(s.progress[tid] ?? emptyProgress(), seconds, Date.now(), s.deviceId);
        if (!applied) return {};
        const history: HistoryEntry[] = [{ type: 'study' as const, topicId: tid, sec: seconds, at: Date.now() }, ...s.history].slice(0, 500);
        return {
          progress: { ...s.progress, [tid]: { ...applied, mastery: recomputeMastery(applied) } },
          totalStudySec: s.totalStudySec + seconds,
          streak: touchStreak(s.streak),
          history,
        };
      }),

      logQuiz: (tid, correct, total, scorePct, wrongIds) => set(s => {
        const applied = applyQuiz(s.progress[tid] ?? emptyProgress(), correct, total, scorePct, Date.now(), s.deviceId);
        const weakMap = { ...s.weakMap };
        for (const wid of wrongIds ?? []) weakMap[wid] = (weakMap[wid] || 0) + 1;
        const history: HistoryEntry[] = [{ type: 'quiz' as const, topicId: tid, score: scorePct, correct, total, at: Date.now() }, ...s.history].slice(0, 500);
        return {
          progress: { ...s.progress, [tid]: { ...applied, mastery: recomputeMastery(applied) } },
          weakMap,
          streak: touchStreak(s.streak),
          history,
        };
      }),

      mastery: (tid) => {
        const p = get().progress[tid];
        return p ? recomputeMastery(p) : 0;
      },

      addBookmark: (b) => {
        if (get().bookmarks.some(x => x.id === b.id)) return false;
        set(s => ({ bookmarks: [{ ...b, at: Date.now() }, ...s.bookmarks] }));
        return true;
      },
      removeBookmark: (id) => set(s => ({ bookmarks: s.bookmarks.filter(b => b.id !== id) })),
      toggleBookmark: (b) => {
        if (get().bookmarks.some(x => x.id === b.id)) { get().removeBookmark(b.id); return false; }
        return get().addBookmark(b);
      },
      isBookmarked: (id) => get().bookmarks.some(b => b.id === id),

      addNote: (tid, text) => set(s => ({
        notes: { ...s.notes, [tid]: [{ text, at: Date.now() }, ...(s.notes[tid] ?? [])].slice(0, 50) },
      })),
      deleteNote: (tid, idx) => set(s => {
        const list = [...(s.notes[tid] ?? [])];
        list.splice(idx, 1);
        return { notes: { ...s.notes, [tid]: list } };
      }),

      resetAll: () => set({ ...defaults() }),
    }),
    {
      name: 'ethiostudy_v1',
      version: 3,
      // Legacy blobs have no {state, version} envelope — migrateV1 handles both shapes.
      migrate: (persisted: unknown) => {
        const p = persisted as { state?: unknown; version?: number };
        return migrateV1(p && typeof p === 'object' && 'state' in p ? p.state : persisted);
      },
    },
  ),
);

export { todayStr };
