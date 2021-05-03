import { objectDifference } from '../src/index'

describe('default use case', () => {
  it('get changed b in object', () => {
    expect(objectDifference({ a: 1, b: 2 }, { a: 1, b: 0 })).toEqual({ b: 2 })
  })

  it('not changed', () => {
    expect(objectDifference({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual({})
  })
})
