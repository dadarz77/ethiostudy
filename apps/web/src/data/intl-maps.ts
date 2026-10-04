/**
 * International exam blueprints for EthioStudy.
 * Syllabus AREA names follow the published Cambridge (0610/0620/0625/0580) and
 * College Board digital-SAT content-area outlines. The unit→area mapping is our
 * own editorial judgment; no exam content is copied. Questions are drawn from the
 * EthioStudy curriculum bank.
 */
import OPENSTAX_PHYSICS from './openstax-physics.json';
import AUTHORED_INTL from './authored-intl.json';

export type UnitRef = [grade: '9' | '10' | '11' | '12', subject: string, unit: string];

export interface IntlArea {
  id: string;
  name: string;
  units: UnitRef[];
}

export interface IntlExam {
  id: string;
  brand: 'igcse' | 'sat' | 'ielts' | 'toefl' | 'alevel';
  brandLabel: string;        // e.g. "Cambridge IGCSE®"
  title: string;             // e.g. "Biology (0610)"
  subject: string;           // mathematics | biology | chemistry | physics | esl | fle | reading_writing
  icon: string;
  color: string;             // css var name suffix
  areas: IntlArea[];
  defaults: { count: number; minutes: number };
  blurb: string;
  disclaimer: string;
}

const g = (grade: '9' | '10' | '11' | '12', subject: string, ...units: string[]): UnitRef[] =>
  units.map(u => [grade, subject, u] as UnitRef);

const IGCSE_DISC = 'Unofficial practice. EthioStudy is not affiliated with or endorsed by Cambridge Assessment. Questions are drawn from the Ethiopian curriculum bank plus CC-BY sources (OpenStax Physics 2e, adapted), mapped to published IGCSE syllabus areas.';
const SAT_DISC = 'Unofficial practice. EthioStudy is not affiliated with or endorsed by the College Board®. SAT® is a registered trademark of the College Board.';
const IELTS_DISC = 'Unofficial practice. EthioStudy is not affiliated with or endorsed by IELTS®, the British Council, IDP or Cambridge Assessment English. IELTS® is jointly owned by these partners. Original practice items in IELTS format only.';
const TOEFL_DISC = 'Unofficial practice. EthioStudy is not affiliated with or endorsed by ETS®. TOEFL® and TOEFL iBT® are registered trademarks of Educational Testing Service. Original practice items in TOEFL format only.';
const ALEVEL_DISC = 'Unofficial practice. EthioStudy is not affiliated with or endorsed by Cambridge Assessment. Original practice items mapped to published Cambridge International AS & A Level syllabus areas.';

