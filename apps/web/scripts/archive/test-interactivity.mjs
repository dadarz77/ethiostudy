import { chromium } from '@playwright/test';

async function testInteractivity() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('=== TESTING QUIZ INTERACTION ===');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/topic/g10-biology-ub1-t1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Click Quiz tab
  await page.click('button:has-text("Quiz")');
  await page.waitForTimeout(600);

  // Click Start Quiz
  await page.click('button:has-text("Start Quiz")');
  await page.waitForTimeout(800);

  // Take screenshot of active quiz question
  await page.screenshot({ path: 'shots/live-quiz-active.png' });

  // Get question text
  const questionPrompt = await page.$eval('.question-stem, .quiz-prompt, .question-card h3, .question-card p', el => el.innerText.trim()).catch(() => 'No prompt');
  console.log('Active Question:', questionPrompt);

  // Click an answer choice
  const choices = await page.$$('.choice-btn, .option-btn, .question-opt, [role="radio"]');
  console.log(`Found ${choices.length} answer choices.`);
  if (choices.length > 0) {
    await choices[0].click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'shots/live-quiz-answered.png' });
    const feedbackText = await page.$eval('.explanation, .callout, .answer-feedback', el => el.innerText.trim()).catch(() => 'No feedback container');
    console.log('Feedback displayed:', feedbackText.slice(0, 120));
  }

  console.log('=== TESTING AI TUTOR TAB ===');
  await page.click('button:has-text("AI Tutor")');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'shots/live-ai-tutor.png' });
  const aiTutorGreeting = await page.$eval('.tutor-view, .chat-view, .card', el => el.innerText.trim()).catch(() => 'No tutor view');
  console.log('AI Tutor greeting snippet:', aiTutorGreeting.slice(0, 150));

  console.log('=== TESTING NOTES TAB & LOCAL STORAGE ===');
  await page.click('button:has-text("Notes")');
  await page.waitForTimeout(800);
  const textarea = await page.$('textarea');
  if (textarea) {
    await textarea.fill('My study note on Biology branch definitions: cytology is the study of cells.');
    await page.waitForTimeout(400);
    const saveBtn = await page.$('button:has-text("Save")');
    if (saveBtn) await saveBtn.click();
    console.log('Note typed and saved.');
    await page.screenshot({ path: 'shots/live-notes-tab.png' });
  }

  console.log('=== TESTING NATIONAL EXAM RUNNER ===');
  await page.goto('https://ethiostudy.xfactertesma.workers.dev/national', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  // Click on Biology exam card
  const bioExamCard = await page.$('div:has-text("Biology"):has-text("questions")');
  if (bioExamCard) {
    await bioExamCard.click();
    await page.waitForTimeout(1200);
    console.log('Navigated to exam page. URL:', page.url());
    await page.screenshot({ path: 'shots/live-national-exam-session.png' });
  }

  await browser.close();
  console.log('All interactive tests completed!');
}

testInteractivity().catch(e => { console.error(e); process.exit(1); });
