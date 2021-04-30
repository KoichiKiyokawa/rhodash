/**
 * @example
 * toRange(5) // [0, 1, 2, 3, 4, 5]
 * toRange(1, 5) // [1, 2, 3, 4, 5]
 * toRange(0, 10, 2) // [0, 2, 4, 6, 8, 10]
 */
export function toRange(start: number, end?: number, step = 1): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  const result = []
  for (let i = start; i <= end; i += step) result.push(i)
  return result
}
