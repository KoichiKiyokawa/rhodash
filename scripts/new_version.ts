import 'zx/globals'

const error = (msg: string) => {
  console.error(chalk.red(msg))
  process.exit(1)
}

// prettier-ignore
const [/* node */, /* new_version.ts */, newVersion, ...others] = process.argv
if (others.length > 0) error('too much args')
if (newVersion == null) error('please input new version. e.g. 1.0.0')

// update package.json
const pkg = fs.readJSONSync('package.json')
pkg.version = newVersion
fs.writeJSONSync('package.json', pkg)

// update readme
const readmeRes = await fs.readFile('README.md')
const newReadme = readmeRes
  .toString()
  .replace(
    new RegExp('"https://unpkg.com/rhodash@.*?"'),
    `"https://unpkg.com/rhodash@${newVersion}"`
  )
await fs.writeFile('README.md', newReadme)

// git tag
await $`pnpm install`
await $`pnpm run build`
await $`git add -A`
await $`git commit -m "v${newVersion}"`
await $`git tag "v${newVersion}" HEAD -f`

console.log(
  `push by below command:\n ${chalk.green('$ git push -u origin HEAD --tags && pnpm publish')}`
)
