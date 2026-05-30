const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:5176/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  // Scroll down to trigger sticky nav
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/screenshot-mobile-nav-closed.png' });
  
  // Click the dropdown button by text
  const btn = await page.getByText('01 / Assessment').nth(1);
  await btn.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/screenshot-mobile-nav-open.png' });
  
  await browser.close();
})();
