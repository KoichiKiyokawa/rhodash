import { countBy } from '../src/countBy'

describe('default use case', () => {
  it('countup even items', () => {
    const result = countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0)
    expect(result).toBe(2)
  })
})
