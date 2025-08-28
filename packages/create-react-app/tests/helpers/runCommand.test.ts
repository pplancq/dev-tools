import { RunCommandError } from '@/Error/RunCommandError';
import { runCommand } from '@/helpers/runCommand';
import { execFile } from 'node:child_process';
import { describe, expect, it, type Mock, vi } from 'vitest';

vi.mock('node:child_process', () => ({
  execFile: vi.fn(),
}));

const mockProcessExit = vi.fn();

vi.stubGlobal('process', {
  ...process,
  exit: mockProcessExit,
});

describe('runCommand', () => {
  it('should execute command successfully', async () => {
    (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
      const cb = typeof options === 'function' ? options : callback;
      cb(null);
    });

    await runCommand('echo', ['Hello World']);

    expect(execFile).toHaveBeenCalledWith('echo', ['Hello World'], undefined, expect.any(Function));
  });

  it('should execute command with options successfully', async () => {
    const testOptions = { cwd: '/tmp' };
    (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
      const cb = typeof options === 'function' ? options : callback;
      cb(null);
    });

    await runCommand('echo', ['Hello World'], testOptions);

    expect(execFile).toHaveBeenCalledWith('echo', ['Hello World'], testOptions, expect.any(Function));
  });

  it('should throw an error if command is not valid', async () => {
    const error = new Error('Command failed');
    (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
      const cb = typeof options === 'function' ? options : callback;
      cb(error);
    });

    await expect(runCommand('invalid-command', ['arg'])).rejects.toThrow(RunCommandError);
  });
});
