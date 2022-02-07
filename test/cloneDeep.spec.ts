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
    const original = new Map([
      ['a', 1],
      ['b', 2],
    ])
    const copied = cloneDeep(original)
    expect(copied instanceof Map).toBeTruthy()
    expect(copied).toEqual(
      new Map([
        ['a', 1],
        ['b', 2],
      ])
    )
    original.set('a', 0)
    expect(copied).toEqual(
      new Map([
        ['a', 1],
        ['b', 2],
      ])
    )
  })
})
