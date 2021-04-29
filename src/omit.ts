export function omit<T, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Omit<T, K> {
  const result = {} as Record<string, unknown>;
  for (const key in object) {
    if (!keys.includes((key as unknown) as K)) {
      result[key as string] = object[key];
    }
  }
  return result as Omit<T, K>;
}
