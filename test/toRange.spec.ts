import { describe, expect, it } from 'vitest'
import { toRange } from '../src/index'

describe('default use case', () => {
  it('toRange(5) is [0, 1, 2, 3, 4, 5]', () => {
    const result = toRange(5)
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('toRange(1, 5) is [1, 2, 3, 4, 5]', () => {
    const result = toRange(1, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('toRange(0, 10, 2) is [0, 2, 4, 6, 8, 10]', () => {
    const result = toRange(0, 10, 2)
    expect(result).toEqual([0, 2, 4, 6, 8, 10])
  })
})

describe('start > end', () => {
  it('toRange(5, 1) is [5, 4, 3, 2, 1]', () => {
    const result = toRange(5, 1)
    expect(result).toEqual([5, 4, 3, 2, 1])
  })
})

describe('start = end', () => {
  it('toRange(5, 5) is [5]', () => {
    const result = toRange(5, 5)
    expect(result).toEqual([5])
  })
})

describe('edge case', () => {
  it('toRange(1, 5, 0) throws an error', () => {
    expect(() => toRange(1, 5, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('toRange(5, 1, 0) throws an error', () => {
    expect(() => toRange(5, 1, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('toRange(5, 5, 0) throws an error', () => {
    expect(() => toRange(5, 5, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('toRange(null, 10, 1) throws an error', () => {
    expect(() => toRange(null, 10, 1)).toThrowError(/^start must be a number$/)
  })

  it('toRange(1, null, 1) throws an error', () => {
    expect(() => toRange(1, null, 1)).toThrowError(/^end must be a number$/)
  })

  it('toRange(1, 10, null) throws an error', () => {
    expect(() => toRange(1, 10, null)).toThrowError(/^step must be a number$/)
  })
})