export const INTL_EXAMS: IntlExam[] = [
  // ─────────────────────────── Cambridge IGCSE ───────────────────────────
  {
    id: 'igcse-biology', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'biology',
    title: 'Biology (0610)', icon: '🧬', color: 'green',
    defaults: { count: 25, minutes: 40 },
    blurb: 'Multiple-choice practice across the six 0610 syllabus areas — cells to ecology.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'diversity', name: 'Diversity & Classification', units: [...g('9', 'biology', 'b1', 'b2'), ...g('11', 'biology', 'b2')] },
      { id: 'cells', name: 'Cells & Biochemistry', units: [...g('9', 'biology', 'b3'), ...g('10', 'biology', 'b3', 'b4')] },
      { id: 'nutrition', name: 'Nutrition, Respiration & Enzymes', units: [...g('9', 'biology', 'b5'), ...g('10', 'biology', 'b2'), ...g('11', 'biology', 'b3'), ...g('12', 'biology', 'b3')] },
      { id: 'transport', name: 'Transport, Exchange & Coordination', units: [...g('10', 'biology', 'b5'), ...g('12', 'biology', 'b5')] },
      { id: 'genetics', name: 'Reproduction & Genetics', units: [...g('9', 'biology', 'b4'), ...g('11', 'biology', 'b4')] },
      { id: 'ecology', name: 'Ecology, Resources & Biotechnology', units: [...g('9', 'biology', 'b6'), ...g('10', 'biology', 'b6'), ...g('11', 'biology', 'b1', 'b6'), ...g('12', 'biology', 'b1', 'b6')] },
    ],
  },
  {
    id: 'igcse-chemistry', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'chemistry',
    title: 'Chemistry (0620)', icon: '⚗️', color: 'orange',
    defaults: { count: 25, minutes: 40 },
    blurb: 'Six 0620 content areas — atomic structure, reactions, energetics and organics.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'atomic', name: 'Atomic Structure & Bonding', units: [...g('9', 'chemistry', 'c3', 'c4', 'c5'), ...g('11', 'chemistry', 'c1', 'c2')] },
      { id: 'states', name: 'States of Matter & Mixtures', units: [...g('9', 'chemistry', 'c1', 'c2'), ...g('10', 'chemistry', 'c2'), ...g('11', 'chemistry', 'c3')] },
      { id: 'reactions', name: 'Stoichiometry, Rates & Equilibrium', units: [...g('10', 'chemistry', 'c1'), ...g('11', 'chemistry', 'c4', 'c5')] },
      { id: 'abse', name: 'Acids, Bases & Salts', units: [...g('10', 'chemistry', 'c3'), ...g('12', 'chemistry', 'c1')] },
      { id: 'electro', name: 'Energetics & Electrochemistry', units: [...g('10', 'chemistry', 'c4'), ...g('12', 'chemistry', 'c2')] },
      { id: 'organic', name: 'Metals, Industry, Environment & Organics', units: [...g('10', 'chemistry', 'c5', 'c6'), ...g('11', 'chemistry', 'c6'), ...g('12', 'chemistry', 'c3', 'c4', 'c5')] },
    ],
  },
  {
    id: 'igcse-physics', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'physics',
    title: 'Physics (0625)', icon: '🧲', color: 'blue',
    defaults: { count: 25, minutes: 40 },
    blurb: 'The five 0625 groups — from forces and energy to waves, electricity and the atom.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'forces', name: 'Measurements, Motion, Forces & Energy', units: [...g('9', 'physics', 'p1', 'p2', 'p3', 'p4', 'p5'), ...g('10', 'physics', 'p1', 'p2', 'p3'), ...g('11', 'physics', 'p2', 'p3', 'p4'), ...g('12', 'physics', 'p2', 'p3')] },
      { id: 'thermal', name: 'Thermal Physics & Energy Resources', units: [...g('9', 'physics', 'p7'), ...g('11', 'physics', 'p5')] },
      { id: 'waves', name: 'Waves, Light & Sound', units: [...g('9', 'physics', 'p6'), ...g('10', 'physics', 'p6')] },
      { id: 'emagnet', name: 'Electricity & Magnetism', units: [...g('10', 'physics', 'p4', 'p5'), ...g('11', 'physics', 'p6'), ...g('12', 'physics', 'p4', 'p5')] },
      { id: 'nuclear', name: 'Atomic & Nuclear Physics', units: [...g('11', 'physics', 'p7')] },
    ],
  },
  {
    id: 'igcse-math', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'mathematics',
    title: 'Mathematics (0580)', icon: '📐', color: 'purple',
    defaults: { count: 30, minutes: 50 },
    blurb: 'Seven 0580 content areas — number, algebra, geometry, trigonometry, stats.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'number', name: 'Number', units: [...g('9', 'mathematics', 'm1', 'm2')] },
      { id: 'algebra', name: 'Algebra & Graphs', units: [...g('9', 'mathematics', 'm3', 'm4'), ...g('10', 'mathematics', 'm1', 'm2', 'm3'), ...g('11', 'mathematics', 'm1', 'm2')] },
      { id: 'functions', name: 'Functions, Sequences & Calculus (extended)', units: [...g('11', 'mathematics', 'm3', 'm4'), ...g('12', 'mathematics', 'm1', 'm2', 'm4')] },
      { id: 'coord', name: 'Coordinate Geometry & Vectors', units: [...g('9', 'mathematics', 'm8'), ...g('10', 'mathematics', 'm7'), ...g('11', 'mathematics', 'm5', 'm6')] },
      { id: 'geometry', name: 'Geometry & Mensuration', units: [...g('9', 'mathematics', 'm6', 'm7'), ...g('10', 'mathematics', 'm5')] },
      { id: 'trig', name: 'Trigonometry', units: [...g('9', 'mathematics', 'm5'), ...g('10', 'mathematics', 'm4', 'm6')] },
      { id: 'probstat', name: 'Probability & Statistics', units: [...g('9', 'mathematics', 'm9'), ...g('11', 'mathematics', 'm7', 'm8'), ...g('12', 'mathematics', 'm3', 'm5')] },
    ],
  },
  {
    id: 'igcse-esl', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'esl',
    title: 'English as a Second Language (0511)', icon: '📖', color: 'gold',
    defaults: { count: 24, minutes: 35 },
    blurb: 'The four 0511 skills — reading, writing, listening and speaking — as auto-marked language practice.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'read-explicit', name: 'Reading: facts, skimming & scanning', units: [] },
      { id: 'read-implied', name: 'Reading: implied meaning & attitude', units: [] },
      { id: 'write-grammar', name: 'Writing: grammar, vocabulary & register', units: [] },
      { id: 'write-cohesion', name: 'Writing: linking devices & text types', units: [] },
      { id: 'listen', name: 'Listening: gist, detail & speaker attitude', units: [] },
      { id: 'speak', name: 'Speaking: discourse markers & interaction', units: [] },
    ],
  },
  {
    id: 'igcse-fle', brand: 'igcse', brandLabel: 'Cambridge IGCSE®', subject: 'fle',
    title: 'First Language English (0522)', icon: '✒️', color: 'violet',
    defaults: { count: 24, minutes: 35 },
    blurb: 'First Language English skills — comprehension, inference, language analysis and writing accuracy.',
    disclaimer: IGCSE_DISC,
    areas: [
      { id: 'explicit', name: 'R1 Explicit meanings', units: [] },
      { id: 'implied', name: 'R2 Implicit meanings & attitudes', units: [] },
      { id: 'effects', name: 'R4 How writers achieve effects', units: [] },
      { id: 'summary', name: 'R5 Selecting & summarising', units: [] },
      { id: 'write-craft', name: 'W1–W4 Composition craft', units: [] },
      { id: 'conventions', name: 'W5 Spelling, punctuation & grammar', units: [] },
    ],
  },  // ─────────────────────────── IELTS Academic ───────────────────────────
  {
    id: 'ielts-academic', brand: 'ielts', brandLabel: 'IELTS Academic®', subject: 'ielts',
    title: 'Academic (Reading)', icon: '🌍', color: 'cyan',
    defaults: { count: 24, minutes: 35 },
    blurb: 'Academic Reading — comprehension, inference, matching and completion tasks across real expository passages.',
    disclaimer: IELTS_DISC,
    areas: [
      { id: 'mcq', name: 'Multiple choice (single & multiple answer)', units: [] },
      { id: 'tfng', name: 'True / False / Not Given', units: [] },
      { id: 'matching', name: 'Matching headings & information', units: [] },
      { id: 'completion', name: 'Sentence, summary & note completion', units: [] },
      { id: 'short', name: 'Short answer questions', units: [] },
      { id: 'vocab', name: 'Diagram/table label & vocabulary in context', units: [] },
    ],
  },
  // ─────────────────────────── TOEFL iBT ───────────────────────────
  {
    id: 'toefl-ibt', brand: 'toefl', brandLabel: 'TOEFL iBT®', subject: 'toefl',
    title: 'iBT (2026 format)', icon: '🎓', color: 'pink',
    defaults: { count: 24, minutes: 35 },
    blurb: 'Reading for academic meaning, listening comprehension, and grammar in context — the auto-gradeable sections.',
    disclaimer: TOEFL_DISC,
    areas: [
      { id: 'reading-main', name: 'Reading: main idea & purpose', units: [] },
      { id: 'reading-detail', name: 'Reading: detail & inference', units: [] },
      { id: 'reading-vocab', name: 'Reading: vocabulary in context', units: [] },
      { id: 'listening', name: 'Listening: conversations & lectures', units: [] },
      { id: 'grammar', name: 'Writing: sentence construction & grammar', units: [] },
    ],
  },
  // ─────────────────────────── Cambridge AS & A Level ───────────────────────────
  {
    id: 'alevel-english', brand: 'alevel', brandLabel: 'Cambridge AS & A Level®', subject: 'alevel',
    title: 'English Language (9093)', icon: '📰', color: 'amber',
    defaults: { count: 24, minutes: 35 },
    blurb: 'Advanced English Language — close textual analysis, language change, and written style beyond IGCSE.',
    disclaimer: ALEVEL_DISC,
    areas: [
      { id: 'analysis', name: 'Textual analysis: language & structure', units: [] },
      { id: 'inference', name: 'Inference, attitude & subtext', units: [] },
      { id: 'comparison', name: 'Comparing texts & genres', units: [] },
      { id: 'change', name: 'Language change over time', units: [] },
      { id: 'craft', name: 'Writing craft: register & audience', units: [] },
      { id: 'conventions', name: 'Grammar, spelling & punctuation', units: [] },
    ],
  },

  // ─────────────────────────── Digital SAT — Math ───────────────────────────
  {
    id: 'sat-math', brand: 'sat', brandLabel: 'Digital SAT®', subject: 'mathematics',
    title: 'Math — all four domains', icon: '🗽', color: 'red',
    defaults: { count: 30, minutes: 45 },
    blurb: 'Adaptive-exam practice across the four official SAT Math content domains.',
    disclaimer: SAT_DISC,
    areas: [
      { id: 'algebra', name: 'Algebra (linear equations, systems, inequalities)', units: [...g('9', 'mathematics', 'm3', 'm4'), ...g('10', 'mathematics', 'm1')] },
      { id: 'advanced', name: 'Advanced Math (quadratics, polynomials, exp/log)', units: [...g('9', 'mathematics', 'm2'), ...g('10', 'mathematics', 'm2', 'm3'), ...g('11', 'mathematics', 'm1', 'm2'), ...g('12', 'mathematics', 'm1')] },
      { id: 'data', name: 'Problem-Solving & Data Analysis', units: [...g('9', 'mathematics', 'm9'), ...g('11', 'mathematics', 'm7', 'm8'), ...g('12', 'mathematics', 'm3', 'm5')] },
      { id: 'geomtrig', name: 'Geometry & Trigonometry', units: [...g('9', 'mathematics', 'm5', 'm6', 'm7'), ...g('10', 'mathematics', 'm4', 'm5', 'm6', 'm7')] },
    ],
  },
  // ───────────────────────── SAT Reading & Writing (authored-only bank) ─────────────────────────
  {
    id: 'sat-reading', brand: 'sat', brandLabel: 'Digital SAT®', subject: 'reading_writing',
    title: 'Reading & Writing — all four domains', icon: '🗽', color: 'blue',
    defaults: { count: 24, minutes: 32 },
    blurb: 'Domain practice in the real Digital SAT format: short passages, evidence, Standard English Conventions.',
    disclaimer: SAT_DISC,
    areas: [
      { id: 'craft', name: 'Craft & Structure (words in context, text purpose, connections)', units: [] },
      { id: 'info', name: 'Information & Ideas (central ideas, inferences, quantitative evidence)', units: [] },
      { id: 'std', name: 'Standard English Conventions (boundaries, punctuation, agreement)', units: [] },
      { id: 'expr', name: 'Expression of Ideas (transitions, rhetorical synthesis)', units: [] },
    ],
  },
];

