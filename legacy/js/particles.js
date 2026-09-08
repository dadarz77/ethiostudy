/* ============================================================
   EthioStudy Particle Field — "Universe of Knowledge"
   Constellations that drift and connect — subjects glow in
   Ethiopian flag-inspired accents. Respects reduced motion.
   ============================================================ */
(function () {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const COLORS = ["60,165,250", "52,211,153", "251,191,36", "251,113,133", "167,139,250"];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = reduceMotion ? 20 : Math.min(90, Math.floor(w * h / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r: Math.random() * 2.2 + .6,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    const theme = document.documentElement.getAttribute("data-theme") || "dark";
    const alpha = theme === "light" ? 0.10 : 0.16;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${theme === "light" ? 0.5 : 0.7})`;
      ctx.fill();
    }

    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const d = Math.sqrt(d2);
          const o = (1 - d / 130) * alpha;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${a.c},${o})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  if (!reduceMotion) {
    requestAnimationFrame(step);
  } else {
    // draw one static frame
    step();
    cancelAnimationFrame(step);
  }
})();