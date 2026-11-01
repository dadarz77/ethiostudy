// Sweep: TODO/placeholder text, sign-in target, PWA manifest, offline SW
import { chromium } from '@playwright/test';

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // 1. placeholder / TODO sweep across key routes
  const ROUTES = ['/', '/browse', '/practice', '/exam', '/national', '/international', '/leaderboard', '/profile', '/progress', '/notes', '/settings'];
  const BAD = /TODO|FIXME|lorem ipsum|placeholder text|XXX|undefined|\[object Object\]|NaN|Invalid Date|coming soon|TBD/i;
  let hits = 0;
  for (const r of ROUTES) {
    await page.goto(`${BASE}${r}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(700);
    const txt = await page.evaluate(() => document.body.innerText);
    const found = txt.split('\n').filter(l => BAD.test(l));
    if (found.length) { hits += found.length; console.log(`${r}: ${found.length} suspicious lines`); found.slice(0, 4).forEach(l => console.log(`   "${l.trim().slice(0, 110)}"`)); }
  }
  console.log(`\nTotal suspicious lines: ${hits}`);

  // 2. Sign In flow target
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  const signin = await page.$('button:has-text("Sign In"), a:has-text("Sign In")');
  if (signin) {
    await signin.click();
    await page.waitForTimeout(1200);
    const url = page.url();
    const txt = (await page.evaluate(() => (document.querySelector('main') || document.body).innerText)).slice(0, 400);
    console.log(`\n=== SIGN IN -> ${url} ===`);
    console.log(txt);
  } else console.log('\nno Sign In button');

  // 3. manifest + service worker (PWA / offline claim)
  const manifest = await page.evaluate(() => fetch('/manifest.webmanifest').then(r => r.ok ? r.json() : null).catch(() => null));
  if (manifest) {
    console.log(`\n=== PWA MANIFEST ===`);
    console.log(`name: ${manifest.name} | display: ${manifest.display} | theme: ${manifest.theme_color} | icons: ${(manifest.icons || []).length}`);
  } else console.log('\nNO MANIFEST');
  const sw = await page.evaluate(() => navigator.serviceWorker?.getRegistration?.().then(r => r ? r.active?.scriptURL : 'none').catch(() => 'err'));
  console.log(`Service worker active: ${sw}`);

  // 4. offline simulation (service worker cache claim)
  await page.context().setOffline(true);
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForTimeout(1200);
  const offlineTxt = (await page.evaluate(() => document.body.innerText).catch(() => 'COULD NOT EVALUATE')).slice(0, 200);
  console.log(`\n=== OFFLINE MODE (SW cache) ===`);
  console.log(offlineTxt);
  await page.context().setOffline(false);

  await browser.close();
})();
