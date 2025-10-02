#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;
const projectRoot = resolve(__dirname, '..');

export const runCommand = (command, args = []) => {
  try {
    execFileSync(command, args, { stdio: 'inherit' });
  } catch {}
};

if (existsSync(`${projectRoot}/node_modules/.bin`)) {
  renameSync(`${projectRoot}/node_modules/.bin`, `${projectRoot}/node_modules/.binTemp`);
}

runCommand('npm', ['exec', '--yes', 'package-lock-utd@1.1.3']);

if (existsSync(`${projectRoot}/node_modules/.binTemp`)) {
  renameSync(`${projectRoot}/node_modules/.binTemp`, `${projectRoot}/node_modules/.bin`);
}
