import { runCommand } from '@/helpers/runCommand';
import { initializeGit } from '@/steps/initializeGit';
import { describe, expect, it, vi } from 'vitest';

const testPath = 'test-initializeGit';

vi.mock('@/helpers/runCommand', () => ({
  runCommand: vi.fn(),
}));

describe('initializeGit', () => {
  it('should initialize a git repository in the specified directory when skipGitInit is false', async () => {
    await initializeGit(testPath, false);

    expect(runCommand).toHaveBeenCalledWith('git', ['init', '--initial-branch=main'], { cwd: testPath });
  });

  it('should not initialize a git repository when skipGitInit is true', async () => {
    await initializeGit(testPath, true);

    expect(runCommand).not.toHaveBeenCalled();
  });
});
