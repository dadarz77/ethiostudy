/* Lesson visual explainers — static, lightweight renderers for the 16
   visual types authored in the lesson bank (data/lessons/*.json → visuals[]).
   No animation loops, no canvas, no deps: HTML where HTML lays out better
   (flows, tables, timelines), inline SVG for real charts/diagrams.
   Colors come from the app palette tokens so it matches the dark theme. */
import { useId } from 'react';
import { Rich } from './Rich';
import type { z } from 'zod';
import type { VisualSchema } from '../data/schema';

export type Visual = z.infer<typeof VisualSchema>;

/* ---------- defensive config accessors (zod says config: record<unknown>) ---------- */
type Cfg = Record<string, unknown>;
const asStr = (v: unknown): string => (typeof v === 'string' ? v : '');
const asNum = (v: unknown, d = 0): number => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const asBool = (v: unknown): boolean => v === true;
const asObj = (v: unknown): Cfg => (v && typeof v === 'object' ? (v as Cfg) : {});
const asArr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
/* first non-empty array under any of the given keys (configs use nodes|steps aliases).
   Items stay RAW (unknown): configs mix strings and objects — see itemMain/itemSub. */
const firstArr = (c: Cfg, ...keys: string[]): unknown[] => {
  for (const k of keys) {
    const v = c[k];
    if (Array.isArray(v) && v.length) return v as unknown[];
  }
  return [];
};
/* an item is either a plain string or {label|text|name|q, detail|a} */
const itemMain = (it: unknown): string => (typeof it === 'string' ? it : asStr(asObj(it).label || asObj(it).text || asObj(it).name || asObj(it).q));
const itemSub = (it: unknown): string => {
  if (typeof it === 'string') return '';
  const o = asObj(it);
  return asStr(o.detail || o.desc || o.a);
};

const PAL = ['#60a5fa', '#a78bfa', '#34d399', '#f2c94c', '#fb7185', '#38bdf8'];
const fmt = (n: number) => (Math.abs(n) >= 1000 ? n.toLocaleString('en', { maximumFractionDigits: 0 }) : String(Math.round(n * 100) / 100));
const txtW = (t: string, fs = 12) => t.length * fs * 0.58 + 16;

/* ---------- shared svg bits ---------- */
function ArrowDefs({ id, color = 'var(--fg-3)' }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill={color} />
    </marker>
  );
}

function niceStep(raw: number) {
  if (raw <= 0) return 1;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const r = raw / p;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * p;
}
function ticks(min: number, max: number, want = 5): number[] {
  if (max === min) { max = min + 1; }
  const step = niceStep((max - min) / want);
  const out: number[] = [];
  for (let t = Math.ceil(min / step) * step; t <= max + step * 1e-6; t += step) out.push(Math.round(t * 1e6) / 1e6);
  return out;
}

/* ================= SVG CHART TYPES ================= */

