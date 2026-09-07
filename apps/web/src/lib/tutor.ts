/* ============================================================
   EthioStudy AI Tutor — offline, rule-based, topic-focused.
   TS port of js/tutor.js. Pure: pass the lesson + topic in.
   Understands: simpler words, another example, why formula,
   beginner explanation, harder question, quiz me, free questions.
   ============================================================ */
import type { Lesson, Question } from '../data/schema';
import { TYPE_LABELS, DIFF_LABELS } from './quiz';

export interface TutorTopic {
  _id: string; title: string; _grade?: string; _subjectTitle?: string;
}

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

/** Quick chips shown above the chat */
export function suggestions(_topic: TutorTopic, ls: Lesson): string[] {
  const base = [
    'Explain this in simpler words', 'Give me another example', 'Why is this formula used?',
    "Explain like I'm a beginner", 'Give me a harder question',
  ];
  if (ls.formulas?.length) base.push('What does ' + ls.formulas[0].name + ' mean?');
  if (ls.keyTerms?.length) base.push('What is ' + ls.keyTerms[0].term + '?');
  if (ls.workedExamples?.length) base.push('Walk me through an example');
  if (ls.questions?.length) base.push('Quiz me');
  return base.slice(0, 6);
}

function renderOptions(q: Question): string {
  return 'mcq' === q.type ? '\n\n' + q.options.map((o, i) => String.fromCharCode(65 + i) + '. ' + o).join('\n') : '';
}

