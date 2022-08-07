<script setup>import RunKit from './components/RunKit.vue'</script>

# zip

Creates an array of grouped elements.

## Example

```ts
zip([1, 2], ['a', 'b']) // => [[1, 'a'], [2, 'b']]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/zip.ts)

## Playground

<RunKit>
<pre>
const { zip } = require('rhodash')
zip([1, 2], ['a', 'b']) // => [[1, 'a'], [2, 'b']]
</pre>
</RunKit>
