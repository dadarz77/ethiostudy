/* ============================================================
   EthioStudy Quiz Engine (TS port of js/quiz.js, Sept 7 hardened)
   Types: mcq, ordering, tf, short, calc, concept, app
   Invariants enforced by src/lib/quiz.test.ts (full 2,123-q bank).
   ============================================================ */
import type { Question } from '../data/schema';

export const TYPE_LABELS: Record<string, string> = {
  mcq: 'Multiple Choice', ordering: 'Ordering', tf: 'True / False',
  short: 'Short Answer', calc: 'Calculation', concept: 'Conceptual', app: 'Application',
};
export const DIFF_LABELS: Record<number, string> = {
  1: 'Easy', 2: 'Easy–Medium', 3: 'Medium', 4: 'Hard', 5: 'Challenge',
};

/** Normalize text for short-answer matching */
export function norm(s: unknown): string {
  return String(s ?? '').toLowerCase().replace(/\s+/g, ' ').trim().replace(/[.,;:!?]$/, '');
}

export function numify(s: unknown): number {
  const m = String(s).match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
}

const STOPWORDS = new Set(['the', 'a', 'an', 'and', 'or', 'is', 'are', 'was', 'were', 'in', 'of', 'to', 'with', 'by', 'for', 'it', 'its', 'that', 'this', 'on', 'at', 'be']);

/** Loose text grading used by short/concept/app and mislabeled calc questions */
export function checkText(q: Question, userAnswer: unknown): boolean {
  const u = norm(userAnswer);
  if (!u) return false;
  const accepted = Array.isArray(q.answer) ? q.answer : [q.answer as never];
  const alternatives = (accepted as unknown[]).flatMap(a => String(a).split('|').map(norm).filter(Boolean));
  return alternatives.some(alt => {
    const raw = alt.split(/\s+/).filter(Boolean);
    if (raw.length === 1 && raw[0].length === 1) return u === raw[0]; // "9", "f", "k", "0"
    const words = raw.filter(w => w.length > 1 && !STOPWORDS.has(w));
    if (!words.length) {
      // e.g. "y = x" — all tokens short; require space-free exact match
      return u.replace(/\s+/g, '') === alt.replace(/\s+/g, '');
    }
    if (alt.length <= 3) {
      // Short alternatives ("no", "k") need word boundaries so "no"
      // doesn't match inside "nonsense"; longer ones keep substring tolerance.
      const esc = alt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp('(^|[^a-z0-9])' + esc + '($|[^a-z0-9])').test(u);
    }
    return words.every(w => u.includes(w));
  });
}

/** Is user answer correct for a question? */
export function checkAnswer(q: Question, userAnswer: unknown): boolean {
  if (userAnswer === null || userAnswer === undefined || userAnswer === '') return false;
  switch (q.type) {
    case 'mcq':
      return Number(userAnswer) === q.answer;
    case 'ordering': {
      const expected = Array.isArray(q.answer) ? (q.answer as number[])[0] : Number(q.answer);
      return Number(userAnswer) === expected;
    }
    case 'tf':
      return (userAnswer === true || userAnswer === 'true') === q.answer;
    case 'calc': {
      const expected = numify(q.answer);
      if (isNaN(expected)) return checkText(q, userAnswer); // text answer mislabeled as calc
      const u = numify(userAnswer);
      if (isNaN(u)) return false;
      const tol = q.tolerance ?? 0.05;
      return Math.abs(u - expected) <= Math.max(tol, Math.abs(expected) * 0.02);
    }
    case 'short':
    case 'concept':
    case 'app':
      // The old JS engine had a defensive "numeric answer + options = mislabeled
      // MCQ" branch here; the Zod schema proves that shape can't exist in the
      // converted data (0 occurrences), so grading is pure text matching.
      return checkText(q, userAnswer);
  }
  return false;
}

export interface GradeBand { label: string; cls: string; emoji: string }

/** Grade bands per spec */
export function gradeFor(pct: number): GradeBand {
  if (pct >= 90) return { label: 'Excellent', cls: 'grade-excellent', emoji: '🏆' };
  if (pct >= 80) return { label: 'Very Good', cls: 'grade-vgood', emoji: '🌟' };
  if (pct >= 70) return { label: 'Good', cls: 'grade-good', emoji: '👍' };
  if (pct >= 60) return { label: 'Needs Review', cls: 'grade-review', emoji: '📖' };
  return { label: 'Study This Topic Again', cls: 'grade-review', emoji: '🔁' };
}

