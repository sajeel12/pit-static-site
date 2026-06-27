import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/#/services', name: 'Services' },
  { path: '/#/services/cloud', name: 'CloudHub' },
  { path: '/#/services/devops-cloud', name: 'DevOpsCloud' },
  { path: '/#/projects/devops-cloud', name: 'DevOpsCloudProjects' },
  { path: '/#/projects/case-study/iot-data-analytics-mobile-towers', name: 'DevOpsCloudCaseStudyDetail' },

  { path: '/#/infrastructure/data-centre-services/rack-cabinets', name: 'RackCabinets' },
  { path: '/#/infrastructure/data-centre-services/monitoring', name: 'Monitoring' },
  { path: '/#/infrastructure/data-centre-services/migration-relocation', name: 'MigrationRelocation' },
  { path: '/#/infrastructure/data-centre-services/maintenance-support', name: 'MaintenanceSupport' },
  { path: '/#/services/servicenow', name: 'ServiceNow' },
  { path: '/#/services/infrastructure', name: 'InfrastructureHub' },
  { path: '/#/infrastructure/data-centre-services', name: 'DataCentreInfrastructureHub' },
  { path: '/#/infrastructure/data-centre-services/cost-optimisation', name: 'CostOptimisation' },
  { path: '/#/infrastructure/data-centre-services/cooling', name: 'Cooling' },
  { path: '/#/infrastructure/data-centre-services/power-ups', name: 'PowerUPS' },
  { path: '/#/about', name: 'About' },
  { path: '/#/contact', name: 'Contact' },
];

for (const route of ROUTES) {
  test(`${route.name} page loads without console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('requestfailed', (req) => {
      const errorText = req.failure()?.errorText ?? '';
      // Ignore ERR_ABORTED — these are normal when test closes before all chunks load
      if (errorText.includes('ERR_ABORTED')) return;
      errors.push(`Network: ${req.url()} — ${errorText}`);
    });

    await page.goto(route.path);
    await page.waitForLoadState('networkidle');

    // Wait for Suspense chunks to resolve
    await page.waitForTimeout(5000);

    // Page should have rendered actual content (not just fallback white screen)
    const text = await page.locator('body').innerText();
    expect(text.length).toBeGreaterThan(100);

    // No JS or network errors
    expect(errors, `Console/network errors on ${route.name}`).toEqual([]);
  });
}
