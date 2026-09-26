import confetti from 'canvas-confetti';

/**
 * Triggers a festive celebratory confetti burst on the screen.
 */
export function fireConfetti() {
  try {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#f2c94c', '#4ade80', '#60a5fa', '#fb7185', '#a78bfa'],
    });
  } catch {
    // Non-critical if canvas/WebGL context fails
  }
}

/**
 * Plays a pleasant synthesizer chime using the Web Audio API without needing external audio files.
 */
export function playChime(type: 'success' | 'complete' = 'success') {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    if (type === 'success') {
      // Ascending major chord (C5 -> E5 -> G5)
      const freqs = [523.25, 659.25, 783.99];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.36);
      });
    } else {
      // Completion fanfare
      const freqs = [440, 554.37, 659.25, 880];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.52);
      });
    }
  } catch {
    // Audio contexts might be blocked by autoplay policies until user interaction
  }
}
