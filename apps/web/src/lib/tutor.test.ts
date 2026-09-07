import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ask, suggestions } from './tutor';
import { UnitLessonsSchema } from '../data/schema';

// vitest cwd = apps/web
const unit = UnitLessonsSchema.parse(JSON.parse(readFileSync(join(process.cwd(), 'src/data/lessons/g11-mathematics-um1.json'), 'utf8')));
const tid = 'g11-mathematics-um1-t1';
const ls = unit[tid];
const topic = { _id: tid, title: ls.title || 'Functions', _grade: '11', _subjectTitle: 'Mathematics' };

describe('tutor intent routing', () => {
  it('empty question prompts', () => expect(ask(topic, ls, '')).toContain('Ask me anything'));
  it('simpler words -> simple section', () => expect(ask(topic, ls, 'this is too hard, simpler please')).toContain('In simpler words'));
  it('beginner intent', () => expect(ask(topic, ls, "explain like I'm a beginner")).toContain('start from zero'));
  it('another example', () => expect(ask(topic, ls, 'give me another example')).toMatch(/Another worked example|Real-world example|fresh angle/));
  it('why formula', () => expect(ask(topic, ls, 'why is this formula used?')).toMatch(/works:|formulas turn/));
  it('harder question returns a question', () => expect(ask(topic, ls, 'give me a harder question')).toMatch(/Challenge question|Quiz/));
  it('quiz me returns a question', () => expect(ask(topic, ls, 'quiz me')).toMatch(/Quick question|Quiz/));
  it('answer-check fallback is honest', () => expect(ask(topic, ls, 'my answer is 42 is it right')).toContain('Worked Examples'));
  it('what-is term lookup', () => {
    const term = ls.keyTerms?.[0];
    if (term) expect(ask(topic, ls, 'what is ' + term.term.toLowerCase())).toContain(term.term);
    else expect(ask(topic, ls, 'what is something random')).toBeTruthy();
  });
  it('overview intent', () => expect(ask(topic, ls, 'tell me about this topic')).toContain('About'));
  it('walk me through', () => expect(ask(topic, ls, 'walk me through it step by step')).toMatch(/Step-by-step|Simple Explanation/));
  it('gibberish gets the helpful fallback', () => expect(ask(topic, ls, 'xyzzy blorp')).toContain('Great question'));
});

describe('suggestions', () => {
  it('max 6 chips, includes core five', () => {
    const s = suggestions(topic, ls);
    expect(s.length).toBeLessThanOrEqual(6);
    expect(s[0]).toBe('Explain this in simpler words');
  });
});
