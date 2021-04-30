import { uniqBy } from '../src/index'

describe('default use case', () => {
  it('normal users list', () => {
    const users = [
      { id: 1, name: 'user1' },
      { id: 1, name: 'user2' },
      { id: 2, name: 'user3' },
    ]
    const result = uniqBy(users, (user) => user.id)
    expect(result).toEqual([
      { id: 1, name: 'user1' },
      { id: 2, name: 'user3' },
    ])
  })

  it('countup readonly array', () => {
    const users = [
      { id: 1, name: 'user1' },
      { id: 1, name: 'user2' },
      { id: 2, name: 'user3' },
    ] as const
    const result = uniqBy(users, (user) => user.id)
    expect(result).toEqual([
      { id: 1, name: 'user1' },

      { id: 2, name: 'user3' },
    ])
  })
})
