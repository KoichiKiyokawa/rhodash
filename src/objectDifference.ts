import { ObjectOrClassInstance } from '../types/object-or-class-instance'

/**
 * create an object that contains keys not included in the other given object, using `===` string equal.
 * Be careful, not support for nested objects.
 *
 * @param target target object
 * @param other other object
 * @returns object that contains keys not included in the other given object.
 * @example objectDifference({ a: 1, b: 2 }, { a: 1, b: 0 }) // { b: 2 }
 */
export function objectDifference<T extends ObjectOrClassInstance>(target: T, other: T): Partial<T> {
  const result = {} as Partial<T>
  for (const key in target) {
    if (target[key] !== other[key]) result[key] = target[key]
  }
  return result
}
