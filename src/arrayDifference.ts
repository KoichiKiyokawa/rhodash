/**
 * Create an array that contains values not included in the other given array, using `===` string equal.
 *
 * @param target target array
 * @param other other array
 * @returns an array that contains values not included in the other given array, using `===` string equal.
 * @example arrayDifference([1, 2, 3], [2, 3]) // => [1]
 */
export function arrayDifference<T>(target: readonly T[], other: readonly T[]): T[] {
  return target.filter((item) => !other.includes(item))
}
