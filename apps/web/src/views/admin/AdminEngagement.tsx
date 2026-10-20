import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import {
  fetchEngagement,
  type AdminResult,
  type EngagementData,
} from '../../lib/admin';

/* Engagement: 14-day quiz activity drawn as a plain SVG bar chart (no chart
   lib) + a small streak-distribution strip. Colors/fonts come from tokens so
   both themes render correctly: bars var(--accent), grid var(--border),
   labels var(--fg-2) at 11px. */

const W = 760;
const H = 260;
const PAD = { l: 42, r: 10, t: 20, b: 34 };

function dayLabel(date: string): string {
  const [, m, d] = date.split('-');
  return `${Number(m)}/${Number(d)}`;
}

export default function AdminEngagement() {
  const [data, setData] = useState<AdminResult<EngagementData> | null>(null);

  useEffect(() => {
    let alive = true;
    fetchEngagement().then((r) => { if (alive) setData(r); });
    return () => { alive = false; };
  }, []);

  if (!data) {
    return <div className="card admin-chart-card"><p className="muted" style={{ margin: 0 }}>Loading engagement...</p></div>;
  }

  if (!data.ok) {
    return (
      <div className="card admin-chart-card">
        <p className="muted" style={{ margin: 0 }}>
          Engagement data unavailable ({data.error.replace(/-/g, ' ')}) — connect a configured Supabase project.
        </p>
      </div>
    );
  }

  const { days, streaks, avgScore } = data.data;
  const max = Math.max(1, ...days.map((d) => d.attempts));
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const slot = innerW / days.length;
  const barW = Math.max(10, slot * 0.58);
  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  return (
    <section>
      <div className="card admin-chart-card">
        <div className="spread">
          <h2 className="admin-chart-title">Quiz activity - last 14 days</h2>
          <span className="tiny">avg score {avgScore === null ? '--' : avgScore + '%'}</span>
        </div>
        <svg
          className="adm-chart"
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Bar chart of quiz attempts per day over the last 14 days, peak ${max}`}
          style={{ width: '100%', height: 'auto', display: 'block', marginTop: 10 }}
        >
          {gridLines.map((g) => {
            const y = PAD.t + innerH * g;
            const value = Math.round(max * (1 - g));
            return (
              <g key={g}>
                <line x1={PAD.l} x2={W - PAD.r} y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />
                <text x={PAD.l - 8} y={y + 4} textAnchor="end" fontSize="11" fill="var(--fg-2)">{value}</text>
              </g>
            );
          })}
          {days.map((d, i) => {
            const h = max > 0 ? (d.attempts / max) * innerH : 0;
            const x = PAD.l + slot * i + (slot - barW) / 2;
            const y = PAD.t + innerH - h;
            return (
              <g key={d.date}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(h, d.attempts > 0 ? 2 : 0)}
                  rx="4"
                  fill="var(--accent)"
                  opacity={0.9}
                >
                  <title>{`${d.date}: ${d.attempts} quizzes, ${d.activeUsers} active`}</title>
                </rect>
                <text x={x + barW / 2} y={H - PAD.b + 16} textAnchor="middle" fontSize="11" fill="var(--fg-2)">
                  {dayLabel(d.date)}
                </text>
              </g>
            );
          })}
          <line x1={PAD.l} x2={W - PAD.r} y1={PAD.t + innerH} y2={PAD.t + innerH} stroke="var(--border-strong)" strokeWidth="1" />
        </svg>
      </div>

      <div className="card adm-streak-card mt-4">
        <div className="spread">
          <h3 className="admin-chart-title" style={{ margin: 0 }}><Flame size={16} className="admin-flame" /> Streak distribution</h3>
          <span className="tiny">how many students hold each streak band</span>
        </div>
        <div className="adm-streak-row mt-3">
          {streaks.map((s) => {
            const maxUsers = Math.max(1, ...streaks.map((x) => x.users));
            return (
              <div key={s.label} className="adm-streak-band">
                <span className="adm-streak-label">{s.label === '0' ? 'none' : `${s.label} days`}</span>
                <span className="adm-streak-bar" aria-hidden="true">
                  <i style={{ width: `${(s.users / maxUsers) * 100}%` }} />
                </span>
                <span className="adm-streak-count">{s.users}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
