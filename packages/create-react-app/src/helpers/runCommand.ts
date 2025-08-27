import { endProcess } from '@/helpers/endProcess';
import { log } from '@clack/prompts';
import type { ExecFileOptions } from 'child_process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export const runCommand = async (command: string, args: string[] = [], options?: ExecFileOptions) => {
  try {
    await execFileAsync(command, args, options);
  } catch {
    const commandStr = [command, ...args].join(' ');
    log.error(`Failed to execute ${commandStr}`);
    endProcess(true);
  }
};
