<script setup>import RunKit from './components/RunKit.vue'</script>

# groupBy

Create an object consisting of keys created by applying predicate to the given array.

## Example

```ts
groupBy([1, 2, 3, 4, 5], (x) => x % 2) // => { 0: [2, 4], 1: [1, 3, 5] }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/groupBy.ts)

## Playground

<RunKit>
<pre>
const { groupBy } = require('rhodash')
groupBy([1, 2, 3, 4, 5], (x) => x % 2) // => { 0: [2, 4], 1: [1, 3, 5] }
</pre>
</RunKit>
