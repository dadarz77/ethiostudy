/* ============================================================
   Curriculum/lesson access — eager-loaded JSON (Vite bundles it;
   per-unit lazy chunks are a Phase 5 perf option).
   ============================================================ */
import curriculum from '../data/curriculum.json';
import topicsFlat from '../data/topics.json';
import type { Lesson, TopicMeta } from '../data/schema';
import { LessonSchema } from '../data/schema';

export type Grade = '10' | '11';
export interface Subject { id: string; title: string; icon: string; color: string; units: Unit[] }
export interface Unit { id: string; title: string; topics: Topic[] }
export interface Topic extends TopicMeta {
  _id: string; _grade: Grade; _subject: string; _unit: string; _unitTitle: string; _subjectTitle: string;
}

const cur = curriculum as unknown as Record<Grade, Record<string, Subject>>;

// attach _ids (mirrors data/curriculum-g11.js behavior)
for (const g of Object.keys(cur) as Grade[]) {
  for (const sk of Object.keys(cur[g])) {
    for (const u of cur[g][sk].units) {
      for (const t of u.topics) {
        Object.assign(t, {
          _id: `g${g}-${sk}-u${u.id.split('-')[0]}-t${String(t.id).split('-')[1]}`,
          _grade: g, _subject: sk, _unit: u.id, _unitTitle: u.title, _subjectTitle: cur[g][sk].title,
        });
      }
    }
  }
}

export const CURRICULUM = cur;
export const ALL_TOPICS = topicsFlat as unknown as Record<string, Topic>;

export function subjectsFor(grade: Grade): { key: string; s: Subject }[] {
  return Object.entries(cur[grade]).map(([key, s]) => ({ key, s }));
}
export function subject(grade: Grade, key: string): Subject | undefined {
  return cur[grade]?.[key];
}
export function topicById(tid: string): Topic | undefined {
  return ALL_TOPICS[tid];
}

/* ---- lessons: eager map of unit files ---- */
const unitFiles = import.meta.glob('../data/lessons/*.json', { eager: true, import: 'default' }) as Record<string, Record<string, unknown>>;

const lessonCache = new Map<string, Lesson | null>();
export function lessonFor(tid: string): Lesson | null {
  if (lessonCache.has(tid)) return lessonCache.get(tid)!;
  const t = ALL_TOPICS[tid];
  if (!t) { lessonCache.set(tid, null); return null; }
  const file = Object.values(unitFiles).find(u => tid in u);
  const raw = file?.[tid];
  const parsed = raw ? LessonSchema.safeParse(raw) : null;
  const lesson = parsed?.success ? (parsed.data as Lesson) : null;
  lessonCache.set(tid, lesson);
  return lesson;
}

export function fmtTime(sec: number): string {
  const h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}
