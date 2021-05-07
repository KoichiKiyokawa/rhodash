/**
 * For a given sequence, divide it into chunks of a given size and group them into arrays.
 * @param array array you want to make chunk
 * @param size chunk size
 * @returns chunked array
 * @example chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 */
export function chunk<T>(array: readonly T[], size: number): T[][] {
  if (size <= 0) return [[]]

  const result = [] as T[][]
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) result.push([array[i]])
    else result[result.length - 1].push(array[i])
  }
  return result
}
