import { create } from 'zustand';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { UserProfile } from '../types/auth';

interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  authModalOpen: boolean;
  authModalTab: 'login' | 'signup' | 'forgot';
  lastSyncAt: number | null;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  /** Set when a session load discovers profiles.is_banned on the user. */
  accountBanned: boolean;
  openAuthModal: (tab?: 'login' | 'signup' | 'forgot') => void;
  closeAuthModal: () => void;
  initializeAuth: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<{ error?: string }>;
  signUpWithEmail: (
    email: string,
    pass: string,
    fullName: string,
    grade: '9' | '10' | '11' | '12',
    schoolName?: string
  ) => Promise<{ error?: string }>;
  signInWithGoogle: () => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error?: string }>;
  setSyncStatus: (status: 'idle' | 'syncing' | 'synced' | 'error') => void;
}

const LOCAL_USER_KEY = 'ethiostudy_auth_user_v1';

/* Shape of a row from public.profiles (subset we consume). */
interface ProfileRow {
  full_name?: string;
  grade?: string;
  school_name?: string | null;
  avatar_url?: string | null;
  created_at?: string;
  updated_at?: string;
  is_admin?: boolean;
  is_banned?: boolean;
}

/* Shared mapping: session + profile row -> stored user object.
   isAdmin/isBanned are additive optional flags used by the admin guard and
   the session-load ban enforcement. */
function buildUser(
  session: { user: { id: string; email?: string | null; created_at: string; user_metadata?: Record<string, unknown> } },
  profile: ProfileRow | null | undefined
): UserProfile {
  const u = session.user;
  return {
    id: u.id,
    email: u.email ?? '',
    fullName: profile?.full_name ?? (u.user_metadata?.full_name as string | undefined) ?? u.email?.split('@')[0] ?? 'Student',
    grade: (profile?.grade ?? (u.user_metadata?.grade as string | undefined) ?? '10') as '9' | '10' | '11' | '12',
    schoolName: profile?.school_name ?? (u.user_metadata?.school_name as string | undefined) ?? undefined,
    avatarUrl: profile?.avatar_url ?? (u.user_metadata?.avatar_url as string | undefined) ?? undefined,
    createdAt: profile?.created_at ?? u.created_at,
    updatedAt: profile?.updated_at,
    isAdmin: profile?.is_admin === true ? true : undefined,
  };
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  authModalOpen: false,
  authModalTab: 'login',
  lastSyncAt: null,
  syncStatus: 'idle',
  accountBanned: false,

  openAuthModal: (tab = 'login') => set({ authModalOpen: true, authModalTab: tab }),
  closeAuthModal: () => set({ authModalOpen: false }),

  setSyncStatus: (status) => set({ syncStatus: status, ...(status === 'synced' ? { lastSyncAt: Date.now() } : {}) }),

  initializeAuth: async () => {
    // 1. Try restoring offline cached profile first for instant UI response
    try {
      const cached = localStorage.getItem(LOCAL_USER_KEY);
      if (cached) {
        set({ user: JSON.parse(cached) });
      }
    } catch {
      // ignore JSON parse error
    }

    // 2. If Supabase is not configured, we're done initializing (offline/guest mode)
    if (!isSupabaseConfigured || !supabase) {
      set({ loading: false });
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Fetch public profile
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        // Ban enforcement at session load: sign out immediately and surface
        // accountBanned (the /auth view shows the notice). last_seen stays
        // stale because the sync engine fires off the user id, which is gone.
        if (profile?.is_banned === true) {
          set({ accountBanned: true });
          await get().signOut();
          return;
        }

        const u = buildUser(session, profile as ProfileRow | null);

        set({ user: u, accountBanned: false });
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u));
      } else {
        set({ user: null });
        localStorage.removeItem(LOCAL_USER_KEY);
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_OUT' || !session?.user) {
          set({ user: null });
          localStorage.removeItem(LOCAL_USER_KEY);
          return;
        }

        const { data: profile } = await supabase!
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        // Same ban enforcement for fresh sign-ins / token refreshes.
        if (profile?.is_banned === true) {
          set({ user: null, accountBanned: true });
          localStorage.removeItem(LOCAL_USER_KEY);
          void supabase!.auth.signOut().catch(() => undefined);
          return;
        }

        const u = buildUser(session, profile as ProfileRow | null);
        set({ user: u, accountBanned: false });
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u));
      });
    } catch {
      // Network error or Supabase connection issue
    } finally {
      set({ loading: false });
    }
  },

  signInWithEmail: async (email, password) => {
    if (!isSupabaseConfigured || !supabase) {
      // Local demo mode if no Supabase configured yet
      const demoUser: UserProfile = {
        id: 'offline-' + Date.now(),
        email,
        fullName: email.split('@')[0],
        grade: '10',
        createdAt: new Date().toISOString(),
      };
      set({ user: demoUser, authModalOpen: false, accountBanned: false });
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(demoUser));
      return {};
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };

    if (data.user) {
      set({ authModalOpen: false });
    }
    return {};
  },

  signUpWithEmail: async (email, password, fullName, grade, schoolName) => {
    if (!isSupabaseConfigured || !supabase) {
      const demoUser: UserProfile = {
        id: 'offline-' + Date.now(),
        email,
        fullName: fullName || email.split('@')[0],
        grade,
        schoolName,
        createdAt: new Date().toISOString(),
      };
      set({ user: demoUser, authModalOpen: false, accountBanned: false });
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(demoUser));
      return {};
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          grade,
          school_name: schoolName,
        },
      },
    });

    if (error) return { error: error.message };

    if (data.user) {
      // Insert profile into profiles table
      try {
        await supabase.from('profiles').upsert({
          id: data.user.id,
          full_name: fullName,
          grade,
          school_name: schoolName ?? null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      } catch {
        // Table trigger will handle it if present
      }

      set({ authModalOpen: false });
    }
    return {};
  },

  signInWithGoogle: async () => {
    if (!isSupabaseConfigured || !supabase) {
      const demoUser: UserProfile = {
        id: 'google-offline-' + Date.now(),
        email: 'student@gmail.com',
        fullName: 'Google Student',
        grade: '10',
        createdAt: new Date().toISOString(),
      };
      set({ user: demoUser, authModalOpen: false, accountBanned: false });
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(demoUser));
      return {};
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) return { error: error.message };
    return {};
  },

  signOut: async () => {
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch {
        // ignore network error
      }
    }
    localStorage.removeItem(LOCAL_USER_KEY);
    set({ user: null, lastSyncAt: null, syncStatus: 'idle' });
  },

  updateProfile: async (updates) => {
    const { user } = get();
    if (!user) return { error: 'Not signed in' };

    const updated: UserProfile = {
      ...user,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    set({ user: updated });
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(updated));

    if (supabase && isSupabaseConfigured) {
      // Clamp/validate before persisting to the public leaderboard surface.
      const fullName = (updated.fullName ?? '').trim().slice(0, 60);
      const avatarUrl = /^https:\/\//.test(updated.avatarUrl ?? '') ? updated.avatarUrl : null;
      const { error } = await supabase.from('profiles').upsert({
        id: user.id,
        full_name: fullName,
        grade: updated.grade,
        school_name: updated.schoolName ?? null,
        avatar_url: avatarUrl,
        updated_at: updated.updatedAt,
      });
      if (error) return { error: error.message };
    }
    return {};
  },
}));
