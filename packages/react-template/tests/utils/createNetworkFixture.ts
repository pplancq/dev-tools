import { defineNetworkFixture, type NetworkFixture } from '@msw/playwright';
import type { PlaywrightTestArgs, PlaywrightWorkerArgs, TestFixture } from '@playwright/test';

export const createNetworkFixture = (): [
  TestFixture<NetworkFixture, PlaywrightTestArgs & PlaywrightWorkerArgs>,
  { auto: true },
] => [
  async ({ context }, use) => {
    const network = defineNetworkFixture({
      context,
    });

    await network.enable();
    await use(network);
    await network.disable();
  },
  { auto: true },
];
