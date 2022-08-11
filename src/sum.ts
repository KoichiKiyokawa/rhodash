/**
 * Add up the given array of numbers.
 *
 * @example
 * sum([1, 2, 3]) // => 6
 * sum([]) // => 0
 */
export function sum(numbers: readonly number[]): number {
  let result = 0
  for (const num of numbers) result += num
  return result
}
