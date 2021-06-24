/**
 * @example omit({ a: 1, b: 2, c: 3 }, ["a", "b"]) // { c: 3 }
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Omit<T, K> {
  const result = {} as Record<string, unknown>
  for (const key in object) {
    if (!keys.includes(key as unknown as K)) {
      result[key as string] = object[key]
    }
  }
  return result as Omit<T, K>
}
