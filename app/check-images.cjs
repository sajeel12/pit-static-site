const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto('http://localhost:5173/#/infrastructure/data-centre-services/cooling-airflow');
  await page.waitForTimeout(3000);
  
  const results = await page.$('#results');
  if (results) {
    await results.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await results.screenshot({ path: '/tmp/results-section.png' });
  }
  
  const imgs = await page.$$eval('#results img', imgs => imgs.map(i => ({ src: i.src.split('/').pop(), width: i.naturalWidth, height: i.naturalHeight, complete: i.complete })));
  console.log('Images in results:', JSON.stringify(imgs, null, 2));
  
  await browser.close();
})();
