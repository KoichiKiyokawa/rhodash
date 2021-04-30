import { delay } from '../src/index'

describe('default use case', () => {
  it('delay 1000ms', async () => {
    const waitTime = 1000

    const startUnixTime = new Date().getTime()
    await delay(waitTime)
    const endUnixTime = new Date().getTime()

    const elapsedTime = endUnixTime - startUnixTime
    const allowableError = 500

    expect(elapsedTime).toBeLessThan(waitTime + allowableError)
    expect(elapsedTime).toBeGreaterThan(waitTime - allowableError)
  })
})
