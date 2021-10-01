import { pickBy } from '../src/index'

describe('default use case (omit callback)', () => {
  it('omit callback', () => {
    expect(pickBy({ a: 1, b: null, c: undefined, d: 'foo' })).toEqual({ a: 1, d: 'foo' })
  })
  it('use callback', () => {
    expect(pickBy({ a: 1, b: 2, c: 3, d: 4 }, (num) => num % 2 === 0)).toEqual({ b: 2, d: 4 })
  })
})