export interface AreaSlice { area: IntlArea; pool: { q: unknown; tid: string }[] }

/** Questions available per area for an exam (needs lessons loaded for accurate counts).
 *  topicList accepts either an array of topics or a Record keyed by topic id. */
export function areaPools(exam: IntlExam, lessonFor: (tid: string) => { questions?: unknown[] } | null, topicList: { _id: string; _grade: string; _subject: string; _unit: string }[] | Record<string, { _id?: string; _grade: string; _subject: string; _unit: string }>): AreaSlice[] {
  const list = Array.isArray(topicList) ? topicList : Object.values(topicList);
  return exam.areas.map(area => {
    const keys = new Set(area.units.map(([g, s, u]) => g + '|' + s + '|' + u));
    const pool: { q: unknown; tid: string }[] = [];
    for (const t of list) {
      const tid = (t as { _id?: string })._id ?? (t as { id?: string }).id;
      if (!tid) continue;
      if (t._subject !== exam.subject) continue;
      if (!keys.has(t._grade + '|' + t._subject + '|' + t._unit)) continue;
      const ls = lessonFor(tid);
      for (const q of ls?.questions ?? []) pool.push({ q, tid });
    }
    // CC-BY enrichment: OpenStax Physics 2e numeric problems (adapted, attribution in explanation)
    if (exam.id === 'igcse-physics') {
      for (const q of OPENSTAX_PHYSICS) {
        if ((q as { areaId?: string }).areaId === area.id) pool.push({ q, tid: 'intl:igcse-physics:openstax' });
      }
    }
    // Original authored bank (thin-pool enrichment; see scripts/authoring): keyed by exam+area
    for (const q of AUTHORED_INTL) {
      const a = q as { examId?: string; areaId?: string };
      if (a.examId === exam.id && a.areaId === area.id) pool.push({ q, tid: 'intl:authored:' + area.id });
    }
    return { area, pool };
  });
}

