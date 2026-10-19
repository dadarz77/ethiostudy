import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { BookOpen, Library, Compass, Beaker, Sigma, Dna, Atom, FlaskConical, Landmark, Earth, TrendingUp, Scale, BookOpenText, BookMarked, ArrowUpRight } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, subjectsByGroup, subject as subjectOf, type Grade } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';
import { Chip, DiffChip } from '../components/ui';
import { useOrbitTilt } from '../lib/useOrbitTilt';

/* Shared subject icon map — same treatment as the Dashboard orbit cards. */
const SUBJECT_ICONS: Record<string, typeof Sigma> = {
  mathematics: Sigma,
  biology: Dna,
  physics: Atom,
  chemistry: FlaskConical,
  history: Landmark,
  geography: Earth,
  economics: TrendingUp,
  civics: Scale,
  esl: BookOpenText,
};

export default function Browse() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const grade = useAppStore(s => s.settings.grade);
  const setSetting = useAppStore(s => s.setSetting);
  const progress = useAppStore(s => s.progress);
  const mastery = useAppStore(s => s.mastery);
  /* enables the shared 3D pointer tilt on .subject-orbit-card grids */
  useOrbitTilt();

  const subjKey = params.get('subject');
  const unitId = params.get('unit');

  const go = (p: Record<string, string>) => {
    const q = new URLSearchParams(params);
    for (const [k, v] of Object.entries(p)) q.set(k, v);
    navigate('/browse?' + q.toString());
  };

  const studiedOf = (tid: string) => {
    const p = progress[tid];
    return (p?.totalQ ?? 0) > 0 || (p?.studySec ?? 0) > 0;
  };

  const iconOf = (key: string) => SUBJECT_ICONS[key] ?? BookMarked;

  return (
    <>
      <section className="page-hero page-hero-browse">
        <div className="spread">
          <h1><BookOpen size={26} /> Browse Curriculum</h1>
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
        <div className="subject-groups mt-4">
          {subjectsByGroup(grade as Grade).map(({ group, label, subjects: gsubjects }) => {
            const GroupIcon = group === 'science' ? Beaker : Compass;
            return (
              <div key={group} className="subject-group">
                <h3 className="subject-group-title"><GroupIcon size={14} /> {label.en}</h3>
                <div className="subject-card-grid">
                  {gsubjects.map(({ key, s: subj }) => {
                    const st = statsFor(CURRICULUM as never, progress, { grade, subjectKey: key });
                    const SIcon = iconOf(key);
                    return (
                      <button key={key} className={'subject-orbit-card subject-' + key}
                        onClick={() => go({ subject: key })}>
                        <span className="card-orbit" />
                        <span className="subject-icon-tile"><SIcon size={22} /></span>
                        <span className="subject-card-content">
                          <b>{subj.title}</b>
                          <small>{st.studied}/{st.total} topics · {subj.units.length} units{st.avgMastery ? ' · ' + st.avgMastery + '% mastery' : ''}</small>
                          <span className="subject-progress"><i style={{ width: st.pct + '%' }} /></span>
                        </span>
                        <span className="card-arrow"><ArrowUpRight size={18} /></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {subjKey && !unitId && (() => {
        const subj = subjectOf(grade as Grade, subjKey);
        if (!subj) return (
          <div className="empty-state mt-4">
            <span className="icon-tile" style={{ ['--tile-accent' as string]: 'var(--accent)', margin: '0 auto var(--space-3)' }}><Compass size={24} /></span>
            <h3>Subject not found</h3>
            <p className="muted" style={{ margin: '0 auto', maxWidth: 380 }}>That subject isn't in this curriculum yet — pick one from the list above.</p>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/browse?grade=' + grade)}>Back to subjects</button>
          </div>
        );
        return (
          <>
            <div className="breadcrumb mt-3">
              <Link to="/">Dashboard</Link> / <span>{subj.title}</span>
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
        if (!subj || !unit) return (
          <div className="empty-state mt-4">
            <span className="icon-tile" style={{ ['--tile-accent' as string]: 'var(--accent)', margin: '0 auto var(--space-3)' }}><Library size={24} /></span>
            <h3>Unit not found</h3>
            <p className="muted" style={{ margin: '0 auto', maxWidth: 380 }}>That unit may have moved — head back to the subject's unit list.</p>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/browse?grade=' + grade + '&subject=' + subjKey)}>Back to units</button>
          </div>
        );
        const ui = subj.units.indexOf(unit) + 1;
        return (
          <>
            <div className="breadcrumb mt-3">
              <Link to="/">Dashboard</Link> / <Link to={'/browse?grade=' + grade + '&subject=' + subjKey}>{subj.title}</Link> / <span>Unit {ui}</span>
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
