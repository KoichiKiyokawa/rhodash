<script setup>import RunKit from './components/RunKit.vue'</script>

# objectSet

Sets the value at path of object.

## Example

```ts
objectSet({}, 'a.b.c[0]', 1) // => { a: { b: { c: [1] } } }
objectSet({}, 'a.b.c.0', 1) // => { a: { b: { c: [1] } } }
// Merge objects
objectSet({ a: 1 }, 'a.b', 2) // => { a: { b: 2 } }
// Use generics
objectSet<{ a: number }, { a: { b: number } }>({ a: 1 }, 'a.b', 2)
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/objectSet.ts)

## Playground

<RunKit>
<pre>
const { objectSet } = require('rhodash')
objectSet({}, 'a.b.c[0]', 1) // => { a: { b: { c: [1] } } }
</pre>
</RunKit>
