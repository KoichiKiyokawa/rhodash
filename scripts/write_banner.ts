import 'zx/globals'

const pkg = await fs.readJson('package.json')
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

const browserBundle = await fs.readFile(browserBundlePath)
await fs.writeFile(browserBundlePath, banner + browserBundle)
