<script setup>import RunKit from './components/RunKit.vue'</script>

# omit

## Example

```ts
omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // => { c: 3 }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/omit.ts)

## Playground

<RunKit>
<pre>
const { omit } = require('rhodash')
omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // => { c: 3 }
</pre>
</RunKit>
