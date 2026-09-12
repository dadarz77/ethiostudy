import { useAppStore } from '../store/useAppStore';
import { TYPE_LABELS, type QuizQuestion } from '../lib/quiz';
import { Chip } from './ui';
import type { Bookmark } from '../store/useAppStore';

/* One quiz question card — exact port of v1's renderQuestion():
   .quiz-q card, lettered options, correct/incorrect callout after submit. */
export function QuestionCard({ q, index, answer, onAnswer, result, bookmark }: {
  q: QuizQuestion;
  index: number;
  answer: unknown;
  onAnswer?: (a: unknown) => void;
  result?: { correct: boolean };
  /* when provided, the head shows a working 🔖 toggle that saves this record */
  bookmark?: Omit<Bookmark, 'at'>;
}) {
  const bookmarks = useAppStore(s => s.bookmarks);
  const toggleBookmark = useAppStore(s => s.toggleBookmark);
  const marked = !!(bookmark && bookmarks.some(b => b.id === bookmark.id));
  const submitted = !!result;
  const setAnswer = (a: unknown) => onAnswer?.(a);

  let body: React.ReactNode;
  if (q.type === 'mcq' || q.type === 'ordering') {
    const opts = q.options ?? [];
    body = opts.map((o, oi) => {
      let cls = 'option';
      if (submitted) {
        const correctIdx = Array.isArray(q.answer) ? Number(q.answer[0]) : Number(q.answer);
        if (oi === correctIdx) cls += ' correct';
        else if (answer === oi) cls += ' incorrect';
      }
      return (
        <div key={oi} className={cls}>
          <span className="opt-letter">{String.fromCharCode(65 + oi)}.</span>
          <label style={{ cursor: 'pointer', flex: 1 }}>
            <input type="radio" name={'q' + index} checked={answer === oi} disabled={submitted} onChange={() => setAnswer(oi)} />
            <span style={{ marginLeft: 8 }}>{o}</span>
          </label>
        </div>
      );
    });
  } else if (q.type === 'tf') {
    body = ['T', 'F'].map(tf => {
      let cls = 'option';
      const picked = answer === true ? 'T' : answer === false ? 'F' : null;
      if (submitted && tf === (q.answer === true ? 'T' : 'F')) cls += ' correct';
      else if (submitted && picked === tf) cls += ' incorrect';
      return (
        <div key={tf} className={cls}>
          <span className="opt-letter">{tf}</span>
          <label style={{ cursor: 'pointer', flex: 1 }}>
            <input type="radio" name={'q' + index} checked={picked === tf} disabled={submitted}
              onChange={() => setAnswer(tf === 'T')} />
            <span style={{ marginLeft: 8 }}>{tf === 'T' ? 'True' : 'False'}</span>
          </label>
        </div>
      );
    });
  } else {
    body = (
      <input className="note-editor" style={{ minHeight: 52 }} type="text"
        placeholder="Type your answer…" value={typeof answer === 'string' ? answer : ''} disabled={submitted}
        onChange={e => setAnswer(e.target.value)} />
    );
  }

  const diff = q.difficulty ?? 3;
  const correctText = q.type === 'mcq' || q.type === 'ordering'
    ? (q.options?.[Array.isArray(q.answer) ? Number(q.answer[0]) : Number(q.answer)] ?? '')
    : q.type === 'tf' ? String(q.answer)
    : Array.isArray(q.answer) ? String(q.answer[0]).replace(/\|/g, ' or ') : String(q.answer);

  return (
    <div className="quiz-q card">
      <div className="quiz-q-head">
        <Chip text={`Q${index + 1}`} />
        <Chip text={TYPE_LABELS[q.type]} />
        <Chip text={diff >= 4 ? 'Hard' : diff >= 3 ? 'Medium' : 'Easy'} cls={diff >= 4 ? 'chip-diff-hard' : diff >= 3 ? 'chip-diff-medium' : 'chip-diff-easy'} />
        {bookmark && (
          <button type="button" className={'q-bookmark' + (marked ? ' is-on' : '')} aria-pressed={marked}
            aria-label={marked ? 'Remove from bookmarks' : 'Bookmark this question'}
            title={marked ? 'Saved — tap to remove' : 'Save for later'}
            onClick={() => toggleBookmark(bookmark)}>
            {marked ? '🔖' : '🏷️'}
          </button>
        )}
      </div>
      <div className="quiz-q-text">{q.q}</div>
      <div className="mt-2">{body}</div>
      {submitted && (
        <div className={'mt-3 callout ' + (result!.correct ? 'callout-success' : 'callout-danger')} style={{ margin: 0 }}>
          <b>{result!.correct ? '✅ Correct!' : '❌ Incorrect'}</b>
          {!result!.correct && <div className="mt-2"><b>Correct answer:</b> {correctText}</div>}
          {q.explanation && <div className="mt-2 tiny">💡 {q.explanation}</div>}
        </div>
      )}
    </div>
  );
}

/* Bookmark button helper used by views */
export function useBookmarkToggle() {
  return useAppStore(s => s.toggleBookmark);
}
