import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { topicById, lessonFor, loadLesson } from '../lib/curriculum';
import { buildQuiz, gradeQuiz, TYPE_LABELS, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { ask as tutorAsk, suggestions as tutorSuggestions } from '../lib/tutor';
import { QuestionCard } from '../components/QuestionCard';
import { Chip, DiffChip, ScoreRing, EmptyState } from '../components/ui';
import { Rich, readTime } from '../lib/richtext';

type Tab = 'lesson' | 'quiz' | 'tutor' | 'notes';

const NO_NOTES: never[] = []; // stable ref: zustand v5 getSnapshot must not return a fresh array

export default function TopicView() {
  const { tid = '' } = useParams();
  const topic = topicById(tid);
  const [lesson, setLesson] = useState<ReturnType<typeof lessonFor>>(null);
  const [lessonLoaded, setLessonLoaded] = useState(false);
  useEffect(() => {
    let alive = true;
    setLesson(null); setLessonLoaded(false);
    loadLesson(tid).then(l => { if (alive) { setLesson(l); setLessonLoaded(true); } });
    return () => { alive = false; };
  }, [tid]);
  const [tab, setTab] = useState<Tab>('lesson');

  const logStudy = useAppStore(s => s.logStudy);
  const logQuiz = useAppStore(s => s.logQuiz);
  const notes = useAppStore(s => s.notes[tid] ?? NO_NOTES);
  const addNote = useAppStore(s => s.addNote);
  const deleteNote = useAppStore(s => s.deleteNote);
  const quizLen = useAppStore(s => s.settings.quizLen);
  const progress = useAppStore(s => s.progress);
  const mastery = useAppStore(s => s.mastery);
  const bookmarks = useAppStore(s => s.bookmarks.some(b => b.id === tid));
  const toggleBookmark = useAppStore(s => s.toggleBookmark);

  /* study timer */
  const startRef = useRef(Date.now());
  useEffect(() => {
    startRef.current = Date.now();
    const flush = () => logStudy(tid, Math.round((Date.now() - startRef.current) / 1000));
    return () => flush();
  }, [tid, logStudy]);

  const [timerSec, setTimerSec] = useState(0);
  const [timerRun, setTimerRun] = useState(false);
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
      <section className="lesson-studio-header">
        <div className="breadcrumb">
          <a href="#/">Dashboard</a> / <a href={'#/browse?grade=' + topic._grade}>{topic._subjectTitle}</a> / <span>{topic._unitTitle}</span>
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
          <button className="icon-btn" title="Bookmark" onClick={() => toggleBookmark({ id: tid, kind: 'topic', topicId: tid, label: topic.title })}>{bookmarks ? '✅' : '🔖'}</button>
        </div>
      </section>

      <div className="card timer-card mt-4">
        <div className="spread">
          <h3 style={{ margin: 0 }}>⏱️ Study Timer</h3>
          <span className="tiny muted">Topic: {topic.title}</span>
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
          <button className="btn btn-danger" onClick={() => { logStudy(tid, timerSec); setTimerRun(false); setTimerSec(0); }}>✅ Finish Session</button>
        </div>
        <div className="tiny muted mt-3">Pick a time or use the default 25 minutes, then press Start. Your study time is tracked automatically.</div>
      </div>

      <div className="tabs mt-4">
        {(['lesson', 'quiz', 'tutor', 'notes'] as Tab[]).map(t => (
          <button key={t} className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)}>
            {t === 'lesson' ? '📖 Lesson' : t === 'quiz' ? '🎯 Quiz' : t === 'tutor' ? '🤖 AI Tutor' : '📒 Notes'}
          </button>
        ))}
      </div>

      {tab === 'lesson' && <LessonPane lesson={lesson} />}

      {tab === 'quiz' && (
        !quiz && !result ? (
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
        )
      )}

      {tab === 'tutor' && (
        <div className="tutor-box">
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
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask the AI tutor anything about this topic…" />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      )}

      {tab === 'notes' && (
        <>
          <div className="card">
            <h3>📒 Notes — {topic.title}</h3>
            <p className="tiny muted">Notes save automatically. Write while you study!</p>
            <textarea className="note-editor" id="noteInput" placeholder="Write your notes here… (Ctrl+Enter or click Save)"
              onKeyDown={e => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                  const ta = e.target as HTMLTextAreaElement;
                  if (ta.value.trim()) { addNote(tid, ta.value.trim()); ta.value = ''; }
                }
              }} />
            <button className="btn btn-primary mt-3" onClick={() => {
              const ta = document.getElementById('noteInput') as HTMLTextAreaElement | null;
              if (ta?.value.trim()) { addNote(tid, ta.value.trim()); ta.value = ''; }
            }}>💾 Save Note</button>
          </div>
          {notes.length > 0 && (
            <div className="card mt-3">
              {notes.map((n, i) => (
                <div key={i} className="spread" style={{ padding: '10px 0', borderBottom: i < notes.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div>
                    <p style={{ margin: 0 }}>{n.text}</p>
                    <div className="tiny muted mt-2">{new Date(n.at).toLocaleString()}</div>
                  </div>
                  <button className="icon-btn" onClick={() => deleteNote(tid, i)}>🗑</button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

function LessonPane({ lesson }: { lesson: NonNullable<ReturnType<typeof lessonFor>> }) {
  if (!lesson.simple && !lesson.keyTerms?.length && !lesson.formulas?.length) {
    return <EmptyState icon="🚧" title="Lesson coming soon" sub="The full lesson for this topic is being written. Try the Quiz or another topic!" />;
  }
  const wordCount = ((lesson.overview ?? '') + (lesson.simple ?? '') + (lesson.detailed ?? '')).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return (
    <>
      {/* ---- Reading header: overview lede + meta chips ---- */}
      <section className="lesson-lede card">
        {lesson.overview && <Rich html={lesson.overview} cls="lede-text" />}
        <div className="row mt-3" style={{ gap: 8, flexWrap: 'wrap' }}>
          <span className="chip">📖 {readTime(wordCount)}</span>
          {lesson.objectives?.length ? <span className="chip">🎯 {lesson.objectives.length} objectives</span> : null}
          {lesson.formulas?.length ? <span className="chip">🧮 {lesson.formulas.length} formulas</span> : null}
          {lesson.workedExamples?.length ? <span className="chip">✍️ {lesson.workedExamples.length} worked examples</span> : null}
        </div>
      </section>

      {lesson.objectives?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">🎯 Learning Objectives</h3>
          <p className="tiny muted">By the end of this lesson you should be able to:</p>
          <ul className="objectives checklist">{lesson.objectives.map((o, i) => <li key={i}><Rich html={o} inline /></li>)}</ul>
        </section>
      ) : null}

      {lesson.simple && (
        <section className="card lesson-section simple-card">
          <h3 className="section-title">💡 In Plain Words</h3>
          <Rich html={lesson.simple} cls="simple-text" />
        </section>
      )}

      {lesson.detailed && (
        <article className="card lesson-section prose">
          <h3 className="section-title">📖 The Full Story</h3>
          <Rich html={lesson.detailed} />
        </article>
      )}

      {lesson.keyTerms?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">🔑 Key Terms</h3>
          <div>{lesson.keyTerms.map((k, i) => (
            <div key={i} className="keyterm"><b>{k.term}</b><span>{k.def}</span></div>
          ))}</div>
        </section>
      ) : null}
      {lesson.formulas?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">🧮 Formulas</h3>
          {lesson.formulas.map((f, i) => (
            <div key={i} className="formula-box">
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
        </section>
      ) : null}
      {lesson.workedExamples?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">✍️ Worked Examples</h3>
          {lesson.workedExamples.map((ex, i) => (
            <div key={i} className="example-box">
              <div className="example-head">📐 Example {i + 1}</div>
              <div className="example-body">
                <div className="step"><span className="s-label">Problem</span><Rich html={ex.problem} inline /></div>
                {ex.given && <div className="step"><span className="s-label">Given</span><Rich html={ex.given} inline /></div>}
                {ex.formula && <div className="step"><span className="s-label">Formula</span><span className="formula-main inline-formula">{ex.formula}</span></div>}
                {ex.substitution && <div className="step"><span className="s-label">Substitution</span><Rich html={ex.substitution} inline /></div>}
                {ex.calculation && <div className="step"><span className="s-label">Calculation</span><Rich html={ex.calculation} inline /></div>}
                {ex.answer && <div className="answer-line">✅ Answer: <Rich html={ex.answer} inline /></div>}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {lesson.applications?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">🌍 Real-World Applications</h3>
          <ul className="objectives checklist">{lesson.applications.map((a, i) => <li key={i}><Rich html={a} inline /></li>)}</ul>
        </section>
      ) : null}

      {lesson.commonMistakes?.length ? (
        <section className="card lesson-section">
          <h3 className="section-title">⚠️ Common Mistakes</h3>
          <div className="mistake-list">{lesson.commonMistakes.map((cm, i) => (
            <div key={i} className="mistake-item"><span className="mistake-x">✕</span><Rich html={cm} inline /></div>
          ))}</div>
        </section>
      ) : null}

      {lesson.summary && (
        <section className="card lesson-section summary-card">
          <h3 className="section-title">📋 Quick Summary</h3>
          <Rich html={lesson.summary} />
        </section>
      )}
    </>
  );
}
