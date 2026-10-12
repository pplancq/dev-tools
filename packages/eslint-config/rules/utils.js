/**
 * Renames the namespace of rule names (`from/rule` becomes `to/rule`).
 *
 * @param {Record<string, unknown>} rules
 * @param {string} from namespace used to write the rules
 * @param {string} to namespace the rules must be registered under
 */
export const prefix = (rules, from, to) => {
  if (from === to) {
    return rules;
  }

  return Object.fromEntries(
    Object.entries(rules).map(([name, value]) => [
      name.startsWith(`${from}/`) ? `${to}/${name.slice(from.length + 1)}` : name,
      value,
    ]),
  );
};

const LEGACY_SETTINGS_PREFIX = "import/";
const SETTINGS_PREFIX = "import-x/";

/**
 * eslint-plugin-import-x only reads the `import-x/*` settings, whatever the namespace its rules are registered under.
 * Copies the `import/*` settings of the given configs to `import-x/*` (the original keys are kept,
 * and an existing `import-x/*` setting always wins). The given configs are not mutated.
 *
 * @param {Array<import('eslint').Linter.Config>} configs
 * @returns {{ configs: Array<import('eslint').Linter.Config>, mapped: string[] }} the new configs and the mapped `import/*` setting names
 */
export const mapLegacyImportSettings = (configs) => {
  const mapped = new Set();

  const mappedConfigs = configs.map((config) => {
    if (!config || typeof config !== "object" || !config.settings || typeof config.settings !== "object") {
      return config;
    }

    const additions = Object.fromEntries(
      Object.entries(config.settings)
        .filter(([key]) => key.startsWith(LEGACY_SETTINGS_PREFIX))
        .map(([key, value]) => [`${SETTINGS_PREFIX}${key.slice(LEGACY_SETTINGS_PREFIX.length)}`, { key, value }])
        .filter(([newKey]) => !(newKey in config.settings)),
    );

    if (Object.keys(additions).length === 0) {
      return config;
    }

    Object.values(additions).forEach(({ key }) => mapped.add(key));

    return {
      ...config,
      settings: {
        ...config.settings,
        ...Object.fromEntries(Object.entries(additions).map(([newKey, { value }]) => [newKey, value])),
      },
    };
  });

  return { configs: mappedConfigs, mapped: [...mapped] };
};
