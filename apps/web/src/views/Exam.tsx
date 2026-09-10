import { useMemo, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, lessonFor, loadAllLessons, subjectsFor, type Grade } from '../lib/curriculum';
import { gradeQuiz, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { QuestionCard } from '../components/QuestionCard';
import { ScoreRing, Chip } from '../components/ui';

/** Exam Prep — sample N questions across a whole subject, grade at the end */
export default function Exam() {
  const grade = useAppStore(s => s.settings.grade);
  const setSetting = useAppStore(s => s.setSetting);
  const examLen = useAppStore(s => s.settings.examLen);
  const logQuiz = useAppStore(s => s.logQuiz);
  const [exam, setExam] = useState<{ qs: QuizQuestion[]; topicOf: string[]; subject: string; key: string } | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [busy, setBusy] = useState(false);

  const subjects = useMemo(() => subjectsFor(grade as Grade), [grade]);

  const start = async (sk: string) => {
    setBusy(true);
    await loadAllLessons(); // exam needs every unit in the subject
    const subj = (CURRICULUM as Record<Grade, Record<string, { title: string; units: { topics: { _id: string }[] }[] }>>)[grade as Grade][sk];
    const pool: { q: QuizQuestion; tid: string }[] = [];
    for (const u of subj.units) for (const t of u.topics) {
      const ls = lessonFor(t._id);
      for (const q of ls?.questions ?? []) pool.push({ q: Object.assign({ _qi: pool.length }, q), tid: t._id });
    }
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, examLen);
    setExam({ qs: shuffled.map(x => x.q), topicOf: shuffled.map(x => x.tid), subject: subj.title, key: sk });
    setAnswers([]);
    setResult(null);
    setBusy(false);
  };

  const submit = () => {
    if (!exam) return;
    const r = gradeQuiz(exam.qs, answers);
    setResult(r);
    const perTopic = new Map<string, { c: number; n: number }>();
    r.perQ.forEach((p, i) => {
      const tid = exam.topicOf[i];
      const cur = perTopic.get(tid) ?? { c: 0, n: 0 };
      cur.n++; if (p.correct) cur.c++;
      perTopic.set(tid, cur);
    });
    for (const [tid, { c, n }] of perTopic) logQuiz(tid, c, n, Math.round((c / n) * 100), c < n ? [tid] : []);
  };

  const answered = answers.filter(a => a !== undefined && a !== null && a !== '').length;

  return (
    <>
      {!exam && (
        <>
          <section className="page-hero">
            <h1>📝 Exam Prep — Grade {grade}</h1>
            <p>{examLen} mixed questions sampled across every unit in a subject. The closest thing to the real national exam.</p>
            <div className="row mt-3" style={{ gap: 8 }}>
              {Object.keys(CURRICULUM).sort((a, b) => Number(a) - Number(b)).map(g => (
                <button key={g} className={'btn btn-sm ' + (g === grade ? 'btn-primary' : '')}
                  onClick={() => setSetting('grade', g)}>Grade {g}</button>
              ))}
            </div>
          </section>
          <div className="grid grid-2 mt-4">
            {subjects.map(({ key, s: subj }) => (
              <button key={key} className={'card card-hover curriculum-card subject-' + key} disabled={busy} onClick={() => start(key)}>
                <div className="spread">
                  <div style={{ fontSize: '2rem' }}>{subj.icon}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>{subj.title}</div>
                    <div className="tiny">{busy ? 'Loading question bank…' : `${examLen} mixed questions · timed`}</div>
                  </div>
                </div>
                <div className="mt-3 row" style={{ gap: 6 }}>
                  <Chip text="🎯 Cross-unit" cls="chip-subject" />
                  <Chip text="📊 Scored like a quiz" />
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {exam && !result && (
        <>
          <div className="breadcrumb mt-3"><a href="#/">Dashboard</a> / <span>Exam · {exam.subject}</span></div>
          <div className="spread mt-3">
            <h1 style={{ margin: 0 }}>Practice Exam</h1>
            <Chip text={`${answered}/${exam.qs.length} answered`} cls={answered === exam.qs.length ? 'chip-diff-easy' : 'chip-diff-medium'} />
          </div>
          <div className="progress mt-3"><div style={{ width: (answered / exam.qs.length) * 100 + '%' }} /></div>
          <div className="mt-4">
            {exam.qs.map((q, i) => (
              <QuestionCard key={i} q={q} index={i} answer={answers[i]}
                onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
            ))}
          </div>
          <div className="row mt-4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" disabled={answered < exam.qs.length} onClick={submit}>
              {answered < exam.qs.length ? `Answer ${exam.qs.length - answered} more…` : 'Submit exam ✓'}
            </button>
          </div>
        </>
      )}

      {exam && result && (
        <>
          <div className="card mt-4" style={{ textAlign: 'center' }}>
            <h2 style={{ color: result.pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{result.grade.emoji} {result.pct}% — {result.grade.label}</h2>
            <p className="muted">{exam.subject} · {result.correct}/{result.total} correct</p>
            <ScoreRing pct={result.pct} />
            <p className="mt-3">{result.feedback}</p>
            {result.weaknesses.length > 0 && (
              <div className="mt-3"><b>🔎 Weak areas:</b> {result.weaknesses.map((w, i) => <Chip key={i} text={w} cls="chip-diff-hard" />)}</div>
            )}
            <div className="row mt-4" style={{ justifyContent: 'center' }}>
              <button className="btn" onClick={() => { setExam(null); setResult(null); }}>📚 Another subject</button>
              <button className="btn btn-primary" onClick={() => start(exam.key)}>🔁 Retake</button>
            </div>
          </div>
          {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} />)}
        </>
      )}
    </>
  );
}
