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
  it('range(1, 5, 0) is [1, 1, 1, 1]', () => {
    const result = range(1, 5, 0)
    expect(result).toEqual([1, 1, 1, 1])
  })

  it('range(5, 1, 0) is [5, 5, 5, 5]', () => {
    const result = range(5, 1, 0)
    expect(result).toEqual([5, 5, 5, 5])
  })

  it('range(5, 5, 0) is []', () => {
    const result = range(5, 5, 0)
    expect(result).toEqual([])
  })
})
