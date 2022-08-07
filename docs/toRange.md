<script setup>import RunKit from './components/RunKit.vue'</script>

# toRange

Create an array of sequential numbers with end values.

## Example

```ts
toRange(5) // => [0, 1, 2, 3, 4, 5]
toRange(1, 5) // => [1, 2, 3, 4, 5]
toRange(0, 10, 2) // => [0, 2, 4, 6, 8, 10]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/toRange.ts)

## Playground

<RunKit>
<pre>
const { toRange } = require('rhodash')
toRange(5) // => [0, 1, 2, 3, 4, 5]
</pre>
</RunKit>
