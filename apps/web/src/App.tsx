import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Sparkles,
  FileCheck2,
  Globe,
  GraduationCap,
  TrendingUp,
  Bookmark,
  NotebookPen,
  Settings as SettingsIcon,
  Menu,
  X,
  Moon,
  Sun,
  Flame,
  Dices,
  BookMarked,
  Trophy,
  User,
} from 'lucide-react';
import { useAppStore } from './store/useAppStore';
import { useAuthStore } from './store/useAuthStore';
import { initAutoSync } from './lib/syncEngine';
import { tr } from './lib/i18n';
import SearchBox from './components/SearchBox';
import Dashboard from './views/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import { BottomNav } from './components/BottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { AuthModal } from './components/AuthModal';
import { ErrorBoundary } from './components/ErrorBoundary';

const ParticleField = lazy(() => import('./components/ParticleField'));

/* Route-level code splitting: only Dashboard is eager. */
const Browse = lazy(() => import('./views/Browse'));
const TopicView = lazy(() => import('./views/TopicView'));
const Practice = lazy(() => import('./views/Practice'));
const Exam = lazy(() => import('./views/Exam'));
const International = lazy(() => import('./views/International'));
const National = lazy(() => import('./views/National'));
const Leaderboard = lazy(() => import('./views/Leaderboard'));
const Profile = lazy(() => import('./views/Profile'));
const Progress = lazy(() => import('./views/Progress'));
const Bookmarks = lazy(() => import('./views/Bookmarks'));
const Notes = lazy(() => import('./views/Notes'));
const Settings = lazy(() => import('./views/Settings'));
const NotFound = lazy(() => import('./views/NotFound'));

const NAV_GROUPS = [
  {
    label: 'Study',
    items: [
      { to: '/', key: 'dashboard', icon: LayoutDashboard, end: true },
      { to: '/browse', key: 'browse', icon: BookOpen },
      { to: '/practice', key: 'practice', icon: Sparkles },
    ],
  },
  {
    label: 'Exams',
    items: [
      { to: '/exam', key: 'exam', icon: FileCheck2 },
      { to: '/national', key: 'national', icon: GraduationCap },
      { to: '/international', key: 'international', icon: Globe },
    ],
  },
  {
    label: 'Track',
    items: [
      { to: '/leaderboard', key: 'leaderboard', icon: Trophy },
      { to: '/progress', key: 'progress', icon: TrendingUp },
    ],
  },
  {
    label: 'Me',
    items: [
      { to: '/profile', key: 'profile', icon: User },
      { to: '/bookmarks', key: 'bookmarks', icon: Bookmark },
      { to: '/notes', key: 'notes', icon: NotebookPen },
      { to: '/settings', key: 'settings', icon: SettingsIcon },
    ],
  },
];

