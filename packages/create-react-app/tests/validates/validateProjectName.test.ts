import { validateProjectName } from '@/validates/validateProjectName';
import { describe, expect, it } from 'vitest';

const validNames = [
  'myproject',
  'my-project',
  'my.project',
  'my_project',
  'my~project',
  '123project',
  '@scope/myproject',
  '@scope/my-project',
  '@scope/my.project',
  '@scope/my_project',
  '@scope/my~project',
  '@scope/123project',
];

describe('validateProjectName', () => {
  it('should return empty string for valid project names', () => {
    validNames.forEach(name => {
      expect(validateProjectName(name)).toStrictEqual('');
    });
  });

  it('should return error for invalid project names', () => {
    const invalidNames = [
      '',
      'MyProject',
      'my project',
      'my@project',
      'my#project',
      'my/project',
      '@scope/',
      '@scope',
      '@scope//name',
      '@scope/my project',
      null,
      undefined,
      123,
      {},
      [],
    ];
    invalidNames.forEach(name => {
      expect(validateProjectName(name)).toMatch(/not valid/);
    });
  });

  it('should return error message containing the invalid value', () => {
    expect(validateProjectName('my project')).toContain("'my project'");
    expect(validateProjectName('@scope/')).toContain("'@scope/'");
  });
});
