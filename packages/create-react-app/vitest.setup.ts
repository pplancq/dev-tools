import { vi } from 'vitest';

process.env.NO_COLOR = 'true';

vi.mock('@clack/prompts', () => ({
  cancel: vi.fn(),
  isCancel: vi.fn(),
  text: vi.fn(),
  outro: vi.fn(),
  log: {
    error: vi.fn(),
  },
}));
