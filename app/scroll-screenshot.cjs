const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('http://localhost:5174/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  
  await page.evaluate(() => window.scrollTo(0, 6200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/home/Documents/Perception_Website_Kimi/screenshots/results-casestudies.png' });
  await browser.close();
})();
