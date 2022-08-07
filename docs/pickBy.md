<script setup>import RunKit from './components/RunKit.vue'</script>

# pickBy

Create an object with only the properties that match the conditions.

## Example

```ts
pickBy({ a: 1, b: null, c: undefined, d: 'foo' }) // => { a: 1, d: 'foo' }
@example
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/pickBy.ts)

## Playground

<RunKit>
<pre>
const { pickBy } = require('rhodash')
pickBy({ a: 1, b: null, c: undefined, d: 'foo' }) // => { a: 1, d: 'foo' }
</pre>
</RunKit>
