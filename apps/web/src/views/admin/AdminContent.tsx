import { useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, HelpCircle } from 'lucide-react';
import { loadAllLessons, lessonFor, subjectsFor, type Grade } from '../../lib/curriculum';

/* Content QA: read-only browser over the shipped curriculum data. No writes -
   content stays in the git/data pipeline (spec section 5). For every topic we
   show whether its lesson JSON exists and how many questions it ships with,
   using the same lazy unit chunks the app itself serves (loadAllLessons). */

const GRADES: Grade[] = ['9', '10', '11', '12'];

export default function AdminContent() {
  const [grade, setGrade] = useState<Grade>('9');
  const [subject, setSubject] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Eagerly warm every unit chunk (same cached loaders used by global search).
  useEffect(() => {
    let alive = true;
    loadAllLessons().then(
      () => { if (alive) setLoaded(true); },
      () => { if (alive) setLoaded(true); }
    );
    return () => { alive = false; };
  }, []);

  const subjects = useMemo(() => subjectsFor(grade), [grade]);
  const activeSubjectKey = subject && subjects.some((s) => s.key === subject) ? subject : (subjects[0]?.key ?? null);

  const topics = useMemo(() => {
    if (loaded !== true || !activeSubjectKey) return [];
    const subj = subjects.find((s) => s.key === activeSubjectKey);
    if (!subj) return [];
    return subj.s.units.flatMap((u, ui) =>
      u.topics.map((t) => {
        const lesson = lessonFor(t._id);
        return {
          id: t._id,
          title: t.title,
          unit: u.title,
          unitIndex: ui + 1,
          hasLesson: lesson !== null && lesson !== undefined,
          questions: lesson?.questions.length ?? 0,
          visuals: lesson?.visuals.length ?? 0,
        };
      })
    );
  }, [subjects, activeSubjectKey, loaded]);

  const missing = topics.filter((t) => !t.hasLesson).length;

  return (
    <section>
      <div className="admin-search-row">
        <div className="adm-seg" role="tablist" aria-label="Grade">
          {GRADES.map((g) => (
            <button key={g} type="button" className={grade === g ? 'active' : ''} onClick={() => { setGrade(g); setSubject(null); }}>
              Grade {g}
            </button>
          ))}
        </div>
        <span className="tiny">{topics.length} topics - {missing === 0 ? 'all lessons present' : `${missing} missing lesson JSON`}</span>
      </div>

      <div className="admin-search-row">
        {subjects.map((s) => (
          <button
            key={s.key}
            type="button"
            className={'btn btn-sm ' + (s.key === activeSubjectKey ? 'btn-primary' : '')}
            onClick={() => setSubject(s.key)}
          >
            {s.s.title}
          </button>
        ))}
      </div>

      <div className="adm-table-wrap mt-3">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Unit</th>
              <th>Lesson</th>
              <th>Questions</th>
              <th>Visuals</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((t) => (
              <tr key={t.id}>
                <td><b>{t.title}</b></td>
                <td className="muted">U{t.unitIndex} - {t.unit}</td>
                <td>
                  {t.hasLesson
                    ? <span className="adm-chip adm-chip-ok"><CheckCircle2 size={12} /> lesson</span>
                    : <span className="adm-chip adm-chip-banned"><HelpCircle size={12} /> missing</span>}
                </td>
                <td className="adm-num">{t.questions}</td>
                <td className="adm-num">{t.visuals}</td>
              </tr>
            ))}
            {!loaded && (
              <tr><td colSpan={5}><span className="tiny"><BookOpen size={12} /> Scanning lesson JSON...</span></td></tr>
            )}
            {loaded && topics.length === 0 && (
              <tr><td colSpan={5} className="adm-empty-row">No topics found for this subject.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
