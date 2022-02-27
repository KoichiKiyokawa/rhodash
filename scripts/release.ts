import 'zx/globals'

// update the version in README and package.json
await $`pnpm bump README.md package.json`

const pkg = fs.readJSONSync('package.json')

// git tag
await $`pnpm install`
await $`pnpm run build`
await $`git add -A`
await $`git commit -m "v${pkg.version}"`
await $`git tag "v${pkg.version}" HEAD -f`

console.log(
  `push by below command:\n ${chalk.green('$ git push -u origin HEAD --tags && pnpm publish')}`
)
