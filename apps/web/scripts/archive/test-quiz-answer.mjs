import { chromium } from '@playwright/test';

async function testAnswer() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/topic/g10-biology-ub1-t1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.click('button:has-text("Quiz")');
  await page.waitForTimeout(600);
  await page.click('button:has-text("Start Quiz")');
  await page.waitForTimeout(800);
  
  // Click Entomology
  const opt = await page.$('text=Entomology');
  if (opt) {
    await opt.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'shots/live-quiz-answered.png' });
    console.log('Successfully clicked Entomology and captured screenshot.');
  }
  await browser.close();
}

testAnswer().catch(console.error);
