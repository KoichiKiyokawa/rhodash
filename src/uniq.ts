export function uniq<T>(array: readonly T[]): T[] {
  return [...new Set(array)]
}
