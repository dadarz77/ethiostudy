import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User, Mail, GraduationCap, Building2, Flame, Clock, Award,
  BookOpen, Bookmark, NotebookPen, CloudCheck, CloudOff,
  LogOut, Download, Save, ArrowRight
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useAppStore } from '../store/useAppStore';

export default function ProfileView() {
  const navigate = useNavigate();
  const { user, signOut, updateProfile, openAuthModal, syncStatus } = useAuthStore();
  const progress = useAppStore(s => s.progress);
  const streak = useAppStore(s => s.streak);
  const totalStudySec = useAppStore(s => s.totalStudySec);
  const bookmarks = useAppStore(s => s.bookmarks);
  const notes = useAppStore(s => s.notes);

  const [editName, setEditName] = useState(user?.fullName ?? '');
  const [editGrade, setEditGrade] = useState<'9' | '10' | '11' | '12'>(user?.grade ?? '10');
  const [editSchool, setEditSchool] = useState(user?.schoolName ?? '');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Compute study stats
  const totalNotes = Object.values(notes).reduce((acc, arr) => acc + arr.length, 0);
  const masteredTopicsCount = Object.values(progress).filter(p => (p.mastery ?? 0) >= 70).length;
  const totalQuizzes = Object.values(progress).reduce((acc, p) => acc + (p.attempts ?? 0), 0);

  const hours = Math.floor(totalStudySec / 3600);
  const minutes = Math.floor((totalStudySec % 3600) / 60);
  const studyTimeFormatted = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaveStatus('saving');
    const res = await updateProfile({
      fullName: editName,
      grade: editGrade,
      schoolName: editSchool || undefined,
    });
    if (res.error) {
      setSaveStatus('Error saving profile');
    } else {
      setSaveStatus('Profile updated successfully! ✓');
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const handleExportData = () => {
    const state = useAppStore.getState();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `ethiostudy_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dl.click();
  };

  return (
    <div className="profile-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Dashboard</Link> / <span>Student Profile</span>
      </div>

      {!user ? (
        <div className="card guest-profile-banner">
          <div className="guest-banner-icon">🎓</div>
          <h2>Studying as Guest</h2>
          <p className="muted" style={{ maxWidth: 520, margin: '8px auto 20px' }}>
            All your quiz scores and study times are saved on this device. Sign in or create a free account to back up your progress to the cloud and sync across your phone and laptop!
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => openAuthModal('signup')}>
            Sign In or Create Account <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <>
          {/* User Header Card */}
          <div className="card profile-header-card">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.fullName} />
                ) : (
                  <span>{user.fullName.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <span className="profile-grade-tag">Grade {user.grade}</span>
            </div>

            <div className="profile-details">
              <h1 className="profile-name">{user.fullName}</h1>
              <div className="profile-meta-row">
                <span className="profile-meta-item"><Mail size={14} /> {user.email}</span>
                {user.schoolName && (
                  <span className="profile-meta-item"><Building2 size={14} /> {user.schoolName}</span>
                )}
              </div>
              <div className="profile-sync-pill">
                {syncStatus === 'synced' ? (
                  <span className="sync-badge synced"><CloudCheck size={14} /> Synced with Cloud</span>
                ) : syncStatus === 'syncing' ? (
                  <span className="sync-badge syncing">Syncing…</span>
                ) : (
                  <span className="sync-badge offline"><CloudOff size={14} /> Local Cache Mode</span>
                )}
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn btn-danger btn-sm" onClick={signOut}>
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="profile-stats-grid mt-4">
            <div className="card stat-card">
              <div className="stat-icon-wrap amber"><Flame size={22} /></div>
              <div className="stat-num">{streak.current} <span className="stat-unit">days</span></div>
              <div className="stat-label">Current Streak (Best: {streak.best})</div>
            </div>

            <div className="card stat-card">
              <div className="stat-icon-wrap blue"><Clock size={22} /></div>
              <div className="stat-num">{studyTimeFormatted}</div>
              <div className="stat-label">Total Time Studied</div>
            </div>

            <div className="card stat-card">
              <div className="stat-icon-wrap green"><Award size={22} /></div>
              <div className="stat-num">{masteredTopicsCount}</div>
              <div className="stat-label">Topics Mastered (≥70%)</div>
            </div>

            <div className="card stat-card">
              <div className="stat-icon-wrap purple"><BookOpen size={22} /></div>
              <div className="stat-num">{totalQuizzes}</div>
              <div className="stat-label">Quizzes Completed</div>
            </div>
          </div>

          {/* Edit Profile Form */}
          <div className="card mt-4">
            <h3>✏️ Edit Profile</h3>
            <form onSubmit={handleSave} className="profile-form mt-3">
              <div className="profile-form-grid">
                <div className="input-group">
                  <label className="input-label" htmlFor="edit-name">Full Name</label>
                  <div className="input-field-wrap">
                    <User size={16} className="input-icon" />
                    <input
                      id="edit-name"
                      type="text"
                      className="auth-input"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Grade</label>
                  <div className="grade-selector-row">
                    {(['9', '10', '11', '12'] as const).map(g => (
                      <button
                        key={g}
                        type="button"
                        className={`grade-pill ${editGrade === g ? 'active' : ''}`}
                        onClick={() => setEditGrade(g)}
                      >
                        <GraduationCap size={14} /> Grade {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="input-label" htmlFor="edit-school">School (Optional)</label>
                  <div className="input-field-wrap">
                    <Building2 size={16} className="input-icon" />
                    <input
                      id="edit-school"
                      type="text"
                      className="auth-input"
                      placeholder="e.g. Bole Secondary School"
                      value={editSchool}
                      onChange={e => setEditSchool(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3" style={{ alignItems: 'center', gap: 12 }}>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} /> Save Changes
                </button>
                {saveStatus && <span className="tiny" style={{ color: 'var(--green)', fontWeight: 700 }}>{saveStatus}</span>}
              </div>
            </form>
          </div>
        </>
      )}

      {/* Local Data & Backup Card (Available to both Guest and Logged In) */}
      <div className="card mt-4">
        <h3>💾 Study Data & Backup</h3>
        <p className="tiny muted">
          Export your notes, bookmarks, and quiz history as a JSON file or restore anytime.
        </p>

        <div className="row mt-3" style={{ gap: 12, flexWrap: 'wrap' }}>
          <div className="data-badge">
            <Bookmark size={14} /> {bookmarks.length} Bookmarks
          </div>
          <div className="data-badge">
            <NotebookPen size={14} /> {totalNotes} Notes
          </div>
        </div>

        <div className="row mt-4" style={{ gap: 12 }}>
          <button className="btn" onClick={handleExportData}>
            <Download size={16} /> Export Study Data (JSON)
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('/settings')}>
            ⚙️ App Settings
          </button>
        </div>
      </div>
    </div>
  );
}
