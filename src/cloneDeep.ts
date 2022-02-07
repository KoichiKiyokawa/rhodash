/**
 * @param value value to clone
 * @returns cloned value
 * @example
 * ```
 * cloneDeep({ a: 0, b: [1, 2, 3] }) // => { a: 0, b: [1, 2, 3] }
 * ```
 */
export function cloneDeep<T>(value: T): T {
  if (!value) return value
  if (Array.isArray(value)) return value.map(cloneDeep) as unknown as T
  if (value instanceof Date) return new Date(value) as unknown as T
  if (value instanceof Map) {
    const copied = new Map()
    for (const [k, v] of value.entries()) copied.set(k, cloneDeep(v))
    return copied as unknown as T
  }
  if (value instanceof Set) {
    const copied = new Set()
    for (const [, v] of value.entries()) copied.add(cloneDeep(v))
    return copied as unknown as T
  }
  if (typeof value === 'object') {
    const copied = {} as T
    for (const key in value) copied[key] = cloneDeep(value[key])
    return copied
  }
  return value
}
