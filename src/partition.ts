/**
 * @example partition([1, 2, 3, 4, 5], (x) => x % 2 === 0) // [[2, 4], [1, 3, 5]]
 */
export function partition<T>(array: readonly T[], predicate: (arg: T) => boolean): [T[], T[]] {
  const yesList = []
  const noList = []
  for (const item of array) {
    if (predicate(item)) yesList.push(item)
    else noList.push(item)
  }
  return [yesList, noList]
}