/** Proportional sampling: each area contributes round(count × areaShare) questions, remainder redistributed. */
export function sampleProportional(slices: AreaSlice[], count: number): { q: unknown; tid: string; areaId: string }[] {
  const total = slices.reduce((n, s) => n + s.pool.length, 0);
  if (total === 0) return [];
  const want = Math.min(count, total);
  const out: { q: unknown; tid: string; areaId: string }[] = [];
  const shuffles = slices.map(s => ({ ...s, pool: [...s.pool].sort(() => Math.random() - 0.5) }));
  let leftover = want;
  const taken: number[] = shuffles.map(() => 0);
  // largest-remainder method so totals add up exactly
  const quotas = shuffles.map(s => (s.pool.length / total) * want);
  const floors = quotas.map(q => Math.floor(q));
  let assigned = floors.reduce((a, b) => a + b, 0);
  const order = quotas.map((q, i) => ({ i, rem: q - Math.floor(q) })).sort((a, b) => b.rem - a.rem);
  for (const { i } of order) { if (assigned >= want) break; floors[i]++; assigned++; }
  shuffles.forEach((s, i) => {
    const take = Math.min(floors[i], s.pool.length);
    for (let k = 0; k < take; k++) out.push({ ...s.pool[k], areaId: s.area.id });
    leftover -= take; taken[i] = take;
  });
  // top up from pools that had spare questions
  if (leftover > 0) {
    for (const s of shuffles) {
      if (leftover <= 0) break;
      const i = shuffles.indexOf(s);
      for (let k = taken[i]; k < s.pool.length && leftover > 0; k++) {
        out.push({ ...s.pool[k], areaId: s.area.id }); leftover--; taken[i]++;
      }
    }
  }
  return out.sort(() => Math.random() - 0.5);
}
