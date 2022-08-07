<script setup>import RunKit from './components/RunKit.vue'</script>

# cloneDeep

You cannot clone the followings:

- function
- Symbol
- WeakMap
- WeakSet

## Example

```ts
cloneDeep({ a: 0, b: [1, 2, 3] }) // => { a: 0, b: [1, 2, 3] }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/cloneDeep.ts)

## Playground

<RunKit>
<pre>
const { cloneDeep } = require('rhodash')
cloneDeep({ a: 0, b: [1, 2, 3] }) // => { a: 0, b: [1, 2, 3] }
</pre>
</RunKit>
