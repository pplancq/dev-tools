import { expect } from '@playwright/test';
import { describe, it } from './utils/playwright.testWithCoverage';

describe('Demo Test', () => {
  it('should have a title', async ({ page }) => {
    await page.goto('/');
    const title = page.getByText('WELCOME TO YOUR REACT STARTER KIT');
    await expect(title).toBeVisible();
  });
});
