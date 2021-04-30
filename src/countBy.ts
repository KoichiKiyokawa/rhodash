export function countBy<T>(array: readonly T[], predicate: (arg: T) => boolean): number {
  let count = 0
  for (const item of array) {
    if (predicate(item)) count += 1
  }
  return count
}
