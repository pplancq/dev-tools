const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const deepMerge = <T extends Record<string, unknown>>(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): T => {
  const output = { ...target };

  Object.entries(source).forEach(([key, sourceValue]) => {
    const targetValue = output[key];

    if (isObject(sourceValue) && isObject(targetValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
      return;
    }

    output[key] = sourceValue;
  });

  return output as T;
};
