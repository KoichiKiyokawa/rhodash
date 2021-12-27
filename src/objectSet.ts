/**
 * Sets the value at path of object.
 * @param obj the object to modify
 * @param path e.g. 'a.b.c[0]'
 * @param value the value to assign
 * @returns modified object
 * @example
 * objectSet({}, 'a.b.c[0]', 1) // => { a: { b: { c: [1] } } }
 * objectSet({}, 'a.b.c.0', 1) // => { a: { b: { c: [1] } } }
 */
export function objectSet<T>(obj: any, path: string, value: unknown): T {
  const keys = path.split(/\[|\]|\./).filter(Boolean)
  let current = obj
  for (let i = 0; i < keys.length; i++) {
    const key = isEmptyQuote(keys[i]) ? '' : keys[i]
    if (i !== keys.length - 1) {
      current = current[key] ??= isNumberString(keys[i + 1]) ? [] : {}
    } else {
      current[key] = value
    }
  }
  return obj as T
}

function isNumberString(str: string): boolean {
  return /^\d+$/.test(str)
}

function isEmptyQuote(str: string): boolean {
  return str === '""' || str === "''"
}
