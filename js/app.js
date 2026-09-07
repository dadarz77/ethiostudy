/* ============================================================
   EthioStudy — Main Application (SPA)
   Views: dashboard, browse, pick, topic, quiz, practice,
          exam, progress, bookmarks, notes, settings
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));
  const view = () => $("#view");

  /* ---------- Auto-lesson generator (fallback for any topic) ---------- */
function autoLesson(t) {
  const subs = t.subtopics || [];
  const subj = t._subjectTitle, unit = t._unitTitle, grade = t._grade;
  const hasSubs = subs.length > 0;
  return {
    overview: `This is an overview of <b>${t.title}</b> — a topic in <b>${unit}</b> of Grade ${grade} ${subj} (Ethiopian New Curriculum).${hasSubs ? " It covers: " + subs.join(", ") + "." : ""} Full authored lessons are being added subject by subject — the structure and subtopics below are ready to study now.`,
    objectives: hasSubs ? subs.map(s => `Explain and apply the concept of ${s.toLowerCase()}`) : [`Understand the key concepts of ${t.title}`],
    simple: `${t.title} is part of the ${subj} syllabus for the Ethiopian New Curriculum (Grade ${grade}). ${hasSubs ? "The main subtopics are " + subs.join(", ") + "." : "This topic builds on the unit's core concepts."} Read through the subtopics, connect each to real examples, then test yourself with the quiz.`,
    detailed: `<p>This topic sits in <b>${unit}</b> of <b>Grade ${grade} ${subj}</b>. The Ethiopian curriculum expects you to understand its place in the unit and to solve problems step by step.</p>${hasSubs ? `<p>Key subtopics to master:</p><ul>${subs.map(s => `<li>${s}</li>`).join("")}</ul>` : ""}<p>Work through the quiz to check your understanding — every question includes an explanation.</p>`,
    keyTerms: hasSubs ? subs.map(s => ({ term: s, def: `A key subtopic of ${t.title} — study it within the context of ${unit}.` })) : [{ term: t.title, def: `A Grade ${grade} ${subj} topic in the Ethiopian New Curriculum.` }],
    workedExamples: [], formulas: [], commonMistakes: [], applications: [],
    summary: `${t.title} belongs to ${unit} (Grade ${grade} ${subj}). Master the subtopics — ${hasSubs ? subs.join(", ") : "review the unit content"} — then take the quiz.`,
    _auto: true,
    questions: hasSubs ? [
      { type: "mcq", q: `Which of the following is a subtopic of "${t.title}"?`, options: (() => { const o = [subs[0], ...subs.slice(1,3), "An unrelated concept"]; const s = UI.shuffle(o); return s; })(), difficulty: 1, answer: 0, explanation: `"${subs[0]}" is a subtopic of ${t.title} in the Ethiopian curriculum.` },
      { type: "short", q: `Name one subtopic of "${t.title}".`, answer: subs[0], difficulty: 1, explanation: `The subtopics of ${t.title} include: ${subs.join(", ")}.` },
      { type: "tf", q: `"${t.title}" is part of ${unit} in Grade ${grade} ${subj}.`, answer: true, difficulty: 1, explanation: `This topic belongs to ${unit} in the official Ethiopian curriculum.` }
    ] : []
  };
}
function lessonFor(t) { return (window.Lessons && window.Lessons[t._id]) || autoLesson(t); }

