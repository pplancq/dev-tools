import { runCommand } from '@/helpers/runCommand';
import { installTemplate } from '@/steps/installTemplate';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';

const testTemplate = 'test-template';
const testPath = resolve(process.cwd(), 'test-installTemplate');

vi.mock('@/helpers/runCommand', () => ({
  runCommand: vi.fn().mockImplementation(() => {
    mkdirSync(`${testPath}/node_modules/${testTemplate}`, { recursive: true });
    writeFileSync(
      resolve(`${testPath}/node_modules/${testTemplate}`, 'package.json'),
      JSON.stringify({ name: 'test-package' }, null, 2),
      { encoding: 'utf-8' },
    );
    writeFileSync(resolve(testPath, 'package-lock.json'), JSON.stringify({ name: 'test-package-lock' }, null, 2), {
      encoding: 'utf-8',
    });
  }),
}));

describe('installTemplate', () => {
  afterEach(() => {
    if (existsSync(testPath)) {
      rmSync(testPath, { recursive: true, force: true });
    }
  });

  it('should call npm install with the correct template and directory', async () => {
    await installTemplate(testPath, testTemplate);

    expect(runCommand).toHaveBeenCalledWith('npm', ['install', testTemplate], { cwd: testPath });
  });

  it('should copy the template and remove package-lock.json', async () => {
    await installTemplate(testPath, testTemplate);

    expect(existsSync(`${testPath}/package.json`)).toBeTruthy();
    expect(existsSync(`${testPath}/package-lock.json`)).toBeFalsy();
  });
});
