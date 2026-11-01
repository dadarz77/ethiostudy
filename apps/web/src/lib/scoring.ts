/* ============================================================
   EthioStudy scoring — pure functions ported from js/state.js
   (mastery blend, streak, aggregates). Tested in scoring.test.ts.
   ============================================================ */

export const DAY = 86400000;

/**
 * Per-device cumulative counters.
 *
 * These are the one thing that cannot merge with max() — and must not merge with
 * plain addition either:
 *   - max() under-counts when two devices study between syncs.
 *   - `a + b` double-counts, because the cloud row already holds this device's
 *     own history, so every merge inflates the total permanently.
 * Recording each device's own contribution and summing the per-device maxima is
 * a grow-only counter (G-Counter): it converges, never inflates, never loses
 * work. See mergeProgress() in syncEngine.ts.
 */
export interface Counters { attempts: number; correct: number; totalQ: number; studySec: number }

/** Bucket for progress written before per-device tracking existed. */
export const LEGACY_DEVICE = 'legacy';

export interface TopicProgress {
  mastery: number;
  attempts: number;
  bestScore: number;
  quizScores: number[];
  studySec: number;
  lastStudy: number | null;
  lastQuiz: number | null;
  correct: number;
  totalQ: number;
  wrongStreak: number;
  /** Per-device contributions. Absent on rows written before Phase 0.2. */
  dev?: Record<string, Counters>;
}

export interface Streak { current: number; best: number; lastDate: string | null }

export function zeroCounters(): Counters {
  return { attempts: 0, correct: 0, totalQ: 0, studySec: 0 };
}

export function emptyProgress(): TopicProgress {
  return { mastery: 0, attempts: 0, bestScore: 0, quizScores: [], studySec: 0, lastStudy: null, lastQuiz: null, correct: 0, totalQ: 0, wrongStreak: 0 };
}

/**
 * p's per-device counters, materialising a shared `legacy` bucket for progress
 * recorded before per-device tracking. Existing rows keep merging by max()
 * inside that bucket, so upgrading never inflates a student's stats.
 */
export function devCounters(p: TopicProgress): Record<string, Counters> {
  if (p.dev && Object.keys(p.dev).length) return { ...p.dev };
  return {
    [LEGACY_DEVICE]: {
      attempts: p.attempts || 0,
      correct: p.correct || 0,
      totalQ: p.totalQ || 0,
      studySec: p.studySec || 0,
    },
  };
}

/** Sum every device's contribution into the flattened counters the UI reads. */
export function sumCounters(dev: Record<string, Counters>): Counters {
  const out = zeroCounters();
  for (const c of Object.values(dev)) {
    if (!c) continue;
    out.attempts += c.attempts || 0;
    out.correct += c.correct || 0;
    out.totalQ += c.totalQ || 0;
    out.studySec += c.studySec || 0;
  }
  return out;
}

/** Add a delta to one device's bucket and recompute the flattened totals. */
function bumpDevice(
  p: TopicProgress, deviceId: string, delta: Partial<Counters>,
): { dev: Record<string, Counters>; totals: Counters } {
  const dev = devCounters(p);
  const cur = { ...zeroCounters(), ...(dev[deviceId] ?? {}) };
  cur.attempts += delta.attempts ?? 0;
  cur.correct += delta.correct ?? 0;
  cur.totalQ += delta.totalQ ?? 0;
  cur.studySec += delta.studySec ?? 0;
  const next = { ...dev, [deviceId]: cur };
  return { dev: next, totals: sumCounters(next) };
}

