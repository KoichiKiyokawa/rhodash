import { describe, expect, it } from 'vitest'
import { groupBy } from '../src/index'

describe('default use case', () => {
  it('group by parity', async () => {
    const result = groupBy([1, 2, 3, 4, 5], (x) => x % 2)
    expect(result).toEqual({ 0: [2, 4], 1: [1, 3, 5] })
  })

  it('group by parity (string)', async () => {
    const result = groupBy([1, 2, 3, 4, 5], (x) => (x % 2 === 0 ? 'even' : 'odd'))
    expect(result).toEqual({ even: [2, 4], odd: [1, 3, 5] })
  })
})

describe('edge case', () => {
  it('empty array', () => {
    const result = groupBy([], (x) => x % 2)
    expect(result).toEqual({})
  })
})
