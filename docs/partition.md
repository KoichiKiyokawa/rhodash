<script setup>import RunKit from './components/RunKit.vue'</script>

# partition

## Example

```ts
partition([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => [[2, 4], [1, 3, 5]]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/partition.ts)

## Playground

<RunKit>
<pre>
const { partition } = require('rhodash')
partition([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => [[2, 4], [1, 3, 5]]
</pre>
</RunKit>
