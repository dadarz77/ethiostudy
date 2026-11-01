import { chromium } from '@playwright/test';

async function testQuizComplete() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });

  console.log('Navigating to topic...');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/topic/g10-biology-ub1-t1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Click Quiz tab
  await page.click('button:has-text("Quiz")');
  await page.waitForTimeout(500);

  // Click Start Quiz
  await page.click('button:has-text("Start Quiz")');
  await page.waitForTimeout(800);

  // Select first option for each question card
  const questionCards = await page.$$('.quiz-q.card');
  console.log(`Found ${questionCards.length} question cards in active quiz.`);

  for (let i = 0; i < questionCards.length; i++) {
    const card = questionCards[i];
    const firstOption = await card.$('.option, input[type="radio"], input[type="text"]');
    if (firstOption) {
      await firstOption.click();
      await page.waitForTimeout(200);
    }
  }

  // Click "Submit answers ✓"
  const submitBtn = await page.$('button:has-text("Submit answers")');
  if (submitBtn) {
    console.log('Submitting answers...');
    await submitBtn.click();
    await page.waitForTimeout(1200);

    const scoreTitle = await page.$eval('.card h2', el => el.innerText.trim()).catch(() => 'No score title');
    console.log('Quiz Result Summary:', scoreTitle);

    await page.screenshot({ path: 'shots/live-quiz-result.png', fullPage: true });
    console.log('Screenshot saved to shots/live-quiz-result.png');
  }

  await browser.close();
}

testQuizComplete().catch(console.error);
