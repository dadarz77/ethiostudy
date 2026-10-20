import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import type { ReactNode } from 'react';
import { AdminLayout } from './AdminLayout';
import { useAuthStore } from '../../store/useAuthStore';
import type { UserProfile } from '../../types/auth';

/* The guard depends on whether Supabase is configured; keep it switchable. */
const cfg = vi.hoisted(() => ({ configured: false }));
vi.mock('../../lib/supabase', () => ({
  get isSupabaseConfigured() { return cfg.configured; },
  supabase: null,
}));

function User(overrides: Partial<UserProfile>): UserProfile {
  return {
    id: 'u1', email: 'student@example.com', fullName: 'Test Student',
    grade: '10', createdAt: new Date().toISOString(),
    ...overrides,
  };
}

function renderAdmin(children: ReactNode = <div>console content</div>) {
  return render(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLayout active="overview" onSelect={() => {}}>
              {children}
            </AdminLayout>
          }
        />
        <Route path="/auth" element={<div>auth route</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  localStorage.clear();
  cfg.configured = false;
  useAuthStore.setState({ user: null, loading: false, accountBanned: false });
});
afterEach(cleanup);

describe('/admin guard', () => {
  it('shows the setup notice when Supabase is not configured', () => {
    renderAdmin();
    expect(screen.getByRole('heading', { name: /requires supabase configuration/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /back to app/i }).getAttribute('href')).toBe('/');
    expect(screen.queryByText('console content')).toBeNull();
  });

  it('shows a quiet placeholder while the session loads', () => {
    cfg.configured = true;
    useAuthStore.setState({ user: null, loading: true });
    renderAdmin();
    expect(screen.getByText(/loading admin console/i)).toBeTruthy();
  });

  it('redirects signed-out visitors to /auth', () => {
    cfg.configured = true;
    useAuthStore.setState({ user: null, loading: false });
    renderAdmin();
    expect(screen.getByText('auth route')).toBeTruthy();
  });

  it('redirects non-admin users to /auth', () => {
    cfg.configured = true;
    useAuthStore.setState({ user: User({ isAdmin: false }), loading: false });
    renderAdmin();
    expect(screen.getByText('auth route')).toBeTruthy();
  });

  it('renders the console for an admin', () => {
    cfg.configured = true;
    useAuthStore.setState({ user: User({ isAdmin: true }), loading: false });
    renderAdmin();
    expect(screen.getByText('Admin')).toBeTruthy();
    expect(screen.getByRole('button', { name: /overview/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /users/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /engagement/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /content/i })).toBeTruthy();
    expect(screen.getByText('console content')).toBeTruthy();
  });
});
