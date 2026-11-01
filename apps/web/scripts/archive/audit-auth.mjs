// Verify auth modal opens (renders as backdrop overlay, likely outside <main>)
import { chromium } from '@playwright/test';

const BASE = 'https://ethiostudy.xfactertesma.workers.dev';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  await page.click('button:has-text("Sign In")');
  await page.waitForTimeout(900);
  const modal = await page.$('.modal-backdrop, [role="dialog"]');
  console.log(`Modal present after Sign In click: ${!!modal}`);
  if (modal) {
    const txt = (await modal.innerText()).slice(0, 500);
    console.log('=== MODAL TEXT ===');
    console.log(txt);
    const inputs = await modal.$$('input');
    console.log(`\nInputs: ${inputs.length}`);
    for (const i of inputs.slice(0, 4)) {
      const t = await i.getAttribute('type'), p = await i.getAttribute('placeholder'), n = await i.getAttribute('name');
      console.log(`  input type=${t} name=${n} placeholder=${p}`);
    }
    await page.screenshot({ path: 'shots/live-auth-modal.png' });
    // try a fake submit to see error handling
    const email = await modal.$('input[type="email"], input[name="email"]');
    const pw = await modal.$('input[type="password"]');
    if (email && pw) {
      await email.fill('test@ethiostudy.example');
      await pw.fill('wrongpassword123');
      const submit = await modal.$('button[type="submit"], button:has-text("Sign in"), button:has-text("Log in")');
      if (submit) {
        await submit.click();
        await page.waitForTimeout(1800);
        const after = (await page.evaluate(() => document.querySelector('.modal-backdrop, [role="dialog"]')?.innerText || document.body.innerText)).slice(0, 600);
        console.log('\n=== AFTER BAD LOGIN SUBMIT ===');
        console.log(after);
      }
    }
  } else {
    const bodyTxt = (await page.evaluate(() => document.body.innerText)).slice(0, 300);
    console.log('no modal; body sample:', bodyTxt);
  }
  await browser.close();
})();
