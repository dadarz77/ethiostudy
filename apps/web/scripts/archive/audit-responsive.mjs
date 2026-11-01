// Responsive audit — find the real layout breakage at phone widths
import { chromium } from '@playwright/test';

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

const ROUTES = ['/', '/browse', '/topic/g10-biology-ub1-t1', '/practice', '/exam',
  '/national', '/international', '/leaderboard', '/profile', '/progress',
  '/bookmarks', '/notes', '/settings'];

// NOTE: passed as a real function (not a string) so page.evaluate invokes it.
function probe() {
  const de = document.documentElement;
  const vw = de.clientWidth;
  const scrollW = Math.max(de.scrollWidth, document.body.scrollWidth);
  const overflow = scrollW - vw;
  const offenders = [];
  const fixedWide = [];

  const els = document.querySelectorAll('*');
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const cs = getComputedStyle(el);
    if (cs.position === 'fixed' || cs.display === 'none') continue;
    if (r.width > vw + 1 || (r.right > vw + 2 && cs.overflow !== 'hidden')) {
      const label = (el.innerText || el.className || el.tagName).toString().trim().replace(/\s+/g, ' ').slice(0, 42);
      offenders.push({ tag: el.tagName, cls: (el.className || '').toString().split(' ')[0], w: Math.round(r.width), right: Math.round(r.right), label });
    }
  }
  const seen = new Set();
  const dedup = offenders.filter(o => {
    const k = o.cls + '|' + o.label + '|' + o.w;
    if (seen.has(k)) return false; seen.add(k); return true;
  });

  for (const el of els) {
    const cs = getComputedStyle(el);
    if (/^\d+px$/.test(cs.width) && parseInt(cs.width) > 300 && el.getBoundingClientRect().height > 0) {
      fixedWide.push({ tag: el.tagName, cls: (el.className || '').toString().split(' ')[0], w: cs.width });
    }
  }
  const seen2 = new Set();
  const fw = fixedWide.filter(o => { const k = o.cls; if (seen2.has(k)) return false; seen2.add(k); return true; });

  const side = document.querySelector('.sidebar, nav.sidebar, [class*="sidebar"]');
  const bottom = document.querySelector('.bottom-nav, [class*="bottom-nav"]');
  const h1 = document.querySelector('h1');
  return {
    vw, scrollW, overflow,
    hasHScrollbar: scrollW > vw,
    offenders: dedup.slice(0, 10),
    fixedWide: fw.slice(0, 8),
    nav: {
      sidebarVisible: side ? getComputedStyle(side).display !== 'none' : null,
      sidebarW: side ? Math.round(side.getBoundingClientRect().width) : null,
      bottomNavVisible: bottom ? getComputedStyle(bottom).display !== 'none' : null,
      bottomNavW: bottom ? Math.round(bottom.getBoundingClientRect().width) : null,
    },
    fonts: {
      body: parseFloat(getComputedStyle(document.body).fontSize),
      h1: h1 ? parseFloat(getComputedStyle(h1).fontSize) : null,
    },
  };
}

async function run(browser, width, height, label) {
  console.log(`\n===== ${label} (${width}x${height}) =====`);
  const context = await browser.newContext({ viewport: { width, height }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  let worst = 0;
  for (const r of ROUTES) {
    try {
      await page.goto(`${BASE}${r}`, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(900);
      const d = await page.evaluate(probe);
      worst = Math.max(worst, d.overflow);
      const flag = d.overflow > 1 ? '⚠️ OVERFLOW' : 'ok        ';
      console.log(`${flag} ${r.padEnd(26)} vw=${d.vw} scrollW=${d.scrollW} overflow=+${d.overflow}px sidebar=${d.nav.sidebarVisible}/${d.nav.sidebarW} bottomNav=${d.nav.bottomNavW} font=${d.fonts.body}/${d.fonts.h1}`);
      if (d.overflow > 1 && d.offenders.length) {
        console.log('   OFFENDERS (wider than viewport / off right edge):');
        d.offenders.slice(0, 8).forEach(o => console.log(`     ${o.tag}.${o.cls} w=${o.w} right=${o.right} — "${o.label}"`));
      }
      if (d.overflow > 1 && d.fixedWide.length) {
        console.log('   FIXED-PIXEL WIDTHS >300px (will not shrink):');
        d.fixedWide.forEach(o => console.log(`     ${o.tag}.${o.cls} width=${o.w}`));
      }
    } catch (e) {
      console.log(`ERR  ${r} — ${e.message.split('\n')[0]}`);
    }
  }
  await context.close();
  return worst;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const w390 = await run(browser, 390, 844, 'PHONE 390 (iPhone)');
  const w360 = await run(browser, 360, 800, 'SMALL ANDROID 360');
  const w768 = await run(browser, 768, 1024, 'TABLET 768');
  await browser.close();
  const worst = Math.max(w390, w360, w768);
  console.log(`\n=== WORST HORIZONTAL OVERFLOW: ${worst}px ===`);
})();
