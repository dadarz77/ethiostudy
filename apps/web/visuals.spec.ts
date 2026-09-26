/* headless visual check of lesson visuals: console errors + DOM sanity + screenshots */
import { test, expect } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'node:fs';

const TOPICS: Record<string, string> = {
  mindmap: 'g10-biology-ub1-t1', flowchart: 'g10-biology-ub1-t1', steps: 'g10-biology-ub3-t1',
  comparison: 'g10-biology-ub1-t2', timeline: 'g10-biology-ub1-t3', barchart: 'g10-biology-ub1-t4',
  linegraph: 'g10-biology-ub2-t3', tablevisual: 'g10-biology-ub3-t2', cycle: 'g10-biology-ub4-t1',
  numberline: 'g10-chemistry-uc3-t1', derivation: 'g10-mathematics-um2-t3',
  vectors: 'g10-physics-up1-t2', motiongraph: 'g10-physics-up2-t2',
  forcediagram: 'g10-physics-up3-t3', table: 'g11-mathematics-um7-t4',
};

mkdirSync('shots', { recursive: true });

for (const [name, tid] of Object.entries(TOPICS)) {
  test(name, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    await page.goto(`http://localhost:5199/#/topic/${tid}`);
    await page.waitForSelector('.vis', { timeout: 20000 });
    // lesson tab is default; count visuals and check for text overflow (scrollWidth > clientWidth by >4px)
    const stats = await page.$$eval('.vis', els => els.map(el => ({
      title: el.querySelector('.vis-title')?.textContent?.slice(0, 40) ?? '',
      overflow: el.scrollWidth - el.clientWidth,
      svgs: el.querySelectorAll('svg').length,
      txt: (el.textContent ?? '').includes('NaN') || (el.textContent ?? '').includes('undefined'),
    })));
    expect(errors, errors.join('\n')).toHaveLength(0);
    for (const s of stats) {
      expect(s.overflow, `overflow in "${s.title}"`).toBeLessThanOrEqual(4);
      expect(s.txt, `NaN/undefined in "${s.title}"`).toBe(false);
    }
    const sec = page.locator('.vis-stack');
    await sec.screenshot({ path: `shots/${name}.png` });
    writeFileSync('shots/report.jsonl', JSON.stringify({ name, tid, count: stats.length, stats }) + '\n', { flag: 'a' });
  });
}
