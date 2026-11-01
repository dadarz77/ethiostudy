// EthioStudy live audit — current build (v3 routes, #root)
// Covers: every route, quiz flow, exam flow, mobile viewport, console errors
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('shots', { recursive: true });

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

const ROUTES = [
  ['/', 'Dashboard'],
  ['/browse', 'Browse'],
  ['/topic/g10-biology-ub1-t1', 'Topic: Biology'],
  ['/topic/g9-maths-ub1-t1', 'Topic: Maths G9'],
  ['/practice', 'Practice'],
  ['/exam', 'Exam'],
  ['/national', 'National'],
  ['/international', 'International'],
  ['/leaderboard', 'Leaderboard'],
  ['/profile', 'Profile'],
  ['/progress', 'Progress'],
  ['/bookmarks', 'Bookmarks'],
  ['/notes', 'Notes'],
  ['/settings', 'Settings'],
  ['/nonexistent-route', '404 NotFound'],
];

const results = [];

async function auditViewport(browser, width, height, label) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedReqs = [];

  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('requestfailed', r => failedReqs.push(`${r.url()} (${r.failure()?.errorText || 'unknown'})`));

  for (const [path, name] of ROUTES) {
    const row = { viewport: label, route: path, name, status: null, ms: null, error: null };
    try {
      const res = await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      row.status = res?.status() ?? null;
      row.ms = Math.round(await page.evaluate(() => performance.now()));
      // wait for render
      await page.waitForTimeout(1200);
      const bodyText = (await page.evaluate(() => document.body.innerText)).trim();
      if (!bodyText) row.error = 'BLANK PAGE (no text rendered)';
      if (bodyText.toLowerCase().includes('application error')) row.error = 'APPLICATION ERROR text on page';
      // capture a few key shots
      if (label === 'desktop' && ['/', '/browse', '/exam', '/national', '/leaderboard'].includes(path)) {
        await page.screenshot({ path: `shots/live-${name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.png` });
      }
    } catch (e) {
      row.error = `${e.name}: ${e.message.split('\n')[0]}`;
    }
    results.push(row);
    process.stdout.write(`  [${label}] ${name.padEnd(18)} ${row.status ?? '---'} ${row.ms != null ? row.ms + 'ms' : ''} ${row.error ? '⚠️ ' + row.error : 'ok'}\n`);
  }

  await context.close();
  return { consoleErrors, pageErrors, failedReqs };
}

async function quizFlow(browser) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const out = { steps: [], errors: [] };
  page.on('pageerror', e => out.errors.push(e.message));
  try {
    await page.goto(`${BASE}/topic/g10-biology-ub1-t1`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    out.steps.push(`loaded: ${await page.title()}`);

    const quizBtn = await page.$('button:has-text("Quiz")');
    if (!quizBtn) { out.steps.push('NO QUIZ TAB BUTTON'); return out; }
    await quizBtn.click();
    await page.waitForTimeout(600);

    const startBtn = await page.$('button:has-text("Start Quiz")');
    if (!startBtn) { out.steps.push('NO START QUIZ BUTTON'); return out; }
    await startBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'shots/live-quiz-active.png' });

    // answer all questions — click first option of each card
    let answered = 0;
    for (let i = 0; i < 20; i++) {
      const card = await page.$('.quiz-q.card, .quiz-q');
      if (!card) break;
      const opt = await card.$('button, [role="button"], label, .opt, li');
      if (!opt) break;
      await opt.click();
      await page.waitForTimeout(350);
      answered++;
    }
    out.steps.push(`answered ${answered} questions`);
    await page.screenshot({ path: 'shots/live-quiz-end.png' });
    const endText = (await page.evaluate(() => document.body.innerText)).toLowerCase();
    out.steps.push(`result screen present: ${/score|result|correct|you got|finished/.test(endText)}`);
  } catch (e) {
    out.errors.push(`quizFlow: ${e.message.split('\n')[0]}`);
  }
  return out;
}

async function examFlow(browser) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const out = { steps: [], errors: [] };
  page.on('pageerror', e => out.errors.push(e.message));
  try {
    await page.goto(`${BASE}/exam`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1200);
    const text = (await page.evaluate(() => document.body.innerText)).trim();
    out.steps.push(`exam page text sample: ${text.slice(0, 120).replace(/\n/g, ' | ')}`);
    // try clicking first available exam / start control
    const startBtn = await page.$('button:has-text("Start"), button:has-text("Begin"), button:has-text("Practice")');
    if (startBtn) {
      await startBtn.click();
      await page.waitForTimeout(1000);
      out.steps.push(`after start: ${(await page.evaluate(() => document.body.innerText)).slice(0, 120).replace(/\n/g, ' | ')}`);
      await page.screenshot({ path: 'shots/live-exam-active.png' });
    } else {
      out.steps.push('no obvious Start/Begin button on /exam');
    }
  } catch (e) {
    out.errors.push(`examFlow: ${e.message.split('\n')[0]}`);
  }
  return out;
}

(async () => {
  console.log('--- ETHIOSTUDY LIVE AUDIT (current build) ---\n');
  const browser = await chromium.launch({ headless: true });

  console.log('[1/4] Desktop viewport 1280x850:');
  const desk = await auditViewport(browser, 1280, 850, 'desktop');
  console.log('\n[2/4] Mobile viewport 390x844 (typical phone):');
  const mob = await auditViewport(browser, 390, 844, 'mobile');
  console.log('\n[3/4] Quiz flow:');
  const quiz = await quizFlow(browser);
  quiz.steps.forEach(s => console.log('  ' + s));
  console.log('\n[4/4] Exam flow:');
  const exam = await examFlow(browser);
  exam.steps.forEach(s => console.log('  ' + s));

  await browser.close();

  const report = {
    generated: new Date().toISOString(),
    site: BASE,
    commit: '0588f7b',
    routes: results,
    desktopConsoleErrors: desk.consoleErrors,
    desktopPageErrors: desk.pageErrors,
    desktopFailedRequests: desk.failedReqs,
    mobileConsoleErrors: mob.consoleErrors,
    mobilePageErrors: mob.pageErrors,
    mobileFailedRequests: mob.failedReqs,
    quizFlow: quiz,
    examFlow: exam,
  };
  writeFileSync('audit-report.json', JSON.stringify(report, null, 2));

  const bad = results.filter(r => r.error || (r.status && r.status >= 400));
  const allErrors = [...desk.pageErrors, ...mob.pageErrors, ...quiz.errors, ...exam.errors];
  console.log(`\n--- SUMMARY ---`);
  console.log(`Routes checked: ${results.length}`);
  console.log(`Route problems: ${bad.length}`);
  console.log(`Page-crash errors: ${allErrors.length}`);
  console.log(`Console errors: ${[...desk.consoleErrors, ...mob.consoleErrors].length}`);
  console.log(`Failed requests: ${[...desk.failedReqs, ...mob.failedReqs].length}`);
  if (bad.length) { console.log('\nPROBLEM ROUTES:'); bad.forEach(r => console.log(`  ${r.viewport} ${r.route} -> ${r.error || r.status}`)); }
  if (allErrors.length) { console.log('\nPAGE ERRORS:'); [...new Set(allErrors)].forEach(e => console.log(`  ${e.slice(0, 200)}`)); }
  console.log('\nFull report: audit-report.json');
})();
