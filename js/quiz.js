/* ============================================================
   EthioStudy Quiz Engine
   Types: mcq, tf, short, calc, concept, app
   Adaptive difficulty ordering: easy -> challenge
   ============================================================ */
window.Quiz = (function () {

  const TYPE_LABELS = { mcq: "Multiple Choice", ordering: "Ordering", tf: "True / False", short: "Short Answer", calc: "Calculation", concept: "Conceptual", app: "Application" };
  const DIFF_LABELS = { 1: "Easy", 2: "Easy–Medium", 3: "Medium", 4: "Hard", 5: "Challenge" };

  /* Normalize text for short-answer matching */
  function norm(s) {
    return String(s || "").toLowerCase().replace(/\s+/g, " ").trim().replace(/[.,;:!?]$/, "");
  }

  function numify(s) {
    const m = String(s).match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/);
    return m ? parseFloat(m[0]) : NaN;
  }

  /* Is user answer correct for a question? */
  function checkAnswer(q, userAnswer) {
    if (userAnswer === null || userAnswer === undefined || userAnswer === "") return false;
    switch (q.type) {
      case "mcq": return Number(userAnswer) === q.answer;
      case "ordering": return Number(userAnswer) === (Array.isArray(q.answer) ? q.answer[0] : q.answer);
      case "tf": return (userAnswer === true || userAnswer === "true") === (q.answer === true || q.answer === "true");
      case "calc": {
        const expected = numify(q.answer);
        if (isNaN(expected)) {
          // Text answer mislabeled as calc (e.g. "polar covalent|polar", "yes") — grade as short answer
          return checkText(q, userAnswer);
        }
        const u = numify(userAnswer);
        if (isNaN(u)) return false;
        const tol = q.tolerance || 0.05;
        // support answer strings like "24" or "24 m/s" or "24 m"
        return Math.abs(u - expected) <= Math.max(tol, Math.abs(expected) * (q.relTol || 0.02));
      }
      case "short":
      case "concept":
      case "app":
        // A numeric answer with options present is really an MCQ index
        // (some data files mislabel type) — grade it as such.
        if (typeof q.answer === "number" && Array.isArray(q.options) && q.options.length) {
          return Number(userAnswer) === q.answer || checkText(q, userAnswer);
        }
        return checkText(q, userAnswer);
    }
    return false;
  }

  /* Text grading: "|" separates alternatives; within an alternative every
     meaningful word must appear in the student's answer. Single-token answers
     (e.g. "9", "f", "k") fall back to exact normalized match. */
  function checkText(q, userAnswer) {
    const u = norm(userAnswer);
    if (!u) return false;
    const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
    const STOPWORDS = new Set(["the","a","an","and","or","is","are","was","were","in","of","to","with","by","for","it","its","that","this","on","at","be"]);
    const alternatives = accepted.flatMap(a => String(a).split("|").map(norm).filter(Boolean));
    return alternatives.some(alt => {
      const raw = alt.split(/\s+/).filter(Boolean);
      if (raw.length === 1 && raw[0].length === 1) return u === raw[0]; // "9", "f", "k", "0"
      const words = raw.filter(w => w.length > 1 && !STOPWORDS.has(w));
      if (!words.length) { // e.g. "y = x" — all tokens short; require space-free exact match
        return u.replace(/\s+/g, "") === alt.replace(/\s+/g, "");
      }
      // Short alternatives ("no", "k") need word-boundary matching so "no"
      // doesn't match inside "nonsense"; longer ones keep substring tolerance.
      if (alt.length <= 3) {
        const esc = alt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp("(^|[^a-z0-9])" + esc + "($|[^a-z0-9])").test(u);
      }
      return words.every(w => u.includes(w));
    });
  }

  /* Grade bands per spec */
  function gradeFor(pct) {
    if (pct >= 90) return { label: "Excellent", cls: "grade-excellent", emoji: "🏆" };
    if (pct >= 80) return { label: "Very Good", cls: "grade-vgood", emoji: "🌟" };
    if (pct >= 70) return { label: "Good", cls: "grade-good", emoji: "👍" };
    if (pct >= 60) return { label: "Needs Review", cls: "grade-review", emoji: "📖" };
    return { label: "Study This Topic Again", cls: "grade-review", emoji: "🔁" };
  }

  /* Adaptive difficulty: order questions so they progress easy -> challenge */
  function orderAdaptive(questions, count) {
    const qs = questions.slice();
    // group by difficulty
    const byDiff = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    qs.forEach(q => { byDiff[q.difficulty || 3] = byDiff[q.difficulty || 3] || []; byDiff[q.difficulty || 3].push(q); });
    // pick a spread: first q easy, last q challenge/hard
    const picked = [];
    const want = Math.max(1, Math.min(count, questions.length));
    if (want <= 1) { picked.push(qs[0]); return picked; }

    // ensure at least 1 from the hardest available for the finale
    const hardestLevels = [5, 4, 3, 2, 1];
    let hardLevel = null;
    for (const lv of hardestLevels) { if (byDiff[lv] && byDiff[lv].length) { hardLevel = lv; break; } }
    const hardPool = byDiff[hardLevel] || [];

    // distribute remaining slots across levels, easiest first
    const remaining = want - (hardPool.length ? 1 : 0);
    const levelsInOrder = [1, 2, 3, 4, 5].filter(l => byDiff[l] && byDiff[l].length);
    const buckets = [];
    let li = 0;
    for (let i = 0; i < remaining; i++) {
      // walk levels, wrap around
      let lv = levelsInOrder[li % levelsInOrder.length];
      buckets.push(lv);
      li++;
    }
    // take one from each bucket in order
    const used = {};
    buckets.forEach(lv => {
      const pool = byDiff[lv].filter(q => !used[q._qi]);
      if (pool.length) {
        const q = pool[0];
        used[q._qi] = true;
        picked.push(q);
      }
    });
    // add finale (hardest)
    if (hardPool.length) {
      const hq = hardPool[0];
      if (!used[hq._qi]) picked.push(hq);
    }
    // if still short, top up
    if (picked.length < want) {
      qs.forEach(q => { if (picked.length < want && !used[q._qi]) { used[q._qi] = true; picked.push(q); } });
    }
    // tag adaptive position
    picked.forEach((q, i) => { q._pos = i + 1; });
    return picked;
  }

  /* Build a quiz from a topic's question bank */
  function buildQuiz(questions, count) {
    const qs = (questions || []).map((q, i) => Object.assign({ _qi: i }, q));
    if (!qs.length) return [];
    return orderAdaptive(qs, count || 10);
  }

  /* Grade a submitted quiz */
  function gradeQuiz(quiz, answers) {
    const perQ = quiz.map((q, i) => {
      const ua = answers[i];
      const correct = checkAnswer(q, ua);
      return { q, userAnswer: ua, correct, index: i };
    });
    const correct = perQ.filter(p => p.correct).length;
    const total = perQ.length;
    const pct = total ? Math.round(correct / total * 100) : 0;
    const wrong = perQ.filter(p => !p.correct);
    // weakness detection: which keyterms/skills the student missed
    const weakKeys = [];
    wrong.forEach(p => {
      if (p.q.skills) p.q.skills.forEach(s => weakKeys.push(s));
      else if (p.q.topic) weakKeys.push(p.q.topic);
    });
    const weakCount = {};
    weakKeys.forEach(k => { weakCount[k] = (weakCount[k] || 0) + 1; });
    const weaknesses = Object.entries(weakCount).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([k]) => k);

    return {
      perQ, correct, total, pct, wrong, weaknesses,
      grade: gradeFor(pct),
      feedback: recommendation(pct, wrong)
    };
  }

  function recommendation(pct, wrong) {
    if (pct >= 90) return "Outstanding! You've mastered this topic. Try the Challenge questions or move to the next topic.";
    if (pct >= 80) return "Very strong work! Review the 1–2 you missed, then consider a harder set.";
    if (pct >= 70) return "Good progress! Re-read the worked examples and retake to lock it in.";
    if (pct >= 60) return "You're close. Review the explanation sections for the questions you missed, then retake the quiz.";
    return "Don't worry — this topic needs another pass. Study the lesson again, work the examples by hand, then retry.";
  }

  /* Generate sample quiz for the topic page */
  function makeRandomTopicQuiz(topic, count) {
    const bank = (window.Lessons[topic._id] && window.Lessons[topic._id].questions) || [];
    return buildQuiz(bank, count);
  }

  return { TYPE_LABELS, DIFF_LABELS, buildQuiz, gradeQuiz, checkAnswer, gradeFor, orderAdaptive, norm, makeRandomTopicQuiz };
})();