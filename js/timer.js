/* ============================================================
   EthioStudy Study Timer
   Presets: 10, 15, 25, 45, 60 min + custom. Start/pause/resume/reset/finish.
   ============================================================ */
window.StudyTimer = (function () {
  let endTime = null, remainingMs = 0, totalMs = 0, running = false, interval = null;
  let onTick = null, onComplete = null;

  function fmt(ms) {
    if (ms < 0) ms = 0;
    const s = Math.ceil(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  }

  function setDuration(min) {
    totalMs = min * 60000;
    remainingMs = totalMs;
    running = false;
    clearTick();
    if (onTick) onTick(remainingMs, totalMs);
  }

  function start() {
    if (running) return;
    if (remainingMs <= 0) remainingMs = totalMs;
    running = true;
    const startRef = Date.now();
    const initRemaining = remainingMs;
    clearTick();
    interval = setInterval(() => {
      const elapsed = Date.now() - startRef;
      remainingMs = Math.max(0, initRemaining - elapsed);
      if (onTick) onTick(remainingMs, totalMs);
      if (remainingMs <= 0) {
        running = false;
        clearTick();
        // beep
        try { new AudioContext().oscillatorNode ? null : null; } catch (e) {}
        if (onComplete) onComplete();
      }
    }, 200);
  }

  function pause() {
    running = false;
    clearTick();
    if (onTick) onTick(remainingMs, totalMs);
  }

  function resume() {
    if (running) return;
    if (remainingMs <= 0) return;
    start();
  }

  function reset() {
    running = false;
    clearTick();
    remainingMs = totalMs;
    if (onTick) onTick(remainingMs, totalMs);
  }

  function finish() {
    running = false;
    clearTick();
    const studied = totalMs - remainingMs;
    remainingMs = 0;
    totalMs = 0;
    if (onTick) onTick(0, 0);
    return studied;
  }

  function clearTick() { if (interval) { clearInterval(interval); interval = null; } }

  function getRemaining() { return remainingMs; }
  function getTotal() { return totalMs; }
  function isRunning() { return running; }
  function studiedSeconds() { return Math.round((totalMs - remainingMs) / 1000); }

  function setCallbacks(tick, complete) { onTick = tick; onComplete = complete; }

  return { setDuration, start, pause, resume, reset, finish, fmt, getRemaining, getTotal, isRunning, studiedSeconds, setCallbacks };
})();