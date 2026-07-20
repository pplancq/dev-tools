import { formatFiles, readJsonFile, Tree, updateJson } from '@nx/devkit';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deepMerge } from '../../utils/deep-merge';
import type { SetupGeneratorSchema } from './schema';

const PRESET_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'presets');

const parseProjects = (projects: string): string[] =>
  projects
    .split(',')
    .map(project => project.trim())
    .filter(Boolean);

const buildReleaseConfig = (options: SetupGeneratorSchema) => {
  const base = readJsonFile(resolve(PRESET_DIR, 'base.json'));
  const preset = readJsonFile(resolve(PRESET_DIR, `${options.preset}.json`));
  const merged = deepMerge(base, preset);

  return deepMerge(merged, {
    release: {
      projects: parseProjects(options.projects),
    },
  });
};

const withoutPluginExtends = (nxJson: Record<string, unknown>): Record<string, unknown> => {
  const extendedConfig = nxJson.extends;
  const shouldRemove =
    typeof extendedConfig === 'string' &&
    (extendedConfig.startsWith('@pplancq/nx-release-plugin/presets/') ||
      extendedConfig.startsWith('@pplancq/nx-release-config/presets/'));

  if (!shouldRemove) {
    return nxJson;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { extends: removed, ...rest } = nxJson;
  return rest;
};

// eslint-disable-next-line import/no-default-export
export default async function setupGenerator(tree: Tree, options: SetupGeneratorSchema) {
  const releaseConfig = buildReleaseConfig(options);

  if (tree.exists('nx.json')) {
    updateJson(tree, 'nx.json', nxJson => {
      const cleanedNxJson = withoutPluginExtends(nxJson);
      return deepMerge(cleanedNxJson, releaseConfig);
    });
  } else {
    tree.write('nx.json', JSON.stringify(releaseConfig, null, 2));
  }

  await formatFiles(tree);
}
