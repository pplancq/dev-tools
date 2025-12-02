import { RunCommandError } from '@/Error/RunCommandError';
import { runCommand } from '@/helpers/runCommand';
import { execFile } from 'node:child_process';
import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';

vi.mock('node:child_process', () => ({
  execFile: vi.fn(),
}));

vi.mock('node:process', () => ({
  platform: 'linux',
}));

describe('runCommand', () => {
  describe('on non-Windows platform', () => {
    it('should execute command successfully with shell option disabled', async () => {
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(null);
      });

      await runCommand('echo', ['Hello World']);

      expect(execFile).toHaveBeenCalledWith('echo', ['Hello World'], { shell: false }, expect.any(Function));
    });

    it('should execute command with options successfully and preserve shell option', async () => {
      const testOptions = { cwd: '/tmp' };
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(null);
      });

      await runCommand('echo', ['Hello World'], testOptions);

      expect(execFile).toHaveBeenCalledWith(
        'echo',
        ['Hello World'],
        { shell: false, cwd: '/tmp' },
        expect.any(Function),
      );
    });

    it('should allow user options to override shell option', async () => {
      const testOptions = { shell: true, cwd: '/tmp' };
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(null);
      });

      await runCommand('echo', ['Hello World'], testOptions);

      expect(execFile).toHaveBeenCalledWith(
        'echo',
        ['Hello World'],
        { shell: true, cwd: '/tmp' },
        expect.any(Function),
      );
    });
  });

  describe('on Windows platform', () => {
    beforeEach(() => {
      vi.resetModules();
      vi.doMock('node:process', () => ({
        platform: 'win32',
      }));
    });

    it('should execute command successfully with shell option enabled on Windows', async () => {
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(null);
      });

      const { runCommand: runCommandWin } = await import('@/helpers/runCommand');
      await runCommandWin('echo', ['Hello World']);

      expect(execFile).toHaveBeenCalledWith('echo', ['Hello World'], { shell: true }, expect.any(Function));
    });
  });

  describe('error handling', () => {
    it('should throw RunCommandError if command execution fails', async () => {
      const error = new Error('Command failed');
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(error);
      });

      await expect(runCommand('invalid-command', ['arg'])).rejects.toThrow(RunCommandError);
    });

    it('should throw RunCommandError with proper error message', async () => {
      const error = new Error('Command failed');
      (execFile as unknown as Mock).mockImplementation((command, args, options, callback) => {
        const cb = typeof options === 'function' ? options : callback;
        cb(error);
      });

      await expect(runCommand('my-cmd', ['arg1', 'arg2'])).rejects.toThrow('Failed to execute my-cmd arg1 arg2');
    });
  });
});
