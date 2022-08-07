<script setup>import RunKit from './components/RunKit.vue'</script>

# range

Create an array of sequential numbers without end values.

## Example

```ts
range(5) // => [0, 1, 2, 3, 4]
range(1, 5) // => [1, 2, 3, 4]
range(0, 10, 2) // => [0, 2, 4, 6, 8]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/range.ts)

## Playground

<RunKit>
<pre>
const { range } = require('rhodash')
range(5) // => [0, 1, 2, 3, 4]
</pre>
</RunKit>
