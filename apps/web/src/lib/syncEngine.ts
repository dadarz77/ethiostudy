import { supabase, isSupabaseConfigured } from './supabase';
import { useAppStore, type PersistedState } from '../store/useAppStore';
import { useAuthStore } from '../store/useAuthStore';

let syncTimeout: ReturnType<typeof setTimeout> | null = null;
let isSyncing = false;

/**
 * Merge cloud progress with local progress safely.
 * Takes the highest scores/streaks and avoids losing any locally studied topics.
 */
export function mergeProgress(local: PersistedState, cloud: Partial<PersistedState>): Partial<PersistedState> {
  // Keys that must never be written onto a plain object: assigning them
  // triggers the __proto__ setter (prototype pollution) or shadows builtins.
  const UNSAFE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

  const mergedProgress = { ...local.progress };

  if (cloud.progress) {
    for (const [tid, cloudItem] of Object.entries(cloud.progress)) {
      if (UNSAFE_KEYS.has(tid)) continue;
      const localItem = mergedProgress[tid];
      if (!localItem) {
        mergedProgress[tid] = cloudItem;
      } else {
        mergedProgress[tid] = {
          ...localItem,
          mastery: Math.max(localItem.mastery ?? 0, cloudItem.mastery ?? 0),
          studySec: Math.max(localItem.studySec ?? 0, cloudItem.studySec ?? 0),
          attempts: Math.max(localItem.attempts ?? 0, cloudItem.attempts ?? 0),
          totalQ: Math.max(localItem.totalQ ?? 0, cloudItem.totalQ ?? 0),
          correct: Math.max(localItem.correct ?? 0, cloudItem.correct ?? 0),
          quizScores: Array.from(new Set([...(localItem.quizScores ?? []), ...(cloudItem.quizScores ?? [])])),
        };
      }
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

  return {
    progress: mergedProgress,
    bookmarks: mergedBookmarks,
    notes: mergedNotes,
    streak: mergedStreak,
    totalStudySec: Math.max(local.totalStudySec ?? 0, cloud.totalStudySec ?? 0),
  };
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
    } else {
      useAuthStore.getState().setSyncStatus('synced');
    }
  } catch {
    useAuthStore.getState().setSyncStatus('error');
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
      return;
    }

    if (data) {
      const local = useAppStore.getState();
      const merged = mergeProgress(local, {
        progress: data.progress,
        bookmarks: data.bookmarks,
        notes: data.notes,
        streak: data.streak,
        totalStudySec: data.total_study_sec,
      });

      useAppStore.setState(merged);
    }
    useAuthStore.getState().setSyncStatus('synced');
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
