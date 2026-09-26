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

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  authModalOpen: false,
  authModalTab: 'login',
  lastSyncAt: null,
  syncStatus: 'idle',

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

        const u: UserProfile = {
          id: session.user.id,
          email: session.user.email ?? '',
          fullName: profile?.full_name ?? session.user.user_metadata?.full_name ?? session.user.email?.split('@')[0] ?? 'Student',
          grade: (profile?.grade ?? session.user.user_metadata?.grade ?? '10') as '9' | '10' | '11' | '12',
          schoolName: profile?.school_name ?? session.user.user_metadata?.school_name ?? undefined,
          avatarUrl: profile?.avatar_url ?? session.user.user_metadata?.avatar_url ?? undefined,
          createdAt: profile?.created_at ?? session.user.created_at,
          updatedAt: profile?.updated_at,
        };

        set({ user: u });
        localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u));
      } else {
        set({ user: null });
        localStorage.removeItem(LOCAL_USER_KEY);
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
          const { data: profile } = await supabase!
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle();

          const u: UserProfile = {
            id: session.user.id,
            email: session.user.email ?? '',
            fullName: profile?.full_name ?? session.user.user_metadata?.full_name ?? session.user.email?.split('@')[0] ?? 'Student',
            grade: (profile?.grade ?? session.user.user_metadata?.grade ?? '10') as '9' | '10' | '11' | '12',
            schoolName: profile?.school_name ?? session.user.user_metadata?.school_name ?? undefined,
            avatarUrl: profile?.avatar_url ?? session.user.user_metadata?.avatar_url ?? undefined,
            createdAt: profile?.created_at ?? session.user.created_at,
            updatedAt: profile?.updated_at,
          };
          set({ user: u });
          localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u));
        } else {
          set({ user: null });
          localStorage.removeItem(LOCAL_USER_KEY);
        }
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
      set({ user: demoUser, authModalOpen: false });
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
      set({ user: demoUser, authModalOpen: false });
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
      set({ user: demoUser, authModalOpen: false });
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
