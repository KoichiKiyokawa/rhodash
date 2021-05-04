/**
 * @example
 * const users = [
 *    { age: 1, name: 'user1' },
 *    { age: 2, name: 'user2' },
 *    { age: 3, name: 'user3' },
 * ]
 * sumBy(users, user => user.age) // 6
 * sumBy(users, 'age') // 6
 */
export function sumBy<T extends Record<string, unknown>>(
  array: readonly T[],
  predicate: ((arg: T) => number) | { [K in keyof T]: T[K] extends number ? K : never }[keyof T]
): number {
  let result = 0
  const getter: (arg: T) => number =
    typeof predicate === 'function' ? predicate : (x: T) => x[predicate] as number
  for (const item of array) {
    result += getter(item) || 0
  }
  return result
}
