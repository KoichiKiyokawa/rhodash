import { zip } from '../src/index'

describe('default use case', () => {
  it('normal array of num and array of alphabet', () => {
    const result = zip([1, 2, 3], ['a', 'b', 'c'])
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ])
  })

  it('normal array of num, array of alphabet and array of Date', () => {
    const result = zip([1, 2, 3], ['a', 'b', 'c'], [new Date(1), new Date(2), new Date(3)])
    expect(result).toEqual([
      [1, 'a', new Date(1)],
      [2, 'b', new Date(2)],
      [3, 'c', new Date(3)],
    ])
  })

  it('readonly array', () => {
    const nums = [1, 2, 3] as const
    const alphabets = ['a', 'b', 'c'] as const
    const result = zip(nums, alphabets)
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ])
  })
})

describe('when args have different size', () => {
  it('[1, 2, 3], ["a", "b"]', () => {
    const result = zip([1, 2, 3], ['a', 'b'])
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined],
    ])
  })
})
