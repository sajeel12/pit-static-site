const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5174/#/services/datacenter2', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
    const el = document.getElementById('capabilities');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshot-dc2-caps.png' });
  await browser.close();
})();
