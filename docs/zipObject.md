<script setup>import RunKit from './components/RunKit.vue'</script>

# zipObject

Creates an object from array of keys and array of values.

## Example

```ts
zipObject(['a', 'b'], [1, 2]) // => { a: 1, b: 2 }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/zipObject.ts)

## Playground

<RunKit>
<pre>
const { zipObject } = require('rhodash')
zipObject(['a', 'b'], [1, 2]) // => { a: 1, b: 2 }
</pre>
</RunKit>
