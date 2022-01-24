import { describe, expect, it } from 'vitest'
import { sum } from '../src/index'

describe('default use case', () => {
  it('sum [1, 2, 3] is 6', () => {
    const result = sum([1, 2, 3])
    expect(result).toBe(6)
  })
})

describe('edge case', () => {
  it('sum [] is 0', () => {
    const result = sum([])
    expect(result).toBe(0)
  })
})
