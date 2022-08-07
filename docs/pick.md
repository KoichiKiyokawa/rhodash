<script setup>import RunKit from './components/RunKit.vue'</script>

# pick

## Example

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { a: 1, b: 2 }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/pick.ts)

## Playground

<RunKit>
<pre>
const { pick } = require('rhodash')
pick({ a: 1, b: 2, c: 3 }, ["a", "b"]) // { a: 1, b: 2 }
</pre>
</RunKit>
