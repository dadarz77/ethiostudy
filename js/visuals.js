/* ============================================================
   EthioStudy Visuals Engine — SVG diagram builders
   All return SVG strings. Use CSS variables from document for theming.
   ============================================================ */
window.Visuals = (function () {
  const G = {
    get fg() { return getComputedStyle(document.documentElement).getPropertyValue("--fg").trim() || "#e8eaf2"; },
    get fg2() { return getComputedStyle(document.documentElement).getPropertyValue("--fg-2").trim() || "#9aa3bf"; },
    get accent() { return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#4f8cff"; },
    get success() { return getComputedStyle(document.documentElement).getPropertyValue("--success").trim() || "#22c55e"; },
    get border() { return getComputedStyle(document.documentElement).getPropertyValue("--border").trim() || "#2b3147"; },
    get bg2() { return getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim() || "#151824"; },
    get warn() { return getComputedStyle(document.documentElement).getPropertyValue("--warn").trim() || "#f59e0b"; },
    get danger() { return getComputedStyle(document.documentElement).getPropertyValue("--danger").trim() || "#ef4444"; },
  };

  function arrow(x1, y1, x2, y2, label, color) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx*dx + dy*dy);
    const ux = dx/len, uy = dy/len;
    const hl = 10, hw = 5;
    const mx = x2 - ux*hl, my = y2 - uy*hl;
    const hx1 = mx - uy*hw, hy1 = my + ux*hw;
    const hx2 = mx + uy*hw, hy2 = my - ux*hw;
    return `<polygon points="${x1},${y1} ${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}" fill="${color||G.accent}" stroke="${color||G.accent}" stroke-width="1.5"/>` +
      (label ? `<text x="${(x1+x2)/2}" y="${(y1+y2)/2-8}" text-anchor="middle" fill="${G.fg}" font-size="12">${label}</text>` : "");
  }

  /* Vector diagram: arrows from center */
  function vectorDiagram(config) {
    const { vectors = [], centerX = 150, centerY = 100, showResultant = false } = config;
    const cols = ["#4f8cff","#22c55e","#f59e0b","#ef4444","#8b5cf6","#ec4899"];
    let svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="300" height="200" fill="none" rx="8"/>`;
    // grid dots
    for (let x=25;x<300;x+=25) for (let y=25;y<200;y+=25) svg += `<circle cx="${x}" cy="${y}" r="1" fill="${G.border}" opacity=".3"/>`;
    svg += `<circle cx="${centerX}" cy="${centerY}" r="3" fill="${G.fg}"/>`;
    let rx = 0, ry = 0;
    vectors.forEach((v, i) => {
      const angle = v.angle || 0; // degrees from horizontal
      const mag = v.magnitude || 60;
      const rad = angle * Math.PI / 180;
      const ex = centerX + mag * Math.cos(rad);
      const ey = centerY - mag * Math.sin(rad);
      rx += mag * Math.cos(rad);
      ry += mag * Math.sin(rad);
      svg += arrow(centerX, centerY, ex, ey, v.label || `v${i+1}`, cols[i % cols.length]);
    });
    if (showResultant && vectors.length) {
      const rLen = Math.sqrt(rx*rx + ry*ry);
      const rAngle = Math.atan2(-ry, rx) * 180 / Math.PI;
      const ex = centerX + rx, ey = centerY - ry;
      svg += arrow(centerX, centerY, ex, ey, "R", "#ef4444");
      svg += `<text x="${(centerX+ex)/2}" y="${(centerY+ey)/2-14}" text-anchor="middle" fill="#ef4444" font-size="11" font-weight="bold">R = ${rLen.toFixed(1)}</text>`;
    }
    svg += `</svg>`;
    return svg;
  }

  /* Motion graph: position-time or velocity-time */
  function motionGraph(config) {
    const { type = "st", data = [], title = "", xLabel = "t (s)", yLabel = "" } = config;
    const W = 280, H = 180, pad = { t: 20, r: 15, b: 35, l: 45 };
    const gw = W - pad.l - pad.r, gh = H - pad.t - pad.b;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    // axes
    svg += `<line x1="${pad.l}" y1="${H-pad.b}" x2="${W-pad.r}" y2="${H-pad.b}" stroke="${G.fg}" stroke-width="1.5"/>`;
    svg += `<line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${H-pad.b}" stroke="${G.fg}" stroke-width="1.5"/>`;
    svg += `<text x="${W/2}" y="${H-3}" text-anchor="middle" fill="${G.fg2}" font-size="10">${xLabel}</text>`;
    svg += `<text x="8" y="${H/2}" text-anchor="middle" fill="${G.fg2}" font-size="10" transform="rotate(-90,8,${H/2})">${yLabel||(type==='st'?'s (m)':'v (m/s)')}</text>`;
    // grid
    for (let i = 1; i <= 4; i++) {
      const x = pad.l + i * gw / 5;
      svg += `<line x1="${x}" y1="${pad.t}" x2="${x}" y2="${H-pad.b}" stroke="${G.border}" stroke-width=".5" stroke-dasharray="3,3"/>`;
    }
    for (let i = 1; i <= 3; i++) {
      const y = pad.t + i * gh / 4;
      svg += `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="${G.border}" stroke-width=".5" stroke-dasharray="3,3"/>`;
    }
    // plot data points
    if (data.length > 1) {
      const xMin = 0, xMax = data.length - 1, yMin = Math.min(...data), yMax = Math.max(...data);
      const yRan = yMax - yMin || 1;
      const px = (i) => pad.l + (i / xMax) * gw;
      const py = (v) => H - pad.b - ((v - yMin) / yRan) * gh;
      let pts = data.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
      svg += `<polyline points="${pts}" fill="none" stroke="${G.accent}" stroke-width="2.5" stroke-linejoin="round"/>`;
      // dots
      data.forEach((v, i) => { svg += `<circle cx="${px(i).toFixed(1)}" cy="${py(v).toFixed(1)}" r="3.5" fill="${G.accent}"/>`; });
      // labels on endpoints
      svg += `<text x="${px(0)-5}" y="${py(data[0])-8}" text-anchor="end" fill="${G.accent}" font-size="10">${data[0]}</text>`;
      svg += `<text x="${px(data.length-1)+5}" y="${py(data[data.length-1])-8}" text-anchor="start" fill="${G.accent}" font-size="10">${data[data.length-1]}</text>`;
    }
    if (title) svg += `<text x="${W/2}" y="14" text-anchor="middle" fill="${G.fg}" font-size="11" font-weight="bold">${title}</text>`;
    svg += `</svg>`;
    return svg;
  }

  /* Force diagram: box + arrows */
  function forceDiagram(config) {
    const { forces = [], box = { x: 100, y: 60, w: 60, h: 50 } } = config;
    const cx = box.x + box.w / 2, cy = box.y + box.h / 2;
    let svg = `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="260" height="160" fill="none" rx="8"/>`;
    svg += `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" rx="4" fill="${G.bg2}" stroke="${G.fg}" stroke-width="2"/>`;
    const cols = ["#4f8cff","#22c55e","#f59e0b","#ef4444","#8b5cf6"];
    forces.forEach((f, i) => {
      const a = (f.angle || 0) * Math.PI / 180;
      const mag = f.magnitude || 60;
      const sx = cx + (f.startFromCenter ? 0 : 0);
      const sy = cy + (f.startFromCenter ? 0 : 0);
      const ex = sx + mag * Math.cos(a);
      const ey = sy - mag * Math.sin(a);
      svg += arrow(sx, sy, ex, ey, f.label || "", cols[i % cols.length]);
    });
    svg += `</svg>`;
    return svg;
  }

  /* Circuit diagram: series or parallel */
  function circuitDiagram(config) {
    const { type = "series", resistors = 3, showLabels = true } = config;
    let svg = `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="300" height="160" fill="none" rx="8"/>`;
    const rw = 30, rh = 14;
    if (type === "series") {
      const gap = (250 - resistors * rw) / (resistors + 1);
      let x = 30;
      // battery left
      svg += `<rect x="${x}" y="65" width="6" height="30" fill="none" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<rect x="${x-3}" y="68" width="12" height="24" rx="2" fill="none" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<text x="${x-3}" y="58" text-anchor="middle" fill="${G.fg}" font-size="8">+</text>`;
      svg += `<text x="${x-3}" y="108" text-anchor="middle" fill="${G.fg}" font-size="8">−</text>`;
      x += 25;
      // wires + resistors
      for (let i = 0; i < resistors; i++) {
        x += gap;
        svg += `<line x1="${x-10}" y1="80" x2="${x}" y2="80" stroke="${G.fg}" stroke-width="2"/>`;
        svg += `<rect x="${x}" y="73" width="${rw}" height="${rh}" rx="3" fill="none" stroke="${G.accent}" stroke-width="2"/>`;
        if (showLabels) svg += `<text x="${x+rw/2}" y="80" text-anchor="middle" fill="${G.accent}" font-size="9">R${i+1}</text>`;
        svg += `<line x1="${x+rw}" y1="80" x2="${x+rw+10}" y2="80" stroke="${G.fg}" stroke-width="2"/>`;
        x += rw + 10;
      }
      // return wire
      svg += `<line x1="${x}" y1="80" x2="${x+10}" y2="80" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="${x+10}" y1="80" x2="${x+10}" y2="110" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="${x+10}" y1="110" x2="30" y2="110" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="30" y1="110" x2="30" y2="95" stroke="${G.fg}" stroke-width="2"/>`;
    } else {
      // parallel
      const wires = 3;
      const gap = 240 / (wires + 1);
      // battery left
      svg += `<rect x="20" y="65" width="6" height="30" fill="none" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<rect x="17" y="68" width="12" height="24" rx="2" fill="none" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<text x="17" y="58" text-anchor="middle" fill="${G.fg}" font-size="8">+</text>`;
      svg += `<text x="17" y="108" text-anchor="middle" fill="${G.fg}" font-size="8">−</text>`;
      // top wire
      svg += `<line x1="40" y1="40" x2="270" y2="40" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="40" y1="120" x2="270" y2="120" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="40" y1="40" x2="40" y2="65" stroke="${G.fg}" stroke-width="2"/>`;
      svg += `<line x1="40" y1="95" x2="40" y2="120" stroke="${G.fg}" stroke-width="2"/>`;
      for (let i = 0; i < wires; i++) {
        const x = 40 + gap * (i + 1) - 15;
        svg += `<line x1="${x+15}" y1="40" x2="${x+15}" y2="55" stroke="${G.fg}" stroke-width="2"/>`;
        svg += `<rect x="${x}" y="55" width="${rw}" height="${rh}" rx="3" fill="none" stroke="${G.accent}" stroke-width="2"/>`;
        if (showLabels) svg += `<text x="${x+rw/2}" y="62" text-anchor="middle" fill="${G.accent}" font-size="9">R${i+1}</text>`;
        svg += `<line x1="${x+rw}" y1="62" x2="${x+rw}" y2="120" stroke="${G.fg}" stroke-width="2"/>`;
      }
    }
    svg += `</svg>`;
    return svg;
  }

  /* Labeled diagram (biology cell, anatomy, etc.) */
  function labeledDiagram(config) {
    const { parts = [], width = 320, height = 240, image = "" } = config;
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="${width}" height="${height}" fill="none" rx="8"/>`;
    // base shape
    if (image) {
      svg += `<image href="${image}" x="20" y="20" width="${width-40}" height="${height-40}" preserveAspectRatio="xMidYMid meet"/>`;
    } else {
      svg += `<ellipse cx="${width/2}" cy="${height/2}" rx="${width/2-30}" ry="${height/2-30}" fill="none" stroke="${G.border}" stroke-width="2"/>`;
      svg += `<circle cx="${width/2}" cy="${height/2-10}" r="40" fill="none" stroke="${G.accent}" stroke-width="1.5" stroke-dasharray="4,3"/>`;
      svg += `<circle cx="${width/2}" cy="${height/2-10}" r="18" fill="none" stroke="${G.accent}" stroke-width="2"/>`;
    }
    // labeled parts
    parts.forEach((p, i) => {
      const lx = p.x || 50 + i * 40, ly = p.y || 40 + i * 30;
      svg += `<circle cx="${lx}" cy="${ly}" r="4" fill="${G.accent}"/>`;
      const lx2 = p.labelX || lx + 40, ly2 = p.labelY || ly - 10;
      svg += `<line x1="${lx}" y1="${ly}" x2="${lx2}" y2="${ly2}" stroke="${G.accent}" stroke-width="1" stroke-dasharray="2,2"/>`;
      svg += `<text x="${lx2+4}" y="${ly2+4}" fill="${G.fg}" font-size="11">${p.label||""}</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Flowchart for processes */
  function flowChart(config) {
    const { steps = [], title = "" } = config;
    const h = 50, gap = 20, w = 160;
    const totalH = steps.length * (h + gap);
    let svg = `<svg viewBox="0 0 240 ${totalH+30}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    if (title) svg += `<text x="120" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    steps.forEach((s, i) => {
      const y = 30 + i * (h + gap);
      const cx = 120, cy = y + h/2;
      svg += `<rect x="${40}" y="${y}" width="${w}" height="${h}" rx="8" fill="${G.bg2}" stroke="${G.accent}" stroke-width="1.5"/>`;
      svg += `<text x="${cx}" y="${cy+4}" text-anchor="middle" fill="${G.fg}" font-size="11">${s}</text>`;
      if (i < steps.length - 1) {
        svg += `<line x1="${cx}" y1="${y+h}" x2="${cx}" y2="${y+h+gap}" stroke="${G.accent}" stroke-width="2"/>`;
        svg += `<polygon points="${cx-5},${y+h+gap-4} ${cx+5},${y+h+gap-4} ${cx},${y+h+gap+4}" fill="${G.accent}"/>`;
      }
    });
    svg += `</svg>`;
    return svg;
  }

  /* Number line */
  function numberLine(config) {
    const { min = -5, max = 5, marks = [], highlights = [] } = config;
    const W = 320, H = 60, pad = 30;
    const gw = W - 2 * pad, range = max - min || 1;
    const px = v => pad + (v - min) / range * gw;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<line x1="${pad}" y1="${H/2}" x2="${W-pad}" y2="${H/2}" stroke="${G.fg}" stroke-width="2"/>`;
    // arrowheads
    svg += `<polygon points="${pad-3},${H/2-4} ${pad-3},${H/2+4} ${pad-8},${H/2}" fill="${G.fg}"/>`;
    svg += `<polygon points="${W-pad+3},${H/2-4} ${W-pad+3},${H/2+4} ${W-pad+8},${H/2}" fill="${G.fg}"/>`;
    // ticks
    for (let v = min; v <= max; v++) {
      if (v % 1 !== 0) continue;
      const x = px(v);
      svg += `<line x1="${x}" y1="${H/2-4}" x2="${x}" y2="${H/2+4}" stroke="${G.fg}" stroke-width="1.5"/>`;
      if (v !== 0) svg += `<text x="${x}" y="${H/2+18}" text-anchor="middle" fill="${G.fg2}" font-size="10">${v}</text>`;
      svg += `<text x="${px(0)}" y="${H/2+18}" text-anchor="middle" fill="${G.fg}" font-size="10" font-weight="bold">0</text>`;
    }
    highlights.forEach(h => {
      const x = px(h.value);
      svg += `<circle cx="${x}" cy="${H/2-8}" r="6" fill="${G.accent}" stroke="white" stroke-width="1.5"/>`;
      if (h.label) svg += `<text x="${x}" y="${H/2-16}" text-anchor="middle" fill="${G.accent}" font-size="10" font-weight="bold">${h.label}</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Venn diagram */
  function venn(config) {
    const { sets = ["A", "B"], labels = ["A", "B"] } = config;
    let svg = `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="200" height="140" fill="none" rx="8"/>`;
    if (sets.length >= 2) {
      svg += `<circle cx="75" cy="70" r="40" fill="none" stroke="${G.accent}" stroke-width="2" opacity=".8"/>`;
      svg += `<circle cx="125" cy="70" r="40" fill="none" stroke="${G.success}" stroke-width="2" opacity=".8"/>`;
      svg += `<text x="50" y="70" text-anchor="middle" fill="${G.accent}" font-size="13" font-weight="bold">${labels[0]||"A"}</text>`;
      svg += `<text x="150" y="70" text-anchor="middle" fill="${G.success}" font-size="13" font-weight="bold">${labels[1]||"B"}</text>`;
      svg += `<text x="100" y="70" text-anchor="middle" fill="${G.fg}" font-size="11">A∩B</text>`;
    }
    svg += `</svg>`;
    return svg;
  }

  /* Ray diagram: mirror or lens */
  function rayDiagram(config) {
    const { type = "mirror", show = "convex" } = config;
    let svg = `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="300" height="180" fill="none" rx="8"/>`;
    const cx = 150, cy = 90;
    // principal axis
    svg += `<line x1="20" y1="${cy}" x2="280" y2="${cy}" stroke="${G.fg}" stroke-width="1" stroke-dasharray="4,3"/>`;
    if (type === "mirror") {
      // mirror
      svg += `<path d="M 250,30 Q 260,${cy} 250,150" fill="none" stroke="${G.accent}" stroke-width="3"/>`;
      svg += `<text x="255" y="20" fill="${G.accent}" font-size="10">Mirror</text>`;
      svg += `<text x="10" y="${cy-5}" fill="${G.fg}" font-size="10">↑</text>`;
      // focal point
      svg += `<circle cx="${cx-30}" cy="${cy}" r="3" fill="${G.warn}"/>`;
      svg += `<text x="${cx-30}" y="${cy-8}" text-anchor="middle" fill="${G.warn}" font-size="9">F</text>`;
      // center of curvature
      svg += `<circle cx="${cx-60}" cy="${cy}" r="3" fill="${G.fg}"/>`;
      svg += `<text x="${cx-60}" y="${cy-8}" text-anchor="middle" fill="${G.fg}" font-size="9">C</text>`;
      // object
      svg += `<line x1="40" y1="${cy}" x2="40" y2="${cy-40}" stroke="${G.fg}" stroke-width="2.5"/>`;
      svg += `<polygon points="38,${cy-40} 42,${cy-40} 40,${cy-44}" fill="${G.fg}"/>`;
      svg += `<text x="35" y="${cy-48}" text-anchor="middle" fill="${G.fg}" font-size="10">Object</text>`;
      // rays
      // parallel ray
      svg += arrow(40, cy-40, 200, cy-40, "", G.accent);
      svg += arrow(200, cy-40, cx-30, cy, "", G.accent);
      // second ray through F
      svg += arrow(40, cy-40, cx-30, cy, "", G.success);
      svg += arrow(cx-30, cy, 100, cy-20, "", G.success);
    } else {
      // lens
      svg += `<path d="M 150,25 Q 140,${cy} 150,155" fill="none" stroke="${G.accent}" stroke-width="2"/>`;
      svg += `<path d="M 150,25 Q 160,${cy} 150,155" fill="none" stroke="${G.accent}" stroke-width="2"/>`;
      svg += `<text x="155" y="20" fill="${G.accent}" font-size="10">Lens</text>`;
      svg += `<circle cx="${cx-30}" cy="${cy}" r="3" fill="${G.warn}"/>`;
      svg += `<text x="${cx-30}" y="${cy-8}" text-anchor="middle" fill="${G.warn}" font-size="9">F</text>`;
      svg += `<circle cx="${cx+30}" cy="${cy}" r="3" fill="${G.warn}"/>`;
      svg += `<text x="${cx+30}" y="${cy-8}" text-anchor="middle" fill="${G.warn}" font-size="9">F'</text>`;
      svg += `<line x1="40" y1="${cy}" x2="40" y2="${cy-35}" stroke="${G.fg}" stroke-width="2.5"/>`;
      svg += `<text x="35" y="${cy-43}" text-anchor="middle" fill="${G.fg}" font-size="10">Object</text>`;
      svg += arrow(40, cy-35, 110, cy-35, "", G.accent);
      svg += arrow(110, cy-35, 115, cy-35, "", G.accent);
    }
    svg += `</svg>`;
    return svg;
  }

  /* Molecular model (simple 2D) */
  function molecularModel(config) {
    const { atoms = [], bonds = [], width = 200, height = 160 } = config;
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<rect width="${width}" height="${height}" fill="none" rx="8"/>`;
    bonds.forEach(b => {
      svg += `<line x1="${b.x1}" y1="${b.y1}" x2="${b.x2}" y2="${b.y2}" stroke="${G.fg}" stroke-width="2"/>`;
    });
    atoms.forEach(a => {
      svg += `<circle cx="${a.x}" cy="${a.y}" r="${a.r||14}" fill="${a.color||G.accent}" opacity=".8" stroke="${G.fg}" stroke-width="1.5"/>`;
      svg += `<text x="${a.x}" y="${a.y+4}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${a.label||""}</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Timeline */
  function timeline(config) {
    const { events = [] } = config;
    const h = 60, W = 360;
    const totalH = Math.max(120, events.length * h + 30);
    let svg = `<svg viewBox="0 0 ${W} ${totalH}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<line x1="40" y1="10" x2="40" y2="${totalH-10}" stroke="${G.accent}" stroke-width="3"/>`;
    events.forEach((e, i) => {
      const y = 20 + i * h;
      svg += `<circle cx="40" cy="${y}" r="6" fill="${G.accent}" stroke="white" stroke-width="2"/>`;
      svg += `<text x="55" y="${y+4}" fill="${G.fg}" font-size="12" font-weight="bold">${e.year||""}</text>`;
      svg += `<text x="55" y="${y+18}" fill="${G.fg2}" font-size="11">${e.text||""}</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Table as SVG */
  function tableVisual(config) {
    const { headers = [], rows = [], title = "" } = config;
    const cols = headers.length, cw = 80, rh = 28, pad = 10;
    const W = cols * cw + pad, H = (rows.length + 1) * rh + 30;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    if (title) svg += `<text x="${W/2}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    const y0 = title ? 30 : 10;
    headers.forEach((h, i) => {
      const x = i * cw + pad, y = y0;
      svg += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" fill="${G.accent}" stroke="${G.fg}" stroke-width="1" opacity=".8"/>`;
      svg += `<text x="${x+cw/2}" y="${y+rh/2+4}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${h}</text>`;
    });
    rows.forEach((row, ri) => {
      const y = y0 + (ri + 1) * rh;
      row.forEach((cell, ci) => {
        const x = ci * cw + pad;
        svg += `<rect x="${x}" y="${y}" width="${cw}" height="${rh}" fill="none" stroke="${G.border}" stroke-width="1"/>`;
        svg += `<text x="${x+cw/2}" y="${y+rh/2+4}" text-anchor="middle" fill="${G.fg}" font-size="10">${cell}</text>`;
      });
    });
    svg += `</svg>`;
    return svg;
  }

  /* ---------- Generic chart renderers (data-driven) ---------- */
  const PALETTE = ["#4f8cff", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#eab308"];

  /* Bar chart: { labels:[], values:[], title, unit } */
  function barChart(config) {
    const { labels = [], values = [], title = "", unit = "" } = config;
    if (!labels.length) return "";
    const W = 420, H = 240, padL = 46, padB = 46, padT = title ? 28 : 12, padR = 10;
    const maxV = Math.max(...values.map(Math.abs), 1) * 1.15;
    const bw = (W - padL - padR) / labels.length;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    if (title) svg += `<text x="${W / 2}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    // gridlines + y labels
    for (let i = 0; i <= 4; i++) {
      const v = maxV * i / 4, y = H - padB - (H - padB - padT) * i / 4;
      svg += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="${G.border}" stroke-width="1"/>`;
      svg += `<text x="${padL - 4}" y="${y + 3}" text-anchor="end" fill="${G.fg2}" font-size="8">${v >= 1000 ? (v / 1000).toFixed(1) + "k" : Math.round(v)}</text>`;
    }
    values.forEach((v, i) => {
      const h = (H - padB - padT) * Math.abs(v) / maxV;
      const x = padL + i * bw + bw * 0.18, y = H - padB - h;
      svg += `<rect x="${x}" y="${y}" width="${bw * 0.64}" height="${h}" rx="3" fill="${PALETTE[i % PALETTE.length]}" opacity="0.85"/>`;
      svg += `<text x="${x + bw * 0.32}" y="${y - 3}" text-anchor="middle" fill="${G.fg}" font-size="8" font-weight="bold">${v >= 1000 ? (v / 1000).toFixed(1) + "k" : v}</text>`;
      const lbl = String(labels[i]);
      svg += `<text x="${padL + i * bw + bw / 2}" y="${H - padB + 12}" text-anchor="middle" fill="${G.fg2}" font-size="8.5" transform="rotate(24 ${padL + i * bw + bw / 2} ${H - padB + 12})">${lbl.length > 12 ? lbl.slice(0, 11) + "…" : lbl}</text>`;
    });
    if (unit) svg += `<text x="${padL}" y="${padT - 2}" fill="${G.fg2}" font-size="8">${unit}</text>`;
    svg += `</svg>`;
    return svg;
  }

  /* Line graph: { points:[{x,y}] } OR { series:[{label,color,points:[[x,y]...]}], xLabel, yLabel, title } */
  function lineGraph(config) {
    const { xLabel = "x", yLabel = "y", title = "" } = config;
    let series = config.series;
    if (!series && config.points) series = [{ label: "", color: null, points: config.points.map(p => [p.x, p.y]) }];
    series = (series || []).filter(s => s.points && s.points.length >= 2);
    if (!series.length) return "";
    const W = 420, H = 250, padL = 50, padB = 40, padT = title ? 28 : 12, padR = 14;
    const all = series.flatMap(s => s.points);
    const xs = all.map(p => p[0]), ys = all.map(p => p[1]);
    const xMin = Math.min(...xs), xMax = Math.max(...xs), yMin = Math.min(...ys, 0), yMax = Math.max(...ys) * 1.1 || 1;
    const px = x => padL + (x - xMin) / ((xMax - xMin) || 1) * (W - padL - padR);
    const py = y => H - padB - (y - yMin) / ((yMax - yMin) || 1) * (H - padB - padT);
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    if (title) svg += `<text x="${W / 2}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    svg += `<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${H - padB}" stroke="${G.fg}" stroke-width="1.5"/>`;
    svg += `<line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="${G.fg}" stroke-width="1.5"/>`;
    for (let i = 0; i <= 4; i++) {
      const yv = yMin + (yMax - yMin) * i / 4, y = py(yv);
      svg += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="${G.border}" stroke-width="0.7"/>`;
      svg += `<text x="${padL - 4}" y="${y + 3}" text-anchor="end" fill="${G.fg2}" font-size="8">${Math.abs(yv) >= 1000 ? (yv / 1000).toFixed(1) + "k" : Math.round(yv * 10) / 10}</text>`;
    }
    series.forEach((s, si) => {
      const col = s.color || PALETTE[si % PALETTE.length];
      const path = s.points.map((p, i) => `${i ? "L" : "M"} ${px(p[0])} ${py(p[1])}`).join(" ");
      svg += `<path d="${path}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linejoin="round"/>`;
      s.points.forEach(p => { svg += `<circle cx="${px(p[0])}" cy="${py(p[1])}" r="3" fill="${col}"/>`; });
      if (s.label) {
        const ly = padT + 12 + si * 14;
        svg += `<rect x="${W - padR - 110}" y="${ly - 8}" width="10" height="3" fill="${col}"/><text x="${W - padR - 96}" y="${ly - 2}" fill="${G.fg}" font-size="9">${s.label}</text>`;
      }
    });
    svg += `<text x="${(W + padL) / 2}" y="${H - 8}" text-anchor="middle" fill="${G.fg2}" font-size="9">${xLabel}</text>`;
    svg += `<text x="12" y="${(H - padB + padT) / 2}" fill="${G.fg2}" font-size="9" transform="rotate(-90 12 ${(H - padB + padT) / 2})" text-anchor="middle">${yLabel}</text>`;
    svg += `</svg>`;
    return svg;
  }

  /* Comparison table: { title, left:{name, items[]}, right:{name, items[]} } */
  function comparison(config) {
    const { title = "", left = {}, right = {} } = config;
    const rows = Math.max((left.items || []).length, (right.items || []).length);
    const W = 420, rh = 26, headH = 30, H = headH + rows * rh + (title ? 20 : 8);
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    let y = 0;
    if (title) { svg += `<text x="${W / 2}" y="14" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`; y = 20; }
    svg += `<rect x="4" y="${y}" width="${W / 2 - 8}" height="${headH}" rx="6" fill="${G.accent}" opacity="0.85"/>`;
    svg += `<text x="${W / 4}" y="${y + 19}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${left.name || "A"}</text>`;
    svg += `<rect x="${W / 2 + 4}" y="${y}" width="${W / 2 - 8}" height="${headH}" rx="6" fill="${G.success}" opacity="0.85"/>`;
    svg += `<text x="${(3 * W) / 4}" y="${y + 19}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${right.name || "B"}</text>`;
    for (let i = 0; i < rows; i++) {
      const ry = y + headH + 4 + i * rh;
      svg += `<rect x="4" y="${ry}" width="${W / 2 - 8}" height="${rh - 4}" rx="4" fill="${G.bg2}" stroke="${G.border}"/>`;
      svg += `<text x="${W / 4}" y="${ry + 14}" text-anchor="middle" fill="${G.fg}" font-size="8.5">${(left.items || [])[i] || ""}</text>`;
      svg += `<rect x="${W / 2 + 4}" y="${ry}" width="${W / 2 - 8}" height="${rh - 4}" rx="4" fill="${G.bg2}" stroke="${G.border}"/>`;
      svg += `<text x="${(3 * W) / 4}" y="${ry + 14}" text-anchor="middle" fill="${G.fg}" font-size="8.5">${(right.items || [])[i] || ""}</text>`;
    }
    svg += `</svg>`;
    return svg;
  }

  /* Numbered steps: { title, steps:[{label, detail}] or strings } */
  function steps(config) {
    const { title = "", steps = [] } = config;
    const rh = 44, W = 420, H = steps.length * rh + (title ? 30 : 10);
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    let y = 0;
    if (title) { svg += `<text x="${W / 2}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`; y = 26; }
    steps.forEach((s, i) => {
      const label = typeof s === "string" ? s : s.label, detail = typeof s === "string" ? "" : (s.detail || "");
      const cy = y + i * rh + rh / 2;
      svg += `<circle cx="22" cy="${cy}" r="12" fill="${PALETTE[i % PALETTE.length]}"/>`;
      svg += `<text x="22" y="${cy + 4}" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${i + 1}</text>`;
      if (i < steps.length - 1) svg += `<line x1="22" y1="${cy + 14}" x2="22" y2="${cy + rh - 12}" stroke="${G.border}" stroke-width="2"/>`;
      svg += `<text x="44" y="${cy + (detail ? -2 : 4)}" fill="${G.fg}" font-size="10.5" font-weight="bold">${label}</text>`;
      if (detail) svg += `<text x="44" y="${cy + 12}" fill="${G.fg2}" font-size="8.5">${detail}</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Formula derivation: { title, lines:[{expr, note}] } */
  function formulaDerivation(config) {
    const { title = "", lines = [] } = config;
    const rh = 34, W = 420, H = lines.length * rh + (title ? 30 : 10);
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    let y = 0;
    if (title) { svg += `<text x="${W / 2}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`; y = 26; }
    lines.forEach((ln, i) => {
      const cy = y + i * rh + rh / 2;
      svg += `<text x="14" y="${cy + 4}" fill="${G.accent}" font-size="12" font-weight="bold" font-style="italic">${ln.expr}</text>`;
      if (ln.note) svg += `<text x="${W - 14}" y="${cy + 4}" text-anchor="end" fill="${G.fg2}" font-size="9">${ln.note}</text>`;
      if (i < lines.length - 1) svg += `<text x="14" y="${cy + rh - 8}" fill="${G.warn}" font-size="10">↓</text>`;
    });
    svg += `</svg>`;
    return svg;
  }

  /* Mind map: { center, branches:[{label, items[]}] } */
  function mindMap(config) {
    const { center = "", branches = [], title = "" } = config;
    const W = 440, H = 300, cx = W / 2, cy = H / 2;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    if (title) svg += `<text x="${cx}" y="16" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    const n = Math.max(branches.length, 1);
    branches.forEach((b, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const bx = cx + 110 * Math.cos(a), by = cy + 95 * Math.sin(a);
      svg += `<line x1="${cx}" y1="${cy}" x2="${bx}" y2="${by}" stroke="${PALETTE[i % PALETTE.length]}" stroke-width="2"/>`;
      svg += `<rect x="${bx - 46}" y="${by - 11}" width="92" height="22" rx="11" fill="${PALETTE[i % PALETTE.length]}" opacity="0.2" stroke="${PALETTE[i % PALETTE.length]}"/>`;
      svg += `<text x="${bx}" y="${by + 4}" text-anchor="middle" fill="${G.fg}" font-size="9" font-weight="bold">${b.label}</text>`;
      (b.items || []).slice(0, 3).forEach((it, j) => {
        const iy = by + (by < cy ? 20 : -20) + j * 11 * (by < cy ? 1 : -1);
        svg += `<text x="${bx}" y="${iy}" text-anchor="middle" fill="${G.fg2}" font-size="7.5">${it}</text>`;
      });
    });
    svg += `<circle cx="${cx}" cy="${cy}" r="42" fill="${G.accent}" opacity="0.25" stroke="${G.accent}" stroke-width="2"/>`;
    svg += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="${G.fg}" font-size="10" font-weight="bold">${center}</text>`;
    svg += `</svg>`;
    return svg;
  }

  /* Q&A card visual: { title, pairs:[{q, a}] } — rendered as HTML, not SVG */
  function qa(config) {
    const { title = "", pairs = [] } = config;
    return `<div class="card" style="padding:14px">
      ${title ? `<b style="font-size:13px">❓ ${title}</b>` : ""}
      ${pairs.map(p => `<details style="border:1px solid var(--border);border-radius:8px;padding:8px 12px;margin-top:8px">
        <summary style="cursor:pointer;font-size:12px;font-weight:600">${p.q}</summary>
        <div style="margin-top:6px;font-size:12px;color:var(--fg-2)">${p.a}</div>
      </details>`).join("")}
    </div>`;
  }

  /* Cycle diagram: { title, nodes:[{label, detail}] } — circular process (water/nitrogen/carbon cycles) */
  function cycleDiagram(config) {
    const { title = "" } = config;
    const nodes = (config.nodes || []).map(n => (typeof n === "string" ? { label: n } : n));
    if (!nodes.length) return "";
    const W = 460, H = 320, cx = W / 2, cy = title ? H / 2 + 12 : H / 2;
    const R = Math.min(W, H) / 2 - 70;
    const n = nodes.length;
    let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">`;
    svg += `<defs><marker id="cyc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${G.accent}"/></marker></defs>`;
    if (title) svg += `<text x="${W / 2}" y="18" text-anchor="middle" fill="${G.fg}" font-size="12" font-weight="bold">${title}</text>`;
    const pos = nodes.map((_, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a };
    });
    // arrows along the circle between consecutive nodes
    for (let i = 0; i < n; i++) {
      const p1 = pos[i], p2 = pos[(i + 1) % n];
      const a1 = p1.a + 0.42, a2 = p2.a - 0.42;
      const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
      const x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
      const mx = cx + (R + 26) * Math.cos((a1 + a2) / 2), my = cy + (R + 26) * Math.sin((a1 + a2) / 2);
      svg += `<path d="M${x1},${y1} Q${mx},${my} ${x2},${y2}" fill="none" stroke="${G.accent}" stroke-width="2" marker-end="url(#cyc-arrow)"/>`;
    }
    nodes.forEach((nd, i) => {
      const p = pos[i];
      svg += `<circle cx="${p.x}" cy="${p.y}" r="34" fill="${G.bg2}" stroke="${G.accent}" stroke-width="2"/>`;
      const words = (nd.label || "").split(" ");
      const lines = words.length > 2 ? [words.slice(0, Math.ceil(words.length / 2)).join(" "), words.slice(Math.ceil(words.length / 2)).join(" ")] : [nd.label];
      lines.forEach((ln, li) => {
        svg += `<text x="${p.x}" y="${p.y + (li - (lines.length - 1) / 2) * 11 + 3}" text-anchor="middle" fill="${G.fg}" font-size="9.5" font-weight="bold">${ln}</text>`;
      });
      if (nd.detail) svg += `<title>${nd.detail}</title>`;
    });
    svg += `</svg>`;
    if (nodes.some(nd => nd.detail)) {
      svg += `<div style="font-size:11px;color:var(--fg-2);margin-top:6px">${nodes.map((nd, i) => `<b style="color:${PALETTE[i % PALETTE.length]}">●</b> <b>${nd.label}</b>${nd.detail ? " — " + nd.detail : ""}`).join("<br>")}</div>`;
    }
    return svg;
  }

  /* Main render dispatch */
  function render(type, config) {
    const fn = {
      vectorDiagram, motionGraph, forceDiagram, circuitDiagram,
      labeledDiagram, flowChart, numberLine, venn, rayDiagram,
      molecularModel, timeline, tableVisual,
      barChart, lineGraph, cycleDiagram, comparison, steps,
      formulaDerivation, mindMap, qa
    }[type];
    if (!fn) return `<p style="color:var(--fg-2);font-style:italic">Visual: ${type}</p>`;
    return fn(config || {});
  }

  return { render, arrow, vectorDiagram, motionGraph, forceDiagram, circuitDiagram, labeledDiagram, flowChart, numberLine, venn, rayDiagram, molecularModel, timeline, tableVisual, barChart, lineGraph, cycleDiagram, comparison, steps, formulaDerivation, mindMap, qa };
})();