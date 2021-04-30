import { uniq } from '../src/index'

describe('default use case', () => {
  it('normal array', () => {
    const result = uniq([1, 2, 1, 1, 2, 3, 4])
    expect(result).toEqual([1, 2, 3, 4])
  })

  it('readonly array', () => {
    const arr = [1, 2, 1, 1, 2, 3, 4] as const
    const result = uniq(arr)
    expect(result).toEqual([1, 2, 3, 4])
  })
})
