// Deep-dive: exam page structure, leaderboard state, practice page, i18n toggle
import { chromium } from '@playwright/test';

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

async function dump(page, label, sel = 'main, #root > div') {
  const txt = await page.evaluate((s) => {
    const el = document.querySelector(s) || document.body;
    return el.innerText;
  }, sel);
  console.log(`\n=== ${label} ===`);
  console.log(txt.slice(0, 1400));
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // EXAM page — full structure with buttons
  await page.goto(`${BASE}/exam`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);
  await dump(page, 'EXAM PAGE main text');
  const examBtns = await page.$$eval('button, a[href]', els => els.map(e => ({
    tag: e.tagName, text: (e.innerText || '').trim().slice(0, 50), href: e.getAttribute('href'), cls: (e.className || '').toString().slice(0, 40)
  })).filter(b => b.text));
  console.log('\n--- EXAM PAGE clickable elements ---');
  examBtns.slice(0, 30).forEach(b => console.log(`  ${b.tag} "${b.text}" ${b.href ? '-> ' + b.href : ''} .${b.cls}`));

  // click the first element literally named Start/Begin inside main
  const mainBtns = await page.$$('main button, main a');
  console.log(`\n--- elements inside <main>: ${mainBtns.length} ---`);
  for (const b of mainBtns.slice(0, 10)) {
    const t = (await b.innerText()).trim().slice(0, 60);
    console.log(`  "${t}"`);
  }

  // LEADERBOARD
  await page.goto(`${BASE}/leaderboard`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await dump(page, 'LEADERBOARD main text');

  // PRACTICE
  await page.goto(`${BASE}/practice`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await dump(page, 'PRACTICE main text');

  // INTERNATIONAL (newest feature — 632-item bank)
  await page.goto(`${BASE}/international`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await dump(page, 'INTERNATIONAL main text');

  // SETTINGS — check language toggle works
  await page.goto(`${BASE}/settings`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  await dump(page, 'SETTINGS main text');
  const amharicBtn = await page.$('button:has-text("አማርኛ"), button:has-text("Amharic"), [value="am"]');
  if (amharicBtn) {
    await amharicBtn.click();
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => document.body.innerText).catch(() => '');
    console.log('\n=== AFTER AMHARIC TOGGLE (sample) ===');
    console.log(after.slice(0, 500));
    const hasAmharic = /[\u1200-\u137F]/.test(after);
    console.log(`Amharic glyphs present after toggle: ${hasAmharic}`);
  } else {
    console.log('\n[settings] no Amharic/language toggle button found by text');
  }

  // Dashboard quick check for onboarding state
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await dump(page, 'DASHBOARD main text');

  await browser.close();
})();