/* ---------- Router ---------- */
  let current = { name: "dashboard", params: {} };
  let activeTopic = null;      // current topic context
  let activeQuiz = null;       // { questions, answers }
  let pickerContext = null;

  const COPY = {
    en: { dashboard: "Dashboard", browse: "Browse Curriculum", practice: "Practice", exam: "Exam Prep", progress: "Progress", bookmarks: "Bookmarks", notes: "Notes", settings: "Settings", pickTopic: "PICK A TOPIC", welcome: "Welcome back, Student!", continue: "Continue learning", explore: "Explore subjects", weak: "Practice weak topics", readiness: "Exam readiness", noSessions: "Your study story starts here.", start: "Start studying" },
    am: { dashboard: "መነሻ", browse: "ሥርዓተ ትምህርት", practice: "ልምምድ", exam: "ለፈተና ዝግጅት", progress: "እድገት", bookmarks: "ምልክቶች", notes: "ማስታወሻዎች", settings: "ቅንብሮች", pickTopic: "ርዕስ ምረጥ", welcome: "እንኳን ደህና መጡ!", continue: "ትምህርት ቀጥል", explore: "ትምህርቶችን ይመልከቱ", weak: "ደካማ ርዕሶችን ተለማመዱ", readiness: "የፈተና ዝግጁነት", noSessions: "የትምህርት ጉዞዎ እዚህ ይጀምራል።", start: "መማር ጀምር" }
  };
  function language() { return Store.getSetting("language") || "en"; }
  function tr(key) { return (COPY[language()] || COPY.en)[key] || COPY.en[key] || key; }
  function applyLanguage() {
    document.documentElement.lang = language() === "am" ? "am" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
    const toggle = $("#languageToggle");
    if (toggle) { toggle.classList.toggle("is-amharic", language() === "am"); toggle.setAttribute("aria-pressed", String(language() === "am")); }
  }

  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("?").map(p => p.trim()).filter(Boolean);
    const seg = parts[0] ? parts[0].split("/").filter(Boolean) : [];
    const params = {};
    if (parts[1]) parts[1].split("&").forEach(kv => { const [k, v] = kv.split("="); params[decodeURIComponent(k)] = decodeURIComponent(v || ""); });
    return { seg, params };
  }

  function navigate(name, params) {
    const base = "#/" + name;
    const qs = params ? "?" + Object.entries(params).map(([k, v]) => k + "=" + encodeURIComponent(v)).join("&") : "";
    if (location.hash === base + qs) render();
    else location.hash = base + qs;
  }

  function route() {
    const { seg, params } = parseHash();
    const name = seg[0] || "dashboard";
    current = { name, params, seg };
    if (name === "topic" && (seg[1] || params.id)) {
      const topicId = seg[1] || params.id;
      const t = window.topicIndex[topicId];
      if (!t) { current = { name: "notfound", params: {}, seg }; }
      else activeTopic = t;
    }
    render();
  }

  /* ---------- Top-level render dispatch ---------- */
  function render() {
    applyLanguage();
    setNavActive(current.name);
    const v = view();
    v.scrollTop = 0;
    const tpl = {
      dashboard: renderDashboard,
      browse: renderBrowse,
      pick: renderPicker,
      topic: renderTopic,
      quiz: renderQuiz,
      practice: renderPractice,
      exam: renderExam,
      examrun: renderExamRun,
      progress: renderProgress,
      bookmarks: renderBookmarks,
      notes: renderNotes,
      settings: renderSettings,
      notfound: () => v.innerHTML = UI.emptyState("🤷", "Page not found", "That page doesn't exist.")
    }[current.name] || renderDashboard;
    v.className = `view view-${current.name}`;
    v.innerHTML = tpl();
    bindGlobal();
    updateStreakPill();
    // Post-render hooks: topic page needs its timer armed AND lesson shown immediately
    if (current.name === "topic" && activeTopic) {
      initTimer();
      switchTopicTab("lesson", activeTopic._id);
    }
    if (current.name === "quiz" && activeQuiz) {
      // nothing extra — quiz renders inline
    }
  }

  function setNavActive(name) {
    $$("#mainNav .nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  }

  function bindGlobal() {
    const v = view();
    // View-scoped actions ONLY (everything else is handled by the document-level
    // listener in bindAppEvents — having both would fire actions twice).
    v.onclick = (e) => {
      const btn = e.target.closest("[data-act]");
      if (!btn) return;
      const act = btn.dataset.act;
      if (act === "bookmark") {
        const id = btn.dataset.id;
        const topic = window.topicIndex[id];
        if (topic) {
          const ok = Store.toggleBookmark({ id, kind: "topic", topicId: id, label: topic.title, sub: topic._subjectTitle + " · Grade " + topic._grade });
          UI.toast(ok ? "🔖 Bookmarked " + topic.title : "Removed bookmark", ok ? "info" : "info");
          render();
        }
      }
      if (act === "delete-note") { Store.deleteNote(btn.dataset.topic, parseInt(btn.dataset.idx, 10)); render(); }
    };
    // search box
    const sb = $("#globalSearch");
    if (sb) {
      sb.oninput = () => { const q = sb.value.trim(); q.length >= 2 ? showSearchResults(q) : hideSearchPanel(); };
      sb.onkeydown = (e) => { if (e.key === "Enter") { const q = sb.value.trim(); if (q) { showSearchResults(q, true); } } };
    }
  }

  /* ============ DASHBOARD ============ */
  function renderDashboard() {
    const stats = Store.overallStats();
    const grade = Store.getSetting("grade");
    const today = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
    const recent = Store.studyHistory(6);
    const recentTopic = recent.map(h => window.topicIndex[h.topicId]).find(Boolean);
    const subjects = Object.entries(window.CURRICULUM_ALL[grade]).map(([key, subj]) => ({
      key, subj, st: Store.subjectStats(grade, key)
    })).sort((a, b) => b.st.pct - a.st.pct);

    const nextAction = recentTopic
      ? `<button class="orbit-action" data-act="open-topic" data-id="${recentTopic._id}"><span>${tr("continue")}</span><b>${UI.esc(recentTopic.title)}</b><i>→</i></button>`
      : `<button class="orbit-action" data-act="pick-topic"><span>${tr("continue")}</span><b>${tr("start")}</b><i>→</i></button>`;
    let html = `
      <section class="orbit-hero" aria-label="${tr("continue")}">
        <div class="orbit-copy">
          <div class="eyebrow">Ethiopian New Curriculum <span></span> ${today}</div>
          <h1>${tr("welcome")}</h1>
          <p>${language() === "am" ? `የ${grade}ኛ ክፍል ትምህርትዎን በአንድ ግልጽ እርምጃ ይቀጥሉ።` : `Keep building your Grade ${grade} understanding—one clear step at a time.`}</p>
          ${nextAction}
        </div>
        <div class="orbit-scene" aria-hidden="true"><div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div><div class="orbit-star">✦</div><div class="orbit-moon"></div><div class="orbit-planet"><span></span></div><div class="orbit-caption">${stats.avgMastery || 0}%<small>mastery</small></div></div>
      </section>

      <section class="subject-deck" aria-label="${tr("explore")}"><div class="section-heading"><div><div class="eyebrow">${tr("explore")}</div><h2>Grade ${grade} subjects</h2></div><button class="text-action" data-act="mode-browse">${language() === "am" ? "ሁሉንም ይመልከቱ" : "View curriculum"} <span>→</span></button></div>
        <div class="subject-card-grid">${subjects.map((s, index) => `<button class="subject-orbit-card subject-${s.key}" data-act="open-subject" data-subject="${s.key}" style="--card-index:${index}"><span class="card-orbit"></span><span class="subject-icon">${s.subj.icon}</span><span class="subject-card-content"><b>${UI.esc(s.subj.title)}</b><small>${s.st.studied}/${s.st.total} ${language() === "am" ? "ርዕሶች" : "topics explored"}</small><span class="subject-progress"><i style="width:${s.st.pct}%"></i></span></span><span class="card-arrow">↗</span></button>`).join("")}</div>
      </section>

      <section class="study-routes">
        <button class="study-route route-practice" data-act="go-practice"><span class="route-icon">◌</span><span><small>${tr("weak")}</small><b>${language() === "am" ? "የሚያስፈልግዎትን ያጠናክሩ" : "Strengthen what needs attention"}</b></span><i>→</i></button>
        <button class="study-route route-exam" data-act="exam-again"><span class="route-icon">✦</span><span><small>${tr("readiness")}</small><b>${stats.avgScore ? `${stats.avgScore}% ${language() === "am" ? "አማካይ ውጤት" : "average quiz score"}` : (language() === "am" ? "ዝግጁነትዎን ይለኩ" : "Check your readiness")}</b></span><i>→</i></button>
      </section>

      <div class="grid grid-4 dashboard-stats">
        ${UI.statCard(stats.total, "Total topics", "📚")}
        ${UI.statCard(stats.studied, "Topics studied", "✅")}
        ${UI.statCard(stats.total ? stats.total - stats.studied : 0, "Topics remaining", "⏳")}
        ${UI.statCard(stats.avgScore ? stats.avgScore + "%" : "—", "Average quiz score", "🎯")}
      </div>
      <div class="grid grid-2 mt-3">
        ${UI.statCard(UI.timeFmt(stats.studySec), "Total study time", "⏱️")}
        ${UI.statCard(stats.avgMastery ? stats.avgMastery + "%" : "—", "Average mastery", "🏅")}
      </div>

      <h2 class="section-title">📈 ${language() === "am" ? "በትምህርት ዓይነት እድገት" : "Progress by Subject"} — Grade ${grade}</h2>
      <div class="card">
        ${subjects.map((s, i) => {
          const gradCls = ["", "progress.mastery", "progress.warn", "progress.low"];
          return `
          <div style="margin:${i === 0 ? "0" : "18px 0 0"}">
            <div class="spread" style="margin-bottom:6px">
              <span style="font-weight:700;font-family:var(--font-display)">${s.subj.icon} ${s.subj.title} <span class="muted" style="font-weight:400">· ${s.st.studied}/${s.st.total} topics</span></span>
              <span style="font-weight:700;color:var(--fg-2)">${s.st.pct}%</span>
            </div>
            ${UI.progressBar(s.st.pct, s.st.pct > 60 ? "" : s.st.pct > 30 ? "warn" : "low")}
            <div class="tiny mt-2">Avg score: ${s.st.avgScore || "—"}% · Mastery: ${s.st.avgMastery || "—"}%</div>
          </div>`;
        }).join("")}
      </div>

      <h2 class="section-title">🕒 Recent Study Sessions</h2>
      <div class="card">
        ${recent.length ? `
          <table>
            <tr><th>Activity</th><th>Topic</th><th>When</th></tr>
            ${recent.map(h => {
              const t = window.topicIndex[h.topicId];
              return `<tr>
                <td>${h.type === "quiz" ? "🎯 Quiz" : "⏱️ Study"}</td>
                <td>${t ? UI.esc(t.title) : "—"}</td>
                <td>${h.type === "quiz" ? h.score + "%" : UI.timeFmt(h.sec)} · ${UI.relTime(h.at)}</td>
              </tr>`;
            }).join("")}
          </table>` : UI.emptyState("🌱", "No study sessions yet", "Click 🎲 PICK A TOPIC to start your first session!")}
      </div>
    `;
    return html;
  }

  /* ============ BROWSE ============ */
  function renderBrowse() {
    const grade = current.params.grade || Store.getSetting("grade");
    const subjKey = current.params.subject || null;
    const unitId = current.params.unit || null;
    const subjects = Object.entries(window.CURRICULUM_ALL[grade]);

    let html = `<section class="page-hero page-hero-browse"><div class="spread">
        <h1>📚 Browse Curriculum</h1>
        <div class="row">
          ${["10", "11"].map(g => `<button class="btn ${g === grade ? "btn-primary" : ""}" data-act="browse-grade" data-grade="${g}">Grade ${g}</button>`).join("")}
        </div>
      </div><p>Move through Grade ${grade} one subject and one topic at a time.</p></section>`;

    if (!subjKey) {
      html += `<div class="grid grid-2 mt-4">
        ${subjects.map(([key, subj]) => {
          const st = Store.subjectStats(grade, key);
          return `<button class="card card-hover curriculum-card subject-${key}" data-act="open-subject" data-subject="${key}">
            <div class="spread">
              <div style="font-size:2rem">${subj.icon}</div>
              <div style="text-align:right">
                <div style="font-weight:800;font-size:1.2rem">${subj.title}</div>
                <div class="tiny">${st.studied}/${st.total} topics · ${st.pct}%</div>
              </div>
            </div>
            <div class="mt-3">${UI.progressBar(st.pct)}</div>
            <div class="tiny mt-3 muted">${subj.units.length} units</div>
          </button>`;
        }).join("")}
      </div>`;
    } else if (!unitId) {
      const subj = window.CURRICULUM_ALL[grade][subjKey];
      html += `<div class="breadcrumb mt-3"><a href="#/">Dashboard</a> / <span>${subj.icon} ${subj.title}</span></div>`;
      html += `<div class="grid mt-4">
        ${subj.units.map((u, i) => {
          const studied = u.topics.filter(t => { const p = Store.progressOf(t._id); return p.totalQ > 0 || p.studySec > 0; }).length;
          return `<button class="card card-hover curriculum-card unit-card" data-act="open-unit" data-unit="${u.id}">
            <div class="spread">
              <h3 style="margin:0">Unit ${i + 1}: ${UI.esc(u.title)}</h3>
              <span class="chip">${studied}/${u.topics.length}</span>
            </div>
            <p class="tiny muted mt-2" style="margin:0">${u.topics.length} topics</p>
          </button>`;
        }).join("")}
      </div>`;
    } else {
      const subj = window.CURRICULUM_ALL[grade][subjKey];
      const unit = subj.units.find(u => u.id === unitId);
      const ui = subj.units.indexOf(unit) + 1;
      html += `<div class="breadcrumb mt-3"><a href="#/">Dashboard</a> / <a href="#/browse?grade=${grade}">${subj.title}</a> / <span>Unit ${ui}</span></div>`;
      html += `<h1 class="mt-2">${UI.esc(unit.title)}</h1>`;
      html += `<div class="grid mt-4">
        ${unit.topics.map(t => {
          const m = Store.mastery(t._id);
          const studied = Store.progressOf(t._id).totalQ > 0 || Store.progressOf(t._id).studySec > 0;
          return `<button class="card card-hover curriculum-card topic-path-card" data-act="open-topic" data-id="${t._id}">
            <div class="spread">
              <div>
                <div style="font-weight:700">${UI.esc(t.title)}</div>
                <div class="tiny muted mt-2">${t.subtopics.slice(0, 3).map(UI.esc).join(" · ")}</div>
              </div>
              <div style="text-align:right">
                ${UI.diffChip(t.difficulty)}
                ${studied ? `<div class="tiny mt-2" style="color:var(--success)">${m}% mastery</div>` : ""}
              </div>
            </div>
          </button>`;
        }).join("")}
      </div>`;
    }
    return html;
  }

  /* ============ PICKER ============ */
  function renderPicker() {
    const grades = ["10", "11"];
    const subjects = Object.keys(window.CURRICULUM_ALL[Store.getSetting("grade")] || {});
    const sel = current.params || {};
    const selGrade = sel.grade || Store.getSetting("grade");
    const selSubject = sel.subject || "all";
    const selUnit = sel.unit || "all";
    const selMode = sel.mode || "smart";

    const subjectOptions = `<option value="all">All subjects</option>` +
      Object.entries(window.CURRICULUM_ALL[selGrade] || {}).map(([k, s]) => `<option value="${k}" ${k === selSubject ? "selected" : ""}>${s.icon} ${s.title}</option>`).join("");
    const unitOptions = `<option value="all">All units</option>` +
      (selSubject !== "all" ? Object.entries(window.CURRICULUM_ALL[selGrade][selSubject].units).map(([i, u]) => `<option value="${u.id}" ${u.id === selUnit ? "selected" : ""}>Unit ${Number(i) + 1}: ${UI.esc(u.title)}</option>`).join("") : "");

    return `
      <div class="picker-hero">
        <span class="picker-dice">🎲</span>
        <h1 style="font-size:2rem">Random Topic Picker</h1>
        <p class="muted">Pick a smart topic tailored to what you need — or go fully random.</p>
        <button class="picker-btn mt-4" data-act="pick-topic">🎲 PICK A TOPIC</button>
        <div class="mt-4" id="pickResult"></div>
      </div>
      <div class="filter-box mt-4" id="pickFilters">
        <div>
          <label>Grade</label>
          <select id="fGrade">
            ${grades.map(g => `<option value="${g}" ${g === selGrade ? "selected" : ""}>Grade ${g}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>Subject</label>
          <select id="fSubject">${subjectOptions}</select>
        </div>
        <div>
          <label>Unit</label>
          <select id="fUnit">${unitOptions}</select>
        </div>
        <div>
          <label>Mode</label>
          <select id="fMode">
            <option value="smart" ${selMode === "smart" ? "selected" : ""}>🧠 Smart (prioritize weak)</option>
            <option value="pure" ${selMode === "pure" ? "selected" : ""}>🎯 Pure random</option>
            <option value="weak" ${selMode === "weak" ? "selected" : ""}>🔥 Weak topics only</option>
            <option value="new" ${selMode === "new" ? "selected" : ""}>✨ Never studied</option>
          </select>
        </div>
      </div>`;
  }

  function pickTopic() {
    const grade = $("#fGrade").value;
    const subject = $("#fSubject").value;
    const unit = $("#fUnit").value;
    const mode = $("#fMode").value;
    let pool = [];
    const subjects = subject === "all" ? Object.values(window.CURRICULUM_ALL[grade]) : [window.CURRICULUM_ALL[grade][subject]];
    subjects.forEach(s => s.units.forEach(u => {
      if (unit === "all" || u.id === unit) u.topics.forEach(t => pool.push(t));
    }));
    if (!pool.length) { UI.toast("No topics match those filters.", "danger"); return; }

    // weighting
    let chosen;
    if (mode === "pure") {
      chosen = UI.shuffle(pool)[0];
    } else {
      const scored = pool.map(t => {
        const p = Store.progressOf(t._id);
        const m = Store.mastery(t._id);
        let w = 1;
        const studied = p.totalQ > 0 || p.studySec > 0;
        if (mode === "new" && !studied) w += 10;
        if (mode === "weak") { if (studied && m < 60) w += 10; else w -= 5; }
        if (mode === "smart") {
          if (!studied) w += 8;
          else {
            w += Math.max(0, (70 - m) / 8);
            if (Store.getState().weakMap[t._id]) w += 3;
            const days = p.lastStudy ? (Date.now() - p.lastStudy) / 86400000 : 99;
            if (days > 7) w += 2;
          }
        }
        return { t, w: Math.max(0.1, w) };
      });
      const total = scored.reduce((a, b) => a + b.w, 0);
      let r = Math.random() * total;
      chosen = null;
      for (const s of scored) { r -= s.w; if (r <= 0) { chosen = s.t; break; } }
      if (!chosen) chosen = scored[scored.length - 1].t;
    }

    const box = $("#pickResult");
    const m = Store.mastery(chosen._id);
    const studied = Store.progressOf(chosen._id).totalQ > 0;
    box.innerHTML = `
      <div class="topic-card-result">
        <div style="font-size:.9rem;letter-spacing:2px;color:var(--fg-3)">🎲 YOUR TOPIC</div>
        <div class="t-big">${UI.esc(chosen.title)}</div>
        <div class="row" style="justify-content:center">
          ${UI.subjectChip(chosen)}
          ${UI.diffChip(chosen.difficulty)}
          ${studied ? `<span class="chip">${m}% mastery</span>` : `<span class="chip chip-diff-easy">✨ New</span>`}
        </div>
        <p class="tiny muted mt-3">Unit: ${UI.esc(chosen._unitTitle)}</p>
        <div class="row mt-4" style="justify-content:center">
          <button class="btn btn-primary btn-lg" data-act="open-topic" data-id="${chosen._id}">📖 Study this topic</button>
        </div>
      </div>`;
    bindGlobal();
    box.scrollIntoView({ behavior: "smooth", block: "center" });
    try { if (navigator.vibrate) navigator.vibrate(30); } catch (e) {}
  }

  /* ============ TOPIC / LESSON ============ */
  function renderTopic() {
    const t = activeTopic;
    if (!t) return UI.emptyState("🤷", "Topic not found", "Go back to browse.");
    const ls = lessonFor(t);
    const m = Store.mastery(t._id);
    const p = Store.progressOf(t._id);
    const studied = p.totalQ > 0 || p.studySec > 0;
    const bookmarked = Store.isBookmarked(t._id);

    let html = `
      <section class="lesson-studio-header"><div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/browse?grade=${t._grade}">${t._subjectTitle}</a> / <span>${UI.esc(t._unitTitle)}</span></div>
      <div class="spread">
        <div>
          <h1 class="lesson-title">${UI.esc(t.title)}</h1>
          <div class="row">
            ${UI.subjectChip(t)}
            ${UI.diffChip(t.difficulty)}
            ${studied ? `<span class="chip">${m}% mastery</span>` : ""}
          </div>
        </div>
        <button class="icon-btn" data-act="bookmark" data-id="${t._id}" title="Bookmark">${bookmarked ? "🔖" : "🔖"}</button>
      </div></section>

      ${ls.overview ? `<div class="callout callout-info mt-4"><strong>📌 Quick Overview</strong><br>${ls.overview}</div>` : ""}

      <div class="card timer-card mt-4" id="timerCard">
        <div class="spread">
          <h3 style="margin:0">⏱️ Study Timer</h3>
          <span class="tiny muted" id="timerTopic">Topic: ${UI.esc(t.title)}</span>
        </div>
        <div class="timer-display" id="timerDisplay">00:00</div>
        <div class="timer-presets" id="timerPresets">
          ${[10, 15, 25, 45, 60].map(m => `<button class="timer-preset" data-min="${m}">${m} min</button>`).join("")}
          <button class="timer-preset" data-min="custom">Custom…</button>
        </div>
        <div class="timer-controls">
          <button class="btn btn-primary" data-act="start-session">▶ Start</button>
          <button class="btn" data-act="toggle-timer">⏸ Pause / Resume</button>
          <button class="btn" data-act="reset-timer">↺ Reset</button>
          <button class="btn btn-danger" data-act="finish-timer">✅ Finish Session</button>
        </div>
        <div class="tiny muted mt-3" id="timerHint">Pick a time or use the default 25 minutes, then press Start. Your study time is tracked automatically.</div>
      </div>

      <div class="tabs mt-4" id="topicTabs">
        <button class="tab active" data-tab="lesson">📖 Lesson</button>
        <button class="tab" data-tab="quiz">🎯 Quiz</button>
        <button class="tab" data-tab="tutor">🤖 AI Tutor</button>
        <button class="tab" data-tab="notes">📒 Notes</button>
      </div>
      <div id="topicContent"></div>
    `;
    return html;
  }

  function switchTopicTab(tab, topicId) {
    const t = window.topicIndex[topicId];
    const ls = lessonFor(t);
    const box = $("#topicContent");
    $$("#topicTabs .tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
    if (tab === "lesson") box.innerHTML = renderLesson(t, ls);
    if (tab === "quiz") box.innerHTML = renderQuizPanel(t, ls);
    if (tab === "tutor") box.innerHTML = renderTutorPanel(t, ls);
    if (tab === "notes") box.innerHTML = renderNotesPanel(t);
  }

  function renderLesson(t, ls) {
    if (!ls || (!ls.simple && !ls.keyTerms && !ls.formulas)) {
      return UI.emptyState("🚧", "Lesson coming soon", "The full lesson for this topic is being written. Try the Quiz or another topic!");
    }
    let h = "";

    if (ls._auto) {
      h += `<div class="callout callout-info"><b>✨ Topic overview available</b> — this topic's full authored lesson is being expanded. Use the structure, subtopics and quiz below to start studying now.</div>`;
    }
    if (ls.overview) h += `<div class="callout callout-info mt-3"><strong>📌 Quick Overview</strong><br>${ls.overview}</div>`;
    if (ls.objectives && ls.objectives.length) {
      h += `<div class="card"><h3>🎯 Learning Objectives</h3><p class="tiny muted">By the end of this lesson you should be able to:</p><ul class="objectives">${ls.objectives.map(o => `<li>${UI.esc(o)}</li>`).join("")}</ul></div>`;
    }
    if (ls.simple) {
      h += `<div class="card"><h3>💡 Simple Explanation</h3><p>${ls.simple}</p></div>`;
    }
    if (ls.detailed) {
      h += `<div class="card"><h3>📖 Detailed Explanation</h3>${ls.detailed.split("\n").map(x => x.trim() ? `<p>${x}</p>` : "").join("")}</div>`;
    }
    if (ls.visuals && ls.visuals.length) {
      h += `<div class="card"><h3>👁️ Visual Explanation</h3>${ls.visuals.map(v => `
        <div class="visual-box">
          ${Visuals.render(v.type, v.config)}
          ${v.caption ? `<div class="visual-caption">${UI.esc(v.caption)}</div>` : ""}
        </div>`).join("")}</div>`;
    }
    if (ls.keyTerms && ls.keyTerms.length) {
      h += `<div class="card"><h3>🔑 Key Terms</h3>${ls.keyTerms.map(k => `<div class="keyterm"><b>${UI.esc(k.term)}</b><span>${UI.esc(k.def)}</span></div>`).join("")}</div>`;
    }
    if (ls.formulas && ls.formulas.length) {
      h += `<div class="card"><h3>🧮 Formulas</h3>${ls.formulas.map(f => `
        <div class="formula-box">
          <div class="tiny muted">${UI.esc(f.name || "")}</div>
          <div class="formula-main">${UI.fmtFormula(f.formula)}</div>
          ${f.meaning ? `<p class="mt-2" style="margin-bottom:6px">${UI.esc(f.meaning)}</p>` : ""}
          ${f.vars && f.vars.length ? `<div class="tiny">${f.vars.map(v => `<b>${UI.esc(v.name)}</b> = ${UI.esc(v.meaning)}${v.unit ? " (" + UI.esc(v.unit) + ")" : ""}`).join(" · ")}</div>` : ""}
          ${f.when ? `<div class="tiny mt-2 muted"><b>Use when:</b> ${UI.esc(f.when)}</div>` : ""}
          ${f.units ? `<div class="tiny mt-2 muted"><b>Units:</b> ${UI.esc(f.units)}</div>` : ""}
        </div>`).join("")}</div>`;
    }
    if (ls.workedExamples && ls.workedExamples.length) {
      h += `<div class="card"><h3>✍️ Worked Examples</h3>${ls.workedExamples.map((ex, i) => `
        <div class="example-box">
          <div class="example-head">📐 Example ${i + 1}</div>
          <div class="example-body">
            <div class="step"><span class="s-label">Problem</span><span>${ex.problem}</span></div>
            ${ex.given ? `<div class="step"><span class="s-label">Given</span><span>${ex.given}</span></div>` : ""}
            ${ex.formula ? `<div class="step"><span class="s-label">Formula</span><span class="formula-main" style="text-align:left;font-size:1.1rem">${UI.fmtFormula(ex.formula)}</span></div>` : ""}
            ${ex.substitution ? `<div class="step"><span class="s-label">Substitution</span><span>${ex.substitution}</span></div>` : ""}
            ${ex.calculation ? `<div class="step"><span class="s-label">Calculation</span><span>${ex.calculation}</span></div>` : ""}
            ${ex.answer ? `<div class="answer-line">Answer: ${UI.esc(ex.answer)}</div>` : ""}
          </div>
        </div>`).join("")}</div>`;
    }
    if (ls.applications && ls.applications.length) {
      h += `<div class="card"><h3>🌍 Real-World Applications</h3><ul>${ls.applications.map(a => `<li>${UI.esc(a)}</li>`).join("")}</ul></div>`;
    }
    if (ls.commonMistakes && ls.commonMistakes.length) {
      h += `<div class="card"><h3>⚠️ Common Mistakes</h3><ul style="list-style:none;padding:0;margin:0">${ls.commonMistakes.map(cm => `<li style="margin:8px 0">❌ ${UI.esc(cm)}</li>`).join("")}</ul></div>`;
    }
    if (ls.summary) {
      h += `<div class="card callout callout-success"><h3 style="margin-top:0">📋 Quick Summary</h3>${ls.summary.split("\n").map(x => x.trim() ? `<p style="margin-bottom:6px">${x}</p>` : "").join("")}</div>`;
    }
    return h;
  }

  function renderQuizPanel(t, ls) {
    const bank = ls.questions || [];
    if (!bank.length) return UI.emptyState("🎯", "No quiz yet", "Questions for this topic are being prepared. Try another topic!");
    const counts = [5, 10, 15, 20];
    return `
      <div class="card">
        <h3>🎯 Topic Quiz — ${UI.esc(t.title)}</h3>
        <p class="muted">${bank.length} questions available · ${Quiz.TYPE_LABELS[bank[0].type]} and more · adaptive difficulty</p>
        <div class="row mt-4">
          <span style="font-weight:700">Number of questions:</span>
          ${counts.filter(c => c <= bank.length).concat(bank.length).filter((v, i, a) => a.indexOf(v) === i).map(c => `<button class="timer-preset" data-quizcount="${c}">${c}</button>`).join("")}
        </div>
        <div class="mt-4">
          <button class="btn btn-primary btn-lg" data-act="start-quiz" data-id="${t._id}" data-count="${Math.min(10, bank.length)}">Start Quiz 🚀</button>
        </div>
        ${Store.progressOf(t._id).quizScores.length ? `<div class="mt-4"><div class="tiny muted">Last 5 scores: ${Store.progressOf(t._id).quizScores.slice(-5).map(s => `<b style="color:${s >= 70 ? "var(--success)" : "var(--danger)"}">${s}%</b>`).join(" · ")}</div></div>` : ""}
      </div>`;
  }

  function renderTutorPanel(t, ls) {
    const chips = Tutor.suggestions(t);
    return `
      <div class="tutor-box">
        <div class="spread" style="padding:14px 18px;border-bottom:1px solid var(--border);background:var(--card-2)">
          <h3 style="margin:0">🤖 AI Tutor <span class="tiny muted">— ${UI.esc(t.title)}</span></h3>
        </div>
        <div class="tutor-chat" id="tutorChat">
          <div class="tutor-msg ai">Hi! I'm your personal tutor for <b>${UI.esc(t.title)}</b>. Ask me to explain it simpler, give examples, or quiz you. 🎓</div>
        </div>
        <div class="tutor-chips">
          ${chips.map(c => `<button class="btn btn-sm" data-tutor-chip="${UI.esc(c)}">${UI.esc(c)}</button>`).join("")}
        </div>
        <div class="tutor-input">
          <input id="tutorInput" placeholder="Ask the AI tutor anything about this topic…">
          <button class="btn btn-primary" id="tutorSend">Send</button>
        </div>
      </div>`;
  }

  function renderNotesPanel(t) {
    const notes = Store.getNotes(t._id);
    return `
      <div class="card">
        <h3>📒 Notes — ${UI.esc(t.title)}</h3>
        <p class="tiny muted">Notes save automatically. Write while you study!</p>
        <textarea class="note-editor" id="noteInput" placeholder="Write your notes here… (Ctrl+Enter or click Save)"></textarea>
        <button class="btn btn-primary mt-3" id="noteSave">💾 Save Note</button>
      </div>
      <div class="card mt-3" id="noteList">
        ${notes.length ? notes.map((n, i) => `
          <div class="keyterm" style="grid-template-columns:1fr auto">
            <div><div style="white-space:pre-wrap">${UI.esc(n.text)}</div><div class="tiny muted mt-2">${UI.relTime(n.at)}</div></div>
            <button class="icon-btn btn-sm" data-act="delete-note" data-topic="${t._id}" data-idx="${i}">🗑️</button>
          </div>`).join("") : UI.emptyState("📝", "No notes yet", "Write your first note for this topic!")}
      </div>`;
  }

  /* ============ QUIZ FLOW ============ */
  function startQuiz(topicId, count) {
    const t = window.topicIndex[topicId];
    const ls = lessonFor(t);
    const questions = Quiz.buildQuiz(ls.questions || [], count);
    if (!questions.length) { UI.toast("No questions available for this topic yet.", "danger"); return; }
    activeQuiz = { questions, answers: Array(questions.length).fill(null), t, submitted: false };
    navigate("quiz");
  }

  function renderQuiz() {
    if (!activeQuiz) return UI.emptyState("🎯", "No active quiz", "Pick a topic to start.");
    const qz = activeQuiz;
    let html = `
      <div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/topic?${qz.t._id ? "id=" + qz.t._id : ""}">${UI.esc(qz.t.title)}</a> / <span>Quiz</span></div>
      <h1 class="mt-2">🎯 Quiz: ${UI.esc(qz.t.title)}</h1>
      <p class="muted">${qz.questions.length} questions · adaptive difficulty · answer all then submit</p>
      <div id="quizQuestions">
        ${qz.questions.map((q, i) => renderQuizQuestion(q, i, qz.answers[i], qz.submitted)).join("")}
      </div>
      ${qz.submitted ? renderQuizResult(qz) : `<div class="card mt-4" style="text-align:center"><button class="btn btn-primary btn-lg" id="quizSubmit">✅ Submit Quiz</button><div class="tiny muted mt-2">${qz.questions.filter((_, i) => qz.answers[i] != null).length}/${qz.questions.length} answered</div></div>`}
    `;
    return html;
  }

  function renderQuizQuestion(q, i, userAns, submitted) {
    const letter = ["A", "B", "C", "D", "E"];
    let body = "";
    if (q.type === "mcq" || q.type === "ordering") {
      body = q.options.map((o, oi) => {
        let cls = "option";
        const correctIdx = Array.isArray(q.answer) ? q.answer[0] : q.answer;
        if (submitted) { if (oi === correctIdx) cls += " correct"; else if (userAns === oi) cls += " incorrect"; }
        return `<div class="${cls}"><span class="opt-letter">${letter[oi]}.</span><label style="cursor:pointer;flex:1"><input type="radio" name="q${i}" value="${oi}" ${userAns === oi ? "checked" : ""} ${submitted ? "disabled" : ""}><span style="margin-left:8px">${UI.esc(o)}</span></label></div>`;
      }).join("");
    } else if (q.type === "tf") {
      const picked = userAns === true ? "T" : userAns === false ? "F" : null;
      body = ["T", "F"].map(tf => {
        let cls = "option";
        const isCorrect = (tf === "T") === (q.answer === true);
        if (submitted && tf === (q.answer === true ? "T" : "F")) cls += " correct";
        else if (submitted && picked === tf) cls += " incorrect";
        return `<div class="${cls}"><span class="opt-letter">${tf}</span><label style="cursor:pointer;flex:1"><input type="radio" name="q${i}" value="${tf}" ${picked === tf ? "checked" : ""} ${submitted ? "disabled" : ""}><span style="margin-left:8px">${tf === "T" ? "True" : "False"}</span></label></div>`;
      }).join("");
    } else {
      body = `<input class="note-editor" style="min-height:52px" type="text" data-quizinput="${i}" placeholder="Type your answer…" value="${UI.esc(userAns || "")}" ${submitted ? "disabled" : ""}>`;
    }
    const diff = Quiz.DIFF_LABELS[q.difficulty || 3];
    return `
      <div class="quiz-q card">
        <div class="quiz-q-head">
          <span class="chip">Q${i + 1}</span>
          <span class="chip">${Quiz.TYPE_LABELS[q.type]}</span>
          <span class="chip chip-diff-${q.difficulty >= 4 ? "hard" : q.difficulty >= 3 ? "medium" : "easy"}">${diff}</span>
        </div>
        <div class="quiz-q-text">${UI.esc(q.q)}</div>
        <div class="mt-2">${body}</div>
        ${submitted ? `
          <div class="mt-3 ${q._correct ? "callout callout-success" : "callout callout-danger"}" style="margin:0">
            <b>${q._correct ? "✅ Correct!" : "❌ Incorrect"}</b>
            ${q._correct ? "" : `<div class="mt-2"><b>Correct answer:</b> ${q.type === "ordering" ? UI.esc(q.options[Array.isArray(q.answer) ? q.answer[0] : q.answer]) : Array.isArray(q.answer) ? String(q.answer[0]).replace(/\|/g, " or ") : q.answer}</div>`}
            ${q.explanation ? `<div class="mt-2 tiny">💡 ${UI.esc(q.explanation)}</div>` : ""}
          </div>` : ""}
      </div>`;
  }

  function submitQuiz() {
    const qz = activeQuiz;
    if (!qz) return;
    const wrongIds = [];
    const answers = [];
    qz.questions.forEach((q, i) => {
      let ans = null;
      const mcq = $(`input[name="q${i}"]:checked`);
      if (mcq) {
        ans = (q.type === "tf") ? (mcq.value === "T") : Number(mcq.value);
      } else {
        const inp = $(`[data-quizinput="${i}"]`);
        ans = inp ? inp.value.trim() : null;
      }
      answers[i] = ans;
    });
    qz.answers = answers;
    const result = Quiz.gradeQuiz(qz.questions, answers);
    // mark correct on questions
    result.perQ.forEach((p, i) => { qz.questions[i]._correct = p.correct; if (!p.correct) wrongIds.push(qz.t._id); });
    qz.result = result;
    qz.submitted = true;
    // record to Store
    Store.logQuiz(qz.t._id, result.correct, result.total, result.pct, [qz.t._id]);
    render();
    view().scrollTop = 0;
  }

  function renderQuizResult(qz) {
    const r = qz.result;
    const ringPct = r.pct;
    const C = 2 * Math.PI * 54;
    return `
      <div class="card mt-4" style="text-align:center">
        <h2 style="color:${r.pct >= 70 ? "var(--success)" : "var(--danger)"}">${r.grade.emoji} ${r.pct}% — ${r.grade.label}</h2>
        <p class="muted">Score: ${r.correct}/${r.total} · ${r.pct}%</p>
        <div class="score-ring">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--bg-2)" stroke-width="12"/>
            <circle cx="60" cy="60" r="54" fill="none" stroke="${r.pct >= 70 ? "var(--success)" : "var(--danger)"}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - ringPct / 100)}"/>
          </svg>
          <div class="ring-num">${r.pct}%</div>
        </div>
        <p class="mt-3">${r.feedback}</p>
        ${r.weaknesses.length ? `<div class="mt-3"><b>🔎 Weak areas:</b> ${r.weaknesses.map(w => UI.chip(UI.esc(w), "chip-diff-hard")).join(" ")}</div>` : ""}
        <div class="row mt-4" style="justify-content:center">
          <button class="btn" data-act="open-topic" data-id="${qz.t._id}">📖 Review lesson</button>
          <button class="btn btn-primary" data-act="retake">🔁 Retake quiz</button>
          <button class="btn" data-act="next-topic">🎲 Next topic</button>
        </div>
        <div class="tiny muted mt-3">Mastery: ${Store.mastery(qz.t._id)}% · ${Store.progressOf(qz.t._id).attempts} attempt(s)</div>
      </div>`;
  }

  /* ============ PRACTICE / MODES ============ */
  function renderPractice() {
    const grade = Store.getSetting("grade");
    const weak = Store.weakTopics(grade, null, 6).length ? Store.weakTopics(grade, null, 6) : [];
    const modes = [
      { ico: "🎲", title: "Random Topic", desc: "Pick a random topic and start studying", act: "mode-pick" },
      { ico: "📚", title: "Browse Curriculum", desc: "Manually select a topic", act: "mode-browse" },
      { ico: "🔥", title: "Weak Topics", desc: "Study topics where mastery is low", act: "mode-weak" },
      { ico: "🔄", title: "Review", desc: "Review previously studied topics", act: "mode-review" },
      { ico: "🧠", title: "Practice Quiz", desc: "Go directly to questions for a topic", act: "mode-practice" },
      { ico: "⏱️", title: "Timed Study", desc: "Choose a duration, get a topic, start the timer", act: "mode-timed" }
    ];
    return `
      <h1>🧠 Practice Modes</h1>
      <p class="muted">Pick how you want to study today.</p>
      <div class="grid grid-3 mt-4">
        ${modes.map(m => `<div class="card card-hover mode-card" data-act="${m.act}"><span class="mode-ico">${m.ico}</span><div style="font-weight:800">${m.title}</div><div class="mode-desc">${m.desc}</div></div>`).join("")}
      </div>
      ${weak.length ? `
        <h2 class="section-title">🔥 Topics Needing Attention</h2>
        <div class="grid grid-2">
          ${weak.map(w => `<div class="card card-hover" data-act="open-topic" data-id="${w.topic._id}" style="cursor:pointer">
            <div class="spread"><div style="font-weight:700">${UI.esc(w.topic.title)}</div><span class="chip chip-diff-hard">${w.mastery}%</span></div>
            <div class="mt-3">${UI.progressBar(w.mastery, "low")}</div>
            <div class="tiny muted mt-2">${w.topic._subjectTitle} · Grade ${w.topic._grade}</div>
          </div>`).join("")}
        </div>` : ""}
    `;
  }

  /* ============ EXAM ============ */
  function renderExam() {
    const grades = ["10", "11"];
    const grade = current.params.grade || Store.getSetting("grade");
    return `
      <h1>📝 Exam Preparation</h1>
      <p class="muted">Generate a practice test from the curriculum. Real questions, timed, graded with a full report.</p>
      <div class="filter-box mt-4">
        <div>
          <label>Grade</label>
          <select id="exGrade">${grades.map(g => `<option ${g === grade ? "selected" : ""}>${g}</option>`).join("")}</select>
        </div>
        <div>
          <label>Subject</label>
          <select id="exSubject">
            ${Object.entries(window.CURRICULUM_ALL[grade]).map(([k, s]) => `<option value="${k}">${s.icon} ${s.title}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>Number of questions</label>
          <select id="exCount">${[10, 15, 20, 25, 30].map(c => `<option ${c === (Store.getSetting("examLen") || 10) ? "selected" : ""}>${c}</option>`).join("")}</select>
        </div>
        <div>
          <label>Difficulty</label>
          <select id="exDiff">
            <option value="all">All levels</option>
            <option value="easy">Mostly easy</option>
            <option value="hard">Mostly hard</option>
          </select>
        </div>
      </div>
      <div class="mt-4"><button class="btn btn-primary btn-lg" data-act="generate-exam">🚀 Generate Exam</button></div>
      <div class="tiny muted mt-2">Questions come from the topic quiz banks of the selected subject.</div>`;
  }

  function generateExam() {
    const grade = $("#exGrade").value;
    const subject = $("#exSubject").value;
    const count = parseInt($("#exCount").value, 10);
    const diff = $("#exDiff").value;
    const subj = window.CURRICULUM_ALL[grade][subject];
    const bank = [];
    subj.units.forEach(u => u.topics.forEach(t => {
      const ls = lessonFor(t);
      (ls && ls.questions || []).forEach((q, i) => bank.push(Object.assign({ _qi: bank.length, topicId: t._id, topicTitle: t.title }, q)));
    }));
    if (!bank.length) { UI.toast("No questions available for this subject yet — pick a subject with quiz content (Grade 10 Physics).", "danger"); return; }
    let pool = bank.slice();
    if (diff === "easy") pool = pool.filter(q => (q.difficulty || 3) <= 3);
    if (diff === "hard") pool = pool.filter(q => (q.difficulty || 3) >= 4);
    const take = Math.min(count, pool.length);
    const questions = Quiz.buildQuiz(pool, take);
    activeQuiz = { questions, answers: Array(questions.length).fill(null), t: { title: "Practice Exam", _id: "exam-" + subject }, exam: { grade, subject, count: take, startTime: Date.now() }, submitted: false };
    navigate("examrun");
  }

  function renderExamRun() {
    if (!activeQuiz || !activeQuiz.exam) return UI.emptyState("📝", "No exam active", "Generate an exam first.");
    const qz = activeQuiz;
    const elapsed = Math.round((Date.now() - qz.exam.startTime) / 1000);
    let html = `
      <div class="spread">
        <h1>📝 Practice Exam</h1>
        <div class="row"><span class="chip">Grade ${qz.exam.grade}</span><span class="chip">${qz.exam.count} Q</span><span class="chip" id="examTimer">⏱ ${UI.timeFmt(elapsed)}</span></div>
      </div>
      <div class="tiny muted mt-2">Time used: ${UI.timeFmt(elapsed)} · ${qz.submitted ? "" : "complete all questions then submit"}</div>
      <div id="quizQuestions">
        ${qz.questions.map((q, i) => renderQuizQuestion(q, i, qz.answers[i], qz.submitted)).join("")}
      </div>
      ${qz.submitted ? renderExamResult(qz, elapsed) : `<div class="card mt-4" style="text-align:center"><button class="btn btn-primary btn-lg" id="quizSubmit">✅ Submit Exam</button></div>`}
    `;
    return html;
  }

  function renderExamResult(qz, elapsed) {
    const r = qz.result;
    const weak = {};
    r.perQ.forEach((p, i) => { if (!p.correct) { const tt = p.q.topicTitle; weak[tt] = (weak[tt] || 0) + 1; } });
    const sortedWeak = Object.entries(weak).sort((a, b) => b[1] - a[1]).slice(0, 5);
    return `
      <div class="card mt-4" style="text-align:center">
        <h2 style="color:${r.pct >= 70 ? "var(--success)" : "var(--danger)"}">${r.grade.emoji} ${r.pct}% — ${r.grade.label}</h2>
        <p class="muted">Score: ${r.correct}/${r.total} · Time used: ${UI.timeFmt(elapsed)}</p>
        <div class="score-ring">…</div>
        <div class="mt-4">${UI.progressBar(r.pct)}</div>
        ${sortedWeak.length ? `
          <div class="card mt-4" style="text-align:left">
            <h3>📉 Topic weaknesses</h3>
            ${sortedWeak.map(([tt, n]) => `<div class="keyterm" style="grid-template-columns:1fr auto"><span>${UI.esc(tt)}</span><span class="chip chip-diff-hard">${n} wrong</span></div>`).join("")}
            <p class="tiny muted mt-3">Recommended: review these topics, re-read their lessons, then retake the quiz.</p>
          </div>` : `<div class="callout callout-success mt-4">No weak topics — excellent job! 🏆</div>`}
        <div class="row mt-4" style="justify-content:center">
          <button class="btn" data-act="exam-again">🔁 New exam</button>
          <button class="btn btn-primary" data-act="open-topic" data-id="${qz.questions[0] ? findTopicForWeak(sortedWeak) : ""}">📖 Study weakest</button>
        </div>
      </div>`;
  }

  function findTopicForWeak(sortedWeak) {
    if (!sortedWeak.length) return "";
    const title = sortedWeak[0][0];
    const t = window.allTopics.find(tp => tp.title === title);
    return t ? t._id : "";
  }

  /* ============ PROGRESS ============ */
  function renderProgress() {
    const stats = Store.overallStats();
    const grades = ["10", "11"];
    let html = `
      <h1>📈 Your Progress</h1>
      <div class="grid grid-4 mt-4">
        ${UI.statCard(stats.studied, "Topics completed", "✅")}
        ${UI.statCard(stats.avgScore ? stats.avgScore + "%" : "—", "Average score", "🎯")}
        ${UI.statCard("🔥 " + Store.getState().streak.current, "Day streak", "")}
        ${UI.statCard(UI.timeFmt(stats.studySec), "Total study time", "⏱️")}
      </div>
      ${grades.map(g => {
        const subs = Object.entries(window.CURRICULUM_ALL[g]);
        const rows = subs.map(([key, subj]) => {
          const st = Store.subjectStats(g, key);
          return `<tr><td>${subj.icon} ${subj.title}</td><td>${st.studied}/${st.total}</td><td>${st.pct}%</td><td>${st.avgScore || "—"}%</td><td>${st.avgMastery || "—"}%</td><td>${UI.timeFmt(st.studySec)}</td></tr>`;
        }).join("");
        return `<div class="card mt-4"><h3>Grade ${g}</h3><table><tr><th>Subject</th><th>Topics</th><th>Complete</th><th>Avg score</th><th>Mastery</th><th>Time</th></tr>${rows}</table></div>`;
      }).join("")}
      <h2 class="section-title">🕒 Recent Activity</h2>
      <div class="card">
        ${Store.studyHistory(20).length ? Store.studyHistory(20).map(h => {
          const t = window.topicIndex[h.topicId];
          return `<div class="keyterm" style="grid-template-columns:auto 1fr auto"><span>${h.type === "quiz" ? "🎯" : "⏱️"}</span><span>${t ? UI.esc(t.title) : "—"}</span><span class="tiny">${h.type === "quiz" ? h.score + "%" : UI.timeFmt(h.sec)} · ${UI.relTime(h.at)}</span></div>`;
        }).join("") : UI.emptyState("🌱", "No activity yet", "Start studying to see your progress here!")}
      </div>`;
    return html;
  }

  /* ============ BOOKMARKS ============ */
  function renderBookmarks() {
    const bms = Store.getState().bookmarks;
    return `
      <h1>🔖 Bookmarks</h1>
      <p class="muted">${bms.length} saved item(s)</p>
      <div class="grid mt-4">
        ${bms.length ? bms.map(b => `
          <div class="card card-hover" style="cursor:pointer" data-act="open-topic" data-id="${b.topicId}">
            <div class="spread">
              <div>
                <div style="font-weight:700">${UI.esc(b.label)}</div>
                <div class="tiny muted mt-2">${UI.esc(b.sub || "")}</div>
              </div>
              <button class="icon-btn btn-sm" data-act="remove-bookmark" data-id="${b.id}">🗑️</button>
            </div>
          </div>`).join("") : UI.emptyState("🔖", "No bookmarks yet", "Tap the bookmark icon on any topic to save it here.")}
      </div>`;
  }

  /* ============ NOTES ============ */
  function renderNotes() {
    const all = [];
    for (const [tid, notes] of Object.entries(Store.getState().notes)) {
      notes.forEach((n, i) => all.push({ tid, ...n, i }));
    }
    all.sort((a, b) => b.at - a.at);
    return `
      <h1>📒 Notes</h1>
      <p class="muted">${all.length} note(s) across all topics</p>
      <div class="grid mt-4">
        ${all.length ? all.map(n => {
          const t = window.topicIndex[n.tid];
          return `<div class="card">
            <div class="spread"><b>${t ? UI.esc(t.title) : "—"}</b><span class="tiny muted">${UI.relTime(n.at)}</span></div>
            <p class="mt-2" style="white-space:pre-wrap">${UI.esc(n.text)}</p>
            <button class="btn btn-sm mt-2" data-act="open-topic" data-id="${n.tid}">Open topic →</button>
          </div>`;
        }).join("") : UI.emptyState("📝", "No notes yet", "Write notes while studying any topic — they appear here.")}
      </div>`;
  }

  /* ============ SETTINGS ============ */
  function renderSettings() {
    const s = Store.getState().settings;
    const total = Store.overallStats();
    return `
      <h1>⚙️ Settings</h1>
      <div class="card mt-4">
        <h3>🎨 Appearance</h3>
        <div class="row">
          <button class="btn ${s.theme === "dark" ? "btn-primary" : ""}" data-act="set-theme" data-theme="dark">🌙 Dark</button>
          <button class="btn ${s.theme === "light" ? "btn-primary" : ""}" data-act="set-theme" data-theme="light">☀️ Light</button>
        </div>
      </div>
      <div class="card mt-3">
        <h3>📚 Default Grade</h3>
        <div class="row">
          ${["10", "11"].map(g => `<button class="btn ${s.grade === g ? "btn-primary" : ""}" data-act="set-grade" data-grade="${g}">Grade ${g}</button>`).join("")}
        </div>
      </div>
      <div class="card mt-3">
        <h3>🌐 Interface Language</h3>
        <p class="tiny muted">Changes buttons, navigation, and interface guidance. Lessons and quizzes remain in English.</p>
        <div class="row"><button class="btn ${s.language !== "am" ? "btn-primary" : ""}" data-act="set-language" data-language="en">English</button><button class="btn ${s.language === "am" ? "btn-primary" : ""}" data-act="set-language" data-language="am">አማርኛ</button></div>
      </div>
      <div class="card mt-3">
        <h3>🎯 Default Quiz Length</h3>
        <div class="row">
          ${[5, 10, 15, 20].map(c => `<button class="btn ${(s.quizLen || 10) === c ? "btn-primary" : ""}" data-act="set-quizlen" data-count="${c}">${c} questions</button>`).join("")}
        </div>
      </div>
      <div class="card mt-3">
        <h3>🔔 Sound</h3>
        <button class="btn ${s.sound ? "btn-primary" : ""}" data-act="toggle-sound">${s.sound ? "🔊 On" : "🔇 Off"}</button>
      </div>
      <div class="card mt-3" style="border-color:rgba(239,68,68,.3)">
        <h3>🗑️ Danger Zone</h3>
        <button class="btn btn-danger" data-act="reset-all">Reset all progress & data</button>
        <p class="tiny muted mt-2">This clears all study history, scores, bookmarks and notes. This cannot be undone.</p>
      </div>
      <div class="card mt-3">
        <h3>ℹ️ About</h3>
        <p class="muted" style="margin:0">EthioStudy — an AI-powered study system for the Ethiopian New Curriculum, Grades 10 & 11.<br>
        Subjects: Mathematics, Biology, Physics, Chemistry. Content follows the FDRE Ministry of Education textbooks.<br>
        <span class="tiny">Curriculum structure verified against official MoE student textbooks. Data stored locally in your browser.</span></p>
      </div>`;
  }

  /* ============ SESSION / TIMER ============ */
  function initTimer() {
    StudyTimer.setDuration(Store.getSetting("timerDefault") || 25);
    StudyTimer.setCallbacks(refreshTimerUI, timerComplete);
    refreshTimerUI();
  }

  function refreshTimerUI() {
    const rem = StudyTimer.getRemaining();
    const total = StudyTimer.getTotal();
    const running = StudyTimer.isRunning();
    const d = $("#timerDisplay");
    if (d) d.textContent = StudyTimer.fmt(rem);
    // Mini bar
    const mb = $("#miniTimerBar");
    if (mb) {
      if (running || (total > 0 && rem > 0 && rem < total)) {
        mb.hidden = false;
        const mbd = $("#miniTimerDisplay");
        if (mbd) mbd.textContent = StudyTimer.fmt(rem);
        const mbt = $("#miniTimerTopic");
        if (mbt && activeTopic) mbt.textContent = activeTopic.title;
      } else {
        mb.hidden = true;
      }
    }
  }

  function startSession() {
    if (!activeTopic) return;
    if (StudyTimer.getTotal() <= 0) StudyTimer.setDuration(Store.getSetting("timerDefault") || 25);
    StudyTimer.start();
    refreshTimerUI();
    const th = $("#timerHint");
    if (th) th.textContent = "Session running — keep studying! Time is being tracked.";
  }

  function stopSession() { StudyTimer.pause(); refreshTimerUI(); }

  function finishSession() {
    if (!activeTopic) return;
    const sec = StudyTimer.studiedSeconds();
    if (sec > 0) {
      Store.logStudy(activeTopic._id, sec);
      UI.toast(`✅ ${UI.timeFmt(sec)} logged on ${UI.esc(activeTopic.title)}`, "success");
    }
    StudyTimer.finish();
    refreshTimerUI();
    updateStreakPill();
  }

  function timerComplete() {
    UI.toast("⏰ Time's up! Finish the session or keep studying.", "info");
    if (activeTopic) { const sec = StudyTimer.studiedSeconds(); if (sec > 0) Store.logStudy(activeTopic._id, sec); }
    try { if (navigator.vibrate) navigator.vibrate([200,100,200]); } catch (e) {}
    updateStreakPill();
  }

  function updateStreakPill() {
    const el = $("#streakPill");
    if (el) el.textContent = "🔥 " + Store.getState().streak.current + " day streak" + (Store.getState().streak.best > 1 ? " · best " + Store.getState().streak.best : "");
    const t = $("#sidebarTime");
    if (t) t.textContent = new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }

  /* ============ SEARCH ============ */
  function showSearchResults(q, openFirst) {
    const panel = $("#searchPanel");
    const ql = q.toLowerCase();
    const results = window.allTopics.filter(t => {
      const hay = (t.title + " " + t._subjectTitle + " " + t._unitTitle + " " + t.subtopics.join(" ") + " " + ((window.Lessons[t._id] && (window.Lessons[t._id].keyTerms || []).map(k => k.term + " " + k.def).join(" ")) || "")).toLowerCase();
      return hay.includes(ql);
    }).slice(0, 12);
    if (openFirst && results.length) { navigate("topic", { id: results[0]._id }); hideSearchPanel(); return; }
    if (!results.length) {
      panel.innerHTML = `<div class="search-result" style="color:var(--fg-3)">No results for "<b>${UI.esc(q)}</b>"</div>`;
    } else {
      panel.innerHTML = results.map(r => `
        <div class="search-result" data-act="open-topic" data-id="${r._id}">
          <span style="font-size:1.3rem">${r._subjectIcon}</span>
          <div>
            <div class="sr-title">${UI.esc(r.title)}</div>
            <div class="sr-path">${r._subjectTitle} · Grade ${r._grade} · ${UI.esc(r._unitTitle)}</div>
          </div>
          <span style="margin-left:auto">${UI.diffChip(r.difficulty)}</span>
        </div>`).join("");
      panel.onclick = (e) => {
        const r = e.target.closest("[data-act]");
        if (r) { hideSearchPanel(); navigate("topic", { id: r.dataset.id }); }
      };
    }
    panel.hidden = false;
    // global click handler for open-topic in panel is handled by document onclick for .search-result? bind here:
  }
  function hideSearchPanel() { const p = $("#searchPanel"); if (p) p.hidden = true; }

  /* ============ MODE HANDLING ============ */
  function handleMode(act) {
    const grade = Store.getSetting("grade");
    if (act === "mode-pick") navigate("pick");
    if (act === "mode-browse") navigate("browse");
    if (act === "mode-weak") {
      const weak = Store.weakTopics(grade, null, 1)[0];
      if (weak) navigate("topic", { id: weak.topic._id });
      else UI.toast("No weak topics yet — study more topics first!", "info");
    }
    if (act === "mode-review") {
      const studied = window.allTopics.filter(t => Store.progressOf(t._id).totalQ > 0 || Store.progressOf(t._id).studySec > 0);
      if (studied.length) { const t = UI.shuffle(studied)[0]; navigate("topic", { id: t._id }); }
      else UI.toast("Nothing to review yet — study a topic first!", "info");
    }
    if (act === "mode-practice") {
      // go to picker then quiz
      navigate("pick");
      setTimeout(() => { const r = $("#pickResult"); if (r) { const b = r.querySelector("[data-act='start-quiz']"); if (b) b.click(); } }, 100);
    }
    if (act === "mode-timed") {
      navigate("pick");
    }
  }

  /* ============ GLOBAL EVENT BINDING (delegated) ============ */
  function bindAppEvents() {
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-act]");
      if (!el) return;
      const act = el.dataset.act;
      // These are handled in view-level bindGlobal for view-scoped actions.
      // Global actions:
      if (act === "browse-grade") { navigate("browse", { grade: el.dataset.grade }); }
      if (act === "open-subject") { navigate("browse", { grade: current.params.grade || Store.getSetting("grade"), subject: el.dataset.subject }); }
      if (act === "open-unit") { navigate("browse", { grade: current.params.grade || Store.getSetting("grade"), subject: current.params.subject, unit: el.dataset.unit }); }
      if (act === "open-topic") { navigate("topic", { id: el.dataset.id }); }
      if (act === "remove-bookmark") { Store.removeBookmark(el.dataset.id); render(); }
      if (act === "start-quiz") { startQuiz(el.dataset.id, parseInt(el.dataset.count || Store.getSetting("quizLen"), 10)); }
      if (act === "retake") { if (activeQuiz) startQuiz(activeQuiz.t._id, activeQuiz.questions.length); }
      if (act === "next-topic") { pickRandomSmart(); }
      if (act === "pick-topic") { pickTopic(); }
      if (act === "mode-pick" || act === "mode-browse" || act === "mode-weak" || act === "mode-review" || act === "mode-practice" || act === "mode-timed") { handleMode(act); }
      if (act === "go-practice") { navigate("practice"); }
      if (act === "generate-exam") { generateExam(); }
      if (act === "exam-again") { navigate("exam"); }
      if (act === "pick-topic") {
        // If we're already on the picker, run it; otherwise go to the picker view.
        if (current.name === "pick") pickTopic();
        else navigate("pick");
      }
      if (act === "set-theme") { Store.setSetting("theme", el.dataset.theme); document.documentElement.setAttribute("data-theme", el.dataset.theme); render(); }
      if (act === "set-grade") { Store.setSetting("grade", el.dataset.grade); render(); }
      if (act === "set-language") { Store.setSetting("language", el.dataset.language); applyLanguage(); render(); }
      if (act === "set-quizlen") { Store.setSetting("quizLen", parseInt(el.dataset.count, 10)); UI.toast("Default quiz length set to " + el.dataset.count, "success"); render(); }
      if (act === "toggle-sound") { Store.setSetting("sound", !Store.getState().settings.sound); render(); }
      if (act === "reset-all") { UI.confirmModal("Reset all data?", "This deletes all progress, scores, bookmarks and notes. This cannot be undone.", () => { Store.resetAll(); location.hash = "#/dashboard"; location.reload(); }, "Yes, reset"); }
      if (act === "start-session") { startSession(); }
      if (act === "toggle-timer") { if (StudyTimer.isRunning()) StudyTimer.pause(); else StudyTimer.resume(); refreshTimerUI(); }
      if (act === "reset-timer") { StudyTimer.reset(); refreshTimerUI(); }
      if (act === "finish-timer") { finishSession(); }
      if (act === "timer-set") {
        const min = el.dataset.min;
        if (min === "custom") {
          const m = UI.modal(`<h3>⏱️ Custom Timer</h3><input class="note-editor" id="customMin" type="number" min="1" max="180" placeholder="Minutes (e.g. 30)"><div class="row mt-3" style="justify-content:flex-end"><button class="btn" id="customCancel">Cancel</button><button class="btn btn-primary" id="customSet">Set timer</button></div>`);
          m.el.querySelector("#customSet").onclick = () => {
            const v = parseInt(m.el.querySelector("#customMin").value, 10);
            if (v > 0 && v <= 180) { Store.setSetting("timerDefault", v); StudyTimer.setDuration(v); refreshTimerUI(); }
            m.close();
            render();
          };
          m.el.querySelector("#customCancel").onclick = m.close;
        } else {
          Store.setSetting("timerDefault", parseInt(min, 10));
          StudyTimer.setDuration(parseInt(min, 10));
          refreshTimerUI();
          render();
        }
      }
    });

    // Tab switching (topic page)
    document.addEventListener("click", (e) => {
      const tab = e.target.closest("[data-tab]");
      if (tab && activeTopic) switchTopicTab(tab.dataset.tab, activeTopic._id);
      // quiz count preset buttons
      const qc = e.target.closest("[data-quizcount]");
      if (qc && activeTopic) startQuiz(activeTopic._id, parseInt(qc.dataset.quizcount, 10));
    });

    // quiz submit
    document.addEventListener("click", (e) => {
      if (e.target.id === "quizSubmit") {
        if (activeQuiz) {
          if (activeQuiz.exam) { submitQuiz(); }
          else { submitQuiz(); }
        }
      }
      if (e.target.id === "tutorSend") sendTutorMessage();
      if (e.target.closest("[data-tutor-chip]")) { const chip = e.target.closest("[data-tutor-chip]"); $("#tutorInput").value = chip.dataset.tutorChip; sendTutorMessage(); }
      if (e.target.id === "noteSave") saveNote();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target && e.target.id === "tutorInput") sendTutorMessage();
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && e.target && e.target.id === "noteInput") saveNote();
    });

    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".subject-orbit-card");
      if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--tilt-x", `${((e.clientY - box.top) / box.height - .5) * -8}deg`);
      card.style.setProperty("--tilt-y", `${((e.clientX - box.left) / box.width - .5) * 10}deg`);
    }, { passive: true });
    document.addEventListener("pointerout", (e) => {
      const card = e.target.closest(".subject-orbit-card");
      if (card && !card.contains(e.relatedTarget)) { card.style.removeProperty("--tilt-x"); card.style.removeProperty("--tilt-y"); }
    });
  }

  function saveNote() {
    const inp = $("#noteInput");
    if (inp && activeTopic && inp.value.trim()) { Store.addNote(activeTopic._id, inp.value.trim()); inp.value = ""; render(); UI.toast("💾 Note saved", "success"); }
  }

  function sendTutorMessage() {
    const inp = $("#tutorInput");
    if (!inp || !activeTopic) return;
    const q = inp.value.trim();
    if (!q) return;
    const chat = $("#tutorChat");
    chat.innerHTML += `<div class="tutor-msg user">${UI.esc(q)}</div>`;
    const ans = Tutor.ask(activeTopic, q);
    chat.innerHTML += `<div class="tutor-msg ai">${ans.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>")}</div>`;
    inp.value = "";
    chat.scrollTop = chat.scrollHeight;
  }

  function pickRandomSmart() {
    // pick from all topics, prefer weak/unstudied
    const grade = Store.getSetting("grade");
    const pool = window.allTopics.filter(t => t._grade === grade);
    const scored = pool.map(t => {
      const p = Store.progressOf(t._id);
      let w = 1;
      if (p.totalQ === 0 && p.studySec === 0) w += 8;
      else { const m = Store.mastery(t._id); w += Math.max(0, (70 - m) / 8); }
      return { t, w };
    });
    const total = scored.reduce((a, b) => a + b.w, 0);
    let r = Math.random() * total;
    let chosen = scored[0].t;
    for (const s of scored) { r -= s.w; if (r <= 0) { chosen = s.t; break; } }
    navigate("topic", { id: chosen._id });
  }

  /* ============ INIT ============ */
  function init() {
    // theme
    const th = Store.getState().settings.theme || "dark";
    document.documentElement.setAttribute("data-theme", th);
    const tt = $("#themeToggle");
    tt.textContent = th === "dark" ? "🌙" : "☀️";
    tt.onclick = () => { const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; Store.setSetting("theme", next); document.documentElement.setAttribute("data-theme", next); tt.textContent = next === "dark" ? "🌙" : "☀️"; };
    $("#languageToggle").onclick = () => { Store.setSetting("language", language() === "en" ? "am" : "en"); applyLanguage(); render(); };

    // nav
    $$("#mainNav .nav-item").forEach(b => b.onclick = () => navigate(b.dataset.view));
    $("#navPickTopic").onclick = () => navigate("pick");
    $("#menuToggle").onclick = () => $("#sidebar").classList.add("open");
    $("#sidebarClose").onclick = () => $("#sidebar").classList.remove("open");

    bindAppEvents();
    window.addEventListener("hashchange", route);
    document.addEventListener("click", (e) => { if (!e.target.closest(".searchbox") && !e.target.closest(".search-panel")) hideSearchPanel(); });
    applyLanguage();
    updateStreakPill();
    route();
    // auto-open sidebar behavior on small screens
    view().addEventListener("click", () => $("#sidebar").classList.remove("open"));
  }

  /* Expose for console/debug + quiz panel data-count changes */
  window.App = {
    navigate, render, init, pickTopic, startQuiz, submitQuiz,
    startSession, finishSession, pickRandomSmart, refreshTimerUI
  };

  document.addEventListener("DOMContentLoaded", init);
  if (document.readyState === "complete" || document.readyState === "interactive") setTimeout(init, 0);
})();
