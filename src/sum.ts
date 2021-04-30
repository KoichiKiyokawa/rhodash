/**
 * @example sum([1, 2, 3]) // 6
 */
export function sum(numbers: number[]): number {
  let result = 0
  for (const num of numbers) result += num
  return result
}
