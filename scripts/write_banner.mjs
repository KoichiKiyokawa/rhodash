#!/usr/bin/env node
import 'zx/globals'

const pkg = fs.readJsonSync('package.json')
const moduleName = pkg.name.replace(/^@.*\//, '')

// for license
const banner = `\
/**
 * @license
 * ${moduleName} v${pkg.version}
 * Released under the ${pkg.license} License.
 */
`

// write banner to top of the browser bundle
const browserBundlePath = 'dist/index.iife.js'
fs.writeFileSync(browserBundlePath, banner + fs.readFileSync(browserBundlePath))