/* lineGraph + motionGraph share one plotter */
function LineChart({ points, xLabel, yLabel }: {
  points: { label: string; color: string; pts: [number, number][] }[];
  xLabel: string; yLabel: string;
}) {
  const W = 640, H = 300, L = 52, R = 14, T = 14, B = yLabel ? 40 : 30;
  const all = points.flatMap(s => s.pts);
  if (!all.length) return null;
  let x0 = Math.min(...all.map(p => p[0])), x1 = Math.max(...all.map(p => p[0]));
  let y0 = Math.min(...all.map(p => p[1])), y1 = Math.max(...all.map(p => p[1]));
  if (x0 === x1) x1 = x0 + 1;
  if (y0 === y1) y1 = y0 + 1;
  const padY = (y1 - y0) * 0.08; y0 -= padY; y1 += padY;
  const sx = (x: number) => L + ((x - x0) / (x1 - x0)) * (W - L - R);
  const sy = (y: number) => T + (1 - (y - y0) / (y1 - y0)) * (H - T - B);
  const xt = ticks(x0, x1, 6), yt = ticks(y0, y1, 5);
  const hasNeg = y0 < 0 && y1 > 0;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vis-svg" role="img">
      {yt.map(t => (
        <g key={`y${t}`}>
          <line x1={L} x2={W - R} y1={sy(t)} y2={sy(t)} stroke={hasNeg && t === 0 ? 'var(--fg-3)' : 'var(--border)'} strokeWidth={hasNeg && t === 0 ? 1.4 : 1} />
          <text x={L - 6} y={sy(t) + 3.5} textAnchor="end" className="vis-tick">{fmt(t)}</text>
        </g>
      ))}
      {xt.map(t => (
        <text key={`x${t}`} x={sx(t)} y={H - B + 14} textAnchor="middle" className="vis-tick">{fmt(t)}</text>
      ))}
      {xLabel && <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" className="vis-axis">{xLabel}</text>}
      {yLabel && <text x={12} y={(T + H - B) / 2} textAnchor="middle" className="vis-axis" transform={`rotate(-90 12 ${(T + H - B) / 2})`}>{yLabel}</text>}
      {points.map((s, i) => {
        const d = s.pts.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ');
        return (
          <g key={i}>
            <polyline points={d} fill="none" stroke={s.color} strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round" />
            {s.pts.length <= 12 && s.pts.map(([x, y], j) => <circle key={j} cx={sx(x)} cy={sy(y)} r={2.6} fill={s.color} />)}
          </g>
        );
      })}
    </svg>
  );
}

function LineGraphVisual({ cfg }: { cfg: Cfg }) {
  const series = firstArr(cfg, 'series').map((vit, i) => {
    const s = asObj(vit);
    return {
      label: asStr(s.label),
      color: asStr(s.color) || PAL[i % PAL.length],
      pts: asArr<[number, number]>(s.points).filter(p => Array.isArray(p) && p.length >= 2).map(p => [asNum(p[0]), asNum(p[1])] as [number, number]),
    };
  });
  const legend = series.some(s => s.label);
  return (
    <>
      <LineChart points={series} xLabel={asStr(cfg.xLabel)} yLabel={asStr(cfg.yLabel)} />
      {legend && (
        <div className="vis-legend">
          {series.map((s, i) => <span key={i}><i style={{ background: s.color }} />{s.label}</span>)}
        </div>
      )}
    </>
  );
}

function MotionGraphVisual({ cfg }: { cfg: Cfg }) {
  const raw = asArr<unknown>(cfg.data);
  const pts: [number, number][] = raw.map((d, i) =>
    Array.isArray(d) ? [asNum((d as [number, number])[0], i + 1), asNum((d as [number, number])[1])] : [i + 1, asNum(d)]);
  return <LineChart points={[{ label: '', color: PAL[0], pts }]} xLabel={asStr(cfg.xLabel)} yLabel={asStr(cfg.yLabel)} />;
}

function BarChartVisual({ cfg }: { cfg: Cfg }) {
  const labels = asArr<unknown>(cfg.labels).map(l => (typeof l === 'string' ? l : itemMain(l)));
  const values = asArr<unknown>(cfg.values).map(v => asNum(v));
  const n = Math.min(labels.length, values.length);
  if (!n) return null;
  const W = 640, H = 300, L = 44, R = 12, T = 22, B = 64;
  const lo = Math.min(0, ...values), hi = Math.max(0, ...values) || 1;
  const sy = (v: number) => T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
  const slot = (W - L - R) / n;
  const bw = Math.min(64, slot * 0.62);
  const rotate = slot < 70;
  const tk = ticks(lo, hi, 5);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vis-svg" role="img">
      {tk.map(t => <g key={t}><line x1={L} x2={W - R} y1={sy(t)} y2={sy(t)} stroke={t === 0 ? 'var(--fg-3)' : 'var(--border)'} strokeWidth={t === 0 ? 1.4 : 1} /><text x={L - 6} y={sy(t) + 3.5} textAnchor="end" className="vis-tick">{fmt(t)}</text></g>)}
      {Array.from({ length: n }, (_, i) => {
        const v = values[i];
        const cx = L + slot * (i + 0.5);
        const y = sy(Math.max(0, v)), h = Math.max(1.5, Math.abs(sy(v) - sy(0)));
        const color = PAL[i % PAL.length];
        return (
          <g key={i}>
            <rect x={cx - bw / 2} y={y} width={bw} height={h} rx={4} fill={color} opacity={0.85} />
            <text x={cx} y={(v >= 0 ? y : y + h) + (v >= 0 ? -5 : 12)} textAnchor="middle" className="vis-value" fill={color}>{fmt(v)}</text>
            <text x={cx} y={H - B + 14} textAnchor={rotate ? 'end' : 'middle'} className="vis-tick"
              transform={rotate ? `rotate(-32 ${cx} ${H - B + 14})` : undefined}>{labels[i]}</text>
          </g>
        );
      })}
      <line x1={L} x2={W - R} y1={H - B} y2={H - B} stroke="var(--border-strong)" />
    </svg>
  );
}

