import { describe, it, expect } from 'vitest';
import { INTL_EXAMS, areaPools } from './intl-maps';
import { CURRICULUM, ALL_TOPICS } from '../lib/curriculum';
import { lessonFor, loadAllLessons } from '../lib/curriculum';

/** Gauntlet for the international-exam blueprints: every unit ref must exist and
 *  every content area must have a non-empty question pool in the EthioStudy bank. */

const validUnit = new Set<string>();
for (const [g, subs] of Object.entries(CURRICULUM as Record<string, Record<string, { units: { id: string }[] }> >))
  for (const [sk, s] of Object.entries(subs))
    for (const u of s.units) validUnit.add(g + '|' + sk + '|' + u.id);

const topics = Object.values(ALL_TOPICS as unknown as Record<string, { _id: string; _grade: string; _subject: string; _unit: string }>);

describe('intl exam blueprints', () => {
  it('has the six shipped exams', () => {
    expect(INTL_EXAMS.map(e => e.id).sort()).toEqual(
      ['igcse-biology', 'igcse-chemistry', 'igcse-math', 'igcse-physics', 'sat-math', 'sat-reading']);
  });

  it('every unit reference is a real grade|subject|unit', () => {
    for (const e of INTL_EXAMS) for (const a of e.areas) for (const [g, s, u] of a.units)
      expect(validUnit.has(g + '|' + s + '|' + u), e.id + '/' + a.id + ' -> ' + g + '|' + s + '|' + u).toBe(true);
  });

  it('area ids are unique per exam and subjects match', () => {
    for (const e of INTL_EXAMS) {
      expect(new Set(e.areas.map(a => a.id)).size).toBe(e.areas.length);
      for (const a of e.areas) for (const [, s] of a.units) expect(s).toBe(e.subject);
    }
  });

  it('every content area has questions once lessons are loaded', async () => {
    await loadAllLessons();
    for (const e of INTL_EXAMS) {
      for (const a of e.areas) {
        // authored-only areas (e.g. SAT Reading & Writing) have no Ethiopian
        // curriculum units; their pools are validated via areaPools below.
        if (a.units.length === 0) continue;
        const keys = new Set(a.units.map(r => r.join('|')));
        const n = topics
          .filter(t => t._subject === e.subject && keys.has(t._grade + '|' + t._subject + '|' + t._unit))
          .reduce((acc, t) => acc + (lessonFor(t._id)?.questions?.length ?? 0), 0);
        expect(n, e.id + '/' + a.id + ' empty pool').toBeGreaterThan(0);
      }
    }
  });

  it('areaPools works with the Record shape the view passes (regression: for..of crash)', async () => {
    await loadAllLessons();
    // The view calls: areaPools(exam, tid => lessonFor(tid), ALL_TOPICS) and ALL_TOPICS is a Record, not an array.
    const exam = INTL_EXAMS.find(e => e.id === 'igcse-chemistry')!;
    const slices = areaPools(exam, tid => lessonFor(tid) as never, ALL_TOPICS as never);
    expect(slices.length).toBe(exam.areas.length);
    const total = slices.reduce((n, s) => n + s.pool.length, 0);
    expect(total).toBeGreaterThan(100); // chemistry pool is ~414
    // every pooled item carries a resolvable topic id
    for (const s of slices) for (const p of s.pool) expect(p.tid).toBeTruthy();
  });

  it('OpenStax CC-BY items enrich IGCSE Physics pools and are valid calc questions', async () => {
    await loadAllLessons();
    const os = (await import('./openstax-physics.json')).default as {
      id: string; type: string; q: string; answer: string; areaId: string; explanation: string; source: string;
    }[];
    expect(os.length).toBe(25);
    // schema sanity + license attribution on every item
    for (const x of os) {
      expect(x.type).toBe('calc');
      expect(parseFloat(x.answer)).not.toBeNaN();
      expect(x.q.length).toBeGreaterThan(25);
      expect(x.explanation).toContain('OpenStax');   // attribution embedded
      expect(['forces', 'thermal', 'waves', 'emagnet', 'nuclear']).toContain(x.areaId);
    }
    // injection: physics pools grow by the right amount per area
    const exam = INTL_EXAMS.find(e => e.id === 'igcse-physics')!;
    const slices = areaPools(exam, tid => lessonFor(tid) as never, ALL_TOPICS as never);
    const total = slices.reduce((n, s) => n + s.pool.length, 0);
    expect(total).toBeGreaterThanOrEqual(228 + 25 - 3); // baseline plus all injected items
    const waves = slices.find(s => s.area.id === 'waves')!;
    const wavesOsIds = os.filter(x => x.areaId === 'waves').map(x => x.id);
    expect(wavesOsIds.length).toBeGreaterThan(0);
    for (const id of wavesOsIds) {
      expect(waves.pool.some(p => (p.q as { id?: string }).id === id), id + ' missing from waves pool').toBe(true);
    }
    // non-physics exams must NOT receive the injection
    const chem = areaPools(INTL_EXAMS.find(e => e.id === 'igcse-chemistry')!, tid => lessonFor(tid) as never, ALL_TOPICS as never);
    for (const s of chem) for (const p of s.pool) expect((p.q as { id?: string }).id ?? '').not.toMatch(/^os-ph/);
  });
});
