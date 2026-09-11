import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, subjectsFor, subject as subjectOf, type Grade } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';
import { Chip, DiffChip, ProgressBar, EmptyState } from '../components/ui';

export default function Browse() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const grade = useAppStore(s => s.settings.grade);
  const setSetting = useAppStore(s => s.setSetting);
  const progress = useAppStore(s => s.progress);
  const mastery = useAppStore(s => s.mastery);

  const subjKey = params.get('subject');
  const unitId = params.get('unit');
  const subjects = subjectsFor(grade as Grade);

  const go = (p: Record<string, string>) => {
    const q = new URLSearchParams(params);
    for (const [k, v] of Object.entries(p)) q.set(k, v);
    navigate('/browse?' + q.toString());
  };

  const studiedOf = (tid: string) => {
    const p = progress[tid];
    return (p?.totalQ ?? 0) > 0 || (p?.studySec ?? 0) > 0;
  };

  return (
    <>
      <section className="page-hero page-hero-browse">
        <div className="spread">
          <h1>📚 Browse Curriculum</h1>
          <div className="row">
            {Object.keys(CURRICULUM).sort((a, b) => Number(a) - Number(b)).map(g => (
              <button key={g} className={'btn ' + (g === grade ? 'btn-primary' : '')}
                onClick={() => { setSetting('grade', g as Grade); navigate('/browse?grade=' + g); }}>Grade {g}</button>
            ))}
          </div>
        </div>
        <p>Move through Grade {grade} one subject and one topic at a time.</p>
      </section>

      {!subjKey && (
        <div className="grid grid-2 mt-4">
          {subjects.map(({ key, s: subj }) => {
            const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
            return (
              <button key={key} className={'card card-hover curriculum-card subject-' + key} onClick={() => go({ subject: key })}>
                <div className="spread">
                  <div style={{ fontSize: '2rem' }}>{subj.icon}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>{subj.title}</div>
                    <div className="tiny">{st.studied}/{st.total} topics · {st.pct}%</div>
                  </div>
                </div>
                <div className="mt-3"><ProgressBar pct={st.pct} /></div>
                <div className="tiny mt-3 muted">{subj.units.length} units</div>
              </button>
            );
          })}
        </div>
      )}

      {subjKey && !unitId && (() => {
        const subj = subjectOf(grade as Grade, subjKey);
        if (!subj) return <EmptyState icon="🔍" title="Subject not found" />;
        return (
          <>
            <div className="breadcrumb mt-3">
              <a href="#/">Dashboard</a> / <span>{subj.icon} {subj.title}</span>
            </div>
            <div className="grid mt-4">
              {subj.units.map((u, i) => {
                const studied = u.topics.filter(t => studiedOf(t._id)).length;
                return (
                  <button key={u.id} className="card card-hover curriculum-card unit-card" onClick={() => go({ unit: u.id })}>
                    <div className="spread">
                      <h3 style={{ margin: 0 }}>Unit {i + 1}: {u.title}</h3>
                      <Chip text={`${studied}/${u.topics.length}`} />
                    </div>
                    <p className="tiny muted mt-2" style={{ margin: 0 }}>{u.topics.length} topics</p>
                  </button>
                );
              })}
            </div>
          </>
        );
      })()}

      {subjKey && unitId && (() => {
        const subj = subjectOf(grade as Grade, subjKey);
        const unit = subj?.units.find(u => u.id === unitId);
        if (!subj || !unit) return <EmptyState icon="🔍" title="Unit not found" />;
        const ui = subj.units.indexOf(unit) + 1;
        return (
          <>
            <div className="breadcrumb mt-3">
              <a href="#/">Dashboard</a> / <a href={'#/browse?grade=' + grade + '&subject=' + subjKey}>{subj.title}</a> / <span>Unit {ui}</span>
            </div>
            <h1 className="mt-2">{unit.title}</h1>
            <div className="grid mt-4">
              {unit.topics.map(t => {
                const m = mastery(t._id);
                const studied = studiedOf(t._id);
                return (
                  <button key={t._id} className="card card-hover curriculum-card topic-path-card" onClick={() => navigate('/topic/' + t._id)}>
                    <div className="spread">
                      <div>
                        <div style={{ fontWeight: 700 }}>{t.title}</div>
                        <div className="tiny muted mt-2">{(Array.isArray(t.subtopics) ? t.subtopics.slice(0, 3) : []).join(' · ')}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <DiffChip d={t.difficulty ?? 1} />
                        {studied && <div className="tiny mt-2" style={{ color: 'var(--success)' }}>{m}% mastery</div>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        );
      })()}
    </>
  );
}
