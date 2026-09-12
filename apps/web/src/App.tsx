import { useEffect, useRef, useState, Suspense } from 'react';
import { NavLink, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from './store/useAppStore';
import { tr } from './lib/i18n';
import ParticleField from './components/ParticleField';
import SearchBox from './components/SearchBox';
import Dashboard from './views/Dashboard';
import { lazy } from 'react';

/* Route-level code splitting: only Dashboard (with the Three.js hero) is eager. */
const Browse = lazy(() => import('./views/Browse'));
const TopicView = lazy(() => import('./views/TopicView'));
const Practice = lazy(() => import('./views/Practice'));
const Exam = lazy(() => import('./views/Exam'));
const International = lazy(() => import('./views/International'));
const National = lazy(() => import('./views/National'));
const Progress = lazy(() => import('./views/Progress'));
const Bookmarks = lazy(() => import('./views/Bookmarks'));
const Notes = lazy(() => import('./views/Notes'));
const Settings = lazy(() => import('./views/Settings'));

const NAV = [
  { to: '/', key: 'dashboard', ico: '🏠', end: true },
  { to: '/browse', key: 'browse', ico: '📚' },
  { to: '/practice', key: 'practice', ico: '🧠' },
  { to: '/exam', key: 'exam', ico: '📝' },
  { to: '/international', key: 'international', ico: '🌍' },
  { to: '/national', key: 'national', ico: '🇪🇹' },
  { to: '/progress', key: 'progress', ico: '📈' },
  { to: '/bookmarks', key: 'bookmarks', ico: '🔖' },
  { to: '/notes', key: 'notes', ico: '📒' },
  { to: '/settings', key: 'settings', ico: '⚙️' },
];

export default function App() {
  const lang = useAppStore(s => s.settings.language);
  const theme = useAppStore(s => s.settings.theme);
  const setSetting = useAppStore(s => s.setSetting);
  const streak = useAppStore(s => s.streak);
  const navigate = useNavigate();
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
    document.documentElement.dataset.theme = theme;
  }, [lang, theme]);

  // close drawer on route change; Esc closes + restores focus; basic focus trap
  useEffect(() => { setNavOpen(false); }, [location.pathname]);
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
      <ParticleField />
      <div id="app">
        <aside className={'sidebar' + (navOpen ? ' open' : '')} id="sidebar" ref={sidebarRef} aria-label="Main navigation">
          <button className="icon-btn sidebar-close" aria-label="Close menu" onClick={() => setNavOpen(false)}>✕</button>
          <div className="sidebar-brand">
            <div className="brand-mark">🎓</div>
            <div className="brand-text">
              <div className="brand-name">Ethio<span>Study</span></div>
              <div className="brand-sub">Grade 9–12 · New Curriculum</div>
            </div>
          </div>

          <button className="btn btn-primary btn-big-pick" onClick={() => navigate('/practice')}>
            <span className="dice">🎲</span> <span>{tr('pickTopic', lang)}</span>
          </button>

          <nav className="nav">
            {NAV.map(n => (
              <NavLink key={n.to} to={n.to} end={n.end}
                className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
                <span className="nav-ico">{n.ico}</span><span>{tr(n.key, lang)}</span>
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-foot">
            <div className="streak-pill">🔥 {streak.current} day streak{streak.best > 1 ? ` · best ${streak.best}` : ''}</div>
            <div className="sidebar-time">{new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          </div>
        </aside>
        {navOpen && <div className="nav-scrim" aria-hidden="true" onClick={() => setNavOpen(false)} />}

        <div className="main-wrap">
          <header className="topbar">
            <button className="icon-btn menu-toggle" aria-label="Open menu" aria-expanded={navOpen} aria-controls="sidebar"
              ref={menuBtnRef} onClick={() => setNavOpen(true)}>☰</button>
            <SearchBox />
            <button className="icon-btn theme-toggle" aria-label="Toggle theme"
              onClick={() => setSetting('theme', theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </header>
          <main className="view" id="view">
            <Suspense fallback={<div className="card" style={{ textAlign: 'center', padding: 48 }}>✦ loading…</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/topic/:tid" element={<TopicView />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/international" element={<International />} />
              <Route path="/national" element={<National />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}
