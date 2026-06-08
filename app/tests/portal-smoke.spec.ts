import { test, expect } from '@playwright/test';

test('Staff Portal loads without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('requestfailed', (req) => {
    const errorText = req.failure()?.errorText ?? '';
    if (errorText.includes('ERR_ABORTED')) return;
    errors.push(`Network: ${req.url()} — ${errorText}`);
  });

  await page.goto('http://localhost:5174/#/portal');
  await page.waitForTimeout(5000);

  const text = await page.locator('body').innerText();
  expect(text.length).toBeGreaterThan(100);
  expect(errors, `Console/network errors on Staff Portal`).toEqual([]);
});
