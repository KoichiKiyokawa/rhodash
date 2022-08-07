<script setup>import RunKit from './components/RunKit.vue'</script>

# sumBy

Add up the given array of numbers, using the given function or key.

## Example

```ts
const users = [
  { age: 1, name: 'user1' },
  { age: 2, name: 'user2' },
  { age: 3, name: 'user3' },
]
sumBy(users, (user) => user.age) // => 6
sumBy(users, 'age') // => 6
```

## Link

- [source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/sumBy.ts)

## Playground

<RunKit>
<pre>
const { sumBy } = require('rhodash')
const users = [
  { age: 1, name: 'user1' },
  { age: 2, name: 'user2' },
  { age: 3, name: 'user3' },
]
sumBy(users, user => user.age) // => 6
</pre>
</RunKit>
