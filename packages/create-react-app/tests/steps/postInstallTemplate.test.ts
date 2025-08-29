import { RunCommandError } from '@/Error/RunCommandError';
import { runCommand } from '@/helpers/runCommand';
import { postInstallTemplate } from '@/steps/postInstallTemplate';
import { log, spinner } from '@clack/prompts';
import { resolve } from 'node:path';
import { describe, expect, it, type Mock, vi } from 'vitest';

vi.mock('@/helpers/runCommand', () => ({ runCommand: vi.fn() }));

describe('postInstallTemplate', () => {
  const projectName = 'test-project';
  const repoDir = resolve(process.cwd(), 'test-postInstallTemplate');

  it('should run npx template-install with correct args', async () => {
    (runCommand as unknown as Mock).mockResolvedValue(undefined);

    await postInstallTemplate(projectName, repoDir);

    expect(runCommand).toHaveBeenCalledWith('npx', ['template-install', projectName], { cwd: repoDir });

    const spinnerInstance = (spinner as unknown as Mock).mock.results[0].value;
    expect(spinnerInstance.start).toHaveBeenCalledWith('Running post install template script...');
    expect(spinnerInstance.stop).toHaveBeenCalledWith('Post install template script finished.');
  });

  it('should log error and return when RunCommandError is thrown', async () => {
    (runCommand as unknown as Mock).mockRejectedValueOnce(new RunCommandError('failed'));

    await postInstallTemplate(projectName, repoDir);

    const spinnerInstance = (spinner as unknown as Mock).mock.results[0].value;
    expect(spinnerInstance.stop).toHaveBeenCalledWith('Failed to run post install template script.');
    expect(log.error).toHaveBeenCalledWith('Failed to run template-install command');
  });

  it('should rethrow non-RunCommandError errors', async () => {
    (runCommand as unknown as Mock).mockRejectedValueOnce(new Error('boom'));

    await expect(postInstallTemplate(projectName, repoDir)).rejects.toThrow(Error);

    const spinnerInstance = (spinner as unknown as Mock).mock.results[0].value;
    expect(spinnerInstance.stop).toHaveBeenCalledWith('Failed to run post install template script.');
  });
});
