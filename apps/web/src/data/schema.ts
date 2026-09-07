/* ============================================================
   EthioStudy content schemas — malformed data fails the build,
   not the student's study session.
   ============================================================ */
import { z } from 'zod';

/* ---------- questions ---------- */
export const QuestionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('mcq'),
    q: z.string(),
    options: z.array(z.string()).min(2),
    answer: z.number().int().nonnegative(),
    difficulty: z.number().int().min(1).max(3),
    explanation: z.string().optional(),
  }).refine(q => q.answer < q.options.length, { message: 'mcq answer index out of range' }),
  z.object({
    type: z.literal('tf'),
    q: z.string(),
    answer: z.boolean(),
    difficulty: z.number().int().min(1).max(3),
    explanation: z.string().optional(),
  }),
  z.object({
    type: z.literal('ordering'),
    q: z.string(),
    options: z.array(z.string()).min(2),
    answer: z.union([z.array(z.number().int().nonnegative()).min(1), z.number().int().nonnegative()]),
    difficulty: z.number().int().min(1).max(3),
    explanation: z.string().optional(),
  }),
  z.object({
    type: z.enum(['short', 'concept', 'app']),
    q: z.string(),
    answer: z.string(),
    difficulty: z.number().int().min(1).max(3),
    explanation: z.string().optional(),
    altAnswers: z.array(z.string()).optional(),
    answer_note: z.string().optional(),
  }),
  z.object({
    type: z.literal('calc'),
    q: z.string(),
    answer: z.union([z.string(), z.number()]),
    tolerance: z.number().nonnegative().optional(),
    difficulty: z.number().int().min(1).max(3),
    explanation: z.string().optional(),
    altAnswers: z.array(z.string()).optional(),
    answer_note: z.string().optional(),
  }),
]);
export type Question = z.infer<typeof QuestionSchema>;

/* ---------- lesson sections ---------- */
export const FormulaSchema = z.object({
  name: z.string(),
  formula: z.string(),
  meaning: z.string().optional(),
  vars: z.union([
    z.string(),
    z.array(z.union([z.string(), z.object({ name: z.string(), meaning: z.string().optional(), unit: z.string().optional() })])),
  ]).optional(),
  units: z.string().optional(),
  when: z.string().optional(),
  example: z.string().optional(),
});

export const WorkedExampleSchema = z.object({
  problem: z.string(),
  given: z.string().optional(),
  formula: z.string().optional(),
  substitution: z.string().optional(),
  calculation: z.string().optional(),
  answer: z.string(),
});

export const VisualSchema = z.object({
  type: z.enum([
    'mindMap', 'flowChart', 'qa', 'comparison', 'timeline', 'barChart',
    'lineGraph', 'steps', 'tableVisual', 'cycleDiagram', 'numberLine',
    'formulaDerivation', 'vectorDiagram', 'motionGraph', 'forceDiagram', 'table',
  ]),
  config: z.record(z.string(), z.unknown()),
});

export const LessonSchema = z.object({
  overview: z.string(),
  objectives: z.array(z.string()).min(1),
  simple: z.string().optional(),
  detailed: z.string().optional(),
  keyTerms: z.array(z.object({ term: z.string(), def: z.string() })).default([]),
  formulas: z.array(FormulaSchema).default([]),
  workedExamples: z.array(WorkedExampleSchema).default([]),
  commonMistakes: z.array(z.string()).default([]),
  applications: z.array(z.string()).default([]),
  summary: z.string().optional(),
  visuals: z.array(VisualSchema).default([]),
  questions: z.array(QuestionSchema).min(1),
});
export type Lesson = z.infer<typeof LessonSchema>;

/* ---------- curriculum tree ---------- */
export const TopicMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  _id: z.string(),
  _grade: z.string(),
  _subject: z.string(),
  _unit: z.string(),
  _unitTitle: z.string().optional(),
  _subjectTitle: z.string().optional(),
  _subjectIcon: z.string().optional(),
  _subjectColor: z.string().optional(),
  duration: z.union([z.string(), z.number()]).optional(),
  difficulty: z.union([z.string(), z.number()]).optional(),
  objectives: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
}).passthrough();
export type TopicMeta = z.infer<typeof TopicMetaSchema>;

export const UnitSchema = z.object({
  id: z.string(),
  title: z.string(),
  topics: z.array(TopicMetaSchema).min(1),
});

export const SubjectSchema = z.object({
  key: z.string().optional(),
  title: z.string(),
  icon: z.string().optional(),
  color: z.string().optional(),
  units: z.array(UnitSchema).min(1),
});

export const CurriculumSchema = z.record(z.string(), z.record(z.string(), SubjectSchema));

export const TopicIndexSchema = z.record(z.string(), TopicMetaSchema);

/* A unit lesson file: topicId -> Lesson */
export const UnitLessonsSchema = z.record(z.string(), LessonSchema);
