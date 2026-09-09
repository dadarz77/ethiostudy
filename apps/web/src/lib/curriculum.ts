/* ============================================================
   Curriculum/lesson access — eager-loaded JSON (Vite bundles it;
   per-unit lazy chunks are a Phase 5 perf option).
   ============================================================ */
import curriculum from '../data/curriculum.json';
import topicsFlat from '../data/topics.json';
import type { Lesson, TopicMeta } from '../data/schema';
import { LessonSchema } from '../data/schema';

export type Grade = '9' | '10' | '11' | '12';
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

/* ---- lessons: lazy per-unit chunks (Phase 5: 3MB of JSON stays out of the main bundle) ---- */
const unitLoaders = import.meta.glob(
  ['../data/lessons/*.json', '!../data/lessons/*.test.json'], // negative pattern keeps test fixtures out of the bundle
  { import: 'default' },
) as Record<string, () => Promise<Record<string, unknown>>>;

const lessonCache = new Map<string, Lesson | null>();
function fileKeyFor(tid: string): string | null {
  const unit = tid.replace(/-t\d+$/, ''); // g10-mathematics-um1-t1 -> g10-mathematics-um1
  const key = Object.keys(unitLoaders).find(k => k.endsWith('/' + unit + '.json'));
  return key ?? null;
}

/** Synchronous read — only valid after loadLesson resolved (cache hit). */
export function lessonFor(tid: string): Lesson | null {
  return lessonCache.get(tid) ?? null;
}

/** Async load of one lesson (loads + caches its whole unit chunk). */
export async function loadLesson(tid: string): Promise<Lesson | null> {
  if (lessonCache.has(tid)) return lessonCache.get(tid)!;
  const t = ALL_TOPICS[tid];
  if (!t) { lessonCache.set(tid, null); return null; }
  const key = fileKeyFor(tid);
  if (!key) { lessonCache.set(tid, null); return null; }
  const raw = (await unitLoaders[key]())[tid];
  const parsed = raw ? LessonSchema.safeParse(raw) : null;
  const lesson = parsed?.success ? (parsed.data as Lesson) : null;
  lessonCache.set(tid, lesson);
  return lesson;
}

let allPromise: Promise<void> | null = null;
/** Load every unit chunk (for global search / exam pools). Cached. */
export function loadAllLessons(): Promise<void> {
  allPromise ??= Promise.all(Object.entries(unitLoaders).map(async ([key, fn]) => {
    const unit = await fn();
    for (const [tid, raw] of Object.entries(unit)) {
      if (lessonCache.has(tid)) continue;
      const parsed = LessonSchema.safeParse(raw);
      lessonCache.set(tid, parsed.success ? (parsed.data as Lesson) : null);
    }
    void key;
  })).then(() => undefined);
  return allPromise;
}

export function fmtTime(sec: number): string {
  const h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}
