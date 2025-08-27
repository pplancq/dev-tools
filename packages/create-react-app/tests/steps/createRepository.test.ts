import { runCommand } from '@/helpers/runCommand';
import { createRepository } from '@/steps/createRepository';
import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/helpers/runCommand', () => ({
  runCommand: vi.fn(),
}));

describe('createRepository', () => {
  const testDir = 'test-createRepository';
  const testPath = resolve(process.cwd(), testDir);

  afterEach(() => {
    if (existsSync(testPath)) {
      rmSync(testPath, { recursive: true, force: true });
    }
  });

  it('should create a new directory for the project', async () => {
    const { repoDir } = await createRepository(testDir);

    expect(repoDir).toStrictEqual(testPath);
    expect(existsSync(repoDir)).toBeTruthy();
  });

  it('should initialize a new npm project', async () => {
    await createRepository(testDir);

    expect(runCommand).toHaveBeenCalledWith('npm', ['init', '-y'], { cwd: testPath });
  });
});
