import { useMemo, useState } from 'react';
import NAT_ITEMS from '../data/nat-exams.json';
import { gradeQuiz, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { QuestionCard } from '../components/QuestionCard';
import { ScoreRing, Chip } from '../components/ui';

/* National Exams — real ESSLCE/EUEE past papers (OCR'd, dual-key verified). */

type NatItem = { id: string; subject: string; year: number; q: string; options: string[]; answer: number; type: 'mcq'; explanation: string };
const ITEMS = NAT_ITEMS as NatItem[];

const SUBJECTS: Record<string, { title: string; icon: string }> = {
  biology: { title: 'Biology', icon: '🧬' },
  chemistry: { title: 'Chemistry', icon: '🧪' },
  physics: { title: 'Physics', icon: '🧲' },
  mathematics: { title: 'Mathematics', icon: '📐' },
  civics: { title: 'Civics', icon: '🏛️' },
  english: { title: 'English', icon: '🇬🇧' },
};

function toQuiz(list: NatItem[]): QuizQuestion[] {
  return list.map((it, i) => ({ ...it, _qi: i }) as unknown as QuizQuestion);
}
function shuffle<T>(arr: T[]): T[] { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

type Run = { title: string; icon: string; qs: QuizQuestion[]; yearOf: number[]; subjectOf: string[]; seconds: number };

export default function National() {
  const [setupSubj, setSetupSubj] = useState<string | null>(null);
  const [years, setYears] = useState<Set<number>>(new Set());
  const [len, setLen] = useState(30);
  const [timed, setTimed] = useState(true);
  const [run, setRun] = useState<Run | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [left, setLeft] = useState(0);

  const bySubject = useMemo(() => {
    const m: Record<string, { count: number; years: number[] }> = {};
    for (const it of ITEMS) {
      const e = (m[it.subject] ??= { count: 0, years: [] });
      e.count++;
      if (!e.years.includes(it.year)) e.years.push(it.year);
    }
    return m;
  }, []);

  const subjPool = setupSubj ? ITEMS.filter(i => i.subject === setupSubj) : [];
  const subjYears = setupSubj ? [...new Set(subjPool.map(i => i.year))].sort() : [];
  const filtered = setupSubj ? subjPool.filter(i => years.size === 0 || years.has(i.year)) : [];

  const start = (pool: NatItem[], title: string, icon: string, n: number, minutes: number) => {
    const picked = shuffle(pool).slice(0, n);
    setRun({ title, icon, qs: toQuiz(picked), yearOf: picked.map(p => p.year), subjectOf: picked.map(p => p.subject), seconds: minutes * 60 });
    setAnswers(new Array(picked.length));
    setResult(null);
    setLeft(minutes * 60);
    if (minutes > 0) {
      const iv = setInterval(() => setLeft(s => { if (s <= 1) { clearInterval(iv); return 0; } return s - 1; }), 1000);
    }
  };

  const startSubject = () => {
    const minutes = Math.max(10, Math.round(Math.min(len, filtered.length) * 1.1));
    start(filtered, `${SUBJECTS[setupSubj!].title} past papers`, SUBJECTS[setupSubj!].icon, len, timed ? minutes : 0);
    setSetupSubj(null);
  };
  const startEUEE = () => {
    // EUEE natural-science flavor: even mix across every available subject
    const per = Math.max(5, Math.floor(60 / Math.max(1, Object.keys(bySubject).length)));
    const pool: NatItem[] = [];
    for (const s of Object.keys(bySubject)) pool.push(...shuffle(ITEMS.filter(i => i.subject === s)).slice(0, per));
    start(pool, 'EUEE mixed mock', '🇪🇹', pool.length, 60);
  };

  const submit = () => { if (run) setResult(gradeQuiz(run.qs, answers)); };
  const answered = answers.filter(a => a !== undefined && a !== null && a !== '').length;

  /* ── LANDING ── */
  if (!run && !setupSubj) return (
    <>
      <section className="page-hero">
        <div className="eyebrow">🇪🇹 The Real Thing</div>
        <h1>National Exams — Past Papers</h1>
        <p>The actual ESSLCE Grade 12 university entrance papers, {Object.values(bySubject).reduce((n, s) => n + s.years.length, 0) > 0 && <>years {Math.min(...ITEMS.map(i => i.year))}–{Math.max(...ITEMS.map(i => i.year))} E.C. — </>}OCR'd from the official PDFs and answer-key verified twice.</p>
      </section>
      <div className="card mt-4" style={{ cursor: 'pointer' }} onClick={startEUEE}>
        <div className="spread">
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>🇪🇹 EUEE Mixed Mock</div>
            <div className="tiny muted">~{Math.max(5, Math.floor(60 / Math.max(1, Object.keys(bySubject).length))) * Object.keys(bySubject).length} questions across every subject · 60 min · the full-exam experience</div>
          </div>
          <div style={{ fontSize: '2rem' }}>▶️</div>
        </div>
      </div>
      <h2 className="section-title mt-5">📚 Practice by subject</h2>
      <div className="grid grid-2">
        {Object.entries(SUBJECTS).filter(([k]) => bySubject[k]).map(([k, s]) => (
          <button key={k} className={'card card-hover intl-card subject-' + k} onClick={() => { setSetupSubj(k); setYears(new Set()); }}>
            <div className="spread">
              <div style={{ fontSize: '2rem' }}>{s.icon}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>{s.title}</div>
                <div className="tiny">{bySubject[k].count.toLocaleString()} questions · {bySubject[k].years.sort().join(', ')}</div>
              </div>
            </div>
            <div className="mt-3 row" style={{ gap: 6 }}>
              <Chip text={`🗂️ ${bySubject[k].years.length} exam years`} cls="chip-subject" />
              <Chip text="✅ dual-key verified" />
            </div>
          </button>
        ))}
      </div>
      <p className="tiny muted mt-4">⚖️ Unofficial practice tool. Papers are reproduced from publicly circulated ESSLCE past exams for study purposes; EthioStudy is not affiliated with NEAEA. Answers verified via the official key grid cross-checked against inline answer ticks.</p>
    </>
  );

  /* ── SUBJECT SETUP ── */
  if (!run && setupSubj) {
    const s = SUBJECTS[setupSubj];
    return (
      <>
        <div className="breadcrumb mt-3"><a href="#/">Dashboard</a> / <a href="#/national">National Exams</a> / <span>{s.icon} {s.title}</span></div>
        <section className="page-hero"><h1>{s.icon} {s.title} past papers</h1><p>{subjPool.length.toLocaleString()} questions from the real national exams.</p></section>
        <div className="card mt-4">
          <h3>🗂️ Exam years (E.C.)</h3>
          <div className="row" style={{ gap: 8 }}>
            <button className={'btn btn-sm ' + (years.size === 0 ? 'btn-primary' : '')} onClick={() => setYears(new Set())}>All years</button>
            {subjYears.map(y => (
              <button key={y} className={'btn btn-sm ' + (years.has(y) ? 'btn-primary' : '')} onClick={() => setYears(p => { const n = new Set(p); n.has(y) ? n.delete(y) : n.add(y); return n; })}>{y}</button>
            ))}
          </div>
          <p className="tiny muted mt-2">{filtered.length.toLocaleString()} questions in selection.</p>
        </div>
        <div className="card mt-3">
          <h3>✂️ Length</h3>
          <div className="row" style={{ gap: 8 }}>
            {[10, 20, 30, 50, 100].map(n => <button key={n} className={'btn btn-sm ' + (len === n ? 'btn-primary' : '')} onClick={() => setLen(n)}>{n} Qs</button>)}
          </div>
          <div className="row mt-3" style={{ gap: 8 }}>
            <button className={'btn btn-sm ' + (timed ? 'btn-primary' : '')} onClick={() => setTimed(true)}>⏱ Timed (~1.1 min/question)</button>
            <button className={'btn btn-sm ' + (!timed ? 'btn-primary' : '')} onClick={() => setTimed(false)}>🐢 Untimed</button>
          </div>
        </div>
        <div className="row mt-4" style={{ justifyContent: 'space-between' }}>
          <button className="btn" onClick={() => setSetupSubj(null)}>← Back</button>
          <button className="btn btn-primary btn-lg" disabled={filtered.length === 0} onClick={startSubject}>▶ Start practice ({Math.min(len, filtered.length)} Qs)</button>
        </div>
      </>
    );
  }

  /* ── RUNNING / RESULTS ── */
  if (!run) return null;
  const effLeft = run.seconds === 0 ? 0 : left;
  const auto = run.seconds > 0 && left === 0 && !result;
  if (auto && !result) setTimeout(submit, 0);

  return (
    <>
      {!result ? (
        <>
          <div className="spread mt-3">
            <div className="breadcrumb" style={{ margin: 0 }}><span>{run.icon} {run.title}</span></div>
            {run.seconds > 0 && <Chip text={`${Math.floor(effLeft / 60)}:${String(effLeft % 60).padStart(2, '0')}`} cls={effLeft < 120 ? 'chip-diff-hard' : 'chip-subject'} />}
          </div>
          {run.seconds > 0 && <div className="progress mt-2"><div style={{ width: (effLeft / run.seconds) * 100 + '%' }} /></div>}
          <div className="progress mt-2"><div style={{ width: (answered / run.qs.length) * 100 + '%' }} /></div>
          <div className="tiny muted mt-2">{answered}/{run.qs.length} answered</div>
          <div className="mt-4">
            {run.qs.map((q, i) => (
              <QuestionCard key={i} q={q} index={i} answer={answers[i]}
                onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
            ))}
          </div>
          <div className="row mt-4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={submit}>{answered < run.qs.length ? `Submit with ${run.qs.length - answered} unanswered` : 'Submit exam ✓'}</button>
          </div>
        </>
      ) : (
        <>
          <div className="card mt-4" style={{ textAlign: 'center' }}>
            <h2 style={{ color: result.pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{result.grade.emoji} {result.pct}% — {result.grade.label}</h2>
            <p className="muted">{run.title} · {result.correct}/{result.total} correct</p>
            <ScoreRing pct={result.pct} />
            <p className="mt-3">{result.feedback}</p>
          </div>
          <div className="card mt-3">
            <h3>📊 Year diagnostic — how you did per exam year</h3>
            {[...new Set(run.yearOf)].sort().map(y => {
              const idxs = run.yearOf.map((v, i) => v === y ? i : -1).filter(i => i >= 0);
              const c = idxs.filter(i => result.perQ[i].correct).length;
              const pct = Math.round((c / idxs.length) * 100);
              return (
                <div key={y} className="diag-row">
                  <span className="diag-name">{y} E.C.</span>
                  <div className="diag-bar"><div style={{ width: pct + '%', background: pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning, #eab308)' : 'var(--danger)' }} /></div>
                  <span className="diag-num" style={{ color: pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{c}/{idxs.length}</span>
                </div>
              );
            })}
            {new Set(run.subjectOf).size > 1 && (
              <>
                <h3 className="mt-4">📚 Subject diagnostic</h3>
                {[...new Set(run.subjectOf)].map(s => {
                  const idxs = run.subjectOf.map((v, i) => v === s ? i : -1).filter(i => i >= 0);
                  const c = idxs.filter(i => result.perQ[i].correct).length;
                  const pct = Math.round((c / idxs.length) * 100);
                  return (
                    <div key={s} className="diag-row">
                      <span className="diag-name">{SUBJECTS[s]?.icon} {SUBJECTS[s]?.title ?? s}</span>
                      <div className="diag-bar"><div style={{ width: pct + '%', background: pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning, #eab308)' : 'var(--danger)' }} /></div>
                      <span className="diag-num" style={{ color: pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{c}/{idxs.length}</span>
                    </div>
                  );
                })}
              </>
            )}
            <div className="row mt-3" style={{ justifyContent: 'center' }}>
              <button className="btn" onClick={() => { setRun(null); setResult(null); }}>🇪🇹 Another exam</button>
            </div>
          </div>
          {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} />)}
        </>
      )}
    </>
  );
}
