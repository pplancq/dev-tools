import { runCommand } from '@/helpers/runCommand';
import { installPackage } from '@/steps/installPackage';
import { describe, expect, it, vi } from 'vitest';

const testPath = 'test-installPackage';

vi.mock('@/helpers/runCommand', () => ({
  runCommand: vi.fn(),
}));

describe('installPackage', () => {
  it('should install package in the specified directory when skipDepInstall is false', async () => {
    await installPackage(testPath, false);

    expect(runCommand).toHaveBeenCalledWith('npm', ['install'], { cwd: testPath });
  });

  it('should not install package when skipDepInstall is true', async () => {
    await installPackage(testPath, true);

    expect(runCommand).not.toHaveBeenCalled();
  });
});
