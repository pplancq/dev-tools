import { getUsers200 } from '@Mocks/handlers/userHandlers';
import { expect } from '@playwright/test';
import { describe, it } from './fixture/playwright.fixture';

describe('Demo Test', () => {
  it('should have a title', async ({ page }) => {
    await page.goto('/');
    const title = page.getByText('WELCOME TO YOUR REACT STARTER KIT');
    await expect(title).toBeVisible();
  });

  it('should data fetching', async ({ page, network }) => {
    network.use(getUsers200);
    await page.goto('/react-query');
    await expect(page.getByText('Demo user')).toBeVisible();
  });
});
