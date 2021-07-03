import fs from 'fs'
import { promisify } from 'util'

describe('file pattern', () => {
  it('test filename matches *.spec.ts', async () => {
    const ok = await isAllTestFileValid()
    expect(ok).toBe(true)
  })

  it('test all function file has example', async () => {
    const ok = await isAllFunctionHasExample()
    expect(ok).toBe(true)
  })
})

async function isAllTestFileValid() {
  const files = await promisify(fs.readdir)('./test')
  for (const file of files) {
    // check if test file is *.spec.ts
    if (!file.endsWith('spec.ts')) return `invalid file extension: ${file}`
    const text = String(fs.readFileSync(`./test/${file}`))

    if (file === 'file.spec.ts') continue
    // check if test file has import { foo } from '../src/index', not 'import foo from '../src/foo'.
    if (!/import { \w+ } from '\.\.\/src\/index'/.test(text)) return `invalid import: ${file}`
  }

  return true
}

async function isAllFunctionHasExample() {
  const files = await promisify(fs.readdir)('./src')
  for (const file of files) {
    if (file === 'index.ts' || file === 'types') continue

    const text = String(fs.readFileSync(`./src/${file}`))
    if (!/@example/.test(text)) return `lack of example: ${file}`
  }
  return true
}
