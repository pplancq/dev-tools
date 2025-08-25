import { test as base } from '@playwright/test';
import { createTestWithCoverageFixture } from '../utils/createTestWithCoverageFixture';

export const test = base.extend<{
  testWithCoverage: string;
}>({
  testWithCoverage: createTestWithCoverageFixture,
});

export const it = test;
export const { describe } = test;
