import 'zx/globals'
;(async function () {
  const error = (msg: string) => {
    console.error(chalk.red(msg))
    process.exit(1)
  }

  // prettier-ignore
  const [/* node */, /* zx */, /* file */, newVersion, ...others] = process.argv
  if (others.length > 0) error('too much args')
  if (newVersion == null) error('please input new version. e.g. 1.0.0')

  // update package.json
  const pkg = JSON.parse((await fs.readFile('package.json')).toString())
  pkg.version = newVersion
  await fs.writeFile('package.json', JSON.stringify(pkg))
  await $`npx prettier --write package.json`

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
  await $`npm install`
  await $`npm run build`
  await $`git add -A`
  await $`git commit -m "v${newVersion}"`
  await $`git tag "v${newVersion}" HEAD -f`

  console.log(
    `push by below command:\n ${chalk.green('$ git push -u origin HEAD --tags && npm publish')}`
  )
})()
