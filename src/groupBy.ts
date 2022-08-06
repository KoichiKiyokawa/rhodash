/**
 * Create an object consisting of keys created by applying predicate to the given array.
 *
 * @example
 * groupBy([1, 2, 3, 4, 5], (x) => x % 2) // => { 0: [2, 4], 1: [1, 3, 5] }
 */
export function groupBy<T, K extends string | number | symbol>(
  array: readonly T[],
  predicate: (arg: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>
  for (const item of array) {
    const key = predicate(item)
    if (result[key] === undefined) result[key] = [item]
    else result[key].push(item)
  }
  return result
}
