/**
 * Return a Promise to be resolved in the given millisecond.
 *
 * @example await delay(1000) // wait 1000ms
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
