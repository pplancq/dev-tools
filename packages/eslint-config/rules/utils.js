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
