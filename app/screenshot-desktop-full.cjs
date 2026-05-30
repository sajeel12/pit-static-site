const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('http://localhost:5176/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  const btn = await page.locator('text=See Comparison').first();
  await btn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await btn.click();
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollBy(0, 350));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-desktop-full.png' });
  await browser.close();
})();
