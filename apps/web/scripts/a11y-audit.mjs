/**
 * Real-browser accessibility audit.
 *
 * jsdom cannot compute colour contrast (no layout), so the automated axe pass
 * in the unit suite deliberately skips contrast. This script runs against a
 * live preview server in Chromium, at both a desktop and a phone viewport,
 * and covers every route.
 *
 *   node scripts/a11y-audit.mjs                 # audits http://localhost:4173
 *   A11Y_BASE=https://... node scripts/a11y-audit.mjs
 *
 * Exit code 1 when a serious or critical violation is found, so it can gate CI.
 */
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import { writeFileSync } from 'node:fs';

const BASE = process.env.A11Y_BASE ?? 'http://localhost:4173';
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];
const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'phone', width: 390, height: 844 },
];

const browser = await chromium.launch();

/** Find a real topic URL so /topic/:tid is audited with actual content. */
async function discoverTopicPath() {
  // @axe-core/playwright requires pages created from a context, not
  // browser.newPage(); using the latter makes every analyze() call throw.
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/browse`, { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  const href = await page.evaluate(() => {
    const a = [...document.querySelectorAll('a[href*="/topic/"]')][0];
    return a ? a.getAttribute('href') : null;
  });
  await context.close();
  return href ?? '/topic/g12-physics-1';
}

const ROUTES = [
  '/', '/browse', await discoverTopicPath(), '/practice', '/exam', '/national',
  '/international', '/leaderboard', '/profile', '/progress', '/bookmarks',
  '/notes', '/settings', '/auth', '/admin', '/this-route-does-not-exist',
];

const report = [];
let blocking = 0;

for (const viewport of VIEWPORTS) {
  for (const route of ROUTES) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: 'load', timeout: 30_000 });
      // Lazy route chunks + entry animations need to settle before measuring.
      await page.waitForFunction(() => document.querySelector('#root')?.children.length, null, { timeout: 8000 })
        .catch(() => {});
      await page.waitForTimeout(900);

      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
      const violations = results.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length,
        targets: v.nodes.slice(0, 4).map(n => n.target.join(' ')),
        sample: v.nodes[0]?.failureSummary?.split('\n').slice(1, 3).join(' ') ?? '',
      }));

      const serious = violations.filter(v => v.impact === 'serious' || v.impact === 'critical');
      blocking += serious.length;

      report.push({ route, viewport: viewport.name, passes: results.passes.length, violations });
    } catch (err) {
      report.push({ route, viewport: viewport.name, error: String(err).slice(0, 200) });
    } finally {
      await context.close();
    }
  }
}

await browser.close();

for (const entry of report) {
  const label = `${entry.route} [${entry.viewport}]`;
  if (entry.error) {
    console.log(`✗ ${label} — ${entry.error}`);
    continue;
  }
  if (!entry.violations.length) {
    console.log(`✓ ${label} — clean (${entry.passes} checks passed)`);
    continue;
  }
  console.log(`✗ ${label} — ${entry.violations.length} violation type(s)`);
  for (const v of entry.violations) {
    console.log(`    ${v.impact?.toUpperCase()} ${v.id} ×${v.nodes}  ${v.help}`);
    console.log(`      ${v.targets.slice(0, 2).join(' | ')}`);
  }
}

const totals = new Map();
for (const e of report) {
  for (const v of e.violations ?? []) {
    const key = v.id;
    const prev = totals.get(key) ?? { id: key, impact: v.impact, nodes: 0, routes: new Set() };
    prev.nodes += v.nodes;
    prev.routes.add(e.route);
    totals.set(key, prev);
  }
}

console.log('\n=== SUMMARY BY RULE ===');
for (const t of [...totals.values()].sort((a, b) => b.nodes - a.nodes)) {
  console.log(`${String(t.nodes).padStart(4)} × ${t.id} (${t.impact}) on ${t.routes.size} route(s)`);
}

writeFileSync(
  '.a11y-report.json',
  JSON.stringify(report, (_k, v) => (v instanceof Set ? [...v] : v), 2),
);

console.log(`\nBlocking (serious/critical) finding types: ${blocking}`);
process.exit(blocking > 0 ? 1 : 0);
