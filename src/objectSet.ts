/**
 * Sets the value at path of object.
 *
 * @param obj the object to modify
 * @param path e.g. 'a.b.c[0]'
 * @param value the value to assign
 * @returns modified object
 * @example
 * objectSet({}, 'a.b.c[0]', 1) // => { a: { b: { c: [1] } } }
 * objectSet({}, 'a.b.c.0', 1) // => { a: { b: { c: [1] } } }
 * // Merge objects
 * objectSet({ a: 1 }, 'a.b', 2) // => { a: { b: 2 } }
 * // Use generics
 * objectSet<{ a: number }, { a: { b: number } }>({ a: 1 }, 'a.b', 2)
 */
export function objectSet<T = any, R = any>(obj: T, path: string, value: unknown): R {
  const keys = path.split(/\[|\]|\./).filter(Boolean)
  let current: any = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = normalizeKey(keys[i])
    // `!isObjectOrArrayLike(current[key])` is to merge objects like: objectSet({ a: 1 }, 'a.b', 2) eq { a: { b: 2 } }
    if (current[key] === undefined || !isObjectOrArrayLike(current[key])) {
      current[key] = isNumberString(keys[i + 1]) ? [] : {}
    }
    current = current[key]
  }

  const lastKey = normalizeKey(keys[keys.length - 1])
  if (lastKey !== undefined) current[lastKey] = value

  return obj as unknown as R
}

function isNumberString(str: string): boolean {
  return /^\d+$/.test(str)
}

function normalizeKey(key: string): string {
  return key === '""' || key === "''" ? '' : key
}

function isObjectOrArrayLike(obj: unknown): boolean {
  return obj !== null && typeof obj === 'object'
}
