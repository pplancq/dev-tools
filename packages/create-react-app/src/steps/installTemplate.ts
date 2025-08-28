import { runCommand } from '@/helpers/runCommand';
import { spinner } from '@clack/prompts';
import { cpSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import pc from 'picocolors';

export const installTemplate = async (repoDir: string, reactTemplate: string) => {
  const spinnerInstance = spinner();
  const templateDir = resolve(repoDir, `node_modules/${reactTemplate}`);

  spinnerInstance.start(
    `Installing react template from ${pc.green(reactTemplate)}. This might take a couple of minutes.`,
  );

  await runCommand('npm', ['install', reactTemplate, '--install-strategy=nested'], { cwd: repoDir });
  cpSync(templateDir, repoDir, { recursive: true, dereference: true });
  rmSync(`${repoDir}/package-lock.json`);
  rmSync(`${repoDir}/node_modules`, { recursive: true });

  spinnerInstance.stop('React template installed.');
};
