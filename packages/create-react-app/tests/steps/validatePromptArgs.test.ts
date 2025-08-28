import { InvalidProjectNameError } from '@/Error/InvalidProjectNameError';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { existsSync } from 'node:fs';
import { describe, expect, it, type Mock, vi } from 'vitest';

vi.mock('@/helpers/endProcess', () => ({
  endProcess: vi.fn(),
}));

vi.mock('node:fs', () => ({
  existsSync: vi.fn(),
}));

describe('validatePromptArgs', () => {
  it('should do nothing if projectName is undefined', () => {
    expect(() => validatePromptArgs({})).not.toThrow(InvalidProjectNameError);
  });

  it('should do nothing if projectName is valid', () => {
    expect(() => validatePromptArgs({ projectName: 'valid-name' })).not.toThrow(InvalidProjectNameError);
  });

  it('should do nothing if projectName is valid and if directory does not exist', () => {
    (existsSync as Mock).mockReturnValueOnce(false);
    expect(() => validatePromptArgs({ projectName: 'valid-name' })).not.toThrow(InvalidProjectNameError);
  });

  it('should throw an error if projectName is invalid', () => {
    expect(() => validatePromptArgs({ projectName: '@invalid-name' })).toThrow(InvalidProjectNameError);
  });

  it('should throw an error if directory exists', () => {
    (existsSync as Mock).mockReturnValueOnce(true);
    expect(() => validatePromptArgs({ projectName: 'valid-name' })).toThrow(InvalidProjectNameError);
  });
});
