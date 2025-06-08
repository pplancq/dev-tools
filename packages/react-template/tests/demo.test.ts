import { expect, test as it, test } from '@playwright/test';

test.describe('Demo Test', () => {
  it('should have a title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBe('React App');
  });
});
