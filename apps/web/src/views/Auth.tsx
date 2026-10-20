import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CloudUpload,
  Eye,
  EyeOff,
  Flame,
  GraduationCap,
  Lock,
  Mail,
  Trophy,
  User,
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { isSupabaseConfigured } from '../lib/supabase';

/* Auth - dedicated route-based experience at /auth, replacing the retired
   AuthModal. Kept on the same store actions (signInWithEmail / signUpWithEmail /
   signInWithGoogle); the tab and the post-sign-in destination are carried in
   the URL (?tab=login|signup|forgot, ?redirect=/path) instead of modal state.

   Offline mode: when Supabase env vars are missing the store creates a local
   demo user synchronously, so successful actions navigate away immediately,
   exactly like the modal did. */

const Scene3D = lazy(() => import('../components/Scene3D'));

type Tab = 'login' | 'signup' | 'forgot';
type FieldErrors = { email?: string; password?: string; confirm?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export default function Auth() {
  const signInWithEmail = useAuthStore((s) => s.signInWithEmail);
  const signUpWithEmail = useAuthStore((s) => s.signUpWithEmail);
  const signInWithGoogle = useAuthStore((s) => s.signInWithGoogle);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');

  const initialTab = (t: string | null): Tab =>
    t === 'signup' || t === 'forgot' ? (t as Tab) : 'login';

  const [tab, setTabState] = useState<Tab>(() => initialTab(searchParams.get('tab')));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [grade, setGrade] = useState<'9' | '10' | '11' | '12'>('10');
  const [schoolName, setSchoolName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // When a signed-in user appears - cached offline user at mount, a completed
  // email sign-in (store sets the user), or OAuth return - leave /auth.
  // StrictMode/child-effect ordering safe: reacts to store state, not mount.
  const user = useAuthStore((s) => s.user);
  const navigatedRef = useRef(false);
  useEffect(() => {
    if (!user || navigatedRef.current) return;
    navigatedRef.current = true;
    if (redirect) {
      navigate(redirect, { replace: true });
    } else {
      const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
      if (idx > 0) navigate(-1);
      else navigate('/', { replace: true });
    }
  }, [user, navigate, redirect]);

  const setTab = (t: Tab) => {
    setTabState(t);
    setErrorMsg(null);
    setSuccessMsg(null);
    setFieldErrors({});
    const next = new URLSearchParams(searchParams);
    next.set('tab', t);
    setSearchParams(next, { replace: true });
  };

  const validateEmailField = (errs: FieldErrors) => {
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!EMAIL_RE.test(email.trim())) errs.email = 'Enter a valid email address.';
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    const errs: FieldErrors = {};
    validateEmailField(errs);
    if (!password) errs.password = 'Password is required.';
    else if (password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (errs.email || errs.password) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setLoading(true);
    const res = await signInWithEmail(email.trim(), password);
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
    }
    // On success the store sets the user; the subscription effect navigates.
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    const errs: FieldErrors = {};
    validateEmailField(errs);
    if (!password) errs.password = 'Password is required.';
    else if (password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (!confirmPassword) errs.confirm = 'Please confirm your password.';
    else if (confirmPassword !== password) errs.confirm = 'Passwords do not match.';
    if (errs.email || errs.password || errs.confirm) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});
    setLoading(true);
    const res = await signUpWithEmail(email.trim(), password, fullName.trim(), grade, schoolName.trim() || undefined);
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
      return;
    }
    if (isSupabaseConfigured) {
      // No session yet until the user confirms via email - stay here.
      setSuccessMsg('Account created! Please check your email to confirm your account.');
    }
    // Offline demo accounts set the store user synchronously; the
    // subscription effect navigates home.
  };

  const handleGoogle = async () => {
    setErrorMsg(null);
    setFieldErrors({});
    setLoading(true);
    const res = await signInWithGoogle();
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
    }
    // Configured Supabase redirects the page to Google; offline demo users
    // are set synchronously and the subscription effect navigates.
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setFieldErrors({});
    setSuccessMsg('Reset link sent! Check your inbox.');
  };

  const eyeBtn = (show: boolean, toggle: () => void, label: string) => (
    <button
      type="button"
      className="auth-eye"
      aria-label={label}
      onClick={toggle}
      tabIndex={0}
    >
      {show ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>
  );

  return (
    <div className="auth-view">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="auth-card">
        <h1 className="auth-card-title">
          {tab === 'login' && 'Welcome back'}
          {tab === 'signup' && 'Create free account'}
          {tab === 'forgot' && 'Reset password'}
        </h1>
        <p className="auth-card-sub">
          {tab === 'login' && 'Sign in to sync your study progress and streaks.'}
          {tab === 'signup' && 'Join thousands of Ethiopian students studying smarter.'}
          {tab === 'forgot' && 'Enter your email to receive recovery instructions.'}
        </p>

        {tab !== 'forgot' && (
          <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'login'}
              className={`auth-opt ${tab === 'login' ? 'active' : ''}`}
              onClick={() => setTab('login')}
            >
              Sign In
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'signup'}
              className={`auth-opt ${tab === 'signup' ? 'active' : ''}`}
              onClick={() => setTab('signup')}
            >
              Create Account
            </button>
          </div>
        )}

        {errorMsg && (
          <div className="auth-alert error" role="alert">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="auth-alert success" role="status">
            <span>{successMsg}</span>
          </div>
        )}

        {tab !== 'forgot' && (
          <>
            <button type="button" className="btn google-auth-btn" onClick={handleGoogle} disabled={loading}>
              <GoogleIcon />
              Continue with Google
            </button>
            <div className="auth-divider">
              <span>OR WITH EMAIL</span>
            </div>
          </>
        )}

        {tab === 'login' && (
          <form onSubmit={handleSignIn} className="auth-form" noValidate>
            <div className="input-group">
              <label className="input-label" htmlFor="login-email">Email Address</label>
              <div className="input-field-wrap">
                <Mail size={16} className="input-icon" />
                <input
                  id="login-email"
                  type="email"
                  className={`auth-input ${fieldErrors.email ? 'invalid' : ''}`}
                  placeholder="student@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {fieldErrors.email && <p className="auth-field-error">{fieldErrors.email}</p>}
            </div>

            <div className="input-group">
              <div className="spread">
                <label className="input-label" htmlFor="login-pass">Password</label>
                <button type="button" className="tiny-link" onClick={() => setTab('forgot')}>
                  Forgot password?
                </button>
              </div>
              <div className="input-field-wrap">
                <Lock size={16} className="input-icon" />
                <input
                  id="login-pass"
                  type={showPassword ? 'text' : 'password'}
                  className={`auth-input auth-input-eye ${fieldErrors.password ? 'invalid' : ''}`}
                  placeholder="min. 6 characters"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {eyeBtn(showPassword, () => setShowPassword(!showPassword), showPassword ? 'Hide password' : 'Show password')}
              </div>
              {fieldErrors.password && <p className="auth-field-error">{fieldErrors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'} <ArrowRight size={16} />
            </button>

            <Link to="/" className="auth-back-link">
              <ArrowLeft size={13} /> Back to home
            </Link>
          </form>
        )}

        {tab === 'signup' && (
          <form onSubmit={handleSignUp} className="auth-form" noValidate>
            <div className="input-group">
              <label className="input-label" htmlFor="signup-name">Full Name</label>
              <div className="input-field-wrap">
                <User size={16} className="input-icon" />
                <input
                  id="signup-name"
                  type="text"
                  className="auth-input"
                  placeholder="Abebe Kebede"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="signup-email">Email Address</label>
              <div className="input-field-wrap">
                <Mail size={16} className="input-icon" />
                <input
                  id="signup-email"
                  type="email"
                  className={`auth-input ${fieldErrors.email ? 'invalid' : ''}`}
                  placeholder="student@example.com"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {fieldErrors.email && <p className="auth-field-error">{fieldErrors.email}</p>}
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="signup-pass">Password (min 6 characters)</label>
              <div className="input-field-wrap">
                <Lock size={16} className="input-icon" />
                <input
                  id="signup-pass"
                  type={showPassword ? 'text' : 'password'}
                  className={`auth-input auth-input-eye ${fieldErrors.password ? 'invalid' : ''}`}
                  placeholder="min. 6 characters"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {eyeBtn(showPassword, () => setShowPassword(!showPassword), showPassword ? 'Hide password' : 'Show password')}
              </div>
              {fieldErrors.password && <p className="auth-field-error">{fieldErrors.password}</p>}
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="signup-confirm">Confirm Password</label>
              <div className="input-field-wrap">
                <Lock size={16} className="input-icon" />
                <input
                  id="signup-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  className={`auth-input auth-input-eye ${fieldErrors.confirm ? 'invalid' : ''}`}
                  placeholder="repeat password"
                  required
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {eyeBtn(showConfirm, () => setShowConfirm(!showConfirm), showConfirm ? 'Hide password' : 'Show password')}
              </div>
              {fieldErrors.confirm && <p className="auth-field-error">{fieldErrors.confirm}</p>}
            </div>

            <div className="input-group">
              <label className="input-label">Grade</label>
              <div className="grade-selector-row">
                {(['9', '10', '11', '12'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`grade-pill ${grade === g ? 'active' : ''}`}
                    onClick={() => setGrade(g)}
                  >
                    <GraduationCap size={14} /> Grade {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="signup-school">School (Optional)</label>
              <div className="input-field-wrap">
                <Building2 size={16} className="input-icon" />
                <input
                  id="signup-school"
                  type="text"
                  className="auth-input"
                  placeholder="e.g. Bole Secondary School"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Free Account'} <ArrowRight size={16} />
            </button>

            <div className="auth-benefits">
              <span className="auth-benefit"><CloudUpload size={13} /> Synced progress</span>
              <span className="auth-benefit"><Flame size={13} /> Streaks</span>
              <span className="auth-benefit"><Trophy size={13} /> Leaderboard</span>
            </div>

            <Link to="/" className="auth-back-link">
              <ArrowLeft size={13} /> Back to home
            </Link>
          </form>
        )}

        {tab === 'forgot' && (
          <form onSubmit={handleForgot} className="auth-form">
            <div className="input-group">
              <label className="input-label" htmlFor="forgot-email">Your Account Email</label>
              <div className="input-field-wrap">
                <Mail size={16} className="input-icon" />
                <input
                  id="forgot-email"
                  type="email"
                  className="auth-input"
                  placeholder="student@example.com"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              Send Recovery Email <ArrowRight size={16} />
            </button>

            <button type="button" className="btn btn-ghost auth-submit-btn" onClick={() => setTab('login')}>
              Back to Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
