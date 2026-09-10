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
  const [exam, setExam] = useState<{ qs: QuizQuestion[]; topicOf: string[]; subject: string; key: string; units: Set<number>; length: number } | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [busy, setBusy] = useState(false);

  const subjects = useMemo(() => subjectsFor(grade as Grade), [grade]);
  const [setupKey, setSetupKey] = useState<string | null>(null); // subject being configured (unit picker)
  const [selUnits, setSelUnits] = useState<Set<number>>(new Set());
  const [len, setLen] = useState<number | null>(null); // null = use setting

  const setupSubj = setupKey ? subjects.find(x => x.key === setupKey)?.s : null;
  const effLen = len ?? examLen;
  const poolSize = useMemo(() => {
    if (!setupSubj) return 0;
    let n = 0;
    setupSubj.units.forEach((u, i) => {
      if (selUnits.has(i)) for (const t of u.topics) n += lessonFor(t._id)?.questions?.length ?? 0;
    });
    return n;
  }, [setupSubj, selUnits]);

  const openSetup = async (sk: string, initial?: Set<number>) => {
    setBusy(true);
    setSetupKey(sk);
    setResult(null);
    await loadAllLessons();
    const subj = subjects.find(x => x.key === sk)!.s;
    setSelUnits(initial ?? new Set(subj.units.map((_, i) => i))); // all units pre-selected
    setBusy(false);
  };

  const toggleUnit = (i: number) => setSelUnits(prev => {
    const n = new Set(prev);
    n.has(i) ? n.delete(i) : n.add(i);
    return n;
  });

  const start = async (sk: string, units?: Set<number>, length?: number) => {
    setBusy(true);
    await loadAllLessons(); // exam needs every unit in the subject
    const subj = (CURRICULUM as Record<Grade, Record<string, { title: string; units: { topics: { _id: string }[] }[] }>>)[grade as Grade][sk];
    const useUnits = units ?? new Set(subj.units.map((_, i) => i));
    const pool: { q: QuizQuestion; tid: string }[] = [];
    subj.units.forEach((u, i) => {
      if (!useUnits.has(i)) return;
      for (const t of u.topics) {
        const ls = lessonFor(t._id);
        for (const q of ls?.questions ?? []) pool.push({ q: Object.assign({ _qi: pool.length }, q), tid: t._id });
      }
    });
    const want = length ?? examLen;
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, want);
    setExam({ qs: shuffled.map(x => x.q), topicOf: shuffled.map(x => x.tid), subject: subj.title, key: sk, units: useUnits, length: want });
    setSetupKey(null);
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
      {!exam && !setupKey && (
        <>
          <section className="page-hero">
            <h1>📝 Exam Prep — Grade {grade}</h1>
            <p>Mixed questions sampled from the units you choose. The closest thing to the real national exam.</p>
            <div className="row mt-3" style={{ gap: 8 }}>
              {Object.keys(CURRICULUM).sort((a, b) => Number(a) - Number(b)).map(g => (
                <button key={g} className={'btn btn-sm ' + (g === grade ? 'btn-primary' : '')}
                  onClick={() => setSetting('grade', g)}>Grade {g}</button>
              ))}
            </div>
          </section>
          <div className="grid grid-2 mt-4">
            {subjects.map(({ key, s: subj }) => (
              <button key={key} className={'card card-hover curriculum-card subject-' + key} disabled={busy} onClick={() => openSetup(key)}>
                <div className="spread">
                  <div style={{ fontSize: '2rem' }}>{subj.icon}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>{subj.title}</div>
                    <div className="tiny">{busy ? 'Loading question bank…' : 'Choose units & start →'}</div>
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

      {!exam && setupKey && setupSubj && (
        <>
          <div className="breadcrumb mt-3"><a href="#/">Dashboard</a> / <a href="#/exam">Exam Prep</a> / <span>{setupSubj.icon} {setupSubj.title}</span></div>
          <section className="page-hero">
            <h1>🎯 Build your {setupSubj.title} exam</h1>
            <p>Pick the units to draw questions from, then choose how long the exam should be.</p>
          </section>

          <div className="card mt-4">
            <div className="spread">
              <h3 style={{ margin: 0 }}>📚 Units</h3>
              <div className="row" style={{ gap: 8 }}>
                <button className="btn btn-sm" onClick={() => setSelUnits(new Set(setupSubj.units.map((_, i) => i)))}>Select all</button>
                <button className="btn btn-sm" onClick={() => setSelUnits(new Set())}>Clear</button>
              </div>
            </div>
            <div className="grid grid-2 mt-3" style={{ gap: 10 }}>
              {setupSubj.units.map((u, i) => {
                const on = selUnits.has(i);
                const qCount = u.topics.reduce((n, t) => n + (lessonFor(t._id)?.questions?.length ?? 0), 0);
                return (
                  <button key={u.id} className={'card unit-pick' + (on ? ' unit-pick-on' : '')} style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => toggleUnit(i)}>
                    <div className="spread">
                      <div>
                        <div style={{ fontWeight: 700 }}>{on ? '☑' : '☐'} Unit {i + 1}: {u.title}</div>
                        <div className="tiny muted mt-2" style={{ margin: '4px 0 0' }}>{u.topics.length} topics · {qCount} questions</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="card mt-3">
            <h3>✂️ Number of questions</h3>
            <div className="row" style={{ gap: 8 }}>
              {[10, 20, 30, 50].map(n => (
                <button key={n} className={'btn btn-sm ' + (effLen === n ? 'btn-primary' : '')} onClick={() => setLen(n)}>{n}</button>
              ))}
            </div>
            <p className="tiny muted mt-2">
              {poolSize.toLocaleString()} questions available in your selection —
              {poolSize === 0 ? ' pick at least one unit.' : ` exam will use ${Math.min(effLen, poolSize)}.`}
            </p>
          </div>

          <div className="row mt-4" style={{ justifyContent: 'space-between' }}>
            <button className="btn" onClick={() => setSetupKey(null)}>← Back</button>
            <button className="btn btn-primary btn-lg" disabled={busy || poolSize === 0} onClick={() => start(setupKey, selUnits, Math.min(effLen, poolSize))}>
              {busy ? 'Shuffling…' : `▶ Start exam (${Math.min(effLen, poolSize)} Qs, ${selUnits.size} unit${selUnits.size === 1 ? '' : 's'})`}
            </button>
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
              <button className="btn" onClick={() => { setExam(null); setResult(null); openSetup(exam.key, exam.units); }}>⚙️ Change units</button>
              <button className="btn btn-primary" onClick={() => start(exam.key, exam.units, exam.length)}>🔁 Retake</button>
            </div>
          </div>
          {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} />)}
        </>
      )}
    </>
  );
}