export function todayStr(now = new Date()): string {
  // The LOCAL calendar day. toISOString() is UTC — for a UTC+3 student studying
  // at 01:30 it returns *yesterday*, which silently breaks their streak.
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${m}-${d}`;
}

/** Advance the daily streak. Mutates a copy-safe object. */
export function touchStreak(streak: Streak, now = new Date()): Streak {
  const t = todayStr(now);
  if (streak.lastDate === t) return streak;
  const s = { ...streak };
  if (s.lastDate) {
    const last = new Date(s.lastDate + 'T00:00:00').getTime();
    const today = new Date(t + 'T00:00:00').getTime();
    s.current = today - last === DAY ? s.current + 1 : 1;
  } else {
    s.current = 1;
  }
  s.lastDate = t;
  s.best = Math.max(s.best, s.current);
  return s;
}

/** Mastery: quiz scores (60%) + attempts (15%) + study time (15%) + recency (10%) */
export function recomputeMastery(p: TopicProgress, now = Date.now()): number {
  if (p.totalQ === 0 && p.studySec === 0) return 0;
  let score = 0;
  if (p.quizScores.length) {
    const recent = p.quizScores.slice(-3);
    score += (recent.reduce((a, b) => a + b, 0) / recent.length) * 0.6;
  }
  score += Math.min(100, p.attempts * 20) * 0.15;
  score += Math.min(100, (p.studySec / 900) * 100) * 0.15; // 15 min = 100%
  if (p.lastStudy) {
    const days = (now - p.lastStudy) / DAY;
    const rec = days < 1 ? 100 : days < 3 ? 70 : days < 7 ? 40 : 15;
    score += rec * 0.1;
  }
  return Math.max(0, Math.min(100, Math.round(score)));
}

/** Apply a quiz result to progress (returns new object; streak handled by caller) */
export function applyQuiz(
  p: TopicProgress, correct: number, total: number, scorePct: number,
  now = Date.now(), deviceId: string = LEGACY_DEVICE,
): TopicProgress {
  const { dev, totals } = bumpDevice(p, deviceId, { attempts: 1, correct, totalQ: total });
  const quizScores = [...p.quizScores, scorePct];
  if (quizScores.length > 30) quizScores.shift();
  return {
    ...p,
    dev,
    attempts: totals.attempts,
    correct: totals.correct,
    totalQ: totals.totalQ,
    studySec: totals.studySec,
    quizScores,
    bestScore: Math.max(p.bestScore, scorePct),
    lastQuiz: now,
    lastStudy: now,
    wrongStreak: scorePct < 60 ? p.wrongStreak + 1 : 0,
  };
}

export function applyStudy(
  p: TopicProgress, seconds: number,
  now = Date.now(), deviceId: string = LEGACY_DEVICE,
): TopicProgress | null {
  if (!seconds || seconds < 5) return null; // ignore noise
  const { dev, totals } = bumpDevice(p, deviceId, { studySec: seconds });
  return {
    ...p,
    dev,
    attempts: totals.attempts,
    correct: totals.correct,
    totalQ: totals.totalQ,
    studySec: totals.studySec,
    lastStudy: now,
  };
}

/* ---------- aggregates (need the curriculum tree) ---------- */
export interface CurriculumLike {
  [grade: string]: { [subjectKey: string]: { units: { topics: { _id: string }[] }[] } };
}

export interface Stats {
  total: number; studied: number; pct: number; avgScore: number;
  studySec: number; avgMastery: number;
}

export function statsFor(
  cur: CurriculumLike,
  progress: Record<string, TopicProgress>,
  opts: { grade?: string; subjectKey?: string } = {},
  now = Date.now(),
): Stats & { totalStudyMin: number } {
  let total = 0, studied = 0, studySec = 0, qSum = 0, qN = 0, masterySum = 0;
  const grades = opts.subjectKey ? [opts.grade].filter(Boolean) as string[] : Object.keys(cur);
  for (const g of grades) {
    const subjects = opts.subjectKey ? [opts.subjectKey] : Object.keys(cur[g]);
    for (const sk of subjects) {
      const subj = cur[g]?.[sk];
      if (!subj) continue;
      for (const unit of subj.units) for (const t of unit.topics) {
        total++;
        const p = progress[t._id];
        if (p && (p.lastStudy || p.totalQ > 0)) {
          studied++;
          studySec += p.studySec;
          if (p.quizScores.length) { qSum += p.quizScores[p.quizScores.length - 1]; qN++; }
          masterySum += recomputeMastery(p, now);
        }
      }
    }
  }
  return {
    total, studied,
    pct: total ? Math.round((studied / total) * 100) : 0,
    avgScore: qN ? Math.round(qSum / qN) : 0,
    studySec,
    avgMastery: studied ? Math.round(masterySum / studied) : 0,
    totalStudyMin: Math.round(studySec / 60),
  };
}

export function weakTopicIds(
  cur: CurriculumLike,
  progress: Record<string, TopicProgress>,
  weakMap: Record<string, number>,
  grade: string,
  subjectKey: string | null = null,
  n = 5,
): { tid: string; mastery: number; wrongs: number }[] {
  const out: { tid: string; mastery: number; wrongs: number }[] = [];
  const subjects = subjectKey ? [subjectKey] : Object.keys(cur[grade] || {});
  for (const sk of subjects) {
    const subj = (cur[grade] || {} as CurriculumLike[string])[sk];
    if (!subj) continue;
    for (const unit of subj.units) for (const t of unit.topics) {
      const p = progress[t._id];
      if (p && p.totalQ > 0) out.push({ tid: t._id, mastery: recomputeMastery(p), wrongs: weakMap[t._id] || 0 });
    }
  }
  out.sort((a, b) => a.mastery - b.mastery || b.wrongs - a.wrongs);
  return out.slice(0, n);
}
