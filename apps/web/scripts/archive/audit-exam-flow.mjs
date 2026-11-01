// Flow test: exam subject card -> unit picker -> start -> questions
import { chromium } from '@playwright/test';

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto(`${BASE}/exam`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);

  // Click the Mathematics subject card (inside main)
  const mathCard = await page.$('main button:has-text("Mathematics"), main .curriculum-card:has-text("Mathematics")');
  if (!mathCard) { console.log('NO MATH CARD'); process.exit(0); }
  await mathCard.click();
  await page.waitForTimeout(1000);
  let txt = (await page.evaluate(() => document.querySelector('main')?.innerText || document.body.innerText)).trim();
  console.log('=== AFTER CLICKING MATH SUBJECT ===');
  console.log(txt.slice(0, 900));

  // look for unit toggles / start button
  const startBtn = await page.$('main button:has-text("Start"), main button:has-text("Begin"), main button:has-text("Start Exam")');
  if (startBtn) {
    const label = (await startBtn.innerText()).trim();
    console.log(`\nFound start control: "${label}"`);
    await startBtn.click();
    await page.waitForTimeout(1500);
    txt = (await page.evaluate(() => document.querySelector('main')?.innerText || document.body.innerText)).trim();
    console.log('=== AFTER START ===');
    console.log(txt.slice(0, 700));
    const url = page.url();
    console.log(`\nURL now: ${url}`);
    await page.screenshot({ path: 'shots/live-exam-active.png' });
  } else {
    console.log('\nNo Start/Begin control found after selecting subject');
    const btns = await page.$$eval('main button', els => els.map(e => (e.innerText || '').trim()).filter(Boolean));
    console.log('main buttons:', btns.slice(0, 15));
  }

  console.log(`\nPage errors: ${errors.length}`);
  errors.slice(0, 5).forEach(e => console.log('  ' + e.slice(0, 180)));
  await browser.close();
})();
