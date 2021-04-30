/**
 * @example
 * uniqBy([
 *   { id: 1, name: 'user1' },
 *   { id: 1, name: 'user2' },
 *   { id: 2, name: 'user3' },
 * ])
 * // [{ id: 1, name: 'user1' }, { id: 2, name: 'user3' }]
 */
export function uniqBy<T, K>(array: readonly T[], predicate: (arg: T) => K): T[] {
  const addedKeySet = new Set<K>()
  const result = []
  for (const item of array) {
    const key = predicate(item)
    if (addedKeySet.has(key)) continue

    result.push(item)
    addedKeySet.add(key)
  }
  return result
}
