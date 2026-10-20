import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  isAdmin,
  isDevAdminBypass,
  profilesToCsv,
  fetchAdminStats,
  fetchEngagement,
  fetchProfiles,
  fetchUserProgress,
  resetUserProgress,
  setUserBanned,
  CONFIG_ERROR,
  DEV_ADMIN_BYPASS_KEY,
  type AdminProfile,
} from './admin';

describe('admin lib — isAdmin', () => {
  it('is false for null, undefined, and users without the flag', () => {
    expect(isAdmin(null)).toBe(false);
    expect(isAdmin(undefined)).toBe(false);
    expect(isAdmin({ id: 'u1', email: 'a@b.c', fullName: 'A', grade: '10', createdAt: '' })).toBe(false);
  });

  it('is true only when isAdmin === true', () => {
    expect(isAdmin({ id: 'u1', email: 'a@b.c', fullName: 'A', grade: '10', createdAt: '', isAdmin: true })).toBe(true);
    expect(isAdmin({ id: 'u1', email: 'a@b.c', fullName: 'A', grade: '10', createdAt: '', isAdmin: false })).toBe(false);
  });
});

describe('admin lib — dev bypass flag', () => {
  beforeEach(() => localStorage.removeItem(DEV_ADMIN_BYPASS_KEY));
  afterEach(() => localStorage.removeItem(DEV_ADMIN_BYPASS_KEY));

  it('off by default', () => {
    expect(isDevAdminBypass()).toBe(false);
  });

  it('on only when the localStorage key is exactly "1"', () => {
    localStorage.setItem(DEV_ADMIN_BYPASS_KEY, '1');
    expect(isDevAdminBypass()).toBe(true);
    localStorage.setItem(DEV_ADMIN_BYPASS_KEY, '0');
    expect(isDevAdminBypass()).toBe(false);
  });
});

describe('admin lib — config guard (Supabase unconfigured in tests)', () => {
  it('every query/mutation returns a typed CONFIG_ERROR instead of throwing', async () => {
    // No dev bypass active -> no demo path -> guard applies.
    expect((await fetchAdminStats()).error).toBe(CONFIG_ERROR);
    expect((await fetchEngagement()).error).toBe(CONFIG_ERROR);
    expect((await fetchProfiles()).error).toBe(CONFIG_ERROR);
    expect((await fetchUserProgress('x')).error).toBe(CONFIG_ERROR);
    expect((await setUserBanned('x', true)).error).toBe(CONFIG_ERROR);
    expect((await resetUserProgress('x')).error).toBe(CONFIG_ERROR);
  });

  it('with the dev bypass on, demo data short-circuits the guard', async () => {
    localStorage.setItem(DEV_ADMIN_BYPASS_KEY, '1');
    const stats = await fetchAdminStats();
    expect(stats.ok).toBe(true);
    if (stats.ok) expect(stats.data.totalUsers).toBeGreaterThan(0);

    const eng = await fetchEngagement();
    expect(eng.ok).toBe(true);
    if (eng.ok) expect(eng.data.days.length).toBe(14);

    const page = await fetchProfiles({ filter: 'banned' });
    expect(page.ok).toBe(true);
    if (page.ok) expect(page.data.profiles.every((p) => p.isBanned)).toBe(true);
  });
});

describe('admin lib — profilesToCsv', () => {
  it('writes a header row plus one row per profile', () => {
    const p: AdminProfile = {
      id: '1', fullName: 'Plain Name', grade: '10', schoolName: 'Bole',
      avatarUrl: null, createdAt: '2026-01-01', lastSeen: null,
      isAdmin: false, isBanned: false,
    };
    const csv = profilesToCsv([p]);
    expect(csv).toContain('name,grade,school,created_at,last_seen,is_admin,is_banned');
    expect(csv).toContain('Plain Name,10,Bole,');
  });

  it('escapes commas and quotes in names/schools', () => {
    const csv = profilesToCsv([{
      id: '1', fullName: 'Bekele, Jr.', grade: '9', schoolName: 'The "Best" School',
      avatarUrl: null, createdAt: '2026-01-01', lastSeen: null,
      isAdmin: true, isBanned: false,
    }]);
    expect(csv).toContain('"Bekele, Jr."');
    expect(csv).toContain('"The ""Best"" School"');
  });
});
