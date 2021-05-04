import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
// for license
const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      name: moduleName,
      format: 'iife',
      banner,
      plugins: [terser()],
    },
    { file: pkg.main, format: 'cjs' },
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
    },
  ],

  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
      include: 'src/**/*.ts',
    }),
  ],
}

export default options
