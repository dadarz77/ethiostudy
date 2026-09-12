import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, ALL_TOPICS, subjectsFor, fmtTime, type Grade } from '../lib/curriculum';
import { statsFor, weakTopicIds } from '../lib/scoring';
import { StatCard, ProgressBar, Chip } from '../components/ui';

export default function Progress() {
  const navigate = useNavigate();
  const grade = useAppStore(s => s.settings.grade);
  const progress = useAppStore(s => s.progress);
  const weakMap = useAppStore(s => s.weakMap);
  const streak = useAppStore(s => s.streak);
  const totalStudySec = useAppStore(s => s.totalStudySec);
  const overall = statsFor(CURRICULUM as never, progress, { grade });
  const weak = weakTopicIds(CURRICULUM as never, progress, weakMap, grade, null, 8);

  return (
    <>
      <h1>📈 Your Progress</h1>
      <div className="grid grid-4 mt-4">
        <StatCard num={overall.studied} label="Topics completed" ico="✅" />
        <StatCard num={overall.avgScore ? overall.avgScore + '%' : '—'} label="Average score" ico="🎯" />
        <StatCard num={'🔥 ' + streak.current} label={`Day streak (best ${streak.best})`} ico="" />
        <StatCard num={fmtTime(totalStudySec)} label="Total study time" ico="⏱️" />
      </div>

      <h2 className="section-title">By subject — Grade {grade}</h2>
      <div className="card">
        {subjectsFor(grade as Grade).map(({ key, s: subj }, i) => {
          const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
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

      {(() => {
        const nat = Object.entries(progress).filter(([k]) => k.startsWith('natl:'));
        if (!nat.length) return null;
        return (
          <>
            <h2 className="section-title">🏥 National Exams — past-paper performance</h2>
            <div className="card">
              {nat.map(([k, tp], i) => {
                const subj = k.slice(5);
                const avg = tp.quizScores.length ? Math.round(tp.quizScores.reduce((a, b) => a + b, 0) / tp.quizScores.length) : 0;
                return (
                  <div key={k} style={{ margin: i === 0 ? 0 : '16px 0 0' }}>
                    <div className="spread" style={{ marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                        {subj.charAt(0).toUpperCase() + subj.slice(1)}{' '}
                        <span className="muted" style={{ fontWeight: 400 }}>· {tp.attempts} exam{tp.attempts === 1 ? '' : 's'} · {tp.correct}/{tp.totalQ} correct</span>
                      </span>
                      <span style={{ fontWeight: 700, color: 'var(--fg-2)', fontVariantNumeric: 'tabular-nums' }}>{avg}% avg</span>
                    </div>
                    <ProgressBar pct={avg} cls={avg > 60 ? '' : avg > 40 ? 'warn' : 'low'} />
                  </div>
                );
              })}
            </div>
          </>
        );
      })()}

      <h2 className="section-title">🔥 Weakest topics — practice these next</h2>
      <div className="card">
        {weak.length === 0 ? (
          <p className="muted" style={{ margin: 0 }}>Take some quizzes and your weak spots will show up here.</p>
        ) : (
          <table>
            <tbody>
              <tr><th>Topic</th><th>Subject</th><th>Mastery</th><th>Wrong answers</th><th></th></tr>
              {weak.map(w => {
                const t = ALL_TOPICS[w.tid];
                if (!t) return null;
                return (
                  <tr key={w.tid}>
                    <td>{t.title}</td>
                    <td>{t._subjectTitle}</td>
                    <td><Chip text={w.mastery + '%'} cls={w.mastery < 40 ? 'chip-diff-hard' : 'chip-diff-medium'} /></td>
                    <td>{w.wrongs}</td>
                    <td style={{ textAlign: 'right' }}><button className="btn btn-sm" onClick={() => navigate('/topic/' + w.tid)}>Study →</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
