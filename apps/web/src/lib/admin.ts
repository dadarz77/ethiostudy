/* ============================================================
   admin.ts — typed helpers for the /admin console.

   Every call guards on the Supabase client being configured and
   returns a typed result object instead of throwing, so the admin
   panels can render a clean error/empty state offline.

   Dev-only: with `localStorage[DEV_ADMIN_BYPASS_KEY] === '1'` the
   guard route renders the console against demo data so layout can
   be screenshot without a configured project.
   ============================================================ */
import { supabase, isSupabaseConfigured } from './supabase';
import type { UserProfile } from '../types/auth';

export type AdminTab = 'overview' | 'users' | 'engagement' | 'content';

/** Result type: errors as values, never thrown across the UI boundary. */
export type AdminResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export const CONFIG_ERROR = 'supabase-not-configured';

/** localStorage key for the dev-only admin screenshot/mock bypass. */
export const DEV_ADMIN_BYPASS_KEY = 'ethiostudy_dev_admin_bypass';

export function isDevAdminBypass(): boolean {
  return (
    import.meta.env.DEV &&
    typeof localStorage !== 'undefined' &&
    localStorage.getItem(DEV_ADMIN_BYPASS_KEY) === '1'
  );
}

/* ---------- role helpers ---------- */

/** Pure predicate over the stored auth user (isAdmin is additive/optional). */
export function isAdmin(user: UserProfile | null | undefined): boolean {
  return user?.isAdmin === true;
}

/* ---------- row types (profiles table shape) ---------- */

export interface AdminProfile {
  id: string;
  fullName: string;
  grade: '9' | '10' | '11' | '12';
  schoolName: string | null;
  avatarUrl: string | null;
  createdAt: string;
  lastSeen: string | null;
  isAdmin: boolean;
  isBanned: boolean;
}

/** Topic counters aggregated from a student_progress row's progress jsonb. */
export interface UserProgressDetail {
  topicsStarted: number;
  quizzesCompleted: number;
  avgScore: number | null;
  topMastery: number;
}

export interface ProfilesPage {
  profiles: AdminProfile[];
  total: number;
}

export interface EngagementDay {
  date: string; // YYYY-MM-DD
  attempts: number;
  activeUsers: number;
}

export interface StreakBucket {
  label: string;
  users: number;
}

export interface AdminStats {
  totalUsers: number;
  activeToday: number;
  quizzesCompleted: number;
  avgScore: number | null;
}

export interface EngagementData {
  days: EngagementDay[]; // oldest -> newest, exactly 14 entries (zero-filled)
  streaks: StreakBucket[];
  avgScore: number | null;
}

/* ---------- internals ---------- */

function client() {
  return supabase && isSupabaseConfigured ? supabase : null;
}

function todayIso(): string {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString();
}

function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

