const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:5174/#/services/datacenter2', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-dc2-closed.png' });
  
  // Find and click the section dropdown
  const btn = page.locator('button').filter({ hasText: /Assessment|Procurement|Deployment/ }).first();
  await btn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-dc2-open.png' });
  
  await browser.close();
})();
