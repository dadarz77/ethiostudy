import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, ALL_TOPICS, subjectsFor, fmtTime, type Grade } from '../lib/curriculum';
import { statsFor, weakTopicIds } from '../lib/scoring';

export default function Progress() {
  const navigate = useNavigate();
  const grade = useAppStore(s => s.settings.grade);
  const progress = useAppStore(s => s.progress);
  const weakMap = useAppStore(s => s.weakMap);
  const streak = useAppStore(s => s.streak);
  const totalStudySec = useAppStore(s => s.totalStudySec);
  const overall = statsFor(CURRICULUM as never, progress, { grade });
  const weak = weakTopicIds(CURRICULUM as never, progress, weakMap, grade);

  return (
    <div className="view-inner">
      <h1 className="view-title">📈 Progress — Grade {grade}</h1>

      <div className="stat-row">
        <div className="stat-card"><div className="stat-num">{overall.pct}%</div><div className="stat-label">curriculum covered</div></div>
        <div className="stat-card"><div className="stat-num">{overall.avgScore}%</div><div className="stat-label">avg quiz score</div></div>
        <div className="stat-card"><div className="stat-num">{overall.avgMastery}%</div><div className="stat-label">avg mastery</div></div>
        <div className="stat-card"><div className="stat-num">🔥 {streak.current}</div><div className="stat-label">day streak (best {streak.best})</div></div>
        <div className="stat-card"><div className="stat-num">{fmtTime(totalStudySec)}</div><div className="stat-label">total study time</div></div>
      </div>

      <h2 className="section-title">By subject</h2>
      <div className="grid-cards">
        {subjectsFor(grade as Grade).map(({ key, s: subj }) => {
          const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
          return (
            <div key={key} className="card subject-card">
              <div className="subject-icon" style={{ color: subj.color }}>{subj.icon}</div>
              <div className="subject-name">{subj.title}</div>
              <div className="subject-meta">{st.studied}/{st.total} topics · avg {st.avgScore}%</div>
              <div className="mastery-bar"><div style={{ width: st.pct + '%', background: subj.color }} /></div>
            </div>
          );
        })}
      </div>

      <h2 className="section-title">Weakest topics — practice these next</h2>
      {weak.length === 0 && <p className="muted">Take some quizzes and your weak spots will show up here.</p>}
      <div className="history-list">
        {weak.map(w => {
          const t = ALL_TOPICS[w.tid];
          if (!t) return null;
          return (
            <button key={w.tid} className="history-row" onClick={() => navigate('/topic/' + w.tid)}>
              <span>🎯</span>
              <span className="history-title">{t.title}</span>
              <span className="history-meta">{t._subjectTitle} · {w.wrongs} wrong</span>
              <span className="topic-mastery">{w.mastery}%</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
