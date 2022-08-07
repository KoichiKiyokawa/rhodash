<script setup>import RunKit from './components/RunKit.vue'</script>

# uniq

Create an array with duplicate elements removed.

## Example

```ts
uniq([1, 2, 1, 1, 2, 3, 4]) // => [1, 2, 3, 4]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/uniq.ts)

## Playground

<RunKit>
<pre>
const { uniq } = require('rhodash')
uniq([1, 2, 1, 1, 2, 3, 4]) // => [1, 2, 3, 4]
</pre>
</RunKit>
