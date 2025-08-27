import { runCommand } from '@/helpers/runCommand';
import { gitCommit } from '@/steps/gitCommit';
import { describe, expect, it, vi } from 'vitest';

const testPath = 'test-gitCommit';

vi.mock('@/helpers/runCommand', () => ({
  runCommand: vi.fn(),
}));

describe('gitCommit', () => {
  it('should git commit in the specified directory when skipGitInit is false', async () => {
    await gitCommit(testPath, false);

    expect(runCommand).toHaveBeenCalledWith('git', ['add', '.'], { cwd: testPath });
    expect(runCommand).toHaveBeenCalledWith('git', ['commit', '--no-verify', '--message', 'Initial commit'], {
      cwd: testPath,
    });
  });

  it('should not git commit when skipGitInit is true', async () => {
    await gitCommit(testPath, true);

    expect(runCommand).not.toHaveBeenCalled();
  });
});
