<script setup>import RunKit from './components/RunKit.vue'</script>

# arrayDifference

Create an array that contains values not included in the other given array, using `===` string equal.

## Example

```ts
arrayDifference([1, 2, 3], [2, 3]) // => [1]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/arrayDifference.ts)

## Playground

<RunKit>
<pre>
const { arrayDifference } = require('rhodash')
arrayDifference([1, 2, 3], [2, 3]) // => [1]
</pre>
</RunKit>
