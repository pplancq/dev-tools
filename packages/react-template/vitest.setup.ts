/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom/vitest";
import { server } from "@Mocks/server";
import { cleanup } from "@testing-library/react";
import * as matchers from "vitest-axe/matchers";
import type { AxeMatchers } from "vitest-axe";

declare module "vitest" {
  // Mirrors vitest's Matchers<R, T> signature so the declaration merges; Assertion extends Matchers.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown> extends AxeMatchers {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}

expect.extend(matchers);

beforeAll(() => {
  server.listen({ onUnhandledFrame: "error" });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
