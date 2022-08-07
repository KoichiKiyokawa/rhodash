<script setup>import RunKit from './components/RunKit.vue'</script>

# chunk

For a given sequence, divide it into chunks of a given size and group them into arrays.

## Example

```ts
chunk([1, 2, 3, 4, 5], 3) // => [[1, 2, 3], [4, 5]]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/chunk.ts)

## Playground

<RunKit>
<pre>
const { chunk } = require('rhodash')
chunk([1, 2, 3, 4, 5], 3) // => [[1, 2, 3], [4, 5]]
</pre>
</RunKit>
