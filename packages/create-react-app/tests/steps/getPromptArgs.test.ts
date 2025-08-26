import { getPromptArgs } from '@/steps/getPromptArgs';
import process from 'node:process';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import packageJson from '../../package.json';

describe('processArgv', () => {
  let originalArgv: string[];
  const mockLog = vi.fn();

  beforeEach(() => {
    originalArgv = process.argv;

    vi.spyOn(process, 'exit').mockImplementation(code => {
      throw new Error(`process.exit called with code: ${code}`);
    });

    vi.spyOn(process.stdout, 'write').mockImplementation(mockLog);
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  it('should return the project name when a project name argument is provided', () => {
    process.argv = ['node', 'script.js', 'my-awesome-project'];

    const result = getPromptArgs();

    expect(result).toStrictEqual({ projectName: 'my-awesome-project' });
  });

  it('should return an empty object when no project name argument is provided', () => {
    process.argv = ['node', 'script.js'];

    const result = getPromptArgs();

    expect(result).toStrictEqual({});
  });

  it.each([{ arg: '--version' }, { arg: '-v' }])('should print version when $arg flag is provided', ({ arg }) => {
    process.argv = ['node', 'script.js', arg];

    expect(() => getPromptArgs()).toThrow('process.exit called with code: 0');
    expect(mockLog).toHaveBeenCalledWith(expect.stringContaining(packageJson.version));
  });

  it.each([{ arg: '--help' }, { arg: '-h' }])(
    'should print Exemples in help instructions when $arg flag is provided',
    ({ arg }) => {
      process.argv = ['node', 'script.js', arg];

      expect(() => getPromptArgs()).toThrow('process.exit called with code: 0');
      expect(mockLog).toHaveBeenCalledWith(
        expect.stringContaining(`Examples:
  $ npm create @pplancq/react-app my-project
  $ npx @pplancq/create-react-app my-project`),
      );
    },
  );
});
