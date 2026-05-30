const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:5176/#/infrastructure/data-centre-services/cooling-airflow', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Full page screenshot
  await page.screenshot({ path: '/tmp/screenshot-mobile-fullpage.png', fullPage: true });
  
  await browser.close();
})();
