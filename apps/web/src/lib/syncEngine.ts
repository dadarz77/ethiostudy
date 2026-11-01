import { supabase, isSupabaseConfigured } from './supabase';
import { useAppStore, type PersistedState } from '../store/useAppStore';
import { useAuthStore } from '../store/useAuthStore';
import { reportError } from './observability';
import {
  devCounters, sumCounters, zeroCounters,
  type Counters, type TopicProgress,
} from './scoring';

let syncTimeout: ReturnType<typeof setTimeout> | null = null;
let isSyncing = false;

// Keys that must never be written onto a plain object: assigning them
// triggers the __proto__ setter (prototype pollution) or shadows builtins.
const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

const safeCounters = (c?: Counters): Counters => ({ ...zeroCounters(), ...(c ?? {}) });

/** Same device on both sides: take the larger contribution, never the sum. */
function mergeCounters(a: Counters, b: Counters): Counters {
  return {
    attempts: Math.max(a.attempts || 0, b.attempts || 0),
    correct: Math.max(a.correct || 0, b.correct || 0),
    totalQ: Math.max(a.totalQ || 0, b.totalQ || 0),
    studySec: Math.max(a.studySec || 0, b.studySec || 0),
  };
}

/**
 * Union two per-device maps. Each device key is present once per side, so a
 * pairwise max converges: re-running a merge is a no-op.
 */
function mergeDevMaps(a: Record<string, Counters>, b: Record<string, Counters>): Record<string, Counters> {
  const out: Record<string, Counters> = {};
  for (const [k, v] of Object.entries(a)) {
    if (UNSAFE_KEYS.has(k)) continue;
    out[k] = safeCounters(v);
  }
  for (const [k, v] of Object.entries(b)) {
    if (UNSAFE_KEYS.has(k)) continue;
    out[k] = out[k] ? mergeCounters(out[k], safeCounters(v)) : safeCounters(v);
  }
  return out;
}

/**
 * Union score histories by maximum multiplicity, so merging is idempotent.
 * A plain concat grew the array by the cloud copy on every pull and evicted
 * real recent scores past the 30-item cap.
 */
function unionQuizScores(a: number[], b: number[]): number[] {
  const seen = new Map<number, number>();
  for (const s of a) seen.set(s, (seen.get(s) ?? 0) + 1);
  const out = [...a];
  for (const s of b) {
    const left = seen.get(s) ?? 0;
    if (left > 0) { seen.set(s, left - 1); continue; }
    out.push(s);
  }
  return out.slice(-30);
}

/** Recompute a topic's flattened counters from its device buckets. */
function normalizeTopic(p: TopicProgress): TopicProgress {
  const dev = devCounters(p);
  const t = sumCounters(dev);
  return { ...p, dev, attempts: t.attempts, correct: t.correct, totalQ: t.totalQ, studySec: t.studySec };
}

function mergeTopic(localItem: TopicProgress, cloudItem: TopicProgress): TopicProgress {
  const dev = mergeDevMaps(devCounters(localItem), devCounters(cloudItem));
  const totals = sumCounters(dev);
  return {
    ...localItem,
    dev,
    // Cumulative counters: per-device maxima, summed. Summing here as well
    // would count this device's own history twice on every sync.
    attempts: totals.attempts,
    correct: totals.correct,
    totalQ: totals.totalQ,
    studySec: totals.studySec,
    mastery: Math.max(localItem.mastery ?? 0, cloudItem.mastery ?? 0),
    bestScore: Math.max(localItem.bestScore ?? 0, cloudItem.bestScore ?? 0),
    quizScores: unionQuizScores(localItem.quizScores ?? [], cloudItem.quizScores ?? []),
    lastStudy: Math.max(localItem.lastStudy ?? 0, cloudItem.lastStudy ?? 0) || null,
    lastQuiz: Math.max(localItem.lastQuiz ?? 0, cloudItem.lastQuiz ?? 0) || null,
    wrongStreak: Math.max(localItem.wrongStreak ?? 0, cloudItem.wrongStreak ?? 0),
  };
}

/**
 * Merge cloud progress with local progress safely.
 * Cumulative counters use per-device grow-only counters; everything else takes
 * the higher value. No topic is ever dropped.
 */
