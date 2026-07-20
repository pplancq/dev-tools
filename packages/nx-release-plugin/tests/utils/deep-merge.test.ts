import { describe, expect, it } from 'vitest';
import { deepMerge } from '@/utils/deep-merge';

describe('deepMerge', () => {
  it('should return a shallow copy of the target when source is empty', () => {
    const target = { a: 1 };

    const result = deepMerge(target, {});

    expect(result).toEqual({ a: 1 });
    expect(result).not.toBe(target);
  });

  it('should override primitive values', () => {
    const result = deepMerge({ a: 1 }, { a: 2 });

    expect(result).toEqual({ a: 2 });
  });

  it('should deeply merge nested objects', () => {
    const result = deepMerge(
      { release: { version: { conventionalCommits: true } } },
      { release: { version: { versionPrefix: 'auto' } } },
    );

    expect(result).toEqual({
      release: {
        version: {
          conventionalCommits: true,
          versionPrefix: 'auto',
        },
      },
    });
  });

  it('should replace arrays instead of merging them', () => {
    const result = deepMerge({ projects: ['a'] }, { projects: ['b', 'c'] });

    expect(result).toEqual({ projects: ['b', 'c'] });
  });
});
