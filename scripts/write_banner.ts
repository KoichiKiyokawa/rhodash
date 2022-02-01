import 'zx/globals'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json')
const moduleName = pkg.name.replace(/^@.*\//, '')

// for license
const banner = `\
/**
 * @license
 * ${moduleName}.js v${pkg.version}
 * Released under the ${pkg.license} License.
 */
`

const browserBundlePath = 'dist/index.iife.js'

;(async () => {
  const browserBundle = await fs.readFile(browserBundlePath)
  await fs.writeFile(browserBundlePath, banner + browserBundle)
})()
