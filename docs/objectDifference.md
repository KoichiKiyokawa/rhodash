<script setup>import RunKit from './components/RunKit.vue'</script>

# objectDifference

Create an object that contains keys not included in the other given object, using `===` string equal.
Be careful, not support for nested objects.

## Example

```ts
objectDifference({ a: 1, b: 2 }, { a: 1, b: 0 }) // => { b: 2 }
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/objectDifference.ts)

## Playground

<RunKit>
<pre>
const { objectDifference } = require('rhodash')
objectDifference({ a: 1, b: 2 }, { a: 1, b: 0 }) // => { b: 2 }
</pre>
</RunKit>
