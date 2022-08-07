<script setup>import RunKit from './components/RunKit.vue'</script>

# uniqBy

Create an array by removing duplicate elements from the result of the given function.

## Example

```ts
uniqBy(
  [
    { id: 1, name: 'user1' },
    { id: 1, name: 'user2' },
    { id: 2, name: 'user3' },
  ],
  (user) => user.id
)
// => [{ id: 1, name: 'user1' }, { id: 2, name: 'user3' }]
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/uniqBy.ts)

## Playground

<RunKit>
<pre>
const { uniqBy } = require('rhodash')
uniqBy([
  { id: 1, name: 'user1' },
  { id: 1, name: 'user2' },
  { id: 2, name: 'user3' },
], user => user.id)
</pre>
</RunKit>
