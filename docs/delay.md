<script setup>import RunKit from './components/RunKit.vue'</script>

# delay

Return a Promise to be resolved in the given millisecond.

## Example

```ts
await delay(1000) // wait 1000ms
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/delay.ts)

## Playground

<RunKit>
<pre>
const { delay } = require('rhodash')
await delay(1000) // wait 1000ms
</pre>
</RunKit>
