import { runCommand } from '@/helpers/runCommand';
import { spinner } from '@clack/prompts';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import pc from 'picocolors';

export const createRepository = async (projectName: string) => {
  const spinnerInstance = spinner();
  const repoDir = resolve(process.cwd(), projectName);

  spinnerInstance.start(`Creating a React App in ${pc.green(repoDir)}.`);

  mkdirSync(repoDir);
  await runCommand('npm', ['init', '-y'], { cwd: repoDir });

  spinnerInstance.stop(`React App created in ${pc.green(repoDir)}.`);

  return { repoDir };
};
