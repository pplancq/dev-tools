import { endProcess } from '@/helpers/endProcess';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('endProcess', () => {
  beforeEach(() => {
    vi.spyOn(process, 'exit').mockImplementation(code => {
      throw new Error(`process.exit called with code: ${code}`);
    });
  });

  it.each([[false], [undefined]])('should exit with code 0 when error is %s', error => {
    expect(() => endProcess(error)).toThrow('process.exit called with code: 0');
  });

  it('should exit with code 1 when error is true', () => {
    expect(() => endProcess(true)).toThrow('process.exit called with code: 1');
  });
});
