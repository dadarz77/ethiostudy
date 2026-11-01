import { chromium } from '@playwright/test';
import { writeFileSync } from 'node:fs';

async function testDetailedFlows() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(`[Console Error] ${m.text()}`); });
  page.on('pageerror', e => errors.push(`[Page Error] ${e.message}`));

  console.log('--- 1. Testing Topic View (Lessons, Diagrams, Visuals) ---');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/topic/g10-biology-ub1-t1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const topicHeading = await page.$eval('h1, h2, .topic-title', el => el.innerText.trim()).catch(() => 'No title found');
  console.log('Topic Heading:', topicHeading);

  const visualCards = await page.$$eval('.vis, .vis-card, svg', els => els.length);
  console.log('Visual / SVG elements on Topic page:', visualCards);
  await page.screenshot({ path: 'shots/live-topic-view.png' });

  console.log('--- 2. Testing Topic Quiz / Practice Tab ---');
  const tabs = await page.$$eval('.tab-btn, button[role="tab"], .segment-btn', els => els.map(e => e.innerText.trim()));
  console.log('Topic tabs available:', tabs);

  const practiceTab = await page.$('button:has-text("Practice"), button:has-text("Quiz"), button:has-text("Questions")');
  if (practiceTab) {
    console.log('Clicking topic practice tab...');
    await practiceTab.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'shots/live-topic-quiz.png' });

    // Look for options
    const options = await page.$$('.question-opt, .choice-btn, .option-btn, [role="radio"], button.opt');
    console.log(`Found ${options.length} question options`);
    if (options.length > 0) {
      await options[0].click();
      await page.waitForTimeout(600);
      const feedback = await page.$eval('.explanation, .feedback, .callout, .answer-feedback, .correct, .incorrect', el => el.innerText.trim()).catch(() => null);
      console.log('Quiz Feedback received:', feedback ? feedback.slice(0, 100) : 'None found');
    }
  }

  console.log('--- 3. Testing National Exams View ---');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/national', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);
  const examCards = await page.$$eval('.exam-card, .card, button', els => els.map(e => e.innerText.trim()).filter(Boolean));
  console.log('National Exam entries found:', examCards.slice(0, 8));
  await page.screenshot({ path: 'shots/live-national-exams.png' });

  console.log('--- 4. Testing Formula Sheet Modal ---');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.click('.formula-btn');
  await page.waitForTimeout(800);
  const formulaContent = await page.$eval('.formula-sheet, .modal, [role="dialog"]', el => el.innerText.trim()).catch(() => null);
  console.log('Formula Modal opened. Header snippet:', formulaContent ? formulaContent.slice(0, 80) : 'Not found');
  await page.screenshot({ path: 'shots/live-formula-modal.png' });

  console.log('--- 5. Testing Search Query & Dropdown ---');
  const searchInput = await page.$('input[type="search"], .search-input, input[placeholder*="Search"]');
  if (searchInput) {
    await searchInput.click();
    await searchInput.fill('mitosis');
    await page.waitForTimeout(800);
    const results = await page.$$eval('.search-result, .search-dropdown a, li', els => els.map(e => e.innerText.trim()).filter(Boolean));
    console.log('Search results for "mitosis":', results.slice(0, 5));
    await page.screenshot({ path: 'shots/live-search-results.png' });
  }

  console.log('Errors:', errors);
  await browser.close();
}

testDetailedFlows().catch(e => { console.error(e); process.exit(1); });
