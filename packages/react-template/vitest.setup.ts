/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest';
import { server } from '@Mocks/server';
import { cleanup } from '@testing-library/react';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
