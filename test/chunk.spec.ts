import { describe, expect, it } from 'vitest'
import { chunk } from '../src/index'

describe('for array of 1 to 5 ', () => {
  it('Split into chunks one by one.', () => {
    const result = chunk([1, 2, 3, 4, 5], 1)
    expect(result).toEqual([[1], [2], [3], [4], [5]])
  })

  it('split every 3 pieces', () => {
    const result = chunk([1, 2, 3, 4, 5], 3)
    expect(result).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
  })

  it('split every 5 pieces', () => {
    const result = chunk([1, 2, 3, 4, 5], 5)
    expect(result).toEqual([[1, 2, 3, 4, 5]])
  })
})

describe('for array of a to e', () => {
  it('Split into chunks one by one.', () => {
    const result = chunk(['a', 'b', 'c', 'd', 'e'], 1)
    expect(result).toEqual([['a'], ['b'], ['c'], ['d'], ['e']])
  })

  it('split every 3 pieces', () => {
    const result = chunk(['a', 'b', 'c', 'd', 'e'], 3)
    expect(result).toEqual([
      ['a', 'b', 'c'],
      ['d', 'e'],
    ])
  })

  it('split every 5 pieces', () => {
    const result = chunk(['a', 'b', 'c', 'd', 'e'], 5)
    expect(result).toEqual([['a', 'b', 'c', 'd', 'e']])
  })
})

describe('edge case', () => {
  it('when give 0 as size, return [[]] because each chunk has 0 length', () => {
    const result = chunk([1, 2, 3, 4, 5], 0)
    expect(result).toEqual([[]])
  })

  it('when give -2 as size, return [[]] bacause `chunk size -2` cannot defined', () => {
    const result = chunk([1, 2, 3, 4, 5], -2)
    expect(result).toEqual([[]])
  })
})
