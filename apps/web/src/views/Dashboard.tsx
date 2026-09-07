import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { topicById, subjectsFor, fmtTime, CURRICULUM } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';
import { tr } from '../lib/i18n';

export default function Dashboard() {
  const navigate = useNavigate();
  const s = useAppStore();
  const lang = s.settings.language;
  const grade = s.settings.grade;
  const overall = statsFor(CURRICULUM as never, s.progress, { grade });
  const recent = s.history.slice(0, 6);
  const recentTopic = recent.map(h => topicById(h.topicId)).find(Boolean);

  return (
    <div className="view-inner">
      <section className="hero">
        <h1>{tr('welcome', lang)}</h1>
        <p>{tr('readiness', lang)}: <b>{overall.pct}%</b> · {overall.studied}/{overall.total} topics · {fmtTime(overall.studySec)} studied</p>
        {recentTopic && (
          <button className="orbit-action" onClick={() => navigate('/topic/' + recentTopic._id)}>
            <span>{tr('continue', lang)}</span><b>{recentTopic.title}</b><i>→</i>
          </button>
        )}
        {!recentTopic && <button className="btn btn-primary" onClick={() => navigate('/browse')}>{tr('start', lang)}</button>}
      </section>

      <h2 className="section-title">{tr('explore', lang)}</h2>
      <div className="grid-cards">
        {subjectsFor(grade as '10' | '11').map(({ key, s: subj }) => {
          const st = statsFor(CURRICULUM as never, s.progress, { grade, subjectKey: key });
          return (
            <button key={key} className="card card-hover subject-card" onClick={() => navigate('/browse?subject=' + key)}>
              <div className="subject-icon" style={{ color: subj.color }}>{subj.icon}</div>
              <div className="subject-name">{subj.title}</div>
              <div className="subject-meta">{st.studied}/{st.total} topics · {st.pct}%</div>
              <div className="mastery-bar"><div style={{ width: st.pct + '%', background: subj.color }} /></div>
            </button>
          );
        })}
      </div>

      <h2 className="section-title">{tr('noSessions', lang)}</h2>
      <div className="history-list">
        {recent.map((h, i) => {
          const t = topicById(h.topicId);
          return (
            <button key={i} className="history-row" onClick={() => t && navigate('/topic/' + t._id)}>
              <span>{h.type === 'quiz' ? '📝' : '📖'}</span>
              <span className="history-title">{t?.title ?? h.topicId}</span>
              <span className="history-meta">{h.type === 'quiz' ? h.score + '%' : fmtTime(h.sec ?? 0)}</span>
              <span className="history-when">{new Date(h.at).toLocaleDateString()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
