/* ============================================================
   EthioStudy State Engine — persistence, progress, mastery
   localStorage-backed. No server needed.
   ============================================================ */
window.Store = (function () {
  const KEY = "ethiostudy_v1";
  const DAY = 86400000;

  let state = load();

  function defaults() {
    return {
      settings: { theme: "dark", grade: "10", language: "en", sound: true, quizLen: 10, examLen: 10 },
      progress: {},      // topicId -> {mastery, attempts, bestScore, quizScores[], studySec, lastStudy, lastQuiz, correct, totalQ, wrongStreak}
      bookmarks: [],     // {id, kind: topic|question|formula, topicId, label, sub, at}
      notes: {},         // topicId -> [{text, at}]
      streak: { current: 0, best: 0, lastDate: null },
      history: [],       // {type: study|quiz, topicId, at, score?, sec?}
      totalStudySec: 0,
      weakMap: {}        // topicId -> count of recent poor scores
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const d = JSON.parse(raw);
      return Object.assign(defaults(), d);
    } catch (e) { return defaults(); }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- settings ---------- */
  function setSetting(k, v) { state.settings[k] = v; save(); }
  function getSetting(k) { return state.settings[k]; }

  /* ---------- progress ---------- */
  function topicProg(tid) {
    if (!state.progress[tid]) {
      state.progress[tid] = { mastery: 0, attempts: 0, bestScore: 0, quizScores: [], studySec: 0, lastStudy: null, lastQuiz: null, correct: 0, totalQ: 0, wrongStreak: 0 };
    }
    return state.progress[tid];
  }

  function todayStr() { return new Date().toISOString().slice(0, 10); }

  function touchStreak() {
    const t = todayStr();
    if (state.streak.lastDate === t) return;
    const last = new Date(state.streak.lastDate + "T00:00:00").getTime();
    const now = new Date(t + "T00:00:00").getTime();
    if (state.streak.lastDate && now - last === DAY) state.streak.current++;
    else state.streak.current = 1;
    state.streak.lastDate = t;
    state.streak.best = Math.max(state.streak.best, state.streak.current);
    save();
  }

  function logStudy(tid, seconds) {
    if (!seconds || seconds < 5) return;
    const p = topicProg(tid);
    p.studySec += seconds;
    p.lastStudy = Date.now();
    state.totalStudySec += seconds;
    state.history.unshift({ type: "study", topicId: tid, sec: seconds, at: Date.now() });
    if (state.history.length > 500) state.history.length = 500;
    touchStreak();
    recomputeMastery(tid);
    save();
  }

  function logQuiz(tid, correct, total, scorePct, wrongIds) {
    const p = topicProg(tid);
    p.attempts++;
    p.correct += correct;
    p.totalQ += total;
    p.quizScores.push(scorePct);
    if (p.quizScores.length > 30) p.quizScores.shift();
    p.bestScore = Math.max(p.bestScore, scorePct);
    p.lastQuiz = Date.now();
    p.lastStudy = Date.now();
    p.wrongStreak = (scorePct < 60) ? p.wrongStreak + 1 : 0;
    // weak map for wrong topics
    (wrongIds || []).forEach(wid => { state.weakMap[wid] = (state.weakMap[wid] || 0) + 1; });
    state.history.unshift({ type: "quiz", topicId: tid, score: scorePct, correct, total, at: Date.now() });
    if (state.history.length > 500) state.history.length = 500;
    touchStreak();
    recomputeMastery(tid);
    save();
  }

  /* Mastery: quiz scores (60%) + attempts (15%) + study time (15%) + recency (10%) */
  function recomputeMastery(tid) {
    const p = topicProg(tid);
    if (p.totalQ === 0 && p.studySec === 0) { p.mastery = 0; return; }
    let score = 0;
    if (p.quizScores.length) {
      const recent = p.quizScores.slice(-3);
      const avg = recent.reduce((a, b) => a + b, 0) / recent.length;
      score += avg * 0.6;
    }
    score += Math.min(100, p.attempts * 20) * 0.15;
    score += Math.min(100, p.studySec / 900 * 100) * 0.15; // 15 min = 100%
    if (p.lastStudy) {
      const days = (Date.now() - p.lastStudy) / DAY;
      const rec = days < 1 ? 100 : days < 3 ? 70 : days < 7 ? 40 : 15;
      score += rec * 0.10;
    }
    p.mastery = Math.max(0, Math.min(100, Math.round(score)));
  }

  function mastery(tid) { const p = topicProg(tid); recomputeMastery(tid); return p.mastery; }
  function progressOf(tid) { return topicProg(tid); }

  /* ---------- bookmarks ---------- */
  function addBookmark(b) {
    if (state.bookmarks.some(x => x.id === b.id)) return false;
    state.bookmarks.unshift(Object.assign({ at: Date.now() }, b));
    save(); return true;
  }
  function removeBookmark(id) { state.bookmarks = state.bookmarks.filter(b => b.id !== id); save(); }
  function toggleBookmark(b) { return state.bookmarks.some(x => x.id === b.id) ? (removeBookmark(b.id), false) : addBookmark(b); }
  function isBookmarked(id) { return state.bookmarks.some(b => b.id === id); }

  /* ---------- notes ---------- */
  function getNotes(tid) { return state.notes[tid] || []; }
  function addNote(tid, text) {
    if (!state.notes[tid]) state.notes[tid] = [];
    state.notes[tid].unshift({ text, at: Date.now() });
    if (state.notes[tid].length > 50) state.notes[tid].length = 50;
    save();
  }
  function deleteNote(tid, idx) { if (state.notes[tid]) { state.notes[tid].splice(idx, 1); save(); } }

  /* ---------- aggregates ---------- */
  function subjectStats(grade, subjectKey) {
    const subj = (window.CURRICULUM_ALL[grade] || {})[subjectKey];
    if (!subj) return { total: 0, studied: 0, pct: 0, avgScore: 0, studySec: 0, masterySum: 0 };
    let total = 0, studied = 0, scoreSum = 0, scoreN = 0, studySec = 0, masterySum = 0;
    for (const unit of subj.units) for (const t of unit.topics) {
      total++;
      const p = state.progress[t._id];
      if (p && (p.lastStudy || p.totalQ > 0)) {
        studied++;
        studySec += p.studySec;
        if (p.quizScores.length) { scoreSum += p.quizScores[p.quizScores.length - 1]; scoreN++; }
        masterySum += mastery(t._id);
      }
    }
    return { total, studied, pct: total ? Math.round(studied / total * 100) : 0, avgScore: scoreN ? Math.round(scoreSum / scoreN) : 0, studySec, avgMastery: studied ? Math.round(masterySum / studied) : 0 };
  }

  function overallStats() {
    let total = 0, studied = 0, studySec = 0, scoreSum = 0, scoreN = 0, masterySum = 0;
    for (const grade of Object.keys(window.CURRICULUM_ALL)) {
      for (const subjKey of Object.keys(window.CURRICULUM_ALL[grade])) {
        const s = subjectStats(grade, subjKey);
        total += s.total; studied += s.studied; studySec += s.studySec;
        scoreSum += s.avgScore * (s.total ? 1 : 0); // recompute below properly
      }
    }
    // recompute avg score properly
    let qSum = 0, qN = 0;
    for (const grade of Object.keys(window.CURRICULUM_ALL)) {
      for (const subjKey of Object.keys(window.CURRICULUM_ALL[grade])) {
        const subj = window.CURRICULUM_ALL[grade][subjKey];
        for (const unit of subj.units) for (const t of unit.topics) {
          const p = state.progress[t._id];
          if (p && p.quizScores.length) { qSum += p.quizScores[p.quizScores.length - 1]; qN++; }
          if (p && (p.lastStudy || p.totalQ > 0)) masterySum += mastery(t._id);
        }
      }
    }
    return { total, studied, pct: total ? Math.round(studied / total * 100) : 0, avgScore: qN ? Math.round(qSum / qN) : 0, studySec, avgMastery: studied ? Math.round(masterySum / studied) : 0, totalStudyMin: Math.round(studySec / 60) };
  }

  function weakTopics(grade, subjectKey, n = 5) {
    const out = [];
    const subj = (window.CURRICULUM_ALL[grade] || {})[subjectKey];
    if (!subj) return out;
    for (const unit of subj.units) for (const t of unit.topics) {
      const p = state.progress[t._id];
      if (p && p.totalQ > 0) {
        const m = mastery(t._id);
        out.push({ topic: t, mastery: m, wrongs: state.weakMap[t._id] || 0 });
      }
    }
    out.sort((a, b) => (a.mastery - b.mastery) || (b.wrongs - a.wrongs));
    return out.slice(0, n);
  }

  function studyHistory(n = 20) { return state.history.slice(0, n); }

  function resetAll() { state = defaults(); save(); }
  function getState() { return state; }

  return {
    setSetting, getSetting, topicProg, logStudy, logQuiz, mastery, progressOf,
    addBookmark, removeBookmark, toggleBookmark, isBookmarked,
    getNotes, addNote, deleteNote,
    subjectStats, overallStats, weakTopics, studyHistory, resetAll, getState
  };
})();
