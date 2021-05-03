import { objectDifference } from '../src/index'

describe('default use case', () => {
  it('get changed b in object', () => {
    expect(objectDifference({ a: 1, b: 2 }, { a: 1, b: 200 })).toEqual({ b: 200 })
  })

  it('nested object', () => {
    expect(objectDifference({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 100 } })).toEqual({
      b: { c: 100 },
    })
  })

  it('not changed', () => {
    expect(objectDifference({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual({})
  })
})
