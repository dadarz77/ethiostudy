import { useMemo, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, lessonFor, subjectsFor, type Grade } from '../lib/curriculum';
import { gradeQuiz, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { QuestionCard } from '../components/QuestionCard';

/** Exam Prep — sample N questions across a whole subject, grade at the end */
export default function Exam() {
  const grade = useAppStore(s => s.settings.grade);
  const examLen = useAppStore(s => s.settings.examLen);
  const logQuiz = useAppStore(s => s.logQuiz);
  const [exam, setExam] = useState<{ qs: QuizQuestion[]; topicOf: string[] } | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const subjects = useMemo(() => subjectsFor(grade as Grade), [grade]);

  const start = (sk: string) => {
    const subj = (CURRICULUM as Record<Grade, Record<string, { units: { topics: { _id: string }[] }[] }>>)[grade as Grade][sk];
    const pool: { q: QuizQuestion; tid: string }[] = [];
    for (const u of subj.units) for (const t of u.topics) {
      const ls = lessonFor(t._id);
      for (const q of ls?.questions ?? []) pool.push({ q: Object.assign({ _qi: pool.length }, q), tid: t._id });
    }
    // shuffle + take
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, examLen);
    setExam({ qs: shuffled.map(x => x.q), topicOf: shuffled.map(x => x.tid) });
    setAnswers([]);
    setResult(null);
  };

  const submit = () => {
    if (!exam) return;
    const r = gradeQuiz(exam.qs, answers);
    setResult(r);
    // credit each topic that contributed a question
    const perTopic = new Map<string, { c: number; n: number }>();
    r.perQ.forEach((p, i) => {
      const tid = exam.topicOf[i];
      const cur = perTopic.get(tid) ?? { c: 0, n: 0 };
      cur.n++; if (p.correct) cur.c++;
      perTopic.set(tid, cur);
    });
    for (const [tid, { c, n }] of perTopic) logQuiz(tid, c, n, Math.round((c / n) * 100), c < n ? [tid] : []);
  };

  return (
    <div className="view-inner exam-pane">
      <h1 className="view-title">📝 Exam Prep — Grade {grade}</h1>
      {!exam && (
        <div className="grid-cards">
          {subjects.map(({ key, s: subj }) => (
            <button key={key} className="card card-hover subject-card" onClick={() => start(key)}>
              <div className="subject-icon" style={{ color: subj.color }}>{subj.icon}</div>
              <div className="subject-name">{subj.title}</div>
              <div className="subject-meta">{examLen} mixed questions</div>
            </button>
          ))}
        </div>
      )}
      {exam && !result && (
        <>
          <div className="exam-progress">Question {answers.filter(a => a !== undefined && a !== null && a !== '').length}/{exam.qs.length} answered</div>
          {exam.qs.map((q, i) => (
            <QuestionCard key={i} q={q} index={i} answer={answers[i]}
              onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
          ))}
          <button className="btn btn-primary btn-big" onClick={submit}>Submit exam</button>
        </>
      )}
      {result && (
        <div className="quiz-result">
          <h2>{result.grade.emoji} {result.grade.label} — {result.pct}% ({result.correct}/{result.total})</h2>
          <p>{result.feedback}</p>
          {result.weaknesses.length > 0 && <p className="muted">Review these skills: {result.weaknesses.join(', ')}</p>}
          <button className="btn btn-primary" onClick={() => { setExam(null); setResult(null); }}>Choose another subject</button>
        </div>
      )}
    </div>
  );
}
