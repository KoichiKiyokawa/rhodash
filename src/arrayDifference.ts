import { objectDifference } from './objectDifference'

export function arrayDifference<T>(before: readonly T[], after: readonly T[]): T[] {
  const result: T[] = []
  for (let i = 0; i < after.length; i++) {
    if (Array.isArray(after[i])) {
      const diff = arrayDifference((before[i] as unknown) as any[], (after[i] as unknown) as any[])
      if (diff.length > 0) result[i] = (diff as unknown) as T
    }
    if (typeof after[i] === 'object' && after[i] !== null) {
      const diff = objectDifference((before[i] as unknown) as any, (after[i] as unknown) as any)
      if (Object.keys(diff).length > 0) result[i] = (diff as unknown) as T
    } else {
      if (before.includes(after[i])) result[i] = after[i]
    }
  }
  return result
}