export default function App() {
  const lang = useAppStore(s => s.settings.language);
  const theme = useAppStore(s => s.settings.theme);
  const motion = useAppStore(s => s.settings.motion ?? 'full');
  const setSetting = useAppStore(s => s.setSetting);
  const streak = useAppStore(s => s.streak);

  const user = useAuthStore(s => s.user);
  const initializeAuth = useAuthStore(s => s.initializeAuth);
  const openAuthModal = useAuthStore(s => s.openAuthModal);

  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  // Initialize auth & auto-sync on mount
  useEffect(() => {
    initializeAuth();
    initAutoSync();
  }, [initializeAuth]);

  useEffect(() => {
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.motion = motion;
  }, [lang, theme, motion]);

  // close drawer on popstate; Esc closes + restores focus; basic focus trap
  useEffect(() => {
    const onPop = () => setNavOpen(false);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setNavOpen(false); menuBtnRef.current?.focus(); }
      if (e.key === 'Tab' && sidebarRef.current) {
        const f = sidebarRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    sidebarRef.current?.querySelector<HTMLElement>('a[href], button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [navOpen]);

  return (
    <>
      <ScrollToTop />
      <AuthModal />
      <FormulaSheetModal open={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <a href="#view" className="skip-link">Skip to main content</a>
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <div id="app">
        <aside className={'sidebar' + (navOpen ? ' open' : '')} id="sidebar" ref={sidebarRef} aria-label="Main navigation" aria-modal={navOpen ? 'true' : undefined}>
          <button className="icon-btn sidebar-close" aria-label="Close menu" onClick={() => setNavOpen(false)}>
            <X size={18} />
          </button>
          <div className="sidebar-brand">
            <div className="brand-mark">🎓</div>
            <div className="brand-text">
              <div className="brand-name">Ethio<span>Study</span></div>
              <div className="brand-sub">Grade 9–12 · New Curriculum</div>
            </div>
          </div>

          <button className="btn btn-primary btn-big-pick" onClick={() => { setNavOpen(false); navigate('/practice'); }}>
            <Dices size={18} className="dice-icon" /> <span>{tr('pickTopic', lang)}</span>
          </button>

          <nav className="nav" onClick={() => setNavOpen(false)}>
            {NAV_GROUPS.map(group => (
              <div key={group.label} className="nav-group">
                <div className="nav-group-label">{group.label}</div>
                {group.items.map(n => {
                  const Icon = n.icon;
                  return (
                    <NavLink key={n.to} to={n.to} end={n.end}
                      className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
                      <Icon size={18} className="nav-ico" />
                      <span>{tr(n.key, lang)}</span>
                    </NavLink>
                  );
                })}
              </div>
            ))}
          </nav>

          <div className="sidebar-foot">
            <div className="streak-pill">
              <Flame size={15} className="streak-flame" />
              <span>{streak.current} day streak{streak.best > 1 ? ` · best ${streak.best}` : ''}</span>
            </div>
            <div className="sidebar-time">{new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          </div>
        </aside>
        {navOpen && <div className="nav-scrim" aria-hidden="true" onClick={() => setNavOpen(false)} />}

        <div className="main-wrap">
          <header className="topbar">
            <button className="icon-btn menu-toggle" aria-label="Open menu" aria-expanded={navOpen} aria-controls="sidebar"
              ref={menuBtnRef} onClick={() => setNavOpen(true)}>
              <Menu size={20} />
            </button>
            <SearchBox />
            <OfflineIndicator />
            <button
              className="icon-btn formula-btn"
              aria-label="Formulas and Key Concepts"
              title="Formulas & Equations"
              onClick={() => setFormulaOpen(true)}
            >
              <BookMarked size={18} />
            </button>
            <button className="icon-btn lang-pill" aria-label="Switch language" title={lang === 'en' ? 'Switch to Amharic' : 'Switch to English'}
              onClick={() => setSetting('language', lang === 'en' ? 'am' : 'en')}>
              {lang === 'en' ? 'EN' : 'አማ'}
            </button>
            <button className="icon-btn theme-toggle" aria-label="Toggle theme"
              onClick={() => setSetting('theme', theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Auth / Profile Pill in Topbar */}
            {user ? (
              <button
                className="topbar-user-pill"
                onClick={() => navigate('/profile')}
                title={`Signed in as ${user.fullName}`}
                aria-label="Student profile"
              >
                <span className="user-avatar-mini">
                  {user.fullName ? user.fullName.slice(0, 2).toUpperCase() : 'ST'}
                </span>
                <span className="user-name-short hide-sm">
                  {user.fullName.split(' ')[0]}
                </span>
              </button>
            ) : (
              <button
                className="btn btn-sm btn-primary topbar-signin-btn"
                onClick={() => openAuthModal('login')}
                title="Sign in or create account"
              >
                <User size={14} /> <span className="hide-sm">Sign In</span>
              </button>
            )}
          </header>

          <main className="view" id="view" tabIndex={-1}>
            <ErrorBoundary>
              <Suspense fallback={<div className="card" style={{ textAlign: 'center', padding: 48 }}><div className="orbit-star" style={{ position: 'static', display: 'inline-block' }}>✦</div><p className="muted mt-3">Loading view…</p></div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/topic/:tid" element={<TopicView />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/national" element={<National />} />
                <Route path="/international" element={<International />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
        </div>
      </div>
      <BottomNav onNavClick={() => setNavOpen(false)} />
    </>
  );
}
