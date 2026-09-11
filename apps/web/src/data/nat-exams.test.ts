import { describe, expect, it } from 'vitest';
import NAT from './nat-exams.json';

type Nat = { id: string; subject: string; year: number; q: string; options: string[]; answer: number; type: string; explanation: string };
const items = NAT as Nat[];

describe('national exams bank (ESSLCE past papers)', () => {
  it('has items', () => expect(items.length).toBeGreaterThan(100));
  it('unique ids', () => expect(new Set(items.map(i => i.id)).size).toBe(items.length));
  it('valid mcq shape', () => {
    for (const i of items) {
      expect(i.type).toBe('mcq');
      expect(i.options.length).toBeGreaterThanOrEqual(2);
      expect(i.options.length).toBeLessThanOrEqual(4);
      expect(i.answer).toBeGreaterThanOrEqual(0);
      expect(i.answer).toBeLessThan(i.options.length);
      expect(i.q.length).toBeGreaterThan(15);
      expect(i.q[0]).toBe(i.q[0].toUpperCase());
    }
  });
  it('no OCR artifacts', () => {
    const bad = /PAGE \d|euee\.epizy|Not Answered|National Examinations|\d\/\d+\/\d+|~~|[\u3000-\u30ff\u4e00-\u9fff]/;
    for (const i of items) {
      expect(i.q + ' ' + i.options.join(' '), '').not.toMatch(bad);
    }
  });
  it('no duplicate option text within an item', () => {
    for (const i of items) expect(new Set(i.options.map(o => o.toLowerCase().trim())).size).toBe(i.options.length);
  });
  it('subjects and years are known', () => {
    for (const i of items) {
      expect(['biology', 'chemistry', 'physics', 'mathematics', 'civics', 'english']).toContain(i.subject);
      expect(i.year).toBeGreaterThanOrEqual(2005);
      expect(i.year).toBeLessThanOrEqual(2010);
    }
  });
});
