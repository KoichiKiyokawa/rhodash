import { arrayDifference } from '../src/index'

describe('default use case', () => {
  it('normal array', () => {
    expect(arrayDifference([1, 2, 3], [2, 3, 4])).toEqual([1])
  })

  it('not changed', () => {
    expect(arrayDifference([1, 2, 3], [1, 2, 3])).toEqual([])
  })
})
