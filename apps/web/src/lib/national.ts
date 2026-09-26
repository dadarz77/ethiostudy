/* ============================================================
   National Exams Engine & Storage
   Types, persistence, and pure scoring helpers for past papers.
   ============================================================ */
import type { QuizQuestion } from './quiz';
import type { Bookmark } from '../store/useAppStore';

export type NatItem = {
  id: string;
  subject: string;
  year: number;
  q: string;
  options: string[];
  answer: number;
  type: 'mcq';
  explanation: string;
};

/* ── Lazy data loader ──────────────────────────────────────────
   nat-exams.json is ~1.1 MB. We keep it out of the main bundle
   by using a dynamic import — Vite splits it into its own chunk
   that is only downloaded when the student visits /national.
   The promise is memoised so we only fetch once per session. */
let _cache: Promise<NatItem[]> | null = null;
let _cacheItems: NatItem[] | null = null;

export function loadNatItems(): Promise<NatItem[]> {
  if (!_cache) {
    _cache = import('../data/nat-exams.json').then(m => {
      _cacheItems = m.default as NatItem[];
      return _cacheItems;
    });
  }
  return _cache;
}

/** Get synchronously cached items if already loaded, or empty array. */
export function getCachedNatItems(): NatItem[] {
  return _cacheItems ?? [];
}

/** Shorthand for components that need a resolved array via useEffect. */
export const cachedNatItems = loadNatItems;

export const SUBJECTS: Record<string, { title: string; icon: string }> = {
  biology: { title: 'Biology', icon: '🧬' },
  chemistry: { title: 'Chemistry', icon: '🧪' },
  physics: { title: 'Physics', icon: '🧲' },
  mathematics: { title: 'Mathematics', icon: '📐' },
  civics: { title: 'Civics', icon: '🏛️' },
  english: { title: 'English', icon: '🇬🇧' },
};

/* Group a graded run by subject so each national-exam score logs to the
   student's progress under a virtual `natl:<subject>` topic id. Pure — unit-tested. */
export function bySubjectGroups(subjectOf: string[], perQ: { correct: boolean }[]): Record<string, { c: number; n: number }> {
  const g: Record<string, { c: number; n: number }> = {};
  perQ.forEach((p, i) => {
    const e = (g[subjectOf[i]] ??= { c: 0, n: 0 });
    e.n++;
    if (p.correct) e.c++;
  });
  return g;
}

export function bm(q: QuizQuestion): Omit<Bookmark, 'at'> {
  const it = q as unknown as NatItem;
  const subj = SUBJECTS[it.subject]?.title ?? it.subject;
  return {
    id: it.id,
    kind: 'question',
    topicId: 'natl:' + it.subject,
    label: it.q.length > 90 ? it.q.slice(0, 90) + '…' : it.q,
    sub: subj + ' · ' + it.year + ' E.C.',
  };
}

export function toQuiz(list: NatItem[]): QuizQuestion[] {
  return list.map((it, i) => ({ ...it, _qi: i }) as unknown as QuizQuestion);
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface Run {
  title: string;
  icon: string;
  qs: QuizQuestion[];
  yearOf: number[];
  subjectOf: string[];
  seconds: number;
  startedAt: number;
  answers?: unknown[];
  flags?: number[];
}

/* ── Mistakes Bank ──
   Persistent per-question record of every national-exam question the student
   has gotten wrong, with a miss count. Surfaces a "practice my mistakes" pool
   so retrieval practice concentrates on weak spots (spacing/testing effect). */
export const BANK_KEY = 'ethiostudy_natl_bank';
export interface BankEntry { id: string; misses: number; lastAt: number }

export function loadBank(): Record<string, BankEntry> {
  try {
    const r = JSON.parse(localStorage.getItem(BANK_KEY) || '{}');
    return r && typeof r === 'object' ? r as Record<string, BankEntry> : {};
  } catch {
    return {};
  }
}

export function saveBank(b: Record<string, BankEntry>): void {
  try {
    localStorage.setItem(BANK_KEY, JSON.stringify(b));
  } catch {
    /* quota */
  }
}

/* Pure: fold a graded run's misses into the bank (bump counts). Returns the new bank. Unit-tested. */
export function applyMisses(
  bank: Record<string, BankEntry>,
  items: { id: string }[],
  perCorrect: boolean[],
  now: number,
): Record<string, BankEntry> {
  const next: Record<string, BankEntry> = { ...bank };
  items.forEach((it, i) => {
    if (perCorrect[i]) return;
    const e = next[it.id];
    next[it.id] = e ? { ...e, misses: e.misses + 1, lastAt: now } : { id: it.id, misses: 1, lastAt: now };
  });
  return next;
}

/* Pure: entries ordered most-missed first, then most-recent. Unit-tested.
   Accepts an explicit items array or falls back to in-memory cached items. */
export function bankRanked(bank: Record<string, BankEntry>, items?: NatItem[]): NatItem[] {
  const itemList = items ?? _cacheItems ?? [];
  const ids = Object.keys(bank).sort((a, b) => bank[b].misses - bank[a].misses || bank[b].lastAt - bank[a].lastAt);
  const byId: Record<string, NatItem> = {};
  for (const it of itemList) byId[it.id] = it;
  return ids.filter(id => byId[id]).map(id => byId[id]);
}

/* ── Refresh-proof session persistence ──
   The whole run (questions + answers + clock anchor) survives F5/closure. */
export const RUN_KEY = 'ethiostudy_natl_run';
export const RES_KEY = 'ethiostudy_natl_res';

export function loadRun(): Run | null {
  try {
    const r = JSON.parse(localStorage.getItem(RUN_KEY) || 'null');
    return r && Array.isArray(r.qs) && r.qs.length ? r as Run : null;
  } catch {
    return null;
  }
}

export function saveRun(r: Run | null): void {
  try {
    if (r) {
      localStorage.setItem(RUN_KEY, JSON.stringify(r));
    } else {
      localStorage.removeItem(RUN_KEY);
    }
  } catch {
    /* quota */
  }
}

export function saveRes(v: unknown | null): void {
  try {
    if (v) {
      localStorage.setItem(RES_KEY, JSON.stringify(v));
    } else {
      localStorage.removeItem(RES_KEY);
    }
  } catch {
    /* quota */
  }
}

export function clearSession(): void {
  saveRun(null);
  saveRes(null);
}
