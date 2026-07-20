import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { describe, expect, it } from 'vitest';
import setupGenerator from '@/generators/setup/generator';

describe('setupGenerator', () => {
  it('should create nx.json when it does not exist', async () => {
    const tree = createTreeWithEmptyWorkspace();

    await setupGenerator(tree, { preset: 'simple', projects: '.' });

    expect(tree.exists('nx.json')).toBe(true);
    const nxJson = JSON.parse(tree.read('nx.json')!.toString());
    expect(nxJson.release.projects).toEqual(['.']);
    expect(nxJson.release.projectsRelationship).toBe('fixed');
    expect(nxJson.analytics).toBe(false);
  });

  it('should deep merge release config into existing nx.json', async () => {
    const tree = createTreeWithEmptyWorkspace();
    tree.write('nx.json', JSON.stringify({ targetDefaults: { build: { cache: true } } }));

    await setupGenerator(tree, { preset: 'monorepo-fixed', projects: 'packages/*' });

    const nxJson = JSON.parse(tree.read('nx.json')!.toString());
    expect(nxJson.targetDefaults.build.cache).toBe(true);
    expect(nxJson.release.projects).toEqual(['packages/*']);
    expect(nxJson.release.projectsRelationship).toBe('fixed');
  });

  it('should remove legacy plugin extends entry', async () => {
    const tree = createTreeWithEmptyWorkspace();
    tree.write(
      'nx.json',
      JSON.stringify({
        extends: '@pplancq/nx-release-plugin/presets/monorepo-independent',
      }),
    );

    await setupGenerator(tree, { preset: 'monorepo-independent', projects: 'packages/*' });

    const nxJson = JSON.parse(tree.read('nx.json')!.toString());
    expect(nxJson.extends).toBeUndefined();
    expect(nxJson.release.projectsRelationship).toBe('independent');
  });
});
