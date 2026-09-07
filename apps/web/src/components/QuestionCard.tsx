import type { Question } from '../data/schema';
import { TYPE_LABELS } from '../lib/quiz';

export function QuestionCard({ q, index, answer, onAnswer }: {
  q: Question; index: number; answer: unknown; onAnswer: (a: unknown) => void;
}) {
  return (
    <div className="question-card">
      <div className="q-head">Q{index + 1} · {TYPE_LABELS[q.type]} · {q.difficulty}★</div>
      <p className="q-text">{q.q}</p>
      {q.type === 'mcq' && q.options.map((o, i) => (
        <label key={i} className={'opt' + (answer === i ? ' sel' : '')}>
          <input type="radio" name={'q' + index} checked={answer === i} onChange={() => onAnswer(i)} /> {String.fromCharCode(65 + i)}. {o}
        </label>
      ))}
      {q.type === 'tf' && ['true', 'false'].map(v => (
        <label key={v} className={'opt' + (answer === v ? ' sel' : '')}>
          <input type="radio" name={'q' + index} checked={answer === v} onChange={() => onAnswer(v)} /> {v === 'true' ? 'True' : 'False'}
        </label>
      ))}
      {q.type === 'ordering' && (
        <select value={(answer as number) ?? ''} onChange={e => onAnswer(Number(e.target.value))}>
          <option value="" disabled>First item in the sequence…</option>
          {q.options.map((o, i) => <option key={i} value={i}>{o}</option>)}
        </select>
      )}
      {(q.type === 'short' || q.type === 'concept' || q.type === 'app' || q.type === 'calc') && (
        <input className="text-answer" value={(answer as string) ?? ''} onChange={e => onAnswer(e.target.value)} placeholder="Type your answer…" />
      )}
    </div>
  );
}
