import { useState, useEffect } from 'react';
import { X, Mail, Lock, User, GraduationCap, Building2, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { isSupabaseConfigured } from '../lib/supabase';

export function AuthModal() {
  const { authModalOpen, authModalTab, closeAuthModal, openAuthModal, signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [grade, setGrade] = useState<'9' | '10' | '11' | '12'>('10');
  const [schoolName, setSchoolName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && authModalOpen) closeAuthModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [authModalOpen, closeAuthModal]);

  if (!authModalOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    const res = await signInWithEmail(email, password);
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    setLoading(true);
    const res = await signUpWithEmail(email, password, fullName, grade, schoolName);
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
    } else if (isSupabaseConfigured) {
      setSuccessMsg('Account created! Please check your email to confirm your account.');
    }
  };

  const handleGoogle = async () => {
    setErrorMsg(null);
    setLoading(true);
    const res = await signInWithGoogle();
    setLoading(false);
    if (res.error) {
      setErrorMsg(res.error);
    }
  };

  return (
    <div className="modal-backdrop" onClick={closeAuthModal} role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <div className="auth-modal card" onClick={(e) => e.stopPropagation()}>
        <div className="spread auth-modal-header">
          <div>
            <h2 id="auth-modal-title" className="auth-title">
              {authModalTab === 'login' && 'Welcome Back 🇪🇹'}
              {authModalTab === 'signup' && 'Create Free Account 🚀'}
              {authModalTab === 'forgot' && 'Reset Password 🔑'}
            </h2>
            <p className="tiny muted" style={{ marginTop: 2 }}>
              {authModalTab === 'login' && 'Sign in to sync your study progress and streaks.'}
              {authModalTab === 'signup' && 'Join thousands of Ethiopian students studying smarter.'}
              {authModalTab === 'forgot' && 'Enter your email to receive recovery instructions.'}
            </p>
          </div>
          <button className="icon-btn" onClick={closeAuthModal} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Auth mode selector tabs */}
        {authModalTab !== 'forgot' && (
          <div className="auth-tab-switch">
            <button
              className={`auth-tab-btn ${authModalTab === 'login' ? 'active' : ''}`}
              onClick={() => { openAuthModal('login'); setErrorMsg(null); }}
            >
              Sign In
            </button>
            <button
              className={`auth-tab-btn ${authModalTab === 'signup' ? 'active' : ''}`}
              onClick={() => { openAuthModal('signup'); setErrorMsg(null); }}
            >
              Create Account
            </button>
          </div>
        )}

        {errorMsg && (
          <div className="auth-alert error">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="auth-alert success">
            <span>{successMsg}</span>
          </div>
        )}

        {/* Google OAuth button */}
        {authModalTab !== 'forgot' && (
          <>
            <button className="btn google-auth-btn" onClick={handleGoogle} disabled={loading}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continue with Google
            </button>
            <div className="auth-divider">
              <span>or with email</span>
            </div>
          </>
        )}

        {/* Sign In Form */}
        {authModalTab === 'login' && (
          <form onSubmit={handleSignIn} className="auth-form">
            <div className="input-group">
              <label className="input-label" htmlFor="login-email">Email Address</label>
              <div className="input-field-wrap">
                <Mail size={16} className="input-icon" />
                <input
                  id="login-email"
                  type="email"
                  className="auth-input"
                  placeholder="student@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="spread">
                <label className="input-label" htmlFor="login-pass">Password</label>
                <button
                  type="button"
                  className="tiny-link"
                  onClick={() => openAuthModal('forgot')}
                >
                  Forgot password?
                </button>
              </div>
              <div className="input-field-wrap">
                <Lock size={16} className="input-icon" />
                <input
                  id="login-pass"
                  type="password"
                  className="auth-input"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'} <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {authModalTab === 'signup' && (
          <form onSubmit={handleSignUp} className="auth-form">
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
                  className="auth-input"
                  placeholder="student@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="signup-pass">Password (min 6 characters)</label>
              <div className="input-field-wrap">
                <Lock size={16} className="input-icon" />
                <input
                  id="signup-pass"
                  type="password"
                  className="auth-input"
                  placeholder="••••••••"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
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
              {loading ? 'Creating Account…' : 'Create Free Account'} <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Forgot Password Form */}
        {authModalTab === 'forgot' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSuccessMsg('Reset link sent! Please check your inbox.');
            }}
            className="auth-form"
          >
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              Send Recovery Email
            </button>

            <button
              type="button"
              className="btn btn-ghost auth-submit-btn"
              onClick={() => openAuthModal('login')}
            >
              Back to Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
