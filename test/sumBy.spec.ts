import { describe, expect, it } from 'vitest'
import { sumBy } from '../src/index'

describe('default use case (callback)', () => {
  it('sum users age', () => {
    const users: { age: number; name: string }[] = [
      { age: 1, name: 'user1' },
      { age: 2, name: 'user2' },
      { age: 3, name: 'user3' },
    ]
    const result = sumBy(users, (user) => user.age)
    expect(result).toBe(6)
  })
})

describe('default use case (key)', () => {
  it('sum users age', () => {
    const users: { age: number; name: string }[] = [
      { age: 1, name: 'user1' },
      { age: 2, name: 'user2' },
      { age: 3, name: 'user3' },
    ]
    const result = sumBy(users, 'age')
    expect(result).toBe(6)
  })
})

describe('edge case', () => {
  it('lack of property', () => {
    const users = [{ age: 1, name: 'user1' }, { name: 'user2' }, { age: 3, name: 'user3' }]
    const result = sumBy(users, (user) => user.age as number)
    expect(result).toBe(4)
  })

  it('sumBy [] is 0', () => {
    const result = sumBy([], (x) => x)
    expect(result).toBe(0)
  })
})