export type QuizQuestion = Question & { _qi: number; _pos?: number };

/** Adaptive difficulty: order questions so they progress easy -> challenge */
export function orderAdaptive(questions: QuizQuestion[], count: number): QuizQuestion[] {
  const qs = questions.slice();
  const byDiff: Record<number, QuizQuestion[]> = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  qs.forEach(q => { const d = q.difficulty || 3; (byDiff[d] ??= []).push(q); });
  const picked: QuizQuestion[] = [];
  const want = Math.max(1, Math.min(count, questions.length));
  if (want <= 1) { picked.push(qs[0]); return picked; }

  // ensure at least 1 from the hardest available for the finale
  let hardLevel: number | null = null;
  for (const lv of [5, 4, 3, 2, 1]) { if (byDiff[lv]?.length) { hardLevel = lv; break; } }
  const hardPool = (hardLevel !== null && byDiff[hardLevel]) || [];

  const remaining = want - (hardPool.length ? 1 : 0);
  const levelsInOrder = [1, 2, 3, 4, 5].filter(l => byDiff[l]?.length);
  const buckets: number[] = [];
  for (let i = 0; i < remaining; i++) buckets.push(levelsInOrder[i % levelsInOrder.length]);

  const used = new Set<number>();
  for (const lv of buckets) {
    const pool = byDiff[lv].filter(q => !used.has(q._qi));
    if (pool.length) { used.add(pool[0]._qi); picked.push(pool[0]); }
  }
  if (hardPool.length) {
    const hq = hardPool[0];
    if (!used.has(hq._qi)) picked.push(hq);
  }
  if (picked.length < want) {
    for (const q of qs) { if (picked.length < want && !used.has(q._qi)) { used.add(q._qi); picked.push(q); } }
  }
  picked.forEach((q, i) => { q._pos = i + 1; });
  return picked;
}

/** Build a quiz from a topic's question bank */
export function buildQuiz(questions: Question[], count = 10): QuizQuestion[] {
  const qs = (questions || []).map((q, i) => Object.assign({ _qi: i }, q));
  if (!qs.length) return [];
  return orderAdaptive(qs, count);
}

export interface QuizResult {
  perQ: { q: QuizQuestion; userAnswer: unknown; correct: boolean; index: number }[];
  correct: number; total: number; pct: number;
  wrong: QuizResult['perQ']; weaknesses: string[];
  grade: GradeBand; feedback: string;
}

function recommendation(pct: number): string {
  if (pct >= 90) return "Outstanding! You've mastered this topic. Try the Challenge questions or move to the next topic.";
  if (pct >= 80) return 'Very strong work! Review the 1–2 you missed, then consider a harder set.';
  if (pct >= 70) return 'Good progress! Re-read the worked examples and retake to lock it in.';
  if (pct >= 60) return "You're close. Review the explanation sections for the questions you missed, then retake the quiz.";
  return "Don't worry — this topic needs another pass. Study the lesson again, work the examples by hand, then retry.";
}

/** Grade a submitted quiz */
export function gradeQuiz(quiz: QuizQuestion[], answers: unknown[]): QuizResult {
  const perQ = quiz.map((q, i) => ({
    q, userAnswer: answers[i], correct: checkAnswer(q, answers[i]), index: i,
  }));
  const correct = perQ.filter(p => p.correct).length;
  const total = perQ.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const wrong = perQ.filter(p => !p.correct);
  const weakCount: Record<string, number> = {};
  for (const p of wrong) {
    const keys = (p.q as unknown as { skills?: string[]; topic?: string }).skills
      ?? ((p.q as unknown as { topic?: string }).topic ? [(p.q as unknown as { topic: string }).topic] : []);
    for (const k of keys) weakCount[k] = (weakCount[k] || 0) + 1;
  }
  const weaknesses = Object.entries(weakCount).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([k]) => k);
  return { perQ, correct, total, pct, wrong, weaknesses, grade: gradeFor(pct), feedback: recommendation(pct) };
}
