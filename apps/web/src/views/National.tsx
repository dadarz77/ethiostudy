import { useEffect, useMemo, useRef, useState } from 'react';
import { useAppStore, type Bookmark } from '../store/useAppStore';
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

/* Group a graded run by subject so each national-exam score logs to the
   student's progress under a virtual `natl:<subject>` topic id. Pure — unit-tested. */
export function bySubjectGroups(subjectOf: string[], perQ: { correct: boolean }[]) {
  const g: Record<string, { c: number; n: number }> = {};
  perQ.forEach((p, i) => {
    const e = (g[subjectOf[i]] ??= { c: 0, n: 0 });
    e.n++; if (p.correct) e.c++;
  });
  return g;
}

function bm(q: QuizQuestion): Omit<Bookmark, 'at'> {
  const it = q as unknown as NatItem;
  const subj = SUBJECTS[it.subject]?.title ?? it.subject;
  return {
    id: it.id, kind: 'question', topicId: 'natl:' + it.subject,
    label: it.q.length > 90 ? it.q.slice(0, 90) + '…' : it.q,
    sub: subj + ' · ' + it.year + ' E.C.',
  };
}

function toQuiz(list: NatItem[]): QuizQuestion[] {
  return list.map((it, i) => ({ ...it, _qi: i }) as unknown as QuizQuestion);
}
function shuffle<T>(arr: T[]): T[] { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

interface Run { title: string; icon: string; qs: QuizQuestion[]; yearOf: number[]; subjectOf: string[]; seconds: number; startedAt: number; answers?: unknown[]; flags?: number[] }

/* ── Mistakes Bank ──
   Persistent per-question record of every national-exam question the student
   has gotten wrong, with a miss count. Surfaces a "practice my mistakes" pool
   so retrieval practice concentrates on weak spots (spacing/testing effect). */
export const BANK_KEY = 'ethiostudy_natl_bank';
export interface BankEntry { id: string; misses: number; lastAt: number }
export function loadBank(): Record<string, BankEntry> {
  try {
    const r = JSON.parse(localStorage.getItem(BANK_KEY) || '{}');
    return r && typeof r === 'object' ? r as Record<string, BankEntry> : {};
  } catch { return {}; }
}
export function saveBank(b: Record<string, BankEntry>) { try { localStorage.setItem(BANK_KEY, JSON.stringify(b)); } catch { /* quota */ } }
/* Pure: fold a graded run's misses into the bank (bump counts). Returns the new bank. Unit-tested. */
export function applyMisses(bank: Record<string, BankEntry>, items: { id: string }[], perCorrect: boolean[], now: number): Record<string, BankEntry> {
  const next: Record<string, BankEntry> = { ...bank };
  items.forEach((it, i) => {
    if (perCorrect[i]) return;
    const e = next[it.id];
    next[it.id] = e ? { ...e, misses: e.misses + 1, lastAt: now } : { id: it.id, misses: 1, lastAt: now };
  });
  return next;
}
/* Pure: entries ordered most-missed first, then most-recent. Unit-tested. */
export function bankRanked(bank: Record<string, BankEntry>): NatItem[] {
  const ids = Object.keys(bank).sort((a, b) => bank[b].misses - bank[a].misses || bank[b].lastAt - bank[a].lastAt);
  const byId: Record<string, NatItem> = {};
  for (const it of ITEMS) byId[it.id] = it;
  return ids.filter(id => byId[id]).map(id => byId[id]);
}

/* ── Refresh-proof session persistence ──
   The whole run (questions + answers + clock anchor) survives F5/closure. */
export const RUN_KEY = 'ethiostudy_natl_run';
export const RES_KEY = 'ethiostudy_natl_res';
export function loadRun(): Run | null {
  try {
    const r = JSON.parse(localStorage.getItem(RUN_KEY) || 'null');
    return r && Array.isArray(r.qs) && r.qs.length ? r as Run : null;
  } catch { return null; }
}
export function saveRun(r: Run | null) { try { r ? localStorage.setItem(RUN_KEY, JSON.stringify(r)) : localStorage.removeItem(RUN_KEY); } catch { /* quota */ } }
export function saveRes(v: unknown | null) { try { v ? localStorage.setItem(RES_KEY, JSON.stringify(v)) : localStorage.removeItem(RES_KEY); } catch { /* quota */ } }
export function clearSession() { saveRun(null); saveRes(null); }

/* Keyboard answering (UWorld-style): 1-9 answers the question currently in the
   viewport middle band, j/k (or arrows) jump between questions, f flags it.
   Disabled while typing in inputs. Pure-ish hook so the exam stays mouse-only fine. */
function useCurrentQuestion(active: boolean, count: number) {
  const curRef = useRef(0);
  useEffect(() => {
    if (!active) return;
    const obs = new IntersectionObserver(entries => {
      for (const en of entries) if (en.isIntersecting) {
        const idx = parseInt((en.target as HTMLElement).id.replace('natl-q-', ''), 10);
        if (!Number.isNaN(idx)) curRef.current = idx;
      }
    }, { rootMargin: '-40% 0px -40% 0px' });
    for (let i = 0; i < count; i++) {
      const el = document.getElementById('natl-q-' + i);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [active, count]);
  return curRef;
}

export default function National() {
  const logQuiz = useAppStore(s => s.logQuiz);
  const [setupSubj, setSetupSubj] = useState<string | null>(null);
  const [years, setYears] = useState<Set<number>>(new Set());
  const [len, setLen] = useState(30);
  const [timed, setTimed] = useState(true);
  const [run, setRunRaw] = useState<Run | null>(() => loadRun());
  const [paperView, setPaperView] = useState<{ title: string; items: NatItem[] } | null>(null);
  const setRun = (r: Run | null) => { setRunRaw(r); saveRun(r); };
  const [answers, setAnswersRaw] = useState<unknown[]>(() => { const r = loadRun(); return r && r.answers?.length === r.qs.length ? r.answers : (r?.qs ?? []).map(() => undefined); });
  const setAnswers = (updater: unknown[] | ((prev: unknown[]) => unknown[])) => setAnswersRaw(prev => {
    const n = typeof updater === 'function' ? (updater as (p: unknown[]) => unknown[])(prev) : updater;
    try { const r = loadRun(); if (r) saveRun({ ...r, answers: n }); } catch { /* ignore */ }
    return n;
  });
  const [result, setResultRaw] = useState<QuizResult | null>(null);
  const [streakExtended, setStreakExtended] = useState(false);
  const scoreCardRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<QuizResult | null>(null);
  resultRef.current = result;
  const submittedRef = useRef(!!resultRef.current);
  const setResult = (r: QuizResult | null) => {
    setResultRaw(r);
    saveRes(r ? { correct: r.correct, total: r.total, pct: r.pct, grade: r.grade, feedback: r.feedback, perQ: r.perQ.map(x => x.correct) } : null);
  };
  const [left, setLeft] = useState(() => { const r = loadRun(); return r && r.seconds > 0 ? Math.max(0, r.seconds - Math.floor((Date.now() - r.startedAt) / 1000)) : 0; });
  const [bank, setBankRaw] = useState<Record<string, BankEntry>>(() => loadBank());
  const setBank = (b: Record<string, BankEntry>) => { setBankRaw(b); saveBank(b); };
  const [flags, setFlagsRaw] = useState<Set<number>>(() => new Set(loadRun()?.flags ?? []));
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const setFlags = (updater: Set<number> | ((prev: Set<number>) => Set<number>)) => setFlagsRaw(prev => {
    const n = typeof updater === 'function' ? (updater as (p: Set<number>) => Set<number>)(prev) : updater;
    try { const r = loadRun(); if (r) saveRun({ ...r, flags: [...n] }); } catch { /* ignore */ }
    return n;
  });

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
    const fresh: Run = { title, icon, qs: toQuiz(picked), yearOf: picked.map(p => p.year), subjectOf: picked.map(p => p.subject), seconds: minutes * 60, startedAt: Date.now() };
    submittedRef.current = false;
    setRun(fresh);
    setAnswers(new Array(picked.length).fill(undefined));
    setFlags(new Set());
    setResult(null);
    setLeft(minutes * 60);
    setConfirmSubmit(false);
  };
  /* Practice the exact questions missed in the finished run (#5 wrong-only). */
  const practiceMistakes = (fromFlagged = false) => {
    if (!run || !result) return;
    const idxs = result.perQ.map((pq, i) => (fromFlagged ? (flags.has(i) ? pq.index : -1) : (pq.correct ? -1 : pq.index))).filter(i => i >= 0);
    const picked = idxs.map(i => run.qs[i] as unknown as NatItem);
    const title = fromFlagged ? 'Flagged for review' : 'My mistakes';
    start(picked, title, fromFlagged ? '⚑' : '🎯', picked.length, 0);
  };
  /* Start from the mistakes bank pool (most-missed first). */
  const practiceBank = () => {
    const pool = bankRanked(bank);
    if (!pool.length) return;
    const n = Math.min(len, pool.length);
    start(pool.slice(0, n), 'Mistakes Bank drill', '🥅', n, 0);
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

  const submit = (auto = false) => {
    void auto;
    if (!run || submittedRef.current) return;   // one graded submission per run — expiry/restore can't double-fire
    submittedRef.current = true;
    const r = gradeQuiz(run.qs, answers);
    setResult(r);
    // Bank every miss for "practice my mistakes" drills (only on a fresh submit —
    // restored/flagged re-grades must not double-count).
    if (!auto) setBank(applyMisses(loadBank(), run.qs as unknown as { id: string }[], r.perQ.map(x => x.correct), Date.now()));
    // Feed the flagship feature into the same progress/streak engine as curriculum quizzes.
    const before = useAppStore.getState().streak.current;
    for (const [subj, { c, n }] of Object.entries(bySubjectGroups(run.subjectOf, r.perQ))) {
      if (n > 0) logQuiz('natl:' + subj, c, n, Math.round((c / n) * 100));
    }
    const after = useAppStore.getState().streak.current;
    setStreakExtended(after > before);
    // NN/g: scroll the outcome into view — the student shouldn't have to hunt for it
    requestAnimationFrame(() => setTimeout(() => scoreCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60));
  };
  const answered = answers.filter(a => a !== undefined && a !== null && a !== '').length;
  /* ── keyboard answering (#8) ── */
  const curRef = useCurrentQuestion(!!run && !result, run?.qs.length ?? 0);
  const jumpTo = (i: number) => document.getElementById('natl-q-' + i)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  useEffect(() => {
    if (!run || result) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      const k = e.key.toLowerCase();
      const i = curRef.current;
      if (/^[1-9]$/.test(k)) {
        const q = run.qs[i] as unknown as NatItem;
        const oi = parseInt(k, 10) - 1;
        if (q && oi < (q.options?.length ?? 0)) {
          e.preventDefault();
          setAnswers(prev => { const n = [...prev]; n[i] = oi; return n; });
        }
        return;
      }
      if (k === 'j' || e.key === 'ArrowDown') { e.preventDefault(); jumpTo(Math.min(i + 1, run.qs.length - 1)); return; }
      if (k === 'k' || e.key === 'ArrowUp') { e.preventDefault(); jumpTo(Math.max(i - 1, 0)); return; }
      if (k === 'f') { e.preventDefault(); setFlags(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; }); return; }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!run, !!result, run?.qs.length]);

  /* restore a persisted result after refresh: rebuild QuizResult against the run's questions */
  useEffect(() => {
    if (!run || resultRef.current) return;
    try {
      const saved = JSON.parse(localStorage.getItem(RES_KEY) || 'null');
      if (saved && Array.isArray(saved.perQ) && saved.perQ.length === run.qs.length) {
        submittedRef.current = true;
        setResultRaw({ ...saved, perQ: run.qs.map((q, i) => ({ q, correct: !!saved.perQ[i] })) });
      }
    } catch { /* corrupt snapshot — start clean */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  /* real-clock countdown: survives throttling, resumes correctly after refresh,
     cleans up on unmount, and auto-submits exactly once via the latest closure. */
  const submitRef = useRef(submit);
  submitRef.current = submit;
  useEffect(() => {
    if (!run || run.seconds === 0 || result) return;
    const tick = () => {
      const rem = run.seconds - Math.floor((Date.now() - run.startedAt) / 1000);
      setLeft(Math.max(0, rem));
      if (rem <= 0) submitRef.current(true);
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [run, result]);

  /* ── LANDING ── */
  if (!run && !setupSubj && !paperView) return (
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
      {(() => { const ranked = bankRanked(bank); const n = Math.min(len, ranked.length); return n > 0 && (
        <div className="card mt-4 bank-card" style={{ cursor: 'pointer' }} onClick={practiceBank}>
          <div className="spread">
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>🥅 Mistakes Bank — {ranked.length} question{ranked.length > 1 ? 's' : ''} you've missed</div>
              <div className="tiny muted">Re-drill your weak spots, most-missed first · {n} questions (untimed). Backed by the testing effect: retrieval practice on what you got wrong is the strongest memory workout there is.</div>
            </div>
            <div style={{ fontSize: '2rem' }}>🎯</div>
          </div>
        </div>
      ); })()}
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
  if (!run && setupSubj && !paperView) {
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
          <div className="row" style={{ gap: 8 }}>
            <button className="btn" disabled={filtered.length === 0} onClick={() => setPaperView({ title: `${s.title} — papers ${subjYears[0]}–${subjYears[subjYears.length - 1]} E.C.`, items: filtered })}>📖 Read as paper</button>
            <button className="btn btn-primary btn-lg" disabled={filtered.length === 0} onClick={startSubject}>▶ Start practice ({Math.min(len, filtered.length)} Qs)</button>
          </div>
        </div>
      </>
    );
  }


  /* ── PAPER VIEW (#7): read the actual exam as it was printed, answer key hidden ── */
  if (paperView) {
    const groups: Record<number, NatItem[]> = {};
    for (const it of paperView.items) (groups[it.year] ??= []).push(it);
    return (
      <>
        <div className="breadcrumb mt-3"><a href="#/">Dashboard</a> / <a href="#/national">National Exams</a> / <span>📖 Paper view</span></div>
        <section className="page-hero"><h1>📖 {paperView.title}</h1><p>Read it exactly like the printed exam. The answer key stays hidden until you say so — test yourself first, then check.</p></section>
        <div className="row mt-2" style={{ justifyContent: 'space-between' }}>
          <button className="btn" onClick={() => setPaperView(null)}>← Back to setup</button>
          <button className="btn" onClick={() => { start(paperView.items, 'Full paper (all years)', '📖', paperView.items.length, 0); setPaperView(null); }}>▶ Turn this selection into a timed exam</button>
        </div>
        {Object.keys(groups).map(Number).sort().map(y => (
          <div key={y} className="paper-section">
            <h2 className="section-title mt-5">🇪🇹 {y} E.C. — {groups[y].length} questions</h2>
            {groups[y].map((it, i) => (
              <div key={it.id} className="paper-q card">
                <div className="paper-q-num">{i + 1}.</div>
                <div style={{ flex: 1 }}>
                  <div>{it.q}</div>
                  <ol type="A" className="paper-opts">{it.options.map((o, oi) => <li key={oi}>{o}</li>)}</ol>
                </div>
              </div>
            ))}
          </div>
        ))}
        <details className="card mt-5 paper-key">
          <summary style={{ cursor: 'pointer', fontWeight: 800, fontSize: '1.05rem' }}>🔑 Answer key — tap to reveal (all {paperView.items.length} questions)</summary>
          {Object.keys(groups).map(Number).sort().map(y => (
            <div key={y} className="mt-3">
              <b>{y} E.C.</b>
              <div className="key-grid">{groups[y].map((it, i) => <span key={it.id} className="key-cell">{i + 1} · <b>{String.fromCharCode(65 + it.answer)}</b></span>)}</div>
            </div>
          ))}
          <p className="tiny muted mt-3">Letters map to options A–E. Explanations live in practice mode — run it as an exam above to see the why.</p>
        </details>
      </>
    );
  }

  /* ── RUNNING / RESULTS ── */
  if (!run) return null;
  const effLeft = run.seconds === 0 ? 0 : left;

  return (
    <>
      {!result ? (
        <>
          <div className="spread mt-3">
            <div className="breadcrumb" style={{ margin: 0 }}><span>{run.icon} {run.title}</span></div>
            {run.seconds > 0 && (
              <Chip text={`${Math.floor(effLeft / 60)}:${String(effLeft % 60).padStart(2, '0')}`} cls={effLeft <= 60 ? 'chip-diff-hard timer-urgent' : effLeft < 120 ? 'chip-diff-hard' : 'chip-subject'} />
            )}
          </div>
          {run.seconds > 0 && <div className="progress mt-2"><div style={{ width: (effLeft / run.seconds) * 100 + '%' }} /></div>}
          <div className="progress mt-2"><div style={{ width: (answered / run.qs.length) * 100 + '%' }} /></div>
          <div className="tiny kbd-hint mt-2">⌨️ <b>1–5</b> answer · <b>J/K</b> next/prev · <b>F</b> flag</div>
          <div className="tiny muted" aria-live="polite">{answered}/{run.qs.length} answered{effLeft <= 60 && run.seconds > 0 && <span className="timer-urgent-text"> · ⚠️ under a minute — start wrapping up</span>}</div>
          <nav className="q-nav" aria-label="Question navigator">
            {run.qs.map((_, i) => {
              const done = answers[i] !== undefined && answers[i] !== null && answers[i] !== '';
              const flg = flags.has(i);
              return (
                <button key={i} className={'q-dot' + (done ? ' answered' : '') + (flg ? ' flagged' : '')} title={'Question ' + (i + 1) + (done ? ' (answered)' : ' (unanswered)') + (flg ? ' · flagged ⚑' : '')}
                  aria-label={'Go to question ' + (i + 1)} aria-current={!done ? 'true' : undefined}
                  onClick={() => document.getElementById('natl-q-' + i)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>{i + 1}</button>
              );
            })}
          </nav>
          <div className="mt-4">
            {run.qs.map((q, i) => (
              <div key={i} id={'natl-q-' + i} style={{ scrollMarginTop: 70 }}>
                <QuestionCard q={q} index={i} answer={answers[i]}
                  onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} bookmark={bm(q)}
                  flag={{ on: flags.has(i), onToggle: () => setFlags(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; }) }} />
              </div>
            ))}
          </div>
          <div className="row mt-4" style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            {answered === run.qs.length && <div className="tiny" style={{ color: 'var(--success)' }} aria-live="polite">✨ All {run.qs.length} answered — you're ready to submit</div>}
            {flags.size > 0 && <div className="tiny muted">⚑ {flags.size} flagged for review</div>}
            {answered < run.qs.length && !confirmSubmit ? (
              <button className="btn btn-lg" onClick={() => setConfirmSubmit(true)}>Submit exam</button>
            ) : answered < run.qs.length ? (
              <div className="submit-guard" role="alert">
                <div className="tiny" style={{ fontWeight: 700 }}>⚠️ {run.qs.length - answered} question{run.qs.length - answered > 1 ? 's' : ''} still unanswered:</div>
                <div className="row mt-2" style={{ justifyContent: 'center', gap: 8 }}>
                  <button className="btn" onClick={() => { const first = answers.findIndex(a => a === undefined || a === null || a === ''); if (first >= 0) jumpTo(first); setConfirmSubmit(false); }}>← Go back to them</button>
                  <button className="btn btn-danger btn-primary" onClick={() => submit()}>Submit anyway ({answered}/{run.qs.length} answered)</button>
                </div>
              </div>
            ) : (
              <button className="btn btn-primary btn-lg" onClick={() => submit()}>Submit exam ✓</button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="card mt-4" ref={scoreCardRef} style={{ textAlign: 'center', scrollMarginTop: 70 }}>
            {streakExtended && <div className="streak-moment" aria-live="polite">🔥 Streak extended — you showed up today!</div>}
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
            {(() => {
              const nWrong = result.perQ.filter(p => !p.correct).length;
              const nFlag = flags.size;
              return (
                <div className="row mt-3" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                  {nWrong > 0 && <button className="btn btn-primary" onClick={() => practiceMistakes(false)}>🎯 Practice my mistakes ({nWrong})</button>}
                  {nWrong === 0 && <div className="tiny" style={{ color: 'var(--success)' }}>💯 Flawless — nothing to re-drill!</div>}
                  {nFlag > 0 && <button className="btn" onClick={() => practiceMistakes(true)}>⚑ Retake flagged ({nFlag})</button>}
                  <button className="btn" onClick={() => { clearSession(); submittedRef.current = false; setRunRaw(null); setResultRaw(null); setFlags(new Set()); }}>🇪🇹 Another exam</button>
                </div>
              );
            })()}
          </div>
          {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} bookmark={bm(pq.q)}
            flag={{ on: flags.has(i), onToggle: () => setFlags(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; }) }} />)}
        </>
      )}
    </>
  );
}
