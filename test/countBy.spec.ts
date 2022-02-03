import { describe, expect, it } from 'vitest'
import { countBy } from '../src/index'

describe('default use case', () => {
  it('countup even items', () => {
    const result = countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0)
    expect(result).toBe(2)
  })
})
