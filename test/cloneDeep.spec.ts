import { describe, expect, it } from 'vitest'
import { cloneDeep } from '../src/index'

describe('clone deep', () => {
  it('number, string, null, undefined', () => {
    expect(cloneDeep(1)).toEqual(1)
    expect(cloneDeep('foo')).toEqual('foo')
    expect(cloneDeep(null)).toEqual(null)
    expect(cloneDeep(undefined)).toEqual(undefined)
  })

  it('Date', () => {
    const original = new Date(2000, 1, 1)
    const copied = cloneDeep(original)
    expect(copied instanceof Date).toBeTruthy()
    expect(original.getTime()).toEqual(copied.getTime())

    original.setFullYear(2001)
    expect(copied.getFullYear()).toEqual(2000)
  })

  it('array', () => {
    const original = [1, 2, 3]
    const copied = cloneDeep(original)
    expect(copied).toEqual([1, 2, 3])
    original[0] = 0
    expect(copied).toEqual([1, 2, 3])
  })

  it('Map', () => {
    const originalArray = [0]
    const original = new Map([
      ['a', originalArray],
      ['b', [1]],
    ])
    const copied = cloneDeep(original)
    expect(copied instanceof Map).toBeTruthy()
    expectNotChanged()

    original.set('a', [2])
    expectNotChanged()

    originalArray[0] = 1
    expectNotChanged()

    function expectNotChanged() {
      expect(copied).toEqual(
        new Map([
          ['a', [0]],
          ['b', [1]],
        ])
      )
    }
  })

  it('Set', () => {
    const originalArray = [0]
    const original = new Set([
      ['a', originalArray],
      ['b', [1]],
    ])
    const copied = cloneDeep(original)
    expectNotChanged()

    originalArray[0] = 1
    expectNotChanged()

    function expectNotChanged() {
      expect(copied).toEqual(
        new Set([
          ['a', [0]],
          ['b', [1]],
        ])
      )
    }
  })

  it('Buffer', () => {
    const original = Buffer.from([0, 0, 0])
    const copied = cloneDeep(original)
    original[0] = 1
    expect(copied).toEqual(Buffer.from([0, 0, 0]))
  })

  it('object', () => {
    const original = { a: 1, b: [2, 3] }
    const copied = cloneDeep(original)
    expectNotChanged()

    original.a = 2
    expectNotChanged()

    original.b[0] = 4
    expectNotChanged()

    function expectNotChanged() {
      expect(copied).toEqual({ a: 1, b: [2, 3] })
    }
  })
})
