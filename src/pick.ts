export function pick<T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = object[key];
  }
  return result;
}
