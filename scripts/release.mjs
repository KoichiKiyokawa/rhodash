#!/usr/bin/env zx

await $`pnpm bump README.md package.json --commit --tag`
await $`pnpm run build`
console.log('----------')
console.log('push and publish by the following command:')
console.log('  git push -u origin HEAD --tags && pnpm publish')
