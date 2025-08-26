import { endProcess } from '@/helpers/endProcess';
import { validatePromptArgs } from '@/steps/validatePromptArgs';
import { log, outro } from '@clack/prompts';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/helpers/endProcess', () => ({
  endProcess: vi.fn(),
}));

describe('validatePromptArgs', () => {
  it('should do nothing if projectName is undefined', () => {
    validatePromptArgs({});
    expect(log.error).not.toHaveBeenCalled();
    expect(outro).not.toHaveBeenCalled();
    expect(endProcess).not.toHaveBeenCalled();
  });

  it('should do nothing if projectName is valid', () => {
    validatePromptArgs({ projectName: 'valid-name' });
    expect(log.error).not.toHaveBeenCalled();
    expect(outro).not.toHaveBeenCalled();
    expect(endProcess).not.toHaveBeenCalled();
  });

  it('should log error, call outro and endProcess if projectName is invalid', () => {
    validatePromptArgs({ projectName: '@invalid-name' });
    expect(log.error).toHaveBeenCalledWith(expect.stringContaining('@invalid-name'));
    expect(outro).toHaveBeenCalledWith('Please check and try again.');
    expect(endProcess).toHaveBeenCalledWith(true);
  });
});
