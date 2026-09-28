import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Flame, Award, GraduationCap, Building2, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useAppStore } from '../store/useAppStore';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { LeaderboardEntry } from '../types/auth';


export default function LeaderboardView() {
  const { user } = useAuthStore();
  const localStreak = useAppStore(s => s.streak);
  const localProgress = useAppStore(s => s.progress);
  const localStudySec = useAppStore(s => s.totalStudySec);

  const [gradeFilter, setGradeFilter] = useState<'all' | '9' | '10' | '11' | '12'>('all');
  const [metric, setMetric] = useState<'streak' | 'mastery'>('streak');
  const [boardData, setBoardData] = useState<LeaderboardEntry[]>([]);
  const [boardLoading, setBoardLoading] = useState(isSupabaseConfigured);

  // Compute student's own stats
  const studentMastered = useMemo(
    () => Object.values(localProgress).filter(p => (p.mastery ?? 0) >= 70).length,
    [localProgress]
  );

  useEffect(() => {
    let alive = true;
    if (isSupabaseConfigured && supabase) {
      supabase
        .from('leaderboard_view')
        .select('*')
        .limit(50)
        .then(({ data, error }) => {
          if (!alive) return;
          if (!error && data && data.length > 0) {
            setBoardData(data as LeaderboardEntry[]);
          }
          setBoardLoading(false);
        });
    }
    return () => { alive = false; };
  }, []);

  const streakCurrent = localStreak.current;

  // Filter & sort leaderboard
  const sortedList = useMemo(() => {
    // Inject current user into preview data if not present
    const list = [...boardData];
    const currentUserName = user?.fullName ?? 'You (Guest)';
    const currentGrade = user?.grade ?? '10';

    const existingIdx = list.findIndex(e => e.userId === (user?.id ?? 'current-user'));
    const userEntry: LeaderboardEntry = {
      userId: user?.id ?? 'current-user',
      name: currentUserName,
      grade: currentGrade,
      schoolName: user?.schoolName,
      streak: streakCurrent,
      masteredCount: studentMastered,
      totalStudySec: localStudySec,
    };

    if (existingIdx >= 0) {
      list[existingIdx] = userEntry;
    } else {
      list.push(userEntry);
    }

    // Filter by grade if selected
    const filtered = gradeFilter === 'all' ? list : list.filter(e => e.grade === gradeFilter);

    // Sort by metric
    filtered.sort((a, b) => {
      if (metric === 'streak') return b.streak - a.streak;
      return b.masteredCount - a.masteredCount;
    });

    return filtered.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }, [boardData, gradeFilter, metric, user, streakCurrent, studentMastered, localStudySec]);

  const top3 = sortedList.slice(0, 3);
  const remaining = sortedList.slice(3);
  const myRankEntry = sortedList.find(e => e.userId === (user?.id ?? 'current-user'));

  const hasRealData = boardData.length > 0;

  return (
    <div className="leaderboard-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Dashboard</Link> / <span>Leaderboard</span>
      </div>

      {/* Header Banner */}
      <div className="card leaderboard-banner">
        <div className="spread" style={{ alignItems: 'center' }}>
          <div>
            <h1 className="leaderboard-title">🏆 National Leaderboard</h1>
            <p className="muted" style={{ margin: '4px 0 0' }}>
              Celebrate consistent study habits and mastery across Ethiopian students.
            </p>
          </div>
          {hasRealData && myRankEntry && (
            <div className="my-rank-badge">
              <span className="tiny muted">Your Rank</span>
              <span className="my-rank-num">#{myRankEntry.rank}</span>
            </div>
          )}
        </div>

        {/* Controls: Grade Filter & Metric Toggle */}
        {hasRealData && (
        <div className="leaderboard-controls mt-4">
          <div className="grade-pill-group" role="tablist" aria-label="Grade filter">
            <button
              className={`filter-pill ${gradeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGradeFilter('all')}
            >
              All Students
            </button>
            {(['9', '10', '11', '12'] as const).map(g => (
              <button
                key={g}
                className={`filter-pill ${gradeFilter === g ? 'active' : ''}`}
                onClick={() => setGradeFilter(g)}
              >
                Grade {g}
              </button>
            ))}
          </div>

          <div className="metric-switch">
            <button
              className={`metric-btn ${metric === 'streak' ? 'active' : ''}`}
              onClick={() => setMetric('streak')}
            >
              <Flame size={15} /> Streaks
            </button>
            <button
              className={`metric-btn ${metric === 'mastery' ? 'active' : ''}`}
              onClick={() => setMetric('mastery')}
            >
              <Award size={15} /> Topics Mastered
            </button>
          </div>
        </div>
        )}

        {/* Empty / Loading state inside the banner card */}
        {!hasRealData && (
          <div style={{ textAlign: 'center', padding: '32px 16px 8px' }}>
            {boardLoading
              ? <p className="muted">Loading leaderboard…</p>
              : (
                <>
                  <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🏆</div>
                  <h3 style={{ margin: '0 0 8px' }}>Be the first on the board!</h3>
                  <p className="muted" style={{ margin: '0 0 16px', maxWidth: 360, marginInline: 'auto' }}>
                    The leaderboard fills up as students study and complete quizzes.
                    Sign in, keep your streak alive, and claim the top spot.
                  </p>
                  {!isSupabaseConfigured && (
                    <p className="tiny muted">⚠️ Cloud sync is not configured — leaderboard requires an account.</p>
                  )}
                </>
              )
            }
          </div>
        )}
      </div>

      {/* Top 3 Podium — only when real data exists */}
      {hasRealData && top3.length >= 3 && (
        <div className="podium-grid mt-4">
          {/* 2nd Place */}
          <div className="podium-card second card">
            <div className="podium-badge silver">🥈 2nd</div>
            <div className="podium-avatar">{top3[1].name.slice(0, 2).toUpperCase()}</div>
            <div className="podium-name">{top3[1].name}</div>
            <div className="podium-grade"><GraduationCap size={12} /> Grade {top3[1].grade}</div>
            {top3[1].schoolName && <div className="podium-school tiny muted">{top3[1].schoolName}</div>}
            <div className="podium-score">
              {metric === 'streak' ? `🔥 ${top3[1].streak} days` : `🏆 ${top3[1].masteredCount} topics`}
            </div>
          </div>

          {/* 1st Place */}
          <div className="podium-card first card">
            <div className="podium-crown">👑</div>
            <div className="podium-badge gold">🥇 1st</div>
            <div className="podium-avatar gold">{top3[0].name.slice(0, 2).toUpperCase()}</div>
            <div className="podium-name">{top3[0].name}</div>
            <div className="podium-grade"><GraduationCap size={12} /> Grade {top3[0].grade}</div>
            {top3[0].schoolName && <div className="podium-school tiny muted">{top3[0].schoolName}</div>}
            <div className="podium-score">
              {metric === 'streak' ? `🔥 ${top3[0].streak} days` : `🏆 ${top3[0].masteredCount} topics`}
            </div>
          </div>

          {/* 3rd Place */}
          <div className="podium-card third card">
            <div className="podium-badge bronze">🥉 3rd</div>
            <div className="podium-avatar">{top3[2].name.slice(0, 2).toUpperCase()}</div>
            <div className="podium-name">{top3[2].name}</div>
            <div className="podium-grade"><GraduationCap size={12} /> Grade {top3[2].grade}</div>
            {top3[2].schoolName && <div className="podium-school tiny muted">{top3[2].schoolName}</div>}
            <div className="podium-score">
              {metric === 'streak' ? `🔥 ${top3[2].streak} days` : `🏆 ${top3[2].masteredCount} topics`}
            </div>
          </div>
        </div>
      )}

      {/* Ranks 4+ Table — only when real data exists */}
      {hasRealData && (
        <div className="card leaderboard-table-card mt-4">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th style={{ width: 60, textAlign: 'center' }}>Rank</th>
                <th>Student</th>
                <th>Grade</th>
                <th className="hide-sm">School</th>
                <th style={{ textAlign: 'right' }}>
                  {metric === 'streak' ? 'Streak' : 'Mastered'}
                </th>
              </tr>
            </thead>
            <tbody>
              {remaining.map(entry => {
                const isMe = entry.userId === (user?.id ?? 'current-user');
                return (
                  <tr key={entry.userId} className={isMe ? 'my-row' : ''}>
                    <td style={{ textAlign: 'center', fontWeight: 700 }}>
                      <span className="rank-circle">{entry.rank}</span>
                    </td>
                    <td>
                      <div className="student-cell">
                        <div className="student-avatar-mini">
                          <User size={13} />
                        </div>
                        <div>
                          <span className="student-name">{entry.name} {isMe && <span className="you-pill">You</span>}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="grade-badge">Grade {entry.grade}</span>
                    </td>
                    <td className="hide-sm">
                      <span className="school-text">{entry.schoolName ? <><Building2 size={12} /> {entry.schoolName}</> : '—'}</span>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700 }}>
                      {metric === 'streak' ? (
                        <span className="score-badge flame">🔥 {entry.streak}d</span>
                      ) : (
                        <span className="score-badge trophy"><Trophy size={13} /> {entry.masteredCount}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