/** Main answer engine */
export function ask(topic: TutorTopic, ls: Lesson, question: string): string {
  const q = String(question || '').toLowerCase().trim();
  const t = topic.title;

  if (!q) return 'Ask me anything about **' + t + '**! For example: explain it simply, give me an example, why is the formula used, or quiz me.';

  /* 1. simpler words */
  if (/(simpler|simple way|simplify|easier|too hard|confus)/.test(q)) {
    const s = ls.simple || ls.overview || "Let's break it down step by step.";
    return '**In simpler words:**\n\n' + s + '\n\n👉 Want me to go even simpler, or give a real-life example?';
  }

  /* 2. beginner / like I'm 10 */
  if (/(beginner|like i'?m|dumb|new to this|start from scratch|very basic)/.test(q)) {
    const s = ls.simple || ls.overview || "Here's the core idea: " + t;
    return "**Let's start from zero.** 🚀\n\n" + s + '\n\nThen once that clicks, we build up to the full detail.';
  }

  /* 3. another example */
  if (/(another example|more example|different example|one more example|show me an example)/.test(q)) {
    if (ls.workedExamples && ls.workedExamples.length > 1) {
      const ex = ls.workedExamples[1];
      return '**Another worked example:**\n\n**' + ex.problem + '**\n\n*Given:* ' + (ex.given ?? '—') +
        '\n*Formula:* ' + (ex.formula ?? '—') + '\n\n' + (ex.calculation ?? ex.substitution ?? '') + '\n\n**Answer:** ' + ex.answer;
    }
    if (ls.applications?.length) return '**Real-world example:**\n\n' + ls.applications[0];
    return "Here's a fresh angle: try re-reading the **Worked Examples** section of this topic and solve the first one on your own before peeking at the solution. 💪";
  }

  /* 4. why formula / why is this used */
  if (/(why.*formula|why.*use|why.*this|why.*that|where.*formula|when.*use)/.test(q)) {
    if (ls.formulas?.length) {
      const f = ls.formulas[0];
      return '**Why ' + (f.name || 'this formula') + ' works:**\n\n' + (f.meaning || 'It connects the quantities in a precise way.') +
        '\n\n**When to use it:** ' + (f.when || 'When you know all variables except one.') + '\n\n**Units:** ' + (f.units || '—');
    }
    return 'In ' + t + ', formulas turn real situations into numbers you can calculate. Check the **Formulas** section — each one explains what it means and when to use it.';
  }

  /* 5. harder question */
  if (/(harder|challenge|difficult question|tough)/.test(q)) {
    const hard = (ls.questions || []).filter(x => (x.difficulty || 3) >= 4);
    const qq = hard.length ? pick(hard) : (ls.questions?.length ? pick(ls.questions) : null);
    if (!qq) return "I don't have a challenge question saved for this topic yet — try the **Quiz** tab!";
    return '**Challenge question** 🔥 (Difficulty: ' + (DIFF_LABELS[qq.difficulty] || 'Hard') + ')\n\n' + qq.q + renderOptions(qq) + "\n\nThink it through — when you have an answer, tell me and I'll check it!";
  }

  /* 6. quiz me */
  if (/(quiz|test me|question me|practice)/.test(q)) {
    const bank = ls.questions || [];
    if (!bank.length) return "I don't have a saved quiz for this topic yet — open the **Quiz** tab to take one!";
    const qq = pick(bank);
    return '**Quick question** (' + (TYPE_LABELS[qq.type] || 'question') + '):\n\n' + qq.q + renderOptions(qq);
  }

  /* 7. check an answer from a challenge question */
  if (/(answer|is it |my answer|i think)/.test(q)) {
    return "I can't grade free answers reliably here, but here's a tip: check the **Worked Examples** for the method, then redo it step by step. When you take the **Quiz**, every question gives instant feedback with the correct answer and explanation. ✅";
  }

  /* 8. what is <term> */
  const termMatch = q.match(/what is (?:a |an |the )?([a-z ]+)\??/);
  if (termMatch && ls.keyTerms) {
    const term = termMatch[1].trim();
    const kt = ls.keyTerms.find(k => k.term.toLowerCase().includes(term.split(' ')[0]));
    if (kt) return '**' + kt.term + ':** ' + kt.def;
  }

  /* 9. keyword search across lesson */
  const words = q.split(/\s+/).filter(w => w.length > 3);
  if (ls.keyTerms) {
    const hit = ls.keyTerms.find(k => words.some(w => k.term.toLowerCase().includes(w) || k.def.toLowerCase().includes(w)));
    if (hit) return '**' + hit.term + ':** ' + hit.def;
  }
  if (ls.formulas) {
    const hit = ls.formulas.find(f => words.some(w => (f.name || '').toLowerCase().includes(w) || (f.formula || '').toLowerCase().includes(w)));
    if (hit) return '**' + (hit.name || 'Formula') + ':** ' + hit.formula + '\n\n' + (hit.meaning || '') + '\n\n*When to use:* ' + (hit.when || '—') + '\n*Units:* ' + (hit.units || '—');
  }

  /* 10. formula / calculation */
  if (/(formula|calculate|equation|solve)/.test(q) && ls.formulas?.length) {
    return 'The key formulas here are:\n\n' + ls.formulas.map(f => '**' + (f.name || '') + ':** ' + f.formula).join('\n') +
      '\n\nEach one explains what the variables mean and when to use it in the **Formulas** section.';
  }

  /* 11. overview / summary */
  if (/(what is this|about|overview|summary|tell me about)/.test(q)) {
    return '**About ' + t + ':**\n\n' + (ls.overview || 'This is a Grade ' + topic._grade + ' ' + topic._subjectTitle + ' topic in the Ethiopian New Curriculum.') +
      '\n\nCheck the lesson below for objectives, key terms, formulas and examples!';
  }

  /* 12. walk me through */
  if (/(walk me|step by step|guide me|explain)/.test(q)) {
    if (ls.workedExamples?.length) {
      const ex = ls.workedExamples[0];
      return '**Step-by-step:**\n\n**Problem:** ' + ex.problem + '\n\n1️⃣ **Given:** ' + (ex.given ?? '—') +
        '\n2️⃣ **Formula:** ' + (ex.formula ?? '—') + '\n3️⃣ ' + (ex.substitution ?? ex.calculation ?? 'Substitute the values.') + '\n\n**✅ Answer:** ' + ex.answer;
    }
    return 'Read the **Simple Explanation** first, then the **Worked Examples** — each one is broken into Given → Formula → Substitution → Calculation → Answer.';
  }

  /* fallback */
  return 'Great question! 🤔 For **' + t + '**, here\'s what I suggest:\n\n• Read the **Simple Explanation** for the big picture\n• Check **Key Terms** for vocabulary\n• Try a **Worked Example** step by step\n\nAsk me to *explain it simpler*, *give another example*, or *quiz me*!';
}
