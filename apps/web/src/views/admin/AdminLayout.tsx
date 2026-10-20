import type { ReactNode } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  ShieldAlert,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { isAdmin, isDevAdminBypass, type AdminTab } from '../../lib/admin';
import { isSupabaseConfigured } from '../../lib/supabase';

/* AdminLayout — classic console chrome (spec layout A): own left sidebar with
   the console tabs, an ADMIN badge, and a top strip with the "Back to app"
   link. The layout owns the access guard:

   - Supabase not configured (and no dev bypass): a clean notice card.
   - session still loading: quiet placeholder (avoids bouncing admins on refresh).
   - signed out / non-admin: redirected to /auth (returning via ?redirect=/admin). */

const TABS: { id: AdminTab; label: string; icon: typeof Users }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'engagement', label: 'Engagement', icon: BarChart3 },
  { id: 'content', label: 'Content', icon: BookOpen },
];

const TAB_TITLES: Record<AdminTab, string> = {
  overview: 'Overview',
  users: 'User Management',
  engagement: 'Engagement',
  content: 'Content QA',
};

export function AdminNoticeCard() {
  return (
    <div className="admin-shell">
      <div className="admin-notice-wrap">
        <div className="card admin-notice">
          <span className="icon-tile admin-notice-ico"><ShieldAlert size={24} /></span>
          <h1>Admin panel requires Supabase configuration</h1>
          <p>
            Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to a
            configured project, then grant admin from SQL:
            <br />
            <code>update profiles set is_admin = true where id = '&lt;uuid&gt;';</code>
          </p>
          <Link to="/" className="btn btn-primary mt-3 admin-notice-back">
            Back to app
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AdminLayout({ active, onSelect, children }: {
  active: AdminTab;
  onSelect: (tab: AdminTab) => void;
  children: ReactNode;
}) {
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);
  const devBypass = isDevAdminBypass();

  // 1. Not configured -> notice card (dev bypass skips it for screenshots/tests).
  if (!isSupabaseConfigured && !devBypass) return <AdminNoticeCard />;

  // 2. Dev bypass: render the console against demo data, skip the real guard.
  if (devBypass) return <ConsoleShell active={active} onSelect={onSelect}>{children}</ConsoleShell>;

  // 3. Session loading -> quiet placeholder so admins are not bounced on refresh.
  if (loading) {
    return (
      <div className="admin-shell">
        <div className="admin-notice-wrap">
          <div className="card admin-notice">
            <p className="muted" style={{ margin: 0 }}>Loading admin console...</p>
          </div>
        </div>
      </div>
    );
  }

  // 4. Unauthenticated or non-admin -> /auth (banned users are already signed out).
  if (!user || !isAdmin(user)) return <Navigate to="/auth?redirect=/admin" replace />;

  return <ConsoleShell active={active} onSelect={onSelect}>{children}</ConsoleShell>;
}

function ConsoleShell({ active, onSelect, children }: {
  active: AdminTab;
  onSelect: (tab: AdminTab) => void;
  children: ReactNode;
}) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <div className="admin-brand">
          <div className="admin-brand-mark"><GraduationCap size={20} strokeWidth={2.2} /></div>
          <div>
            <div className="admin-brand-name">EthioStudy</div>
            <div className="admin-brand-sub">Admin Console</div>
          </div>
        </div>

        <span className="admin-badge"><ShieldCheck size={12} /> Admin</span>

        <nav className="admin-nav">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                className={'admin-nav-item' + (active === t.id ? ' active' : '')}
                aria-current={active === t.id ? 'page' : undefined}
                onClick={() => onSelect(t.id)}
              >
                <Icon size={17} /> <span>{t.label}</span>
              </button>
            );
          })}
        </nav>

        <Link to="/" className="admin-back admin-back-sidebar">
          <ShieldAlert size={13} /> Back to app
        </Link>
      </aside>

      <div className="admin-content">
        <div className="admin-topbar">
          <h1 className="admin-title"><Activity size={20} className="admin-title-ico" /> {TAB_TITLES[active]}</h1>
          <Link to="/" className="admin-back">
            Back to app
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
