/**
 * @example last([1, 2, 3]) // 3
 */
export function last<T>(array: readonly T[]): T {
  return array[array.length - 1]
}
