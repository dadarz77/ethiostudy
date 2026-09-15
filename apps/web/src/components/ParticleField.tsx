import { useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';

/* Particle Field — "Universe of Knowledge". Direct port of js/particles.js:
   drifting constellations in Ethiopian-flag accents. Now pauses entirely when
   the tab is hidden or Settings → Motion = "low power", leaving a calm static
   frame instead of burning rAF cycles on low-spec devices. */
const COLORS = ['60,165,250', '52,211,153', '251,191,36', '251,113,133', '167,139,250'];

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let w = 0, h = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];
    let raf = 0;
    let running = false;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const motionLow = () => (useAppStore.getState().settings.motion ?? 'full') === 'low';
    const calm = () => reduceMotion || motionLow();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      const alpha = theme === 'light' ? 0.10 : 0.16;
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${theme === 'light' ? 0.5 : 0.7})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            const o = (1 - Math.sqrt(d2) / 130) * alpha;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.c},${o})`; ctx.lineWidth = .6; ctx.stroke();
          }
        }
      }
    };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = calm() ? 20 : Math.min(90, Math.floor((w * h) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
        r: Math.random() * 2.2 + .6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      if (!running) draw();
    };

    const step = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(step);
    };
    const start = () => { if (running || document.hidden || calm()) return; running = true; step(); };
    const stop = () => { running = false; cancelAnimationFrame(raf); raf = 0; draw(); };

    resize();
    draw();
    start();

    const onVis = () => {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); raf = 0; }
      else start();
    };
    const unsub = useAppStore.subscribe((s, prev) => {
      if (s.settings.motion === prev.settings.motion) return;
      motionLow() ? stop() : start();
    });
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      unsub();
    };
  }, []);

  return <canvas ref={ref} id="particleCanvas" aria-hidden="true" />;
}
