import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { topicById, lessonFor } from '../lib/curriculum';
import { buildQuiz, gradeQuiz, type QuizQuestion, type QuizResult } from '../lib/quiz';
import { ask as tutorAsk, suggestions as tutorSuggestions } from '../lib/tutor';
import { QuestionCard } from '../components/QuestionCard';

const NO_NOTES: never[] = []; // stable ref: zustand v5 getSnapshot must not return a fresh array

type Tab = 'lesson' | 'quiz' | 'tutor' | 'notes';

export default function TopicView() {
  const { tid = '' } = useParams();
  const topic = topicById(tid);
  const lesson = useMemo(() => (topic ? lessonFor(tid) : null), [tid, topic]);
  const [tab, setTab] = useState<Tab>('lesson');

  const logStudy = useAppStore(s => s.logStudy);
  const logQuiz = useAppStore(s => s.logQuiz);
  const notes = useAppStore(s => s.notes[tid] ?? NO_NOTES);
  const addNote = useAppStore(s => s.addNote);
  const deleteNote = useAppStore(s => s.deleteNote);
  const quizLen = useAppStore(s => s.settings.quizLen);

  /* study timer */
  const startRef = useRef(Date.now());
  useEffect(() => {
    startRef.current = Date.now();
    const flush = () => logStudy(tid, Math.round((Date.now() - startRef.current) / 1000));
    return () => flush();
  }, [tid, logStudy]);

  /* quiz state */
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [answers, setAnswers] = useState<unknown[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  /* tutor state */
  const [chat, setChat] = useState<{ role: 'user' | 'tutor'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const chips = useMemo(() => (topic && lesson ? tutorSuggestions(topic, lesson) : []), [topic, lesson]);

  if (!topic || !lesson) return <div className="view-inner"><h1>Topic not found</h1></div>;

  const startQuiz = () => {
    setQuiz(buildQuiz(lesson.questions ?? [], quizLen));
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
    setChat(c => [...c, { role: 'user', text }, { role: 'tutor', text: tutorAsk(topic, lesson, text) }]);
    setInput('');
  };

  return (
    <div className="view-inner topic-view">
      <header className="topic-header">
        <h1>{topic.title}</h1>
        <div className="topic-sub">{topic._subjectTitle} · Grade {topic._grade} · {topic._unitTitle}</div>
      </header>

      <div className="tabs">
        {(['lesson', 'quiz', 'tutor', 'notes'] as Tab[]).map(t => (
          <button key={t} className={'tab' + (tab === t ? ' active' : '')} onClick={() => setTab(t)}>
            {t === 'lesson' ? '📖 Lesson' : t === 'quiz' ? '🧠 Quiz' : t === 'tutor' ? '🤖 Tutor' : '📒 Notes'}
          </button>
        ))}
      </div>

      {tab === 'lesson' && <LessonPane lesson={lesson} />}

      {tab === 'quiz' && (
        <div className="quiz-pane">
          {!quiz && !result && (
            <button className="btn btn-primary btn-big" onClick={startQuiz}>Start quiz ({Math.min(quizLen, lesson.questions?.length ?? 0)} questions)</button>
          )}
          {quiz && !result && (
            <>
              {quiz.map((q, i) => (
                <QuestionCard key={i} q={q} index={i} answer={answers[i]}
                  onAnswer={a => setAnswers(prev => { const n = [...prev]; n[i] = a; return n; })} />
              ))}
              <button className="btn btn-primary btn-big" onClick={submitQuiz}>Submit answers</button>
            </>
          )}
          {result && (
            <div className="quiz-result">
              <h2>{result.grade.emoji} {result.grade.label} — {result.pct}%</h2>
              <p>{result.feedback}</p>
              {result.perQ.map((p, i) => (
                <details key={i} className={'quiz-review-item ' + (p.correct ? 'ok' : 'bad')}>
                  <summary>{p.correct ? '✅' : '❌'} Q{i + 1}: {p.q.q}</summary>
                  <p>Your answer: {String(p.userAnswer ?? '—')}</p>
                  <p>Correct: {p.q.type === 'mcq' ? p.q.options[p.q.answer] : p.q.type === 'tf' ? String(p.q.answer) : Array.isArray(p.q.answer) ? p.q.answer.join(' | ') : String(p.q.answer)}</p>
                  {p.q.explanation && <p className="explain">{p.q.explanation}</p>}
                </details>
              ))}
              <button className="btn btn-primary" onClick={startQuiz}>Retake</button>
            </div>
          )}
        </div>
      )}

      {tab === 'tutor' && (
        <div className="tutor-pane">
          <div className="chip-row">
            {chips.map(c => <button key={c} className="chip" onClick={() => sendTutor(c)}>{c}</button>)}
          </div>
          <div className="chat-log">
            {chat.map((m, i) => (
              <div key={i} className={'chat-msg ' + m.role}>{m.text.split('\n').map((l, j) => <p key={j}>{l}</p>)}</div>
            ))}
            {!chat.length && <div className="chat-msg tutor">Hi! I'm your EthioStudy tutor for <b>{topic.title}</b>. Ask me anything, or tap a suggestion above. 🎓</div>}
          </div>
          <form className="chat-input" onSubmit={e => { e.preventDefault(); sendTutor(input); }}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about this topic…" />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      )}

      {tab === 'notes' && (
        <div className="notes-pane">
          <form onSubmit={e => {
            const f = e.target as HTMLFormElement;
            const ta = f.elements.namedItem('note') as HTMLTextAreaElement;
            if (ta.value.trim()) { addNote(tid, ta.value.trim()); ta.value = ''; }
            e.preventDefault();
          }}>
            <textarea name="note" placeholder="Write a note about this topic…" rows={3} />
            <button className="btn btn-primary" type="submit">Save note</button>
          </form>
          {notes.map((n, i) => (
            <div key={i} className="note-card">
              <p>{n.text}</p>
              <div className="note-foot">
                <span>{new Date(n.at).toLocaleString()}</span>
                <button className="icon-btn" onClick={() => deleteNote(tid, i)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LessonPane({ lesson }: { lesson: NonNullable<ReturnType<typeof lessonFor>> }) {
  return (
    <div className="lesson-pane">
      {lesson.simple && <section className="lesson-block"><h3>💡 Simple Explanation</h3><p>{lesson.simple}</p></section>}
      {lesson.objectives?.length ? <section className="lesson-block"><h3>🎯 Objectives</h3><ul>{lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul></section> : null}
      {lesson.keyTerms?.length ? <section className="lesson-block"><h3>📕 Key Terms</h3>{lesson.keyTerms.map((k, i) => <div key={i} className="keyterm"><b>{k.term}</b> — {k.def}</div>)}</section> : null}
      {lesson.formulas?.length ? <section className="lesson-block"><h3>🧮 Formulas</h3>{lesson.formulas.map((f, i) => (
        <div key={i} className="formula-card">
          <div className="formula-name">{f.name}</div>
          <code className="formula-expr">{f.formula}</code>
          {f.meaning && <p>{f.meaning}</p>}
          {f.when && <p className="muted">When to use: {f.when}</p>}
          {f.units && <p className="muted">Units: {f.units}</p>}
        </div>
      ))}</section> : null}
      {lesson.workedExamples?.length ? <section className="lesson-block"><h3>✍️ Worked Examples</h3>{lesson.workedExamples.map((ex, i) => (
        <details key={i} className="example-card">
          <summary><b>{ex.problem}</b></summary>
          {ex.given && <p>Given: {ex.given}</p>}
          {ex.formula && <p>Formula: {ex.formula}</p>}
          {(ex.substitution || ex.calculation) && <p>{ex.substitution} {ex.calculation}</p>}
          <p className="answer">✅ Answer: {ex.answer}</p>
        </details>
      ))}</section> : null}
      {lesson.applications?.length ? <section className="lesson-block"><h3>🌍 Real-world Applications</h3><ul>{lesson.applications.map((a, i) => <li key={i}>{a}</li>)}</ul></section> : null}
      {lesson.commonMistakes?.length ? <section className="lesson-block warn"><h3>⚠️ Common Mistakes</h3><ul>{lesson.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}</ul></section> : null}
    </div>
  );
}
