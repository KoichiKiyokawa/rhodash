/**
 * Create an array of sequential numbers without end values.
 *
 * @example
 * range(5) // => [0, 1, 2, 3, 4]
 * range(1, 5) // => [1, 2, 3, 4]
 * range(0, 10, 2) // => [0, 2, 4, 6, 8]
 */
export function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === 0) return Array(Math.abs(end - start)).fill(start)

  step ??= start < end ? 1 : -1

  const result = []
  for (let i = start; start < end ? i < end : i > end; i += step) result.push(i)
  return result
}
