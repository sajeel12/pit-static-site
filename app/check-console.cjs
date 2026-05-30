const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const logs = [];
  page.on('console', msg => logs.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => logs.push(`PAGEERROR: ${err.message}`));
  await page.goto('http://localhost:5176/#/services/cooling-thermal', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(3000);
  logs.forEach(l => console.log(l));
  await browser.close();
})();
