import { describe, expect, it } from 'vitest'
import { partition } from '../src/index'

describe('default use case', () => {
  it('devide if even or not', () => {
    const [yesList, noList] = partition([1, 2, 3, 4, 5], (x) => x % 2 === 0)
    expect(yesList).toEqual([2, 4])
    expect(noList).toEqual([1, 3, 5])
  })
})

describe('edge use case', () => {
  it('return empty array if nothing is applicable', () => {
    const [yesList, noList] = partition([1, 2, 3, 4, 5], (x) => x > 5)
    expect(yesList).toEqual([])
    expect(noList).toEqual([1, 2, 3, 4, 5])
  })

  it('return empty array if everything is applicable', () => {
    const [yesList, noList] = partition([1, 2, 3, 4, 5], (x) => x <= 5)
    expect(yesList).toEqual([1, 2, 3, 4, 5])
    expect(noList).toEqual([])
  })
})
