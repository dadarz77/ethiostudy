import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { topicById, subjectsFor, fmtTime, CURRICULUM } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';
import { tr } from '../lib/i18n';
import { StatCard, ProgressBar, EmptyState, useOrbitTilt } from '../components/ui';
import { lazy, Suspense } from 'react';
const Hero3D = lazy(() => import('../components/Hero3D'));

export default function Dashboard() {
  const navigate = useNavigate();
  const s = useAppStore();
  const lang = s.settings.language;
  const grade = s.settings.grade;
  const overall = statsFor(CURRICULUM as never, s.progress, { grade });
  const recent = s.history.slice(0, 6);
  const recentTopic = recent.map(h => topicById(h.topicId)).find(Boolean);
  useOrbitTilt();

  const today = new Date().toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-ET', { weekday: 'long', month: 'long', day: 'numeric' });
  const nextAction = recentTopic
    ? <button className="orbit-action" onClick={() => navigate('/topic/' + recentTopic._id)}><span>{tr('continue', lang)}</span><b>{recentTopic.title}</b><i>→</i></button>
    : <button className="orbit-action" onClick={() => navigate('/practice')}><span>{tr('continue', lang)}</span><b>{tr('start', lang)}</b><i>→</i></button>;

  return (
    <>
      <section className="orbit-hero" aria-label={tr('continue', lang)}>
        <div className="orbit-copy">
          <div className="eyebrow">Ethiopian New Curriculum <span></span> {today}</div>
          <h1>{tr('welcome', lang)}</h1>
          <p>{lang === 'am'
            ? `የ${grade}ኛ ክፍል ትምህርትዎን በአንድ ግልጽ እርምጃ ይቀጥሉ።`
            : `Keep building your Grade ${grade} understanding—one clear step at a time.`}</p>
          {nextAction}
        </div>
        <div className="orbit-scene" aria-hidden="true">
          <Suspense fallback={null}><Hero3D /></Suspense>
          <div className="orbit-caption">{overall.avgMastery || 0}%<small>mastery</small></div>
        </div>
      </section>

      <section className="subject-deck" aria-label={tr('explore', lang)}>
        <div className="section-heading">
          <div><div className="eyebrow">{tr('explore', lang)}</div><h2>Grade {grade} subjects</h2></div>
          <button className="text-action" onClick={() => navigate('/browse')}>{lang === 'am' ? 'ሁሉንም ይመልከቱ' : 'View curriculum'} <span>→</span></button>
        </div>
        <div className="subject-card-grid">
          {subjectsFor(grade as '10' | '11').map(({ key, s: subj }, index) => {
            const st = statsFor(CURRICULUM as never, s.progress, { grade, subjectKey: key });
            return (
              <button key={key} className={'subject-orbit-card subject-' + key} style={{ ['--card-index' as string]: index }}
                onClick={() => navigate('/browse?subject=' + key)}>
                <span className="card-orbit" />
                <span className="subject-icon">{subj.icon}</span>
                <span className="subject-card-content">
                  <b>{subj.title}</b>
                  <small>{st.studied}/{st.total} {lang === 'am' ? 'ርዕሶች' : 'topics explored'}</small>
                  <span className="subject-progress"><i style={{ width: st.pct + '%' }} /></span>
                </span>
                <span className="card-arrow">↗</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="study-routes">
        <button className="study-route route-practice" onClick={() => navigate('/practice')}>
          <span className="route-icon">◌</span>
          <span><small>{tr('weak', lang)}</small><b>{lang === 'am' ? 'የሚያስፈልግዎትን ያጠናክሩ' : 'Strengthen what needs attention'}</b></span><i>→</i>
        </button>
        <button className="study-route route-exam" onClick={() => navigate('/exam')}>
          <span className="route-icon">✦</span>
          <span><small>{tr('readiness', lang)}</small><b>{overall.avgScore ? `${overall.avgScore}% ${lang === 'am' ? 'አማካይ ውጤት' : 'average quiz score'}` : (lang === 'am' ? 'ዝግጁነትዎን ይለኩ' : 'Check your readiness')}</b></span><i>→</i>
        </button>
      </section>

      <div className="grid grid-4 dashboard-stats">
        <StatCard num={overall.total} label="Total topics" ico="📚" />
        <StatCard num={overall.studied} label="Topics studied" ico="✅" />
        <StatCard num={overall.total - overall.studied} label="Topics remaining" ico="⏳" />
        <StatCard num={overall.avgScore ? overall.avgScore + '%' : '—'} label="Average quiz score" ico="🎯" />
      </div>
      <div className="grid grid-2 mt-3">
        <StatCard num={fmtTime(overall.studySec)} label="Total study time" ico="⏱️" />
        <StatCard num={overall.avgMastery ? overall.avgMastery + '%' : '—'} label="Average mastery" ico="🏅" />
      </div>

      <h2 className="section-title">📈 {lang === 'am' ? 'በትምህርት ዓይነት እድገት' : 'Progress by Subject'} — Grade {grade}</h2>
      <div className="card">
        {subjectsFor(grade as '10' | '11').map(({ key, s: subj }, i) => {
          const st = statsFor(CURRICULUM as never, s.progress, { grade, subjectKey: key });
          return (
            <div key={key} style={{ margin: i === 0 ? 0 : '18px 0 0' }}>
              <div className="spread" style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                  {subj.icon} {subj.title} <span className="muted" style={{ fontWeight: 400 }}>· {st.studied}/{st.total} topics</span>
                </span>
                <span style={{ fontWeight: 700, color: 'var(--fg-2)' }}>{st.pct}%</span>
              </div>
              <ProgressBar pct={st.pct} cls={st.pct > 60 ? '' : st.pct > 30 ? 'warn' : 'low'} />
              <div className="tiny mt-2">Avg score: {st.avgScore || '—'}% · Mastery: {st.avgMastery || '—'}%</div>
            </div>
          );
        })}
      </div>

      <h2 className="section-title">🕒 {lang === 'am' ? 'የቅርብ ጊዜ ጥናቶች' : 'Recent Study Sessions'}</h2>
      <div className="card">
        {recent.length ? (
          <table>
            <tbody>
              <tr><th>Activity</th><th>Topic</th><th>When</th></tr>
              {recent.map((h, i) => {
                const t = topicById(h.topicId);
                return (
                  <tr key={i}>
                    <td>{h.type === 'quiz' ? '🎯 Quiz' : '⏱️ Study'}</td>
                    <td>{t?.title ?? '—'}</td>
                    <td>{h.type === 'quiz' ? h.score + '%' : fmtTime(h.sec ?? 0)} · {relTime(h.at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <EmptyState icon="🌱" title="No study sessions yet" sub="Click 🎲 PICK A TOPIC to start your first session!" />}
      </div>
    </>
  );
}

function relTime(ts: number): string {
  const d = Math.floor((Date.now() - ts) / 1000);
  if (d < 60) return 'just now';
  if (d < 3600) return Math.floor(d / 60) + 'm ago';
  if (d < 86400) return Math.floor(d / 3600) + 'h ago';
  return Math.floor(d / 86400) + 'd ago';
}
