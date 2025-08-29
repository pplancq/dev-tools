import { validateTemplateName } from '@/validates/validateTemplateName';
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
  'my-project@latest',
  '@scope/my-project@1.0.0',
];

describe('validateTemplateName', () => {
  it('should return empty string for valid template names', () => {
    validNames.forEach(name => {
      expect(validateTemplateName(name)).toStrictEqual('');
    });
  });

  it('should return error for invalid template names', () => {
    const invalidNames = [
      '',
      'MyProject',
      'my project',
      'my#project',
      'my/project',
      '@scope/',
      '@scope',
      '@scope//name',
      '@scope/my project',
      'my-project@',
      null,
      undefined,
      123,
      {},
      [],
    ];
    invalidNames.forEach(name => {
      expect(validateTemplateName(name)).toMatch(/not valid/);
    });
  });

  it('should return error message containing the invalid value', () => {
    expect(validateTemplateName('my project')).toContain("'my project'");
    expect(validateTemplateName('@scope/')).toContain("'@scope/'");
  });
});
