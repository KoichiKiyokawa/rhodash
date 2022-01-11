import { ObjectOrClassInstance } from './types/object-or-class-instance'

/**
 * Create an object with only the properties that match the conditions.
 *
 * @example pickBy({ a: 1, b: null, c: undefined, d: 'foo' }) // => { a: 1, d: 'foo' }
 * @example pickBy({ a: 1, b: 2, c: 3, d: 4 }, (num) => num % 2 === 0) // => { b: 2, d: 4 }
 */
export function pickBy<T extends ObjectOrClassInstance, K extends keyof T>(
  obj: T,
  predicate: (arg: T[K]) => boolean = Boolean
): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key in obj) {
    if (predicate(obj[key as unknown as K])) (result as Record<string, unknown>)[key] = obj[key]
  }
  return result
}
