const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:5176/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/tmp/screenshot-mobile-top.png' });
  
  await page.evaluate(() => window.scrollBy(0, 1200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-mobile-mid.png' });
  
  await page.evaluate(() => window.scrollBy(0, 2000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-mobile-bottom.png' });
  
  await browser.close();
})();
