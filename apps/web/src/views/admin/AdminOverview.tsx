import { useEffect, useState } from 'react';
import { CalendarClock, Users, FileCheck2, Target } from 'lucide-react';
import {
  fetchAdminStats,
  fetchProfiles,
  type AdminProfile,
  type AdminResult,
  type AdminStats,
} from '../../lib/admin';

/* Overview: four stat tiles + recent signups list. Handles not-configured
   (ok:false) by showing zeros + a quiet error line, never throwing. */

function fmt(n: number | null): string {
  return n === null ? '--' : n.toLocaleString('en-US');
}

export default function AdminOverview() {
  const [stats, setStats] = useState<AdminResult<AdminStats> | null>(null);
  const [signups, setSignups] = useState<AdminProfile[]>([]);

  useEffect(() => {
    let alive = true;
    fetchAdminStats().then((r) => { if (alive) setStats(r); });
    fetchProfiles({ limit: 5 }).then((r) => { if (alive && r.ok) setSignups(r.data.profiles); else if (alive) setSignups([]); });
    return () => { alive = false; };
  }, []);

  const s = stats?.ok ? stats.data : null;
  const tiles: { label: string; icon: typeof Users; value: number | null }[] = [
    { label: 'Total users', icon: Users, value: s ? s.totalUsers : null },
    { label: 'Active today', icon: CalendarClock, value: s ? s.activeToday : null },
    { label: 'Quizzes completed', icon: FileCheck2, value: s ? s.quizzesCompleted : null },
    { label: 'Average score', icon: Target, value: s ? s.avgScore : null },
  ];

  return (
    <section>
      <div className="adm-stat-grid">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.label} className="card stat-tile">
              <span className="icon-tile"><Icon size={22} /></span>
              <span className="stat-tile-num">{fmt(t.value)}</span>
              <span className="stat-tile-label">{t.label}</span>
            </div>
          );
        })}
      </div>

      {stats && !stats.ok && (
        <p className="tiny adm-error-line">
          Live stats unavailable ({stats.error.replace(/-/g, ' ')}) {s ? '' : '- showing zeros.'}
        </p>
      )}

      <h2 className="section-title mt-5">Recent signups</h2>
      <div className="card adm-recent-card">
        {signups.length === 0 ? (
          <p className="muted" style={{ padding: '18px 16px', margin: 0 }}>
            {stats && !stats.ok ? 'Signups unavailable without Supabase configuration.' : 'No signups yet.'}
          </p>
        ) : (
          <ul className="adm-recent-list">
            {signups.map((p) => (
              <li key={p.id} className="adm-recent-row">
                <span className="adm-avatar">{(p.fullName || 'S').slice(0, 2).toUpperCase()}</span>
                <span className="adm-recent-name">{p.fullName}</span>
                <span className="adm-chip">Grade {p.grade}</span>
                <span className="adm-recent-date">{p.createdAt ? p.createdAt.slice(0, 10) : ''}</span>
                {p.isAdmin && <span className="adm-chip adm-chip-admin">admin</span>}
                {p.isBanned && <span className="adm-chip adm-chip-banned">banned</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
