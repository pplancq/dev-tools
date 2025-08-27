import { runCommand } from '@/helpers/runCommand';
import { log } from '@clack/prompts';
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

  it('should handle command execution error', async () => {
    const error = new Error('Command failed');
    (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
      const cb = typeof options === 'function' ? options : callback;
      cb(error);
    });

    await runCommand('invalid-command', ['arg']);

    expect(log.error).toHaveBeenCalledWith('Failed to execute invalid-command arg');
    expect(mockProcessExit).toHaveBeenCalledWith(1);
  });
});
