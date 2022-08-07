import { fs, globby } from 'zx'

// generate functions doc
const functionsNames = globby
  .globbySync('src/*.ts', { ignore: ['src/index.ts'] })
  .map((file) => file.replace(/^src\/(.+)\.ts/, '$1'))
functionsNames.forEach((fn) => {
  fs.writeFileSync(`docs/${fn}.md`, getDocumentFromFunctionName(fn))
})

// generate comparison table
const readme = fs.readFileSync('README.md')
const comparisonTable = String(readme).match(/(#+ Comparison[\s\S]+)/)?.[1]
fs.writeFileSync('docs/parts/comparison.md', comparisonTable)

$`pnpm prettier --write docs`

/**
 * @param {string} name e.g. 'chunk'
 * @return {string} Markdown string
 */
function getDocumentFromFunctionName(name) {
  const source = fs.readFileSync(`src/${name}.ts`, 'utf8')
  const { description, examples } = parseCommentFromSource(source)

  return `<script setup>import RunKit from './components/RunKit.vue'</script>

# ${name}
${description}

## Example
\`\`\`ts
${examples.join('\n')}
\`\`\`

## Link
- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/${name}.ts)  



## Playground
<RunKit>
<pre>
const { ${name} } = require('rhodash')
${extractOnlyOneExample(name, examples[0])}
</pre>
</RunKit>
`
}

/**
 * @typedef {{ description: string; examples: string[] }} DocumentComment
 */

/**
 * @param {string} source
 * @return {DocumentComment}
 */
function parseCommentFromSource(source) {
  const comment = source
    .match(/^ \* .+$/gm)
    .map((line) => line.replace(/^ \* /, ''))
    .join('\n')

  const description = comment.match(/([\s\S]+?)\n(@param|@example)/)?.[1] ?? ''
  const examples = comment
    .match(/@example[ \n][\s\S]+?(@example|$)/g)
    .map((example) => example.replace(/@example[ \n]/, ''))

  return { description, examples }
}

/**
 * e.g.
 * ```
 * @example
 * // example1
 * foo('a')
 * // example2
 * foo('a', 1)
 * ```
 * --(extract the first of example)->
 * ```
 * // example1
 * foo('a')
 * ```
 *
 * @param {string} functionName
 * @param {string} example
 */
function extractOnlyOneExample(functionName, example) {
  const any = `[\\s\\S]`
  return (
    example.match(new RegExp(`(${any}*?${functionName}\\(${any}*?\\)${any}*?)(\n|$)`))?.[1] ?? ''
  )
}
