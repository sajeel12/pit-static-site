const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5176/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/tmp/screenshot-cooling-full.png', fullPage: true });
  await browser.close();
})();