function NumberLineVisual({ cfg }: { cfg: Cfg }) {
  const min = asNum(cfg.min), max = asNum(cfg.max, min + 10);
  const marks = firstArr(cfg, 'marks'), highlights = firstArr(cfg, 'highlights');
  if (max <= min) return null;
  const W = 640, H = 150, L = 26, R = 26;
  const sx = (v: number) => L + ((v - min) / (max - min)) * (W - L - R);
  const lineY = 74;
  const all: Array<Cfg & { kind: number }> = [...marks.map(m => ({ ...asObj(m), kind: 0 })), ...highlights.map(m => ({ ...asObj(m), kind: 1 }))];
  const crowded = all.length * txtW(String(itemMain(all[0] ?? '') || 'x'.repeat(8)), 10) > (W - L - R);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vis-svg" role="img">
      <defs><ArrowDefs id="nl-a" /><ArrowDefs id="nl-b" /></defs>
      <line x1={L - 8} x2={W - R + 2} y1={lineY} y2={lineY} stroke="var(--fg-2)" strokeWidth={1.6} markerEnd="url(#nl-a)" markerStart="url(#nl-b)" />
      {ticks(min, max, 10).map(t => (
        <g key={t}>
          <line x1={sx(t)} x2={sx(t)} y1={lineY - 4} y2={lineY + 4} stroke="var(--fg-2)" strokeWidth={1.2} />
          <text x={sx(t)} y={lineY + 16} textAnchor="middle" className="vis-tick">{fmt(t)}</text>
        </g>
      ))}
      {asStr(cfg.unit) && <text x={W - R + 4} y={lineY - 10} textAnchor="end" className="vis-axis">{cfg.unit as string}</text>}
      {all.map((m, i) => {
        const v = asNum(m.value);
        const label = itemMain(m) || fmt(v);
        const x = sx(Math.min(max, Math.max(min, v)));
        const up = m.kind === 0;
        const stagger = crowded ? i % 2 : 0;
        const yText = up ? (stagger ? 22 : 40) : (stagger ? lineY + 44 : lineY + 62);
        const color = up ? PAL[0] : PAL[2];
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={lineY} y2={yText + (up ? -1 : 3) + (up ? 4 : -8)} stroke={color} strokeWidth={1} opacity={0.65} />
            <circle cx={x} cy={lineY} r={3.4} fill={color} />
            <text x={x} y={yText} textAnchor="middle" fontSize={10} fill={color}>{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* helper: where the segment from a rect center toward (tx,ty) crosses the rect edge */
function rectEdge(cx: number, cy: number, hw: number, hh: number, tx: number, ty: number) {
  const dx = tx - cx, dy = ty - cy;
  if (!dx && !dy) return { x: cx, y: cy };
  const s = Math.min(hw / Math.abs(dx || 1e-9), hh / Math.abs(dy || 1e-9));
  return { x: cx + dx * s, y: cy + dy * s };
}

function CycleDiagramVisual({ cfg }: { cfg: Cfg }) {
  const nodes = firstArr(cfg, 'nodes');
  const n = nodes.length;
  const uid = useId().replace(/:/g, '');
  const arrowId = `cy-${uid}`;
  if (!n) return null;
  const W = 640, H = 380, cx = W / 2, cy = H / 2, RX = 235, RY = 138;
  const pos = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return { x: cx + RX * Math.cos(a), y: cy + RY * Math.sin(a) };
  });
  const box = (ndv: unknown) => {
    const nd = asObj(ndv);
    const label = itemMain(nd), sub = itemSub(nd);
    return { w: Math.max(110, txtW(label, 12), sub ? txtW(sub.slice(0, 34), 9.5) : 0), h: sub ? 46 : 32 };
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vis-svg" role="img">
      <defs><ArrowDefs id={arrowId} color="var(--accent)" /></defs>
      {nodes.map((nd, i) => {
        const { w, h } = box(nd);
        const nxt = pos[(i + 1) % n], cur = pos[i];
        const p1 = rectEdge(cur.x, cur.y, w / 2 + 2, h / 2 + 2, nxt.x, nxt.y);
        const p2 = rectEdge(nxt.x, nxt.y, w / 2 + 8, h / 2 + 8, cur.x, cur.y);
        return <line key={`l${i}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="var(--accent)" strokeWidth={1.6} opacity={0.75} markerEnd={`url(#${arrowId})`} />;
      })}
      {nodes.map((nd, i) => {
        const { w, h } = box(nd);
        const { x, y } = pos[i];
        const color = PAL[i % PAL.length];
        return (
          <g key={i}>
            <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={10} fill="var(--card-2)" stroke={color} strokeWidth={1.4} />
            <text x={x} y={y - (itemSub(nd) ? 4 : -4)} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="var(--fg)">{itemMain(nd)}</text>
            {itemSub(nd) && <text x={x} y={y + 12} textAnchor="middle" fontSize={9.5} fill="var(--fg-3)">{itemSub(nd)}</text>}
          </g>
        );
      })}
    </svg>
  );
}

function MindMapVisual({ cfg }: { cfg: Cfg }) {
  const center = asStr(cfg.center) || '•';
  const branches = firstArr(cfg, 'branches');
  const n = branches.length;
  if (!n) return null;
  const W = 660, H = 400, cx = W / 2, cy = H / 2, RX = 220, RY = 150;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="vis-svg" role="img">
      {branches.map((bit, i) => {
        const b = asObj(bit);
        const items = asArr<unknown>(b.items);
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        const bx = Math.min(W - 100, Math.max(100, cx + RX * Math.cos(a)));
        const by = Math.min(H - 46, Math.max(46, cy + RY * Math.sin(a)));
        const w = Math.max(130, txtW(itemMain(b), 11.5), ...items.map(it => txtW(itemMain(it) || String(it), 9.5)));
        const h = 26 + items.length * 13 + 8;
        const color = PAL[i % PAL.length];
        const e = rectEdge(cx, cy, 58, 20, bx, by);
        return (
          <g key={i}>
            <line x1={e.x} y1={e.y} x2={bx} y2={by} stroke={color} strokeWidth={1.6} opacity={0.7} />
            <rect x={bx - w / 2} y={by - h / 2} width={w} height={h} rx={10} fill="var(--card-2)" stroke={color} strokeWidth={1.3} />
            <text x={bx} y={by - h / 2 + 17} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={color}>{itemMain(b)}</text>
            {items.map((it, j) => (
              <text key={j} x={bx} y={by - h / 2 + 31 + j * 13} textAnchor="middle" fontSize={9.5} fill="var(--fg-2)">{typeof it === 'string' ? it : itemMain(it)}</text>
            ))}
          </g>
        );
      })}
      <rect x={cx - 62} y={cy - 20} width={124} height={40} rx={20} fill="url(#mm-g)" stroke="none" />
      <defs><linearGradient id="mm-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#60a5fa" /><stop offset="1" stopColor="#a78bfa" /></linearGradient></defs>
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize={13} fontWeight={800} fill="#0b1020">{center}</text>
    </svg>
  );
}

function VectorDiagramVisual({ cfg }: { cfg: Cfg }) {
  const vectors = firstArr(cfg, 'vectors');
  const uid = useId().replace(/:/g, '');
  const ox = asNum(cfg.centerX, 120), oy = asNum(cfg.centerY, 130);
  const showR = asBool(cfg.showResultant);
  if (!vectors.length) return null;
  /* screen: angle 0 = east, 90 = up (physics convention) */
  const tip = (vv: unknown) => {
    const v = asObj(vv);
    const a = (asNum(v.angle) * Math.PI) / 180;
    return { x: ox + asNum(v.magnitude, 60) * Math.cos(a), y: oy - asNum(v.magnitude, 60) * Math.sin(a) };
  };
  const sum = vectors.reduce<{ x: number; y: number }>((acc, vv) => {
    const v = asObj(vv);
    const a = (asNum(v.angle) * Math.PI) / 180;
    return { x: acc.x + asNum(v.magnitude, 60) * Math.cos(a), y: acc.y - asNum(v.magnitude, 60) * Math.sin(a) };
  }, { x: 0, y: 0 });
  const tips = vectors.map(tip);
  const allX = [ox, ...tips.map(t => t.x), showR ? ox + sum.x : ox], allY = [oy, ...tips.map(t => t.y), showR ? oy + sum.y : oy];
  const minX = Math.min(...allX) - 52, maxX = Math.max(...allX) + 52, minY = Math.min(...allY) - 30, maxY = Math.max(...allY) + 36;
  const rTip = { x: ox + sum.x, y: oy + sum.y };
  return (
    <svg viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`} className="vis-svg vis-svg-narrow" role="img">
      <defs>
        <ArrowDefs id="vd-a" color="var(--accent)" />
        <ArrowDefs id="vd-g" color="var(--gold)" />
      </defs>
      {showR && vectors.length === 2 && [0, 1].map(i => {
        const from = tips[i], to = rTip, other = tips[1 - i];
        void other;
        return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="var(--fg-3)" strokeWidth={1} strokeDasharray="4 4" />;
      })}
      {vectors.map((v, i) => {
        const t = tips[i], color = PAL[i % PAL.length];
        const vid = `vd-${uid}-${i}`;
        return (
          <g key={i}>
            <defs><ArrowDefs id={vid} color={color} /></defs>
            <line x1={ox} y1={oy} x2={t.x} y2={t.y} stroke={color} strokeWidth={2.4} markerEnd={`url(#${vid})`} />
            <text x={t.x + (t.x >= ox ? 8 : -8)} y={t.y - 6} textAnchor={t.x >= ox ? 'start' : 'end'} fontSize={12} fontWeight={700} fill={color}>{itemMain(v)}</text>
          </g>
        );
      })}
      {showR && (
        <g>
          <line x1={ox} y1={oy} x2={rTip.x} y2={rTip.y} stroke="var(--gold)" strokeWidth={2.6} markerEnd="url(#vd-g)" />
          <text x={rTip.x + 8} y={rTip.y + 4} fontSize={12} fontWeight={700} fill="var(--gold)">resultant</text>
        </g>
      )}
      <circle cx={ox} cy={oy} r={3} fill="var(--fg-2)" />
    </svg>
  );
}

function ForceDiagramVisual({ cfg }: { cfg: Cfg }) {
  const b = asObj(cfg.box);
  const bx = asNum(b.x, 80), by = asNum(b.y, 60), bw = asNum(b.w, 80), bh = asNum(b.h, 30);
  const forces = firstArr(cfg, 'forces');
  if (!forces.length) return null;
  const cx = bx + bw / 2, cy = by + bh / 2;
  const tips = forces.map(fit => {
    const f = asObj(fit);
    const a = (asNum(f.angle) * Math.PI) / 180;
    return { x: cx + asNum(f.magnitude, 50) * Math.cos(a), y: cy - asNum(f.magnitude, 50) * Math.sin(a) };
  });
  const { minX, maxX, minY, maxY } = tips.reduce(
    (acc, t) => ({
      minX: Math.min(acc.minX, t.x - 50),
      maxX: Math.max(acc.maxX, t.x + 50),
      minY: Math.min(acc.minY, t.y - 20),
      maxY: Math.max(acc.maxY, t.y + 20),
    }),
    { minX: bx, maxX: bx + bw, minY: by, maxY: by + bh },
  );
  const color = (l: string) => /mg|weight/i.test(l) ? '#fb7185' : '#60a5fa';
  return (
    <svg viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`} className="vis-svg vis-svg-narrow" role="img">
      <defs>{[...new Set(forces.map(f => color(itemMain(f))))].map(c => <ArrowDefs key={c} id={`fd-${c.slice(1)}`} color={c} />)}</defs>
      <rect x={bx} y={by} width={bw} height={bh} rx={5} fill="var(--card-2)" stroke="var(--fg-2)" strokeWidth={1.4} />
      <circle cx={cx} cy={cy} r={2.5} fill="var(--fg-2)" />
      {forces.map((fit, i) => {
        const f = asObj(fit);
        const c = color(itemMain(f)), t = tips[i];
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={t.x} y2={t.y} stroke={c} strokeWidth={2.4} markerEnd={`url(#fd-${c.slice(1)})`} />
            <text x={t.x + (Math.abs(t.x - cx) > Math.abs(t.y - cy) ? (t.x >= cx ? 10 : -10) : 0)} y={t.y + (Math.abs(t.x - cx) > Math.abs(t.y - cy) ? 4 : t.y < cy ? -8 : 16)} textAnchor={t.x >= cx ? 'start' : 'end'} fontSize={11.5} fontWeight={700} fill={c}>
              {itemMain(f)}{f.magnitude != null && asStr(f.label) === '' ? ` (${fmt(asNum(f.magnitude))})` : ''}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ================= HTML LAYOUT TYPES ================= */

function FlowChartVisual({ cfg }: { cfg: Cfg }) {
  const nodes = firstArr(cfg, 'nodes', 'steps');
  return (
    <div className="vis-flow">
      {nodes.map((nd, i) => (
        <div key={i} className="vis-flow-item">
          <div className="vis-node"><span className="vis-idx" style={{ background: PAL[i % PAL.length] }}>{i + 1}</span><b>{itemMain(nd)}</b>{itemSub(nd) && <Rich html={itemSub(nd)} cls="vis-sub" inline />}</div>
          {i < nodes.length - 1 && <span className="vis-arrow" aria-hidden>→</span>}
        </div>
      ))}
    </div>
  );
}

function StepsVisual({ cfg }: { cfg: Cfg }) {
  const steps = firstArr(cfg, 'steps', 'nodes');
  return (
    <div className="vis-steps">
      {steps.map((st, i) => (
        <div key={i} className="vis-step">
          <span className="vis-idx" style={{ background: PAL[i % PAL.length] }}>{i + 1}</span>
          <div><b>{itemMain(st)}</b>{itemSub(st) && <div className="vis-sub"><Rich html={itemSub(st)} inline /></div>}</div>
        </div>
      ))}
    </div>
  );
}

function QaVisual({ cfg }: { cfg: Cfg }) {
  const pairs = firstArr(cfg, 'pairs');
  return (
    <div className="vis-qa">
      {pairs.map((p, i) => (
        <details key={i} className="qa-item">
          <summary><Rich html={itemMain(p)} inline /></summary>
          <div className="qa-ans"><Rich html={itemSub(p)} /></div>
        </details>
      ))}
    </div>
  );
}

function ComparisonVisual({ cfg }: { cfg: Cfg }) {
  const left = asObj(cfg.left), right = asObj(cfg.right);
  const col = (o: Cfg, color: string) => (
    <div className="vis-cmp-col" style={{ borderTopColor: color }}>
      <b>{asStr(o.name) || itemMain(o)}</b>
      <ul>{asArr<unknown>(o.items).map((it, j) => <li key={j}>{typeof it === 'string' ? <Rich html={it} inline /> : <Rich html={itemMain(it) || itemSub(it)} inline />}</li>)}</ul>
    </div>
  );
  return <div className="vis-cmp">{col(left, PAL[0])}<div className="vis-cmp-vs">vs</div>{col(right, PAL[4])}</div>;
}

function TimelineVisual({ cfg }: { cfg: Cfg }) {
  const events = firstArr(cfg, 'events');
  return (
    <div className="vis-timeline">
      {events.map((ev, i) => (
        <div key={i} className="vis-tl-row">
          <span className="vis-tl-year">{asStr(asObj(ev).year) || itemMain(ev)}</span>
          <span className="vis-tl-dot" style={{ background: PAL[i % PAL.length] }} />
          <div className="vis-tl-text">{itemMain(ev)}{itemSub(ev) && <span className="muted"> — <Rich html={itemSub(ev)} inline /></span>}</div>
        </div>
      ))}
    </div>
  );
}

function FormulaDerivationVisual({ cfg }: { cfg: Cfg }) {
  const lines = firstArr(cfg, 'lines', 'steps');
  return (
    <div className="vis-deriv">
      {lines.map((lit, i) => {
        const ln = asObj(lit);
        return (
          <div key={i} className="vis-deriv-row">
            <div className="vis-deriv-expr">{asStr(ln.expr) || itemMain(ln)}</div>
            {(asStr(ln.note) || itemSub(ln)) && <div className="vis-deriv-note">{asStr(ln.note) || itemSub(ln)}</div>}
            {i < lines.length - 1 && <div className="vis-deriv-arrow" aria-hidden>↓</div>}
          </div>
        );
      })}
    </div>
  );
}

function TableVisual({ cfg }: { cfg: Cfg }) {
  const headers = asArr<unknown>(cfg.headers).map(h => (typeof h === 'string' ? h : String(h)));
  const rows = asArr<unknown>(cfg.rows).map(r => (Array.isArray(r) ? r as unknown[] : asArr<unknown>(Object.values(asObj(r)))));
  return (
    <div className="vis-tablewrap">
      <table className="vis-table">
        {headers.length > 0 && <thead><tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>}
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((cell, j) => <td key={j} className={j === 0 ? 'vis-td-key' : undefined}>{typeof cell === 'string' ? <Rich html={cell} inline /> : String(cell)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================= dispatcher ================= */

export function VisualBlock({ visual }: { visual: Visual }) {
  const cfg = asObj(visual.config);
  const title = asStr(cfg.title);
  const body = (() => {
    switch (visual.type) {
      case 'lineGraph': return <LineGraphVisual cfg={cfg} />;
      case 'motionGraph': return <MotionGraphVisual cfg={cfg} />;
      case 'barChart': return <BarChartVisual cfg={cfg} />;
      case 'numberLine': return <NumberLineVisual cfg={cfg} />;
      case 'cycleDiagram': return <CycleDiagramVisual cfg={cfg} />;
      case 'mindMap': return <MindMapVisual cfg={cfg} />;
      case 'vectorDiagram': return <VectorDiagramVisual cfg={cfg} />;
      case 'forceDiagram': return <ForceDiagramVisual cfg={cfg} />;
      case 'flowChart': return <FlowChartVisual cfg={cfg} />;
      case 'steps': return <StepsVisual cfg={cfg} />;
      case 'qa': return <QaVisual cfg={cfg} />;
      case 'comparison': return <ComparisonVisual cfg={cfg} />;
      case 'timeline': return <TimelineVisual cfg={cfg} />;
      case 'formulaDerivation': return <FormulaDerivationVisual cfg={cfg} />;
      case 'tableVisual':
      case 'table': return <TableVisual cfg={cfg} />;
      default: return null;
    }
  })();
  if (!body) return null;
  return (
    <figure className="vis">
      {title && <figcaption className="vis-title">{title}</figcaption>}
      {body}
    </figure>
  );
}

export default VisualBlock;
