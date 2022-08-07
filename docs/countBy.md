<script setup>import RunKit from './components/RunKit.vue'</script>

# countBy

## Example

```ts
countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => 2
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/countBy.ts)

## Playground

<RunKit>
<pre>
const { countBy } = require('rhodash')
countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => 2
</pre>
</RunKit>
