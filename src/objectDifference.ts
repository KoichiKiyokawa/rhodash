import { arrayDifference } from './arrayDifference'

/**
 * @param before pivod object
 * @param after object created from before
 * @returns object that only contains changed key and value
 * @example objectDifference({ a: 1, b: 2 }, { a: 1, b: 200 }) // { b: 200 }
 */
export function objectDifference<T extends Record<string, unknown>>(
  before: T,
  after: T
): Partial<T> {
  const result = {} as Partial<T>
  for (const key in after) {
    if (Array.isArray(before[key])) {
      const diff = arrayDifference(before[key] as any[], after[key] as any[])
      if (diff.length > 0) result[key] = diff as T[Extract<keyof T, string>]
    } else if (typeof before[key] === 'object') {
      const diff = objectDifference(
        before[key] as Record<string, unknown>,
        after[key] as Record<string, unknown>
      )
      if (Object.keys(diff).length > 0) result[key] = diff as T[Extract<keyof T, string>]
    } else if (before[key] !== after[key]) result[key] = after[key]
  }
  return result
}
