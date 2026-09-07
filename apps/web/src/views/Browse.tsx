import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, subjectsFor, type Grade } from '../lib/curriculum';
import { statsFor } from '../lib/scoring';

export default function Browse() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const grade = useAppStore(s => s.settings.grade);
  const progress = useAppStore(s => s.progress);
  const mastery = useAppStore(s => s.mastery);
  const [openUnit, setOpenUnit] = useState<string | null>(params.get('subject') ? params.get('subject') + ':u1' : null);

  const subjKey = params.get('subject');
  const subjects = subjectsFor(grade as Grade);
  const shown = subjKey ? subjects.filter(x => x.key === subjKey) : subjects;

  return (
    <div className="view-inner">
      <h1 className="view-title">📚 Browse Curriculum — Grade {grade}</h1>
      {shown.map(({ key, s: subj }) => (
        <section key={key} className="subject-section" style={{ ['--subj' as string]: subj.color }}>
          <h2 className="subject-heading" style={{ color: subj.color }}>
            {subj.icon} {subj.title}
            <span className="subject-count">{statsFor(CURRICULUM as never, progress, { grade, subjectKey: key }).studied}/{statsFor(CURRICULUM as never, progress, { grade, subjectKey: key }).total} topics</span>
          </h2>
          {subj.units.map((u, ui) => {
            const uid = key + ':u' + (ui + 1);
            const open = openUnit === uid;
            return (
              <div key={u.id} className="unit-block">
                <button className="unit-head" onClick={() => setOpenUnit(open ? null : uid)}>
                  <span className="unit-title">{u.title}</span>
                  <span className="unit-chev">{open ? '▾' : '▸'}</span>
                </button>
                {open && (
                  <div className="topic-grid">
                    {u.topics.map(t => {
                      const m = mastery(t._id);
                      const studied = !!progress[t._id]?.lastStudy || (progress[t._id]?.totalQ ?? 0) > 0;
                      return (
                        <button key={t._id} className="card card-hover curriculum-card topic-path-card" onClick={() => navigate('/topic/' + t._id)}>
                          <div className="topic-title">{t.title}</div>
                          <div className="topic-meta">
                            <span className={'diff diff-' + t.difficulty}>{t.difficulty}</span>
                            {studied && <span className="topic-mastery">{m}%</span>}
                          </div>
                          <div className="mastery-bar"><div style={{ width: m + '%', background: subj.color }} /></div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