export function mergeProgress(local: PersistedState, cloud: Partial<PersistedState>): Partial<PersistedState> {
  const mergedProgress: Record<string, TopicProgress> = { ...local.progress };

  if (cloud.progress) {
    for (const [tid, cloudItem] of Object.entries(cloud.progress)) {
      if (UNSAFE_KEYS.has(tid)) continue;
      const localItem = mergedProgress[tid];
      mergedProgress[tid] = localItem
        ? mergeTopic(localItem, cloudItem)
        : normalizeTopic(cloudItem);
    }
  }

  // Merge bookmarks by ID
  const bookmarkMap = new Map();
  (local.bookmarks ?? []).forEach(b => bookmarkMap.set(b.id, b));
  (cloud.bookmarks ?? []).forEach(b => bookmarkMap.set(b.id, b));
  const mergedBookmarks = Array.from(bookmarkMap.values());

  // Merge notes
  const mergedNotes: Record<string, typeof local.notes[string]> = { ...local.notes };
  if (cloud.notes) {
    for (const [tid, cNotes] of Object.entries(cloud.notes)) {
      if (UNSAFE_KEYS.has(tid)) continue;
      const lNotes = Array.isArray(mergedNotes[tid]) ? mergedNotes[tid] : [];
      const noteTexts = new Set(lNotes.map(n => n.text));
      const combined = [...lNotes];
      cNotes.forEach(n => {
        if (!noteTexts.has(n.text)) {
          combined.push(n);
          noteTexts.add(n.text);
        }
      });
      mergedNotes[tid] = combined;
    }
  }

  // Streak: keep highest best & valid current
  const mergedStreak = {
    current: Math.max(local.streak?.current ?? 0, cloud.streak?.current ?? 0),
    best: Math.max(local.streak?.best ?? 0, cloud.streak?.best ?? 0),
    lastDate: local.streak?.lastDate || cloud.streak?.lastDate || null,
  };

  // Weak-topic counters rank the "practice weak topics" list. Max per topic
  // keeps the ordering stable; summing would inflate on every pull.
  const mergedWeak: Record<string, number> = { ...(local.weakMap ?? {}) };
  for (const [tid, n] of Object.entries(cloud.weakMap ?? {})) {
    if (UNSAFE_KEYS.has(tid)) continue;
    mergedWeak[tid] = Math.max(mergedWeak[tid] ?? 0, Number(n) || 0);
  }

  // totalStudySec is exactly the sum of per-topic study time, so derive it
  // instead of merging a second counter that can drift out of sync.
  const derivedStudySec = Object.values(mergedProgress)
    .reduce((sum, p) => sum + (p?.studySec || 0), 0);

  return {
    progress: mergedProgress,
    bookmarks: mergedBookmarks,
    notes: mergedNotes,
    streak: mergedStreak,
    weakMap: mergedWeak,
    totalStudySec: derivedStudySec || Math.max(local.totalStudySec ?? 0, cloud.totalStudySec ?? 0),
  };
}

/**
 * Refresh profiles.last_seen = now() for the signed-in user on an
 * authenticated sync flow. Single UPDATE, fire-and-forget: a failure here
 * must never break the sync it piggybacks on. Banned-offline users are
 * naturally excluded because they are signed out at session load.
 */
function touchLastSeen(userId: string) {
  if (!supabase || !isSupabaseConfigured) return;
  void supabase
    .from('profiles')
    .update({ last_seen: new Date().toISOString() })
    .eq('id', userId)
    .then(undefined, () => undefined); // ignore errors, non-blocking
}

/**
 * Sync failures are dominated by "the student has no signal", which is expected
 * in Ethiopia and not a defect. Reporting those would bury the real ones.
 */
function reportSyncFailure(error: unknown, event: string) {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
  reportError(error, { source: 'sync', event });
}

/**
 * Push local state to cloud.
 */
export async function pushToCloud(userId: string) {
  if (!supabase || !isSupabaseConfigured || isSyncing) return;
  isSyncing = true;
  useAuthStore.getState().setSyncStatus('syncing');

  try {
    const s = useAppStore.getState();
    const payload = {
      user_id: userId,
      progress: s.progress,
      bookmarks: s.bookmarks,
      notes: s.notes,
      streak: s.streak,
      total_study_sec: s.totalStudySec,
      weak_map: s.weakMap,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('student_progress').upsert(payload);
    if (error) {
      useAuthStore.getState().setSyncStatus('error');
      reportSyncFailure(error, 'sync_push_failed');
    } else {
      useAuthStore.getState().setSyncStatus('synced');
      touchLastSeen(userId);
    }
  } catch (err) {
    useAuthStore.getState().setSyncStatus('error');
    reportSyncFailure(err, 'sync_push_threw');
  } finally {
    isSyncing = false;
  }
}

/**
 * Pull cloud state and merge into local.
 */
export async function pullFromCloud(userId: string) {
  if (!supabase || !isSupabaseConfigured) return;
  useAuthStore.getState().setSyncStatus('syncing');

  try {
    const { data, error } = await supabase
      .from('student_progress')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      useAuthStore.getState().setSyncStatus('error');
      reportSyncFailure(error, 'sync_pull_failed');
      return;
    }

    if (data) {
      const local = useAppStore.getState();
      const merged = mergeProgress(local, {
        progress: data.progress,
        bookmarks: data.bookmarks,
        notes: data.notes,
        streak: data.streak,
        // weak_map is written by pushToCloud; before this it was never read
        // back, so "practice weak topics" was silently device-local.
        weakMap: data.weak_map,
        totalStudySec: data.total_study_sec,
      });

      useAppStore.setState(merged);
    }
    useAuthStore.getState().setSyncStatus('synced');
    touchLastSeen(userId);
  } catch {
    useAuthStore.getState().setSyncStatus('error');
  }
}

/**
 * Initialize auto-sync listeners.
 */
export function initAutoSync() {
  let prevUserId: string | null = null;

  // Listen to auth changes
  useAuthStore.subscribe((state) => {
    const currentUserId = state.user?.id ?? null;
    if (currentUserId && currentUserId !== prevUserId) {
      prevUserId = currentUserId;
      // On fresh login, pull cloud data and merge
      pullFromCloud(currentUserId);
    } else if (!currentUserId) {
      prevUserId = null;
    }
  });

  // Listen to store progress updates to trigger debounced push
  useAppStore.subscribe(() => {
    const user = useAuthStore.getState().user;
    if (!user || user.id.startsWith('offline-') || user.id.startsWith('google-offline-')) return;

    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => {
      pushToCloud(user.id);
    }, 2500); // 2.5s debounce to save bandwidth
  });

  // Sync on internet reconnect
  if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
      const user = useAuthStore.getState().user;
      if (user && !user.id.startsWith('offline-')) {
        pullFromCloud(user.id).then(() => pushToCloud(user.id));
      }
    });
  }
}
