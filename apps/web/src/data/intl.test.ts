import { describe, it, expect } from 'vitest';
import { INTL_EXAMS } from './intl-maps';
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
  it('has the five shipped exams', () => {
    expect(INTL_EXAMS.map(e => e.id).sort()).toEqual(
      ['igcse-biology', 'igcse-chemistry', 'igcse-math', 'igcse-physics', 'sat-math']);
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
        const keys = new Set(a.units.map(r => r.join('|')));
        const n = topics
          .filter(t => t._subject === e.subject && keys.has(t._grade + '|' + t._subject + '|' + t._unit))
          .reduce((acc, t) => acc + (lessonFor(t._id)?.questions?.length ?? 0), 0);
        expect(n, e.id + '/' + a.id + ' empty pool').toBeGreaterThan(0);
      }
    }
  });
});