function last14Days(): string[] {
  const out: string[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setSeconds(0, 0);
    d.setDate(d.getDate() - i);
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
}

interface RawProfile {
  id: string;
  full_name: string;
  grade: '9' | '10' | '11' | '12';
  school_name: string | null;
  avatar_url: string | null;
  created_at: string;
  last_seen: string | null;
  is_admin: boolean;
  is_banned: boolean;
}

function toProfile(r: RawProfile): AdminProfile {
  return {
    id: r.id,
    fullName: r.full_name,
    grade: r.grade,
    schoolName: r.school_name,
    avatarUrl: r.avatar_url,
    createdAt: r.created_at,
    lastSeen: r.last_seen,
    isAdmin: r.is_admin === true,
    isBanned: r.is_banned === true,
  };
}

interface ProgressTopic {
  attempts?: number;
  mastery?: number;
  quizScores?: number[];
}

/** Sum quiz attempts + average score out of a progress jsonb. */
function summarizeProgress(progress: Record<string, ProgressTopic> | null | undefined): { quizzes: number; scores: number[]; topMastery: number; topics: number } {
  let quizzes = 0;
  let topMastery = 0;
  const topics = progress ? Object.keys(progress).length : 0;
  const scores: number[] = [];
  for (const t of Object.values(progress ?? {})) {
    const m = Number(t?.mastery) || 0;
    if (m > topMastery) topMastery = m;
    const n = typeof t?.attempts === 'number' ? t.attempts : Number(t?.attempts) || 0;
    quizzes += n;
    if (Array.isArray(t?.quizScores)) {
      for (const s of t.quizScores) {
        const num = Number(s);
        if (Number.isFinite(num)) scores.push(num);
      }
    }
  }
  return { quizzes, scores, topMastery, topics };
}

function avg(scores: number[]): number | null {
  if (!scores.length) return null;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

/* ---------- queries ---------- */

export async function fetchProfiles(opts: {
  search?: string;
  filter?: 'all' | 'banned' | 'admins';
  limit?: number;
  offset?: number;
} = {}): Promise<AdminResult<ProfilesPage>> {
  const dev = demoProfiles();
  if (dev) return { ok: true, data: demoProfilesPage(opts) };

  const db = client();
  if (!db) return { ok: false, error: CONFIG_ERROR };

  const { search, filter = 'all', limit = 25, offset = 0 } = opts;
  let q = db.from('profiles').select('*', { count: 'exact' });
  const term = (search ?? '').trim().toLowerCase();
  if (term) q = q.or(`full_name.ilike.%${term}%,school_name.ilike.%${term}%`);
  if (filter === 'banned') q = q.eq('is_banned', true);
  if (filter === 'admins') q = q.eq('is_admin', true);

  const { data, error, count } = await q
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return { ok: false, error: error.message };
  return { ok: true, data: { profiles: (data as RawProfile[]).map(toProfile), total: count ?? 0 } };
}

/** Per-user progress detail for the expandable Users row. */
export async function fetchUserProgress(id: string): Promise<AdminResult<UserProgressDetail>> {
  if (demoProfiles()) {
    const topics = 3 + (id.length % 9);
    return { ok: true, data: { topicsStarted: topics, quizzesCompleted: topics * 4, avgScore: 62 + (id.length % 30), topMastery: 45 + (id.length % 50) } };
  }

  const db = client();
  if (!db) return { ok: false, error: CONFIG_ERROR };

  const { data, error } = await db
    .from('student_progress')
    .select('progress')
    .eq('user_id', id)
    .maybeSingle();
  if (error) return { ok: false, error: error.message };

  const summary = summarizeProgress((data?.progress ?? null) as Record<string, ProgressTopic> | null);
  return { ok: true, data: {
    topicsStarted: summary.topics,
    quizzesCompleted: summary.quizzes,
    avgScore: avg(summary.scores),
    topMastery: summary.topMastery,
  } };
}

export async function fetchAdminStats(): Promise<AdminResult<AdminStats>> {
  const dev = demoProfiles();
  if (dev) {
    const scored = dev.flatMap((p) => p._demoScores);
    return { ok: true, data: {
      totalUsers: dev.length,
      activeToday: dev.filter((p) => p.lastSeen && Date.now() - new Date(p.lastSeen).getTime() < 17 * 3600 * 1000).length,
      quizzesCompleted: dev.reduce((a, p) => a + p._demoScores.length, 0),
      avgScore: avg(scored),
    } };
  }

  const db = client();
  if (!db) return { ok: false, error: CONFIG_ERROR };

  const { count: totalUsers, error: err1 } = await db
    .from('profiles')
    .select('*', { count: 'exact', head: true });
  if (err1) return { ok: false, error: err1.message };

  const { count: activeToday, error: err2 } = await db
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    .gte('last_seen', todayIso());
  if (err2) return { ok: false, error: err2.message };

  // Quiz totals + avg score from every student_progress row's jsonb (admin RLS
  // policy lets the admin row-read these).
  const { data, error: err3 } = await db
    .from('student_progress')
    .select('progress')
    .limit(5000);
  if (err3) return { ok: false, error: err3.message };

  let quizzesCompleted = 0;
  const scores: number[] = [];
  for (const row of (data ?? []) as { progress: Record<string, ProgressTopic> | null }[]) {
    const s = summarizeProgress(row.progress);
    quizzesCompleted += s.quizzes;
    scores.push(...s.scores);
  }
  return { ok: true, data: { totalUsers: totalUsers ?? 0, activeToday: activeToday ?? 0, quizzesCompleted, avgScore: avg(scores) } };
}

export async function fetchEngagement(): Promise<AdminResult<EngagementData>> {
  const dev = demoProfiles();

  const db = client();
  if (!db && !dev) return { ok: false, error: CONFIG_ERROR };

  const since = new Date();
  since.setDate(since.getDate() - 14);
  const sinceIso = since.toISOString();

  let rows: { user_id: string; updated_at: string; progress: Record<string, ProgressTopic> | null; streak: { current?: number } | null }[];

  if (dev) {
    rows = dev.map((p, i) => ({
      user_id: p.id,
      updated_at: new Date(Date.now() - (i % 14) * 24 * 3600 * 1000).toISOString(),
      progress: { demo: { attempts: p._demoScores.length, quizScores: p._demoScores } },
      streak: { current: p._demoStreak },
    }));
  } else {
    if (!db) return { ok: false, error: CONFIG_ERROR };
    const { data, error } = await db
      .from('student_progress')
      .select('user_id, updated_at, progress, streak')
      .gte('updated_at', sinceIso)
      .limit(5000);
    if (error) return { ok: false, error: error.message };
    rows = (data ?? []) as typeof rows;
  }

  const buckets = new Map<string, { attempts: number; users: Set<string> }>();
  for (const d of last14Days()) buckets.set(d, { attempts: 0, users: new Set() });
  const allScores: number[] = [];
  for (const r of rows) {
    const key = dayKey(r.updated_at);
    const b = buckets.get(key);
    if (!b) continue;
    const s = summarizeProgress(r.progress);
    b.attempts += s.quizzes;
    allScores.push(...s.scores);
    b.users.add(r.user_id);
  }

  const streakDefs: { label: string; min: number }[] = [
    { label: '0', min: 0 },
    { label: '1-3', min: 1 },
    { label: '4-7', min: 4 },
    { label: '8-14', min: 8 },
    { label: '15+', min: 15 },
  ];
  const streaks: StreakBucket[] = streakDefs.map((d) => ({ label: d.label, users: 0 }));
  for (const r of rows) {
    const cur = typeof r.streak?.current === 'number' ? r.streak.current : 0;
    // bands are ascending; pick the highest band with min <= current (0 band catches 0)
    for (let i = streakDefs.length - 1; i >= 0; i--) {
      if (cur >= streakDefs[i].min) {
        streaks[i].users++;
        break;
      }
    }
  }

  return {
    ok: true,
    data: {
      days: Array.from(buckets.entries()).map(([date, b]) => ({ date, attempts: b.attempts, activeUsers: b.users.size })),
      streaks,
      avgScore: avg(allScores),
    },
  };
}

/* ---------- mutations (confirm modals live in the panel) ---------- */

/** Ban/unban — runs through the admin_set_user_banned SECURITY DEFINER RPC
 *  because authenticated users have no direct column privilege on is_banned. */
export async function setUserBanned(id: string, banned: boolean): Promise<AdminResult<void>> {
  const db = client();
  if (!db) return { ok: false, error: CONFIG_ERROR };
  const { error } = await db.rpc('admin_set_user_banned', { target: id, banned });
  if (error) return { ok: false, error: error.message };
  return { ok: true, data: undefined };
}

/** Reset progress: deletes the student's single student_progress row. */
export async function resetUserProgress(id: string): Promise<AdminResult<void>> {
  const db = client();
  if (!db) return { ok: false, error: CONFIG_ERROR };
  const { error } = await db.from('student_progress').delete().eq('user_id', id);
  if (error) return { ok: false, error: error.message };
  return { ok: true, data: undefined };
}

/* ---------- CSV export (client-side blob of filtered profiles) ---------- */

interface CsvLike {
  fullName: string;
  grade: string;
  schoolName: string | null;
  createdAt: string;
  lastSeen: string | null;
  isAdmin: boolean;
  isBanned: boolean;
}

export function profilesToCsv(profiles: CsvLike[]): string {
  const esc = (v: string | null) => {
    const s = v ?? '';
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const header = 'name,grade,school,created_at,last_seen,is_admin,is_banned';
  const rows = profiles.map((p) =>
    [esc(p.fullName), p.grade, esc(p.schoolName), p.createdAt, p.lastSeen ?? '', p.isAdmin, p.isBanned].join(',')
  );
  return [header, ...rows].join('\n');
}

/* ============ DEV-ONLY demo fixtures (never shipped to prod) ============ */
/* Shaped exactly as the real query results so the admin layout can be
   screenshot with Supabase unconfigured. */

interface DemoProfile extends AdminProfile {
  _demoScores: number[];
  _demoStreak: number;
}

function demoProfiles(): DemoProfile[] | null {
  if (!isDevAdminBypass()) return null;
  const names = ['Abebe Kebede', 'Hanna Tesfaye', 'Dawit Assefa', 'Selam Girma', 'Yonas Haile', 'Meron Tadesse', 'Bruk Lemma'];
  return names.map((n, i) => ({
    id: `demo-${i + 1}`,
    fullName: n,
    grade: (['9', '10', '11', '12'] as const)[i % 4],
    schoolName: i % 3 === 0 ? 'Bole Secondary School' : i % 3 === 1 ? 'Lideta High School' : null,
    avatarUrl: null,
    createdAt: new Date(Date.now() - (i + 1) * 3 * 24 * 3600 * 1000).toISOString(),
    lastSeen: i === 5 ? null : new Date(Date.now() - i * 17 * 3600 * 1000).toISOString(),
    isAdmin: i === 0,
    isBanned: i === 4,
    _demoScores: Array.from({ length: 8 - (i % 6) }, (_, j) => 55 + ((i * 7 + j * 11) % 45)),
    _demoStreak: [0, 2, 5, 9, 16, 3][i % 6],
  }));
}

function demoProfilesPage(opts: { search?: string; filter?: 'all' | 'banned' | 'admins'; limit?: number; offset?: number } = {}): ProfilesPage {
  const demo = demoProfiles();
  if (!demo) return { profiles: [], total: 0 };
  const term = (opts.search ?? '').trim().toLowerCase();
  const offset = opts.offset ?? 0;
  const rows = demo
    .filter((p) => !term || p.fullName.toLowerCase().includes(term) || (p.schoolName ?? '').toLowerCase().includes(term))
    .filter((p) => (opts.filter === 'banned' ? p.isBanned : opts.filter === 'admins' ? p.isAdmin : true));
  return { profiles: rows.slice(offset, offset + (opts.limit ?? 25)).map(({ _demoScores: _s1, _demoStreak: _s2, ...rest }) => rest), total: rows.length };
}
