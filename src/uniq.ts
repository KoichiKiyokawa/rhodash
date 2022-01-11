/**
 * Create an array with duplicate elements removed.
 *
 * @example uniq([1, 2, 1, 1, 2, 3, 4]) // => [1, 2, 3, 4]
 */
export function uniq<T>(array: readonly T[]): T[] {
  return [...new Set(array)]
}
