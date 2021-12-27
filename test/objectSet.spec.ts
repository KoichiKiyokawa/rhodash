import { objectSet } from '../src/index'

describe('default use case', () => {
  it(`objectSet({}, 'a.b.c[0]', 1) is { a: { b: { c: [1] } } }`, () => {
    expect(objectSet({}, 'a.b.c[0]', 1)).toEqual({ a: { b: { c: [1] } } })
  })
  it(`objectSet({}, 'a.b.c.0', 1) is { a: { b: { c: [1] } } }`, () => {
    expect(objectSet({}, 'a.b.c.0', 1)).toEqual({ a: { b: { c: [1] } } })
  })
  it(`objectSet({}, 'a.b.c0', 1) is { a: { b: { c0: 1 } } }`, () => {
    expect(objectSet({}, 'a.b.c0', 1)).toEqual({ a: { b: { c0: 1 } } })
  })
  it(`objectSet({}, 'a.b.0c', 1) is { a: { b: { "0c": 1 } } }`, () => {
    expect(objectSet({}, 'a.b.0c', 1)).toEqual({ a: { b: { '0c': 1 } } })
  })

  it(`objectSet({ a: 1 }, 'a.b', 2) is { a: { b: 2 } }`, () => {
    expect(objectSet({ a: 1 }, 'a.b', 2)).toEqual({ a: { b: 2 } })
  })
})

describe('edge case', () => {
  it('an empty string is in the path', () => {
    expect(objectSet({}, 'a[""].0', 1)).toEqual({ a: { '': [1] } })
    expect(objectSet({}, "a[''].0", 1)).toEqual({ a: { '': [1] } })
    expect(objectSet({}, 'a[``].0', 1)).toEqual({ a: { '``': [1] } })
  })
  it('path is an empty string', () => {
    expect(objectSet({}, '', 1)).toEqual({})
  })
})
