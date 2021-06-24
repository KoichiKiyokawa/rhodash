import { toRange } from '../src'

/**
 * generate following type definition
 * ```
 * export function zip<T1, T2>(array1: T1, array2: T2): (T1 | T2)[][]
 * export function zip<T1, T2, T3>(array1: T1, array2: T2, array3: T3): (T1 | T2 | T3)[][]
 * ...
 * ```
 */
function main() {
  const MAX = 10
  const result = toRange(2, MAX).map(generate).join('\n')
  console.log(result)
}

function generate(length: number): string {
  const range = toRange(1, length)
  const genericsStr = range.map((n) => `T${n}`).join(', ')
  const argsStr = range.map((n) => `array${n}: readonly T${n}[]`).join(', ')
  const returnStr = range.map((n) => `T${n}`).join(' | ')

  return `// prettier-ignore
export function zip<${genericsStr}>(${argsStr}): (${returnStr})[][]`
}

main()
