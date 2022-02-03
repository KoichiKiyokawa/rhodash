/**
 * Create an array of sequential numbers without end values.
 *
 * @example
 * range(5) // => [0, 1, 2, 3, 4]
 * range(1, 5) // => [1, 2, 3, 4]
 * range(0, 10, 2) // => [0, 2, 4, 6, 8]
 */
export function range(start: number, end?: number, step?: number): number[] {
  // to avoid infinite loop, when { strict: false } and passing invalid arguments
  if (typeof start !== 'number') throw Error('start must be a number')
  if (typeof end !== 'undefined' && typeof end !== 'number') throw Error('end must be a number')
  if (typeof step !== 'undefined' && typeof step !== 'number') throw Error('step must be a number')
  if (step === 0) throw Error('step cannot be zero')

  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === undefined) step = start < end ? 1 : -1

  const result = []
  for (let i = start; start < end ? i < end : i > end; i += step) result.push(i)
  return result
}
