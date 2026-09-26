import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, CheckCircle2, Type, NotebookPen,
  ChevronDown, Check, BookOpen, Lightbulb, BookMarked, Layers,
  KeyRound, FlaskConical, PenTool, AlertTriangle, ClipboardList,
  Globe, X,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { topicById, lessonFor, loadLesson, getAdjacentTopics } from '../lib/curriculum';
import { buildQuiz, gradeQuiz, TYPE_LABELS, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { ask as tutorAsk, suggestions as tutorSuggestions } from '../lib/tutor';
import { QuestionCard } from '../components/QuestionCard';
import { Chip, DiffChip, ScoreRing, EmptyState } from '../components/ui';
import { Rich } from '../components/Rich';
import { readTime } from '../lib/richtext';
import { VisualBlock } from '../components/Visuals';
import { fireConfetti, playChime } from '../lib/celebrate';

type Tab = 'lesson' | 'quiz' | 'tutor' | 'notes';

const NO_NOTES: never[] = [];

/* ─── Subject ambiance map ─────────────────────────────────────── */
const SUBJECT_DATA: Record<string, { accent: string; glow: string; label: string }> = {
  mathematics:   { accent: '#f2c94c', glow: 'rgba(242,201,76,.18)',  label: 'math'    },
  physics:       { accent: '#60a5fa', glow: 'rgba(96,165,250,.18)',  label: 'physics' },
  chemistry:     { accent: '#fb7185', glow: 'rgba(251,113,133,.15)', label: 'chem'    },
  biology:       { accent: '#4ade80', glow: 'rgba(74,222,128,.14)',  label: 'bio'     },
  reading_writing:{ accent: '#a78bfa', glow: 'rgba(167,139,250,.14)', label: 'reading' },
};

/* ─── TOC section config ───────────────────────────────────────── */
const TOC_SECTIONS = [
  { id: 'lesson-objectives', icon: '🎯', label: 'Objectives' },
  { id: 'lesson-simple',     icon: '💡', label: 'Plain Words' },
  { id: 'lesson-detailed',   icon: '📖', label: 'Full Story' },
  { id: 'lesson-visuals',    icon: '📊', label: 'Visuals' },
  { id: 'lesson-terms',      icon: '🔑', label: 'Key Terms' },
  { id: 'lesson-formulas',   icon: '🧮', label: 'Formulas' },
  { id: 'lesson-examples',   icon: '✍️', label: 'Examples' },
  { id: 'lesson-applications',icon: '🌍', label: 'Applications' },
  { id: 'lesson-mistakes',   icon: '⚠️', label: 'Mistakes' },
  { id: 'lesson-summary',    icon: '📋', label: 'Summary' },
] as const;

export default function TopicView() {
  const { tid = '' } = useParams();
  const topic = topicById(tid);
  const [lesson, setLesson] = useState<ReturnType<typeof lessonFor>>(null);
  const [lessonLoaded, setLessonLoaded] = useState(false);
  useEffect(() => {
    let alive = true;
    loadLesson(tid).then(l => { if (alive) { setLesson(l); setLessonLoaded(true); } });
    return () => { alive = false; setLesson(null); setLessonLoaded(false); };
  }, [tid]);
  const [tab, setTab] = useState<Tab>('lesson');
  const [noteText, setNoteText] = useState('');

  const logStudy = useAppStore(s => s.logStudy);
  const logQuiz  = useAppStore(s => s.logQuiz);
  const notes    = useAppStore(s => s.notes[tid] ?? NO_NOTES);
  const addNote  = useAppStore(s => s.addNote);
  const deleteNote = useAppStore(s => s.deleteNote);
  const quizLen  = useAppStore(s => s.settings.quizLen);
  const progress = useAppStore(s => s.progress);
  const mastery  = useAppStore(s => s.mastery);
  const bookmarks = useAppStore(s => s.bookmarks.some(b => b.id === tid));
  const toggleBookmark = useAppStore(s => s.toggleBookmark);

  const navigate = useNavigate();
  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>('md');
  const adjacent = useMemo(() => getAdjacentTopics(tid), [tid]);

  /* Scroll progress bar */
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Understood sections */
  const [understood, setUnderstood] = useState<Set<string>>(new Set());
  const toggleUnderstood = useCallback((id: string) => {
    setUnderstood(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  /* Quick note drawer */
  const [noteDrawerOpen, setNoteDrawerOpen] = useState(false);
  const [quickNote, setQuickNote] = useState('');
  const saveQuickNote = () => {
    const val = quickNote.trim();
    if (val) { addNote(tid, val); setQuickNote(''); setNoteDrawerOpen(false); }
  };

  /* study timer */
  const startRef = useRef(0);
  useEffect(() => {
    startRef.current = Date.now();
    const flush = () => logStudy(tid, Math.round((Date.now() - startRef.current) / 1000));
    return () => flush();
  }, [tid, logStudy]);

  const [timerSec, setTimerSec] = useState(0);
  const [timerRun, setTimerRun] = useState(false);
  const [timerOpen, setTimerOpen] = useState(false);
  const [timerTarget, setTimerTarget] = useState(25 * 60);
  useEffect(() => {
    if (!timerRun) return;
    const iv = setInterval(() => setTimerSec(v => v + 1), 1000);
    return () => clearInterval(iv);
  }, [timerRun]);

  /* quiz state */
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizCount, setQuizCount] = useState(Math.min(quizLen, lesson?.questions?.length ?? quizLen));

  /* tutor state */
  const [chat, setChat] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const chips = useMemo(() => (topic && lesson ? tutorSuggestions(topic, lesson) : []), [topic, lesson]);

  if (!topic) return <EmptyState icon="🔍" title="Topic not found" sub="It may belong to another grade — switch grade in Settings." />;
  if (!lesson) return lessonLoaded
    ? <EmptyState icon="🚧" title="Lesson coming soon" sub={`The full lesson for "${topic.title}" is being written. It ships with its Grade ${topic._grade} subject very soon!`} />
    : <div className="card" style={{ textAlign: 'center', padding: 48 }}><div className="orbit-star" style={{ position: 'static', display: 'inline-block' }}>✦</div><p className="muted mt-3">Loading lesson…</p></div>;

  const p = progress[tid];
  const studied = (p?.totalQ ?? 0) > 0 || (p?.studySec ?? 0) > 0;
  const subjectKey = topic._subject ?? '';
  const subj = SUBJECT_DATA[subjectKey];

  const startQuiz = () => {
    setQuiz(buildQuiz(lesson.questions ?? [], quizCount));
    setAnswers([]);
    setResult(null);
  };

  const submitQuiz = () => {
    if (!quiz) return;
    const r = gradeQuiz(quiz, answers);
    setResult(r);
    logQuiz(tid, r.correct, r.total, r.pct, r.wrong.length ? [tid] : []);
    if (r.pct >= 70) { fireConfetti(); playChime('success'); }
  };

  const sendTutor = (text: string) => {
    if (!text.trim()) return;
    setChat(c => [...c, { role: 'user', text }, { role: 'ai', text: tutorAsk(topic, lesson, text) }]);
    setInput('');
  };

  const mm = String(Math.floor(timerSec / 60)).padStart(2, '0');
  const ss = String(timerSec % 60).padStart(2, '0');

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        className="lesson-progress-bar"
        role="progressbar"
        aria-valuenow={Math.round(scrollPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          '--progress-pct': `${scrollPct}%`,
          '--progress-color': subj?.accent ?? 'var(--accent)',
        } as React.CSSProperties}
      />

      {/* ── Lesson Studio Header ── */}
      <section
        className="lesson-studio-header"
        data-subject={subjectKey}
        style={subj ? {
          '--subj-accent': subj.accent,
          '--subj-glow': subj.glow,
        } as React.CSSProperties : undefined}
      >
        <div className="breadcrumb">
          <Link to="/">Dashboard</Link> / <Link to={'/browse?grade=' + topic._grade}>{topic._subjectTitle}</Link> / <span>{topic._unitTitle}</span>
        </div>
        <div className="spread">
          <div>
            <h1 className="lesson-title">{topic.title}</h1>
            <div className="row">
              <Chip text={`${topic._subjectIcon ?? ''} ${topic._subjectTitle} · Grade ${topic._grade}`} cls="chip-subject" />
              <DiffChip d={topic.difficulty ?? 1} />
              {studied && <Chip text={`${mastery(tid)}% mastery`} />}
            </div>
          </div>
          <div className="row" style={{ gap: 8, alignItems: 'center' }}>
            <div className="font-scaler-group" title="Reading text size" aria-label="Text size">
              <Type size={14} className="scaler-icon" />
              <button className={`scaler-btn ${fontScale === 'sm' ? 'active' : ''}`} onClick={() => setFontScale('sm')}>A⁻</button>
              <button className={`scaler-btn ${fontScale === 'md' ? 'active' : ''}`} onClick={() => setFontScale('md')}>A</button>
              <button className={`scaler-btn ${fontScale === 'lg' ? 'active' : ''}`} onClick={() => setFontScale('lg')}>A⁺</button>
            </div>
            <button className="icon-btn" title="Bookmark" onClick={() => toggleBookmark({ id: tid, kind: 'topic', topicId: tid, label: topic.title })}>
              {bookmarks ? '✅' : '🔖'}
            </button>
          </div>
        </div>
      </section>

      <div className={'card timer-card mt-4' + (timerOpen ? '' : ' timer-collapsed')}>
        {timerOpen ? (
          <>
            <div className="spread">
              <h3 style={{ margin: 0 }}>⏱️ Study Timer</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setTimerOpen(false)} title="Collapse">✕ Collapse</button>
            </div>
            <div className="timer-display" style={{ fontVariantNumeric: 'tabular-nums' }}>{mm}:{ss}</div>
            <div className="timer-presets">
              {[10, 15, 25, 45, 60].map(m => (
                <button key={m} className={'timer-preset' + (timerTarget === m * 60 ? ' active' : '')} onClick={() => setTimerTarget(m * 60)}>{m} min</button>
              ))}
            </div>
            <div className="timer-controls">
              <button className="btn btn-primary" onClick={() => setTimerRun(true)}>▶ Start</button>
              <button className="btn" onClick={() => setTimerRun(r => !r)}>⏸ Pause / Resume</button>
              <button className="btn" onClick={() => { setTimerRun(false); setTimerSec(0); }}>↺ Reset</button>
              <button className="btn btn-danger" onClick={() => { logStudy(tid, timerSec); setTimerRun(false); setTimerSec(0); setTimerOpen(false); }}>✅ Finish Session</button>
            </div>
            <div className="tiny muted mt-3">Pick a time or use the default 25 minutes, then press Start. Your study time is tracked automatically.</div>
          </>
        ) : (
          <div className="timer-badge">
            <span className="timer-badge-ico">⏱</span><span className={'timer-badge-time' + (timerRun ? '' : ' paused')} style={{ fontVariantNumeric: 'tabular-nums' }}>{mm}:{ss}</span>
            <span className="tiny muted hide-sm">{topic.title}</span>
            <div className="timer-badge-actions">
              {timerRun
                ? <button className="btn btn-sm" onClick={() => setTimerRun(false)}>⏸</button>
                : <button className="btn btn-primary btn-sm" onClick={() => setTimerRun(true)}>{timerSec ? '▶ Resume' : '▶ Start'}</button>}
              {timerSec > 0 && <button className="btn btn-danger btn-sm" onClick={() => { logStudy(tid, timerSec); setTimerRun(false); setTimerSec(0); }}>✅ Finish</button>}
              <button className="btn btn-ghost btn-sm" onClick={() => setTimerOpen(true)} title="Timer options">⚙︎</button>
            </div>
          </div>
        )}
      </div>

      <div className="tabs mt-4" role="tablist" aria-label="Topic study modes">
        {(['lesson', 'quiz', 'tutor', 'notes'] as Tab[]).map(t => (
          <button
            key={t}
            id={`tab-${t}`}
            role="tab"
            aria-selected={tab === t}
            aria-controls={`panel-${t}`}
            className={'tab' + (tab === t ? ' active' : '')}
            onClick={() => setTab(t)}
          >
            {t === 'lesson' ? '📖 Lesson' : t === 'quiz' ? '🎯 Quiz' : t === 'tutor' ? '🤖 AI Tutor' : '📒 Notes'}
          </button>
        ))}
      </div>

      {tab === 'lesson' && (
        <div role="tabpanel" id="panel-lesson" aria-labelledby="tab-lesson">
          <LessonPane
            lesson={lesson}
            fontScale={fontScale}
            understood={understood}
            onUnderstood={toggleUnderstood}
            subjectKey={subjectKey}
          />
          <div className="topic-nav-bar card mt-4">
            <div className="spread" style={{ gap: 12, flexWrap: 'wrap' }}>
              {adjacent.prev ? (
                <button className="btn topic-nav-btn prev" onClick={() => navigate('/topic/' + adjacent.prev!._id)}>
                  <ChevronLeft size={16} />
                  <div style={{ textAlign: 'left' }}>
                    <div className="tiny muted">Previous Topic</div>
                    <div className="topic-nav-title">{adjacent.prev.title}</div>
                  </div>
                </button>
              ) : <div />}
              <button className="btn btn-primary" onClick={() => setTab('quiz')}>
                <CheckCircle2 size={16} /> Take Topic Quiz
              </button>
              {adjacent.next ? (
                <button className="btn topic-nav-btn next" onClick={() => navigate('/topic/' + adjacent.next!._id)}>
                  <div style={{ textAlign: 'right' }}>
                    <div className="tiny muted">Next Topic</div>
                    <div className="topic-nav-title">{adjacent.next.title}</div>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ) : <div />}
            </div>
          </div>
        </div>
      )}

      {tab === 'quiz' && (
        <div role="tabpanel" id="panel-quiz" aria-labelledby="tab-quiz">
          {!quiz && !result ? (
            (lesson.questions?.length ?? 0) === 0
              ? <EmptyState icon="🎯" title="No quiz yet" sub="Questions for this topic are being prepared. Try another topic!" />
              : <div className="card">
                <h3>🎯 Topic Quiz — {topic.title}</h3>
                <p className="muted">{lesson.questions!.length} questions available · {TYPE_LABELS[lesson.questions![0].type]} and more · adaptive difficulty</p>
                <div className="row mt-4">
                  <span style={{ fontWeight: 700 }}>Number of questions:</span>
                  {[5, 10, 15, 20].filter(c => c <= lesson.questions!.length).map(c => (
                    <button key={c} className={'timer-preset' + (quizCount === c ? ' active' : '')} onClick={() => setQuizCount(c)}>{c}</button>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary btn-lg" onClick={startQuiz}>Start Quiz 🚀</button>
                </div>
                {(p?.quizScores?.length ?? 0) > 0 && (
                  <div className="mt-4"><div className="tiny muted">Last 5 scores: {p!.quizScores.slice(-5).map((sc, i) => (
                    <b key={i} style={{ color: sc >= 70 ? 'var(--success)' : 'var(--danger)' }}>{sc}%</b>
                  )).join(' · ')}</div></div>
                )}
              </div>
          ) : result ? (
            <>
              <div className="card mt-4" style={{ textAlign: 'center' }}>
                <h2 style={{ color: result.pct >= 70 ? 'var(--success)' : 'var(--danger)' }}>{result.grade.emoji} {result.pct}% — {result.grade.label}</h2>
                <p className="muted">Score: {result.correct}/{result.total}</p>
                <ScoreRing pct={result.pct} />
                <p className="mt-3">{result.feedback}</p>
                <div className="row mt-4" style={{ justifyContent: 'center' }}>
                  <button className="btn" onClick={() => setTab('lesson')}>📖 Review lesson</button>
                  <button className="btn btn-primary" onClick={startQuiz}>🔁 Retake quiz</button>
                </div>
                <div className="tiny muted mt-3">Mastery: {mastery(tid)}% · {p?.attempts ?? 0} attempt(s)</div>
              </div>
              {result.perQ.map((pq, i) => <QuestionCard key={i} q={pq.q} index={i} answer={answers[i]} result={pq} />)}
            </>
          ) : (
            <>
              {quiz!.map((q, i) => (
                <QuestionCard key={i} q={q} index={i} answer={answers[i]}
                  onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
              ))}
              <div className="row mt-4" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary btn-lg" onClick={submitQuiz}>Submit answers ✓</button>
              </div>
            </>
          )}
        </div>
      )}

      {tab === 'tutor' && (
        <div role="tabpanel" id="panel-tutor" aria-labelledby="tab-tutor" className="tutor-box">
          <div className="spread" style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', background: 'var(--card-2)' }}>
            <h3 style={{ margin: 0 }}>🤖 AI Tutor <span className="tiny muted">— {topic.title}</span></h3>
          </div>
          <div className="tutor-chat">
            <div className="tutor-msg ai">Hi! I'm your personal tutor for <b>{topic.title}</b>. Ask me to explain it simpler, give examples, or quiz you. 🎓</div>
            {chat.map((m, i) => (
              <div key={i} className={'tutor-msg ' + m.role}>{m.text.split('\n').map((l, j) => <p key={j}>{l}</p>)}</div>
            ))}
          </div>
          <div className="tutor-chips">
            {chips.map(c => <button key={c} className="btn btn-sm" onClick={() => sendTutor(c)}>{c}</button>)}
          </div>
          <form className="tutor-input" onSubmit={e => { e.preventDefault(); sendTutor(input); }}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask the AI tutor anything about this topic…" aria-label="Message for AI tutor" />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      )}

      {tab === 'notes' && (
        <div role="tabpanel" id="panel-notes" aria-labelledby="tab-notes">
          <div className="card">
            <h3>📒 Notes — {topic.title}</h3>
            <p className="tiny muted">Notes save automatically. Write while you study!</p>
            <textarea
              className="note-editor"
              aria-label="Study notes"
              placeholder="Write your notes here… (Ctrl+Enter or click Save)"
              value={noteText}
              onChange={e => setNoteText(e.target.value)}
              onKeyDown={e => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                  const val = noteText.trim();
                  if (val) { addNote(tid, val); setNoteText(''); }
                }
              }}
            />
            <button
              className="btn btn-primary mt-3"
              disabled={!noteText.trim()}
              onClick={() => {
                const val = noteText.trim();
                if (val) { addNote(tid, val); setNoteText(''); }
              }}
            >
              💾 Save Note
            </button>
          </div>
          {notes.length > 0 && (
            <div className="card mt-3">
              {notes.map((n, i) => (
                <div key={i} className="spread" style={{ padding: '10px 0', borderBottom: i < notes.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div>
                    <p style={{ margin: 0 }}>{n.text}</p>
                    <div className="tiny muted mt-2">{new Date(n.at).toLocaleString()}</div>
                  </div>
                  <button className="icon-btn" aria-label="Delete note" onClick={() => deleteNote(tid, i)}>🗑</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Quick-Jot Floating Note Button (only visible in lesson tab) ── */}
      {tab === 'lesson' && (
        <>
          <button
            className="quick-note-fab"
            aria-label="Quick note"
            title="Jot a quick note"
            onClick={() => setNoteDrawerOpen(o => !o)}
          >
            <NotebookPen size={20} />
          </button>
          {noteDrawerOpen && (
            <div className="quick-note-drawer card" role="dialog" aria-label="Quick note">
              <div className="spread" style={{ marginBottom: 10 }}>
                <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>📝 Quick Note</span>
                <button className="icon-btn" onClick={() => setNoteDrawerOpen(false)} aria-label="Close"><X size={16} /></button>
              </div>
              <textarea
                className="note-editor"
                style={{ minHeight: 90, fontSize: '0.88rem' }}
                placeholder="Jot something down while reading…"
                value={quickNote}
                autoFocus
                onChange={e => setQuickNote(e.target.value)}
                onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') saveQuickNote(); }}
              />
              <button
                className="btn btn-primary btn-sm mt-3"
                style={{ width: '100%' }}
                disabled={!quickNote.trim()}
                onClick={saveQuickNote}
              >
                💾 Save Note
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LessonPane — the full lesson display with all new features
   ═══════════════════════════════════════════════════════════════════ */
function LessonPane({
  lesson,
  fontScale = 'md',
  understood,
  onUnderstood,
  subjectKey,
}: {
  lesson: NonNullable<ReturnType<typeof lessonFor>>;
  fontScale?: 'sm' | 'md' | 'lg';
  understood: Set<string>;
  onUnderstood: (id: string) => void;
  subjectKey: string;
}) {
  /* Which TOC pills to show (only for sections with content) */
  const availableSections = useMemo(() => TOC_SECTIONS.filter(s => {
    switch (s.id) {
      case 'lesson-objectives':    return !!lesson.objectives?.length;
      case 'lesson-simple':        return !!lesson.simple;
      case 'lesson-detailed':      return !!lesson.detailed;
      case 'lesson-visuals':       return !!lesson.visuals?.length;
      case 'lesson-terms':         return !!lesson.keyTerms?.length;
      case 'lesson-formulas':      return !!lesson.formulas?.length;
      case 'lesson-examples':      return !!lesson.workedExamples?.length;
      case 'lesson-applications':  return !!lesson.applications?.length;
      case 'lesson-mistakes':      return !!lesson.commonMistakes?.length;
      case 'lesson-summary':       return !!lesson.summary;
      default: return false;
    }
  }), [lesson]);

  /* Active TOC section via IntersectionObserver */
  const [activeSection, setActiveSection] = useState<string>('');
  useEffect(() => {
    const sectionEls = availableSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!sectionEls.length) return;
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [availableSections]);

  if (!lesson.simple && !lesson.keyTerms?.length && !lesson.formulas?.length) {
    return <EmptyState icon="🚧" title="Lesson coming soon" sub="The full lesson for this topic is being written. Try the Quiz or another topic!" />;
  }

  const wordCount = ((lesson.overview ?? '') + (lesson.simple ?? '') + (lesson.detailed ?? '')).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const subj = SUBJECT_DATA[subjectKey];

  return (
    <div
      className={`lesson-body font-scale-${fontScale}`}
      data-subject={subjectKey}
      style={subj ? { '--subj-accent': subj.accent, '--subj-glow': subj.glow } as React.CSSProperties : undefined}
    >
      {/* ── Overview lede ── */}
      <section className="lesson-lede card">
        {lesson.overview && <Rich html={lesson.overview} cls="lede-text" />}
        <div className="row mt-3" style={{ gap: 8, flexWrap: 'wrap' }}>
          <span className="chip">📖 {readTime(wordCount)}</span>
          {lesson.objectives?.length ? <span className="chip">🎯 {lesson.objectives.length} objectives</span> : null}
          {lesson.formulas?.length ? <span className="chip">🧮 {lesson.formulas.length} formulas</span> : null}
          {lesson.workedExamples?.length ? <span className="chip">✍️ {lesson.workedExamples.length} worked examples</span> : null}
          {lesson.visuals?.length ? <span className="chip">📊 {lesson.visuals.length} visual{lesson.visuals.length > 1 ? 's' : ''}</span> : null}
        </div>
        {understood.size > 0 && (
          <div className="understood-progress">
            <div
              className="understood-bar"
              style={{ width: `${Math.round((understood.size / availableSections.length) * 100)}%` }}
            />
            <span className="tiny muted" style={{ marginLeft: 8 }}>
              {understood.size}/{availableSections.length} sections understood
            </span>
          </div>
        )}
      </section>

      {/* ── Sticky TOC Pill Bar ── */}
      {availableSections.length > 1 && (
        <nav className="lesson-toc" aria-label="Lesson sections">
          {availableSections.map(s => (
            <button
              key={s.id}
              className={`toc-pill${activeSection === s.id ? ' active' : ''}${understood.has(s.id) ? ' done' : ''}`}
              onClick={() => scrollTo(s.id)}
              title={s.label}
            >
              <span>{s.icon}</span>
              <span className="toc-pill-label">{s.label}</span>
              {understood.has(s.id) && <Check size={10} />}
            </button>
          ))}
        </nav>
      )}

      {/* ── Objectives ── */}
      {lesson.objectives?.length ? (
        <section id="lesson-objectives" className="card lesson-section">
          <SectionHeader
            icon={<BookOpen size={16} />}
            title="Learning Objectives"
            sectionId="lesson-objectives"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <p className="tiny muted">By the end of this lesson you should be able to:</p>
          <ul className="objectives checklist">{lesson.objectives.map((o, i) => <li key={i}><Rich html={o} inline /></li>)}</ul>
        </section>
      ) : null}

      {/* ── In Plain Words ── */}
      {lesson.simple && (
        <section id="lesson-simple" className="card lesson-section simple-card">
          <SectionHeader
            icon={<Lightbulb size={16} />}
            title="In Plain Words"
            sectionId="lesson-simple"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <Rich html={lesson.simple} cls="simple-text" />
        </section>
      )}

      {/* ── The Full Story ── */}
      {lesson.detailed && (
        <article id="lesson-detailed" className="card lesson-section prose">
          <SectionHeader
            icon={<BookMarked size={16} />}
            title="The Full Story"
            sectionId="lesson-detailed"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <Rich html={lesson.detailed} />
        </article>
      )}

      {/* ── Visuals ── */}
      {lesson.visuals?.length ? (
        <section id="lesson-visuals" className="card lesson-section">
          <SectionHeader
            icon={<Layers size={16} />}
            title="Visual Explanation"
            sectionId="lesson-visuals"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <p className="tiny muted">Diagrams that make the idea click at a glance.</p>
          <div className="vis-stack">{lesson.visuals.map((v, i) => <VisualBlock key={i} visual={v} />)}</div>
        </section>
      ) : null}

      {/* ── Key Terms ── */}
      {lesson.keyTerms?.length ? (
        <section id="lesson-terms" className="card lesson-section">
          <SectionHeader
            icon={<KeyRound size={16} />}
            title="Key Terms"
            sectionId="lesson-terms"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <div className="keyterms-grid">
            {lesson.keyTerms.map((k, i) => (
              <div key={i} className="keyterm-card">
                <span className="keyterm-word">{k.term}</span>
                <span className="keyterm-def">{k.def}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── Formulas ── */}
      {lesson.formulas?.length ? (
        <section id="lesson-formulas" className="card lesson-section">
          <SectionHeader
            icon={<FlaskConical size={16} />}
            title="Formulas"
            sectionId="lesson-formulas"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <div className="formula-grid">
            {lesson.formulas.map((f, i) => (
              <div key={i} className="formula-box formula-box-enhanced">
                <div className="tiny muted">{f.name || ''}</div>
                <div className="formula-main">{f.formula}</div>
                {f.meaning && <Rich html={f.meaning} cls="mt-2" />}
                {f.vars && (() => {
                  const vs = typeof f.vars === 'string' ? [f.vars] : f.vars;
                  return <div className="tiny var-list">{vs.map((v, j) => <span key={j}>{typeof v === 'string' ? v : <><b>{v.name}</b> = {v.meaning}{v.unit ? ' (' + v.unit + ')' : ''}</>}{j < vs.length - 1 ? ' · ' : ''}</span>)}</div>;
                })()}
                {f.when && <div className="tiny mt-2 muted"><b>Use when:</b> <Rich html={f.when} inline /></div>}
                {f.units && <div className="tiny mt-2 muted"><b>Units:</b> {f.units}</div>}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── Worked Examples (step-reveal) ── */}
      {lesson.workedExamples?.length ? (
        <section id="lesson-examples" className="card lesson-section">
          <SectionHeader
            icon={<PenTool size={16} />}
            title="Worked Examples"
            sectionId="lesson-examples"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          {lesson.workedExamples.map((ex, i) => (
            <StepRevealExample key={i} ex={ex} index={i} subjectKey={subjectKey} />
          ))}
        </section>
      ) : null}

      {/* ── Applications ── */}
      {lesson.applications?.length ? (
        <section id="lesson-applications" className="card lesson-section">
          <SectionHeader
            icon={<Globe size={16} />}
            title="Real-World Applications"
            sectionId="lesson-applications"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <ul className="objectives checklist">{lesson.applications.map((a, i) => <li key={i}><Rich html={a} inline /></li>)}</ul>
        </section>
      ) : null}

      {/* ── Common Mistakes (comparison cards) ── */}
      {lesson.commonMistakes?.length ? (
        <section id="lesson-mistakes" className="card lesson-section">
          <SectionHeader
            icon={<AlertTriangle size={16} />}
            title="Common Mistakes"
            sectionId="lesson-mistakes"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <div className="mistake-cards-grid">
            {lesson.commonMistakes.map((cm, i) => (
              <MistakeCard key={i} html={cm} />
            ))}
          </div>
        </section>
      ) : null}

      {/* ── Quick Summary ── */}
      {lesson.summary && (
        <section id="lesson-summary" className="card lesson-section summary-card">
          <SectionHeader
            icon={<ClipboardList size={16} />}
            title="Quick Summary"
            sectionId="lesson-summary"
            understood={understood}
            onUnderstood={onUnderstood}
            subjectKey={subjectKey}
          />
          <Rich html={lesson.summary} />
        </section>
      )}
    </div>
  );
}

/* ─── Section Header with "Understood ✓" badge ─────────────────── */
function SectionHeader({
  icon,
  title,
  sectionId,
  understood,
  onUnderstood,
  subjectKey,
}: {
  icon: React.ReactNode;
  title: string;
  sectionId: string;
  understood: Set<string>;
  onUnderstood: (id: string) => void;
  subjectKey: string;
}) {
  const done = understood.has(sectionId);
  const subj = SUBJECT_DATA[subjectKey];
  return (
    <div className="section-header-row">
      <h3 className="section-title" style={subj ? { color: subj.accent } as React.CSSProperties : undefined}>
        <span className="section-icon" style={subj ? { color: subj.accent } as React.CSSProperties : undefined}>{icon}</span>
        {title}
      </h3>
      <button
        className={`understood-btn${done ? ' done' : ''}`}
        onClick={() => onUnderstood(sectionId)}
        aria-pressed={done}
        aria-label={done ? 'Mark as not understood' : 'Mark as understood'}
      >
        {done ? <><Check size={12} /> Understood</> : 'Got it ✓'}
      </button>
    </div>
  );
}

/* ─── Step-by-step worked example reveal ───────────────────────── */
type WorkedExample = {
  problem: string;
  given?: string;
  formula?: string;
  substitution?: string;
  calculation?: string;
  answer?: string;
};

function StepRevealExample({ ex, index, subjectKey }: { ex: WorkedExample; index: number; subjectKey: string }) {
  const steps: { label: string; content: React.ReactNode }[] = [];
  steps.push({ label: 'Problem', content: <Rich html={ex.problem} inline /> });
  if (ex.given)        steps.push({ label: 'Given',        content: <Rich html={ex.given} inline /> });
  if (ex.formula)      steps.push({ label: 'Formula',      content: <span className="formula-main inline-formula">{ex.formula}</span> });
  if (ex.substitution) steps.push({ label: 'Substitution', content: <Rich html={ex.substitution} inline /> });
  if (ex.calculation)  steps.push({ label: 'Calculation',  content: <Rich html={ex.calculation} inline /> });
  if (ex.answer)       steps.push({ label: 'Answer',       content: <Rich html={ex.answer} inline />, });

  const [revealed, setRevealed] = useState(1); // always show Problem
  const allRevealed = revealed >= steps.length;
  const subj = SUBJECT_DATA[subjectKey];

  return (
    <div className="example-box example-box-enhanced" style={subj ? { '--subj-accent': subj.accent } as React.CSSProperties : undefined}>
      <div className="example-head">
        📐 Example {index + 1}
        <span className="example-steps-badge">{Math.min(revealed, steps.length)}/{steps.length} steps</span>
      </div>
      <div className="example-body">
        {steps.slice(0, revealed).map((s, i) => (
          <div
            key={i}
            className={`step step-revealed${i === revealed - 1 && revealed > 1 ? ' step-new' : ''}`}
          >
            <span className={`s-label${s.label === 'Answer' ? ' s-answer' : ''}`}>{s.label}</span>
            {s.content}
          </div>
        ))}
        {!allRevealed && (
          <button
            className="reveal-btn"
            onClick={() => setRevealed(r => Math.min(r + 1, steps.length))}
            style={subj ? { borderColor: subj.accent, color: subj.accent } as React.CSSProperties : undefined}
          >
            <ChevronDown size={14} /> Reveal: {steps[revealed].label}
          </button>
        )}
        {allRevealed && (
          <div className="answer-line">
            ✅ Answer: <Rich html={ex.answer ?? ''} inline />
          </div>
        )}
      </div>
      {revealed > 1 && !allRevealed && (
        <button className="reset-steps-btn tiny muted" onClick={() => setRevealed(1)}>↺ Reset steps</button>
      )}
    </div>
  );
}

/* ─── Mistake comparison card ───────────────────────────────────── */
function MistakeCard({ html }: { html: string }) {
  // Try to split on "→" or "instead" or "should" or just show as trap
  const stripped = html.replace(/<[^>]+>/g, '').trim();
  const splitIdx = stripped.search(/→|instead|should be|correct:/i);

  if (splitIdx > 0) {
    const trap = stripped.slice(0, splitIdx).trim();
    const fix  = stripped.slice(splitIdx).replace(/^(→|instead[,:]?|should be[,:]?|correct:)/i, '').trim();
    return (
      <div className="mistake-card">
        <div className="mistake-trap">
          <span className="mistake-trap-label">❌ Common Trap</span>
          <p>{trap}</p>
        </div>
        <div className="mistake-fix">
          <span className="mistake-fix-label">💡 Key Correction</span>
          <p>{fix}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mistake-card">
      <div className="mistake-trap" style={{ flex: 1, borderRight: 'none' }}>
        <span className="mistake-trap-label">⚠️ Watch Out</span>
        <Rich html={html} inline />
      </div>
    </div>
  );
}
