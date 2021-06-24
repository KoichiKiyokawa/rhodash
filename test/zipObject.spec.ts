import { zipObject } from '../src/index'

describe('default use case', () => {
  it('normal array of alphabet and array of num', () => {
    const result = zipObject(['a', 'b', 'c'], [1, 2, 3])
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('normal array of alphabet and array of num', () => {
    const result = zipObject([1, 2, 3], ['a', 'b', 'c'])
    expect(result).toEqual({ 1: 'a', 2: 'b', 3: 'c' })
  })

  it('readonly array', () => {
    const alphabets = ['a', 'b', 'c'] as const
    const nums = [1, 2, 3] as const
    const result = zipObject(alphabets, nums)
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })
})

describe('when args have different size', () => {
  it('keys.length > values.length ', () => {
    const result = zipObject(['a', 'b', 'c', 'd'], [1, 2, 3])
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: undefined })
  })

  it('keys.length < values.length ', () => {
    const result = zipObject(['a', 'b', 'c'], [1, 2, 3, 4])
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })
})
