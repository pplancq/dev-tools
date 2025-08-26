import { checkCancel } from '@/helpers/checkCancel';
import { isCancel } from '@clack/prompts';
import { describe, expect, it, type Mock, vi } from 'vitest';

vi.mock('@/helpers/endProcess', () => ({
  endProcess: vi.fn().mockImplementation(() => {
    throw new Error('End process called');
  }),
}));

describe('checkCancel', () => {
  it('should call cancelAndExit if the value is cancelled', () => {
    (isCancel as unknown as Mock).mockReturnValue(true);

    expect(() => checkCancel('cancelledValue')).toThrow('End process called');
    expect(isCancel).toHaveBeenCalledWith('cancelledValue');
  });

  it('should return the value if it is not cancelled', () => {
    (isCancel as unknown as Mock).mockReturnValue(false);

    const result = checkCancel('validValue');
    expect(result).toBe('validValue');
    expect(isCancel).toHaveBeenCalledWith('validValue');
  });
});
