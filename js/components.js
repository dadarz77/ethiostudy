/* ============================================================
   EthioStudy UI Components — reusable renderers + helpers
   ============================================================ */
window.UI = (function () {

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Format formula strings with superscripts: x^2 -> x², sqrt -> √, * -> ×, / -> fraction if simple */
  function fmtFormula(s) {
    let out = String(s || "");
    out = out.replace(/\^\(?(-?\d+)\)?/g, (m, d) => sup(d));
    out = out.replace(/\*/g, "×").replace(/sqrt\(/g, "√(").replace(/pi/g, "π").replace(/theta/g, "θ").replace(/Delta/g, "Δ");
    return out;
  }
  function sup(d) { const map = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" }; return String(d).split("").map(c => map[c] || c).join(""); }

  function toast(msg, type) {
    const c = document.getElementById("toastContainer");
    const el = document.createElement("div");
    el.className = "toast " + (type || "info");
    el.innerHTML = msg;
    c.appendChild(el);
    setTimeout(() => { el.style.opacity = "0"; el.style.transition = "opacity .4s"; setTimeout(() => el.remove(), 400); }, 3200);
  }

  function modal(html, opts) {
    const root = document.getElementById("modalRoot");
    root.innerHTML = `<div class="modal-backdrop"><div class="modal">${html}</div></div>`;
    const backdrop = root.querySelector(".modal-backdrop");
    const close = () => { root.innerHTML = ""; };
    backdrop.addEventListener("click", e => { if (e.target === backdrop && (!opts || !opts.sticky)) close(); });
    return { close, el: root.querySelector(".modal") };
  }

  function confirmModal(title, body, onYes, yesLabel) {
    const m = modal(`
      <h3>${esc(title)}</h3>
      <p class="muted">${body}</p>
      <div class="row mt-4" style="justify-content:flex-end">
        <button class="btn" id="cfNo">Cancel</button>
        <button class="btn btn-danger" id="cfYes">${esc(yesLabel || "Confirm")}</button>
      </div>`);
    m.el.querySelector("#cfNo").onclick = m.close;
    m.el.querySelector("#cfYes").onclick = () => { m.close(); onYes && onYes(); };
  }

  function progressBar(pct, cls) {
    pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    return `<div class="progress ${cls || ""}"><div style="width:${pct}%"></div></div>`;
  }

  function chip(text, cls) {
    return `<span class="chip ${cls || ""}">${text}</span>`;
  }

  function diffChip(d) {
    const map = { easy: ["Easy", "chip-diff-easy"], medium: ["Medium", "chip-diff-medium"], hard: ["Hard", "chip-diff-hard"] };
    const [label, cls] = map[d] || map.medium;
    return chip(label, cls);
  }

  function subjectChip(topic) {
    return `<span class="chip chip-subject">${topic._subjectIcon} ${esc(topic._subjectTitle)} · Grade ${topic._grade}</span>`;
  }

  function statCard(num, label, ico) {
    return `<div class="card card-hover stat">
      <div class="stat-ico" style="font-size:1.6rem">${ico || ""}</div>
      <div class="stat-num">${num}</div>
      <div class="stat-label">${esc(label)}</div>
    </div>`;
  }

  function emptyState(icon, title, sub) {
    return `<div class="empty-state"><div class="big">${icon}</div><h3>${esc(title)}</h3><p class="muted">${esc(sub || "")}</p></div>`;
  }

  function timeFmt(sec) {
    sec = Math.round(sec || 0);
    if (sec < 60) return sec + "s";
    const m = Math.floor(sec / 60);
    if (m < 60) return m + "m";
    const h = Math.floor(m / 60);
    return h + "h " + (m % 60) + "m";
  }

  function relTime(ts) {
    if (!ts) return "—";
    const diff = Date.now() - ts;
    const min = Math.floor(diff / 60000);
    if (min < 1) return "just now";
    if (min < 60) return min + "m ago";
    const h = Math.floor(min / 60);
    if (h < 24) return h + "h ago";
    const d = Math.floor(h / 24);
    if (d < 7) return d + "d ago";
    return new Date(ts).toLocaleDateString();
  }

  function bookmarkBtn(id, size) {
    const on = Store.isBookmarked(id);
    return `<button class="icon-btn ${size || ""}" data-act="bookmark" data-id="${esc(id)}" title="${on ? "Remove bookmark" : "Bookmark"}">${on ? "🔖" : "🔖"}</button>`;
  }

  /* Subject color helpers */
  function subjectColor(subjKey) {
    const map = { mathematics: "#4f8cff", biology: "#22c55e", physics: "#8b5cf6", chemistry: "#f59e0b" };
    return map[subjKey] || "#4f8cff";
  }

  /* shuffle */
  function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  return { esc, fmtFormula, toast, modal, confirmModal, progressBar, chip, diffChip, subjectChip, statCard, emptyState, timeFmt, relTime, bookmarkBtn, subjectColor, shuffle };
})();