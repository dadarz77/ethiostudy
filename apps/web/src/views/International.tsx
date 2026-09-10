import { useEffect, useMemo, useRef, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { ALL_TOPICS, lessonFor, loadAllLessons } from '../lib/curriculum';
import { areaPools, sampleProportional, INTL_EXAMS, type IntlExam } from '../data/intl-maps';
import { gradeQuiz, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { QuestionCard } from '../components/QuestionCard';
import { ScoreRing, Chip } from '../components/ui';

type Pool = { q: unknown; tid: string; areaId: string };

/** International Exams — IGCSE / Digital SAT practice from the EthioStudy bank. */
export default function International() {
  const logQuiz = useAppStore(s => s.logQuiz);
  const [setup, setSetup] = useState<IntlExam | null>(null);
  const [counts, setCounts] = useState<Record<string, boolean>>({});   // areaId -> on
  const [len, setLen] = useState(30);
  const [timed, setTimed] = useState(true);
  const [secsLeft, setSecsLeft] = useState(0);
  const [exam, setExam] = useState<{ exam: IntlExam; qs: QuizQuestion[]; areaOf: string[]; seconds: number } | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [busy, setBusy] = useState(false);
  const startedAt = useRef(0);

  // live pool sizes for the open setup
  const pools = useMemo(() => (setup ? areaPools(setup, tid => lessonFor(tid) as never, ALL_TOPICS as never) : null), [setup]);
  const selectedTotal = pools?.filter(p => counts[p.area.id]).reduce((n, p) => n + p.pool.length, 0) ?? 0;
  const minutes = Math.max(10, Math.round(len * (setup ? setup.defaults.minutes / setup.defaults.count : 1.5)));
  const effLeft = exam ? secsLeft : 0;

  const openSetup = async (e: IntlExam) => {
    setBusy(true);
    await loadAllLessons();
    setSetup(e);
    setCounts(Object.fromEntries(e.areas.map(a => [a.id, true])));
    setLen(Math.min(e.defaults.count, 40));
    setExam(null); setResult(null);
    setBusy(false);
    startedAt.current = Date.now();
  };

  const start = () => {
    if (!setup || !pools) return;
    const slices = pools.filter(p => counts[p.area.id]);
    const picked = sampleProportional(slices as never, len) as Pool[];
    if (picked.length === 0) return;
    startedAt.current = Date.now();
    setSecsLeft(minutes * 60);
    setExam({
      exam: setup, seconds: minutes * 60,
      qs: picked.map((p, i) => Object.assign({ _qi: i }, p.q) as QuizQuestion),
      areaOf: picked.map(p => p.areaId),
    });
    setAnswers([]); setResult(null);
    setSetup(null);
  };

  const running = timed && !!exam && !result;
  useEffect(() => {
    if (!running || !exam) return;
    const iv = setInterval(() => {
      const left = exam.seconds - Math.floor((Date.now() - startedAt.current) / 1000);
      setSecsLeft(Math.max(0, left));
      if (left <= 0) { clearInterval(iv); submitRef.current(true); }
    }, 1000);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const submit = (auto = false) => {
    if (!exam) return;
    void auto;
    const r = gradeQuiz(exam.qs, answers);
    setResult(r);
    const perArea = new Map<string, { c: number; n: number }>();
    r.perQ.forEach((p, i) => {
      const aid = exam.areaOf[i];
      const cur = perArea.get(aid) ?? { c: 0, n: 0 };
      cur.n++; if (p.correct) cur.c++;
      perArea.set(aid, cur);
    });
    for (const [aid, { c, n }] of perArea) {
      const tid = 'intl:' + exam.exam.id + ':' + aid;
      logQuiz(tid, c, n, Math.round((c / n) * 100), c < n ? [tid] : []);
    }
  };

  const answered = answers.filter(a => a !== undefined && a !== null && a !== '').length;

  // keep the latest submit visible to the interval's stale closure
  const submitRef = useRef(submit);
  submitRef.current = submit;

  return (
    <>
      {/* ── LANDING: exam picker ── */}
      {!setup && !exam && (
        <>
          <section className="page-hero">
            <div className="eyebrow">Global Ready</div>
            <h1>🌍 International Exams</h1>
            <p>Practice Cambridge IGCSE® and Digital SAT® formats using the EthioStudy question bank — sampled proportionally across official content areas, scored with a per-area diagnostic.</p>
          </section>

          <h2 className="section-title mt-4">🇬🇧 Cambridge IGCSE®</h2>
          <div className="grid grid-2">
            {INTL_EXAMS.filter(e => e.brand === 'igcse').map(e => <Card key={e.id} e={e} onOpen={openSetup} busy={busy} />)}
          </div>

          <h2 className="section-title mt-5">🇺🇸 Digital SAT®</h2>
          <div className="grid grid-2">
            {INTL_EXAMS.filter(e => e.brand === 'sat').map(e => <Card key={e.id} e={e} onOpen={openSetup} busy={busy} />)}
          </div>

          <p className="tiny muted mt-4">⚖️ Unofficial practice tools. EthioStudy is not affiliated with or endorsed by Cambridge Assessment or the College Board. Exam names are trademarks of their respective owners; content areas are published syllabus outlines, and every question comes from our own curriculum bank.</p>
        </>
      )}

      {/* ── SETUP: areas + length + timing ── */}
      {setup && !exam && pools && (
        <>
          <div className="breadcrumb mt-3"><a href="#/">Dashboard</a> / <a href="#/international">International</a> / <span>{setup.icon} {setup.title}</span></div>
          <section className="page-hero">
            <h1>{setup.brandLabel} · {setup.title}</h1>
            <p>{setup.blurb}</p>
          </section>

          <div className="card mt-4">
            <h3>🗺️ Content areas (from the official syllabus)</h3>
            {pools.map(p => {
              const on = counts[p.area.id];
              const share = selectedTotal > 0 && on ? Math.min(p.pool.length, Math.round(len * p.pool.length / selectedTotal)) : 0;
              return (
                <button key={p.area.id} className={'area-row' + (on ? ' area-on' : '')} onClick={() => setCounts(c => ({ ...c, [p.area.id]: !c[p.area.id] }))}>
                  <span className="area-check">{on ? '☑' : '☐'}</span>
                  <span className="area-name">{p.area.name}</span>
                  <span className="tiny muted">{p.pool.length.toLocaleString()} Qs {on && share ? `· ~${share} in exam` : ''}</span>
                </button>
              );
            })}
            <div className="row mt-3" style={{ gap: 8 }}>
              <button className="btn btn-sm" onClick={() => setCounts(Object.fromEntries(setup.areas.map(a => [a.id, true])))}>Select all</button>
              <button className="btn btn-sm" onClick={() => setCounts({})}>Clear</button>
            </div>
          </div>

          <div className="card mt-3">
            <h3>✂️ Exam length & mode</h3>
            <div className="row" style={{ gap: 8 }}>
              {[10, 20, 30, 40, 50].map(n => (
                <button key={n} className={'btn btn-sm ' + (len === n ? 'btn-primary' : '')} onClick={() => setLen(n)}>{n} Qs</button>
              ))}
            </div>
            <div className="row mt-3" style={{ gap: 8 }}>
              <button className={'btn btn-sm ' + (timed ? 'btn-primary' : '')} onClick={() => setTimed(true)}>⏱ Timed · {minutes} min</button>
              <button className={'btn btn-sm ' + (!timed ? 'btn-primary' : '')} onClick={() => setTimed(false)}>🐢 Untimed</button>
            </div>
            <p className="tiny muted mt-2">
              {selectedTotal === 0 ? 'Select at least one content area.' : `${Math.min(len, selectedTotal).toLocaleString()} questions, spread proportionally over ${Object.values(counts).filter(Boolean).length} area(s).`}
            </p>
          </div>

          <div className="row mt-4" style={{ justifyContent: 'space-between' }}>
            <button className="btn" onClick={() => setSetup(null)}>← Back</button>
            <button className="btn btn-primary btn-lg" disabled={selectedTotal === 0} onClick={start}>
              ▶ Start {setup.brand === 'sat' ? 'SAT' : 'IGCSE'} practice
            </button>
          </div>
        </>
      )}

      {/* ── RUNNING ── */}
      {exam && !result && (
        <>
          <div className="spread mt-3">
            <div className="breadcrumb" style={{ margin: 0 }}><span>{exam.exam.icon} {exam.exam.title} · {exam.exam.brandLabel}</span></div>
            {timed && (
              <Chip text={fmt(effLeft)} cls={effLeft < 120 ? 'chip-diff-hard' : 'chip-subject'} />
            )}
          </div>
          {timed && <div className="progress mt-2"><div style={{ width: (effLeft / exam.seconds) * 100 + '%' }} /></div>}
          <div className="progress mt-2"><div style={{ width: (answered / exam.qs.length) * 100 + '%' }} /></div>
          <div className="tiny muted mt-2">{answered}/{exam.qs.length} answered</div>
          <div className="mt-4">
            {exam.qs.map((q, i) => (
              <QuestionCard key={i} q={q} index={i} answer={answers[i]}
                onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
            ))}
          </div>
          <div className="row mt-4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={() => submit()}>
              {answered < exam.qs.length ? `Submit with ${exam.qs.length - answered} unanswered` : 'Submit exam ✓'}
            </button>
          </div>
        </>
      )}

      {/* ── RESULTS + area diagnostic ── */}
      {exam && result && (
        <>
          <div className="card mt-4" style={{ textAlign: 'center' }}>
            <h2 style={{ color: result.pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{result.grade.emoji} {result.pct}% — {result.grade.label}</h2>
            <p className="muted">{exam.exam.title} · {result.correct}/{result.total} correct</p>
            <ScoreRing pct={result.pct} />
            <p className="mt-3">{result.feedback}</p>
          </div>

          <div className="card mt-3">
            <h3>📊 Area diagnostic — where you stand per syllabus area</h3>
            {exam.exam.areas.map(a => {
              const idxs = exam.areaOf.map((id, i) => id === a.id ? i : -1).filter(i => i >= 0);
              if (idxs.length === 0) return null;
              const c = idxs.filter(i => result.perQ[i].correct).length;
              const pct = Math.round((c / idxs.length) * 100);
              return (
                <div key={a.id} className="diag-row">
                  <span className="diag-name">{a.name}</span>
                  <div className="diag-bar"><div style={{ width: pct + '%', background: pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning, #eab308)' : 'var(--danger)' }} /></div>
                  <span className="diag-num" style={{ color: pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{c}/{idxs.length}</span>
                </div>
              );
            })}
            <p className="tiny muted mt-3">🔁 Tip: run the same exam again — questions reshuffle and the weakest areas get more coverage on the next pass.</p>
            <div className="row mt-3" style={{ justifyContent: 'center' }}>
              <button className="btn" onClick={() => { setExam(null); setResult(null); }}>🌍 Another exam</button>
              <button className="btn btn-primary" onClick={() => { openSetup(exam.exam).then(() => { /* setup reopened with defaults */ }); }}>⚙️ Adjust & retake</button>
            </div>
          </div>

          {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} />)}
        </>
      )}
    </>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}

function Card({ e, onOpen, busy }: { e: IntlExam; onOpen: (e: IntlExam) => void; busy: boolean }) {
  return (
    <button className={'card card-hover intl-card subject-' + e.subject} disabled={busy} onClick={() => onOpen(e)}>
      <div className="spread">
        <div style={{ fontSize: '2rem' }}>{e.icon}</div>
        <div style={{ textAlign: 'right' }}>
          <div className="tiny muted">{e.brandLabel}</div>
          <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>{e.title}</div>
        </div>
      </div>
      <p className="tiny muted mt-2" style={{ margin: '8px 0 0' }}>{e.blurb}</p>
      <div className="mt-3 row" style={{ gap: 6 }}>
        <Chip text={`🗺️ ${e.areas.length} content areas`} cls="chip-subject" />
        <Chip text={`⏱ default ${e.defaults.count} Qs / ${e.defaults.minutes} min`} />
      </div>
    </button>
  );
}
