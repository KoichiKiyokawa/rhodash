import { describe, expect, it } from 'vitest'
import { objectSet } from '../src/index'

describe('default use case', () => {
  describe('assign to an empty object or array', () => {
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
    it(`objectSet({}, 'a.b.0.c', 1) is { a: { b: [{ c: 1 }] } }`, () => {
      expect(objectSet({}, 'a.b.0.c', 1)).toEqual({ a: { b: [{ c: 1 }] } })
    })

    it(`objectSet([], '0', 1) is [1]`, () => {
      expect(objectSet([], '0', 1)).toEqual([1])
    })
    it(`objectSet([], '0.a', 1) is [{ a: 1 }]`, () => {
      expect(objectSet([], '0.a', 1)).toEqual([{ a: 1 }])
    })
  })

  describe('merge objects', () => {
    it(`objectSet({ a: 1 }, 'a', 2) is { a: 2 }`, () => {
      expect(objectSet({ a: 1 }, 'a.b', 2)).toEqual({ a: { b: 2 } })
    })
    it(`objectSet({ a: 1 }, 'a.b', 2) is { a: { b: 2 } }`, () => {
      expect(objectSet({ a: 1 }, 'a.b', 2)).toEqual({ a: { b: 2 } })
    })
    it(`objectSet({ a: [{ b: 1 }] }, 'a.0.b.c', 2) is { a: [{ b: { c: 2 } }] }`, () => {
      expect(objectSet({ a: [{ b: 1 }] }, 'a.0.b.c', 2)).toEqual({ a: [{ b: { c: 2 } }] })
    })
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
  it(`set object path to an array`, () => {
    const result: any = objectSet([], 'a.b', 1)
    expect(Array.isArray(result)).toBe(true)
    expect(result['a']).toEqual({ b: 1 })
    expect(result['a']['b']).toEqual(1)
  })
})
