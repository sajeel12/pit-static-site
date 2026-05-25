import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/#/services', name: 'Services' },
  { path: '/#/infrastructure/data-centre-services/cooling-airflow', name: 'Cooling' },
  { path: '/#/services/servicenow', name: 'ServiceNow' },
  { path: '/#/services/infrastructure', name: 'InfrastructureHub' },
  { path: '/#/about', name: 'About' },
  { path: '/#/contact', name: 'Contact' },
];

for (const route of ROUTES) {
  test(`${route.name} page loads without console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('requestfailed', (req) =>
      errors.push(`Network: ${req.url()} — ${req.failure()?.errorText}`)
    );

    await page.goto(route.path);
    await page.waitForLoadState('networkidle');

    // Wait for Suspense chunks to resolve
    await page.waitForTimeout(2000);

    // Page should have rendered actual content (not just fallback white screen)
    const text = await page.locator('body').innerText();
    expect(text.length).toBeGreaterThan(100);

    // No JS or network errors
    expect(errors, `Console/network errors on ${route.name}`).toEqual([]);
  });
}
