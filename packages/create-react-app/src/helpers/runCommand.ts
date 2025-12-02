import { RunCommandError } from '@/Error/RunCommandError';
import type { ExecFileOptions } from 'child_process';
import { execFile } from 'node:child_process';
import { platform } from 'node:process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export const runCommand = async (command: string, args: string[] = [], options?: ExecFileOptions) => {
  try {
    const execOptions: ExecFileOptions = {
      shell: platform === 'win32',
      ...options,
    };
    await execFileAsync(command, args, execOptions);
  } catch {
    const commandStr = [command, ...args].join(' ');
    throw new RunCommandError(`Failed to execute ${commandStr}`);
  }
};
