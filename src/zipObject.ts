/**
 * Creates an Object from array of keys and array of values
 * @example zipObject(['a', 'b'], [1, 2]) // { a: 1, b: 2 }
 */
export function zipObject<K extends string | number | symbol, V>(
  keys: readonly K[],
  values: readonly V[]
): Record<K, V> {
  const result = {} as Record<K, V>
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i]
  }
  return result
}
