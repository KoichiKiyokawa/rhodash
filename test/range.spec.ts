import { describe, expect, it } from 'vitest'
import { range } from '../src/index'

describe('default use case (start < end)', () => {
  it('range(5) is [0, 1, 2, 3, 4]', () => {
    const result = range(5)
    expect(result).toEqual([0, 1, 2, 3, 4])
  })

  it('range(1, 5) is [1, 2, 3, 4]', () => {
    const result = range(1, 5)
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('range(0, 10, 2) is [0, 2, 4, 6, 8]', () => {
    const result = range(0, 10, 2)
    expect(result).toEqual([0, 2, 4, 6, 8])
  })
})

describe('start > end', () => {
  it('range(5, 1) is [5, 4, 3, 2]', () => {
    const result = range(5, 1)
    expect(result).toEqual([5, 4, 3, 2])
  })
})

describe('start = end', () => {
  it('range(5, 5) is []', () => {
    const result = range(5, 5)
    expect(result).toEqual([])
  })
})

describe('edge case', () => {
  it('range(1, 5, 0) throws an error', () => {
    expect(() => range(1, 5, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('range(5, 1, 0) throws an error', () => {
    expect(() => range(5, 1, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('range(5, 5, 0) throws an error', () => {
    expect(() => range(5, 5, 0)).toThrowError(/^step cannot be zero$/)
  })

  it('range(null, 10, 1) throws an error', () => {
    expect(() => range(null, 10, 1)).toThrowError(/^start must be a number$/)
  })

  it('range(1, null, 1) throws an error', () => {
    expect(() => range(1, null, 1)).toThrowError(/^end must be a number$/)
  })

  it('range(1, 10, null) throws an error', () => {
    expect(() => range(1, 10, null)).toThrowError(/^step must be a number$/)
  })
})
