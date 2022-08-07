import { ObjectOrClassInstance } from './types/object-or-class-instance'

/**
 * Create an object without the given properties.
 *
 * @example omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // => { c: 3 }
 */
export function omit<T extends ObjectOrClassInstance, K extends keyof T>( // use object instead of Record for instantiated class
  object: T,
  keys: readonly K[]
): Omit<T, K> {
  const result = {} as Record<string, unknown>
  for (const key in object) {
    if (!keys.includes(key as unknown as K)) {
      result[key as string] = object[key]
    }
  }
  return result as Omit<T, K>
}
