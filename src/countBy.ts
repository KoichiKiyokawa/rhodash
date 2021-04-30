/**
 * @example countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0) // 2
 */
export function countBy<T>(array: readonly T[], predicate: (arg: T) => boolean): number {
  let count = 0
  for (const item of array) {
    if (predicate(item)) count += 1
  }
  return count
}
