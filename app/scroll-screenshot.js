const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  
  await page.goto('http://localhost:5174/services/cooling-airflow', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  
  // Scroll down to results section
  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: '/Users/home/Documents/Perception_Website_Kimi/screenshots/testimonial-scroll.png' });
  await browser.close();
  console.log('Screenshot saved');
})();
