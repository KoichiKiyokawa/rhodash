import { describe, expect, it } from 'vitest'
import { pick } from '../src/index'

describe('default use case', () => {
  it('pick 2 keys', () => {
    const before = { a: 1, b: 2, c: 3 }
    const result = pick(before, ['a', 'b'])
    expect(before).toEqual({ a: 1, b: 2, c: 3 }) // check imutability
    expect(result).toEqual({ a: 1, b: 2 })
  })
})

describe('for class instance', () => {
  it('pick 2 keys', () => {
    class Before {
      constructor(public a = 1, public b = 2, public c = 3) {}
    }
    const before = new Before()
    const result = pick(before, ['a', 'b'])
    expect(result).toEqual({ a: 1, b: 2 })
  })
})
