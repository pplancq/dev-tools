import type { NetworkFixture } from '@msw/playwright';
import { test as base } from '@playwright/test';
import { createNetworkFixture } from '../utils/createNetworkFixture';
import { createTestWithCoverageFixture } from '../utils/createTestWithCoverageFixture';

export const test = base.extend<{
  testWithCoverage: string;
  network: NetworkFixture;
}>({
  testWithCoverage: createTestWithCoverageFixture(),
  network: createNetworkFixture(),
});

export const it = test;
export const { describe } = test;
