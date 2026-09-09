/* Full-bank grader regression — the Sept 7 sweep baked into CI.
   Every canonical answer must pass; wrong answers must fail. */
import { describe, it, expect } from 'vitest';
import { checkAnswer } from './quiz';
import all from '../data/lessons/all-questions.test.json';

type Entry = { tid: string; q: Record<string, unknown> };
const lessons = all as unknown as Entry[];

describe('grader regression (2,304 questions)', () => {
  it('fixture loaded', () => {
    expect(lessons.length).toBe(2594);
  });

  it('every canonical answer passes its own question', () => {
    const fails = lessons
      .filter(({ q }) => !checkAnswer(q as never, q.answer as never))
      .map(({ tid, q }) => `${tid} [${q.type}] ${JSON.stringify(q.answer).slice(0, 40)}`);
    expect(fails).toEqual([]);
  });

  it('no false positives (tf-flip, mcq-neighbor, junk text)', () => {
    const fps: string[] = [];
    for (const { tid, q } of lessons) {
      if (q.type === 'tf' && checkAnswer(q as never, !q.answer as never)) fps.push(`${tid} tf-flip`);
      if (q.type === 'mcq' && Array.isArray(q.options) &&
          checkAnswer(q as never, ((q.answer as number) + 1) % (q.options as string[]).length)) fps.push(`${tid} mcq-neighbor`);
      if ((q.type === 'short' || q.type === 'concept') &&
          checkAnswer(q as never, 'zzqqxx nonsense')) fps.push(`${tid} junk`);
    }
    expect(fps).toEqual([]);
  });

  it('realistic student phrasings grade correctly', () => {
    expect(checkAnswer({ type: 'concept', answer: 'no|still 9.8' } as never, 'no, it is unsustainable')).toBe(true);
    expect(checkAnswer({ type: 'short', answer: 'y = x' } as never, 'y=x')).toBe(true);
    expect(checkAnswer({ type: 'short', answer: 'pi|π' } as never, 'Pi.')).toBe(true);
    expect(checkAnswer({ type: 'calc', answer: '44.1' } as never, '44.1 N')).toBe(true);
    expect(checkAnswer({ type: 'calc', answer: '44.1' } as never, '44.0')).toBe(true); // within 2% relTol by design
    expect(checkAnswer({ type: 'calc', answer: '44.1' } as never, '43.0')).toBe(false);
    expect(checkAnswer({ type: 'short', answer: 'absolute value|abs x' } as never, 'absolute value')).toBe(true);
    expect(checkAnswer({ type: 'mcq', options: ['a', 'b', 'c'], answer: 1 } as never, 1)).toBe(true);
    expect(checkAnswer({ type: 'mcq', options: ['a', 'b', 'c'], answer: 1 } as never, 2)).toBe(false);
    expect(checkAnswer({ type: 'tf', answer: true } as never, 'true')).toBe(true);
    expect(checkAnswer({ type: 'tf', answer: true } as never, 'false')).toBe(false);
    expect(checkAnswer({ type: 'short', answer: 'x = -1' } as never, '')).toBe(false);
    expect(checkAnswer({ type: 'short', answer: 'x = -1' } as never, null as never)).toBe(false);
  });
});
