import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

mkdirSync('shots', { recursive: true });

async function run() {
  console.log('--- STARTING ETHIOSTUDY UI/UX & FUNCTIONALITY AUDIT ---');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 850 } });
  const page = await context.newPage();

  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(err.message);
  });

  // 1. Initial Load
  console.log('[1/7] Loading Live App (https://ethiostudy.xfactertesma.workers.dev)...');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector('#app', { timeout: 15000 });
  console.log('App root loaded successfully. Page Title:', await page.title());

  // 2. Visual Layout Check on Desktop
  console.log('[2/7] Checking Desktop Layout & Core Elements...');
  const brandName = await page.$eval('.brand-name', el => el.innerText.trim()).catch(e => 'Missing');
  const streakPill = await page.$eval('.streak-pill', el => el.innerText.trim()).catch(e => 'Missing');
  const navItems = await page.$$eval('.nav-item', els => els.map(e => e.innerText.trim()));
  console.log('Brand:', brandName);
  console.log('Streak pill:', streakPill);
  console.log('Navigation items:', navItems);

  await page.screenshot({ path: 'shots/live-desktop-dashboard.png', fullPage: false });
  console.log('Screenshot saved: shots/live-desktop-dashboard.png');

  // 3. Theme & Language Interactivity
  console.log('[3/7] Testing UI Controls (Theme & Language Toggle)...');
  const initialTheme = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.click('.theme-toggle');
  await page.waitForTimeout(300);
  const darkOrLightTheme = await page.evaluate(() => document.documentElement.dataset.theme);
  console.log(`Theme toggle: ${initialTheme} -> ${darkOrLightTheme}`);
  await page.click('.theme-toggle'); // revert

  const initialLang = await page.evaluate(() => document.documentElement.lang);
  await page.click('.lang-pill');
  await page.waitForTimeout(300);
  const switchedLang = await page.evaluate(() => document.documentElement.lang);
  const brandNameAm = await page.$eval('.brand-name', el => el.innerText.trim()).catch(() => '');
  console.log(`Language toggle: ${initialLang} -> ${switchedLang} (Amharic rendered: ${brandNameAm})`);
  await page.click('.lang-pill'); // revert to EN

  // 4. Search Functionality
  console.log('[4/7] Testing Global Search Box...');
  const searchInput = await page.$('.search-input');
  if (searchInput) {
    await searchInput.fill('Biology');
    await page.waitForTimeout(600);
    const searchResults = await page.$$eval('.search-result-item, .search-dropdown a, .search-results li', els => els.length).catch(() => 0);
    console.log(`Search for "Biology" found ${searchResults} quick results`);
    await searchInput.fill('');
    await page.keyboard.press('Escape');
  }

  // 5. Navigation & Route Functional Testing
  console.log('[5/7] Testing View Routes...');
  const routesToTest = [
    { name: 'Browse', path: '/browse', selector: '.grade-card, .subject-card, .browse-grid, h1' },
    { name: 'Practice', path: '/practice', selector: '.practice-view, .topic-picker, .card, h1' },
    { name: 'Exam Prep', path: '/exam', selector: '.exam-view, .card, h1' },
    { name: 'National Exams', path: '/national', selector: '.national-view, .card, h1' },
    { name: 'Leaderboard', path: '/leaderboard', selector: '.leaderboard-view, .card, h1' },
    { name: 'Settings', path: '/settings', selector: '.settings-view, .card, h1' }
  ];

  for (const r of routesToTest) {
    await page.click(`a[href="${r.path}"]`);
    await page.waitForTimeout(600);
    const visible = await page.waitForSelector(r.selector, { timeout: 8000 }).then(() => true).catch(() => false);
    console.log(`Route [${r.name}] (${r.path}): rendered = ${visible}, current URL: ${page.url()}`);
  }

  // 6. Interactive Quiz / Practice Test
  console.log('[6/7] Testing Interactive Quiz Engine in Practice...');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/practice', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  
  // Look for a start button or question options
  const optionBtns = await page.$$('.question-opt, .choice-btn, .option-btn, [role="radio"]');
  if (optionBtns.length > 0) {
    console.log(`Found ${optionBtns.length} answer options. Clicking first option...`);
    await optionBtns[0].click();
    await page.waitForTimeout(600);
    const explanation = await page.$('.explanation, .feedback, .callout, .answer-feedback');
    console.log('Answer feedback displayed:', explanation !== null);
  } else {
    // Check if there are start practice buttons
    const startBtn = await page.$('.btn-primary, button:has-text("Start"), button:has-text("Practice")');
    if (startBtn) {
      console.log('Clicking practice action button...');
      await startBtn.click();
      await page.waitForTimeout(1000);
      const postClickOpts = await page.$$('.question-opt, .choice-btn, .option-btn, [role="radio"]');
      console.log(`Options after start: ${postClickOpts.length}`);
    }
  }

  // 7. Mobile Viewport & UX Check
  console.log('[7/7] Testing Mobile Responsiveness (390x844 iPhone 14)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  const bottomNavExists = await page.isVisible('.bottom-nav, nav.mobile-nav, footer.bottom-bar').catch(() => false);
  const hamburgerMenu = await page.isVisible('.menu-toggle').catch(() => false);
  console.log('Mobile Bottom Navigation rendered:', bottomNavExists);
  console.log('Mobile Hamburger Menu rendered:', hamburgerMenu);

  if (hamburgerMenu) {
    await page.click('.menu-toggle');
    await page.waitForTimeout(400);
    const sidebarOpen = await page.isVisible('.sidebar.open, .sidebar');
    console.log('Mobile Drawer open after click:', sidebarOpen);
    await page.screenshot({ path: 'shots/live-mobile-drawer.png' });
    const closeBtn = await page.$('.sidebar-close, .nav-scrim');
    if (closeBtn) await closeBtn.click();
  }

  await page.screenshot({ path: 'shots/live-mobile-dashboard.png' });
  console.log('Mobile screenshots saved.');

  console.log('--- AUDIT COMPLETE ---');
  console.log('Total Console Errors:', consoleErrors.length);
  if (consoleErrors.length) console.log('Errors:', consoleErrors);
  console.log('Total Page Unhandled Exceptions:', pageErrors.length);
  if (pageErrors.length) console.log('Exceptions:', pageErrors);

  await browser.close();
}

run().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
