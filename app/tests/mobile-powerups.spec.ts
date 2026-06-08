import { test, expect } from '@playwright/test';

test('PowerUPS mobile layout check', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  
  await page.goto('http://localhost:5174/#/infrastructure/data-centre-services/power-ups');
  await page.waitForTimeout(8000);
  
  // Screenshot for visual inspection
  await page.screenshot({ path: '/Users/home/Documents/Perception_Website_Kimi/screenshots/mobile-powerups.png', fullPage: true });
  
  // Check horizontal overflow — allow 2px tolerance for subpixel rounding
  const hasOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth + 2;
  });
  
  // Get exact numbers for debugging
  const dims = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  console.log('Dimensions:', dims);
  
  expect(hasOverflow, `scrollWidth ${dims.scrollWidth} > viewport ${dims.innerWidth}`).toBe(false);
});
