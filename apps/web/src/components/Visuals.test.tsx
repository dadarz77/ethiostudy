import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { VisualBlock, type Visual } from './Visuals';

const render = (v: Visual) => renderToStaticMarkup(<VisualBlock visual={v} />);

/* one representative config per schema type (mirrors real authored shapes) */
const SAMPLES: Record<string, Cfg0> = {
  lineGraph: { series: [{ label: 'v', color: '#3b82f6', points: [[0, 0], [4, 8], [10, 10]] }], xLabel: 't (s)', yLabel: 'v (m/s)', title: 'linear motion' },
  motionGraph: { data: [0, 0.25, 0.5, 0.75, 1], xLabel: 'V (volts)', yLabel: 'I (A)', title: 'ohmic' },
  barChart: { labels: ['a', 'b', 'c'], values: [-7, 3.75, 16], title: 'strengths' },
  numberLine: { min: 0, max: 14, unit: 'pH', marks: [{ label: 'Lemon', value: 2 }, { label: 'Blood', value: 7.4 }] },
  cycleDiagram: { nodes: [{ label: 'Producers', detail: 'fix carbon' }, { label: 'Consumers' }, { label: 'Decomposers', detail: 'waste → soil' }], title: 'loop' },
  mindMap: { center: 'BIOLOGY', branches: [{ label: 'Molecules', items: ['Cell bio', 'Genetics'] }, { label: 'Body', items: ['Anatomy'] }] },
  vectorDiagram: { centerX: 80, centerY: 120, showResultant: true, vectors: [{ angle: 0, magnitude: 60, label: '6 N' }, { angle: 90, magnitude: 80, label: '8 N' }] },
  forceDiagram: { box: { x: 80, y: 60, w: 80, h: 30 }, forces: [{ angle: 90, magnitude: 50, label: 'R' }, { angle: -90, magnitude: 80, label: 'mg' }] },
  flowChart: { nodes: [{ label: 'Fertilization', detail: 'ampulla' }, { label: 'Birth', detail: 'oxytocin' }], title: 'egg to baby' },
  steps: { steps: [{ label: 'Prophase', detail: 'chromosomes condense' }, { label: 'Metaphase' }], title: 'PMAT' },
  qa: { pairs: [{ q: 'Half-life of Tc-99m?', a: '<b>Answer:</b> 6 hours' }], title: 'review' },
  comparison: { left: { name: 'Galvanic', items: ['spontaneous', 'makes electricity'] }, right: { name: 'Electrolytic', items: ['forced'] }, title: 'cells' },
  timeline: { events: [{ year: '1665', text: 'Hooke names cells' }, { year: '2003', text: 'Genome complete' }], title: 'history' },
  formulaDerivation: { lines: [{ expr: 'x² + y² = 1', note: 'unit circle' }, { expr: 'sin²θ + cos²θ = 1', note: 'identity' }], title: 'derivation' },
  tableVisual: { headers: ['Law', 'Rule'], rows: [['Product', 'aᵐ·aⁿ = aᵐ⁺ⁿ']] },
  table: { headers: ['Class', 'f'], rows: [['50–59', '4'], ['Σ', '20']] },
} as unknown as Record<string, Cfg0>;
type Cfg0 = { title?: string } & Record<string, unknown>;

describe('VisualBlock — all 16 schema types', () => {
  for (const [type, config] of Object.entries(SAMPLES)) {
    it(`renders ${type}`, () => {
      const html = render({ type, config } as Visual);
      expect(html.length).toBeGreaterThan(30);
      expect(html).not.toContain('NaN');
      expect(html).not.toContain('[object Object]');
      expect(html).not.toContain('undefined');
    });
  }
});

describe('VisualBlock — edge cases', () => {
  const t = (type: string, config: Record<string, unknown>) => render({ type, config } as Visual);
  it('returns null for unknown type', () => expect(t('nope', {})).toBe(''));
  it('survives empty/garbage configs for every type', () => {
    for (const type of Object.keys(SAMPLES)) {
      expect(() => t(type, {})).not.toThrow();
      expect(() => t(type, { nodes: 'garbage', marks: [null, 3], series: [{}] })).not.toThrow();
    }
  });
  it('qa renders collapsible details with sanitized answer html', () => {
    const html = t('qa', { pairs: [{ q: 'Why?', a: '<b>6 h</b><script>evil()</script>' }] });
    expect(html).toContain('<details');
    expect(html).toContain('<b>6 h</b>');
    expect(html).not.toContain('<script');
  });
  it('lineGraph with one point and a flat series does not divide by zero', () => {
    const html = t('lineGraph', { series: [{ points: [[3, 4]] }] });
    expect(html).not.toContain('NaN');
    expect(html).not.toContain('Infinity');
  });
});

describe('VisualBlock — the real authored bank', () => {
  const dir = join(process.cwd(), 'src', 'data', 'lessons');
  let total = 0;
  const typesSeen = new Set<string>();
  const files = readdirSync(dir).filter(f => /^g\d+-/.test(f));
  it(`renders every visual in ${files.length} lesson files without crashing`, () => {
    for (const f of files) {
      const bank = JSON.parse(readFileSync(join(dir, f), 'utf8'));
      for (const topic of Object.values(bank) as { visuals?: Visual[] }[]) {
        for (const v of topic.visuals ?? []) {
          const html = render(v);
          total++;
          typesSeen.add(v.type);
          expect(html.length, `${f} ${v.type}`).toBeGreaterThan(0);
          expect(html, `${f} ${v.type}`).not.toContain('NaN');
        }
      }
    }
    expect(total).toBeGreaterThanOrEqual(500);
    expect(typesSeen.size).toBe(16);
  }, 30_000);
});
