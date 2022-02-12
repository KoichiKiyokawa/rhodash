# rhodash

## Motivation

Lodash is huge. It is not suitable for frontend development.

## Getting Started

```bash
npm install rhodash
# or yarn add rhodash
```

## Functions

### arrayDifference

Create an array that contains values not included in the other given array, using `===` string equal.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/arrayDifference.ts)

**API**

```ts
declare function arrayDifference<T>(target: readonly T[], other: readonly T[]): T[]
```

**Example**

```ts
arrayDifference([1, 2, 3], [2, 3]) // => [1]
```

### chunk

For a given sequence, divide it into chunks of a given size and group them into arrays.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/chunk.ts)

**API**

```ts
declare function chunk<T>(array: readonly T[], size: number): T[][]
```

**Example**

```ts
chunk([1, 2, 3, 4, 5], 3) // => [[1, 2, 3], [4, 5]]
```

### countBy

Count the number of elements that match a given condition.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/countBy.ts)

**API**

```ts
declare function countBy<T>(array: readonly T[], predicate: (arg: T) => boolean): number
```

**Example**

```ts
declare function countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => 2
```

### delay

Return a Promise to be resolved in the given millisecond.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/delay.ts)

**API**

```ts
declare function delay(ms: number): Promise<void>
```

**Example**

```ts
await delay(1000) // wait 1000ms
```

### last

Return the last element of the given array.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/last.ts)

**API**

```ts
declare function last<T>(array: readonly T[]): T
```

**Example**

```ts
last([1, 2, 3]) // => 3
```

### objectDifference

Create an object that contains keys not included in the other given object, using `===` string equal. (Be careful, not support for nested objects.)  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/objectDifference.ts)

**API**

```ts
declare function objectDifference<T extends ObjectOrClassInstance>(target: T, other: T): Partial<T>
```

**Example**

```ts
objectDifference({ a: 1, b: 2 }, { a: 1, b: 0 }) // => { b: 2 }
```

### objectSet

Sets the value at path of object.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/objectSet.ts)

**API**

```ts
declare function objectSet<T = any, R = any>(obj: T, path: string, value: unknown): R
```

**Example**

```ts
objectSet({}, 'a.b.c[0]', 1) // => { a: { b: { c: [1] } } }
objectSet({}, 'a.b.c.0', 1) // => { a: { b: { c: [1] } } }
// merge objects
objectSet({ a: 1 }, 'a.b', 2) // => { a: { b: 2 } }
// Use generics
objectSet<{ a: number }, { a: { b: number } }>({ a: 1 }, 'a.b', 2)
```

### omit

Create an object without the given properties. (Opposite of [pick](./#pick))  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/omit.ts)

**API**

```ts
declare function omit<T extends ObjectOrClassInstance, K extends keyof T>(
  object: T,
  keys: readonly K[]
): Omit<T, K>
```

**Example**

```ts
omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // => { c: 3 }
```

### partition

Split the given array into those that match the conditions and those that don't.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/partition.ts)

**API**

```ts
partition<T>(array: readonly T[], predicate: (arg: T) => boolean): [T[], T[]]
```

**Example**

```ts
partition([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => [[2, 4], [1, 3, 5]]
```

### pick

Create an object composed of the picked object properties.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/pick.ts)

**API**

```ts
declare function pick<T extends ObjectOrClassInstance, K extends keyof T>(
  object: T,
  keys: readonly K[]
)
```

**Example**

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { a: 1, b: 2 }
```

### pickBy

Create an object with only the properties that match the conditions.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/pickBy.ts)

**API**

```ts
declare function pickBy<T extends ObjectOrClassInstance, K extends keyof T>(
  obj: T,
  predicate: (arg: T[K]) => boolean = Boolean
): Pick<T, K>
```

**Example**

```ts
pickBy({ a: 1, b: null, c: undefined, d: 'foo' }) // => { a: 1, d: 'foo' }
pickBy({ a: 1, b: 2, c: 3, d: 4 }, (num) => num % 2 === 0) // => { b: 2, d: 4 }
```

### range

Create an array of sequential numbers without end values.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/range.ts)

**API**

```ts
declare function range(start: number, end?: number, step?: number): number[]
```

**Example**

```ts
range(5) // => [0, 1, 2, 3, 4]
range(1, 5) // => [1, 2, 3, 4]
range(0, 10, 2) // => [0, 2, 4, 6, 8]
```

### sum

Add up the given array of numbers.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/sum.ts)

**API**

```ts
declare function sum(numbers: readonly number[]): number
```

**Example**

```ts
sum([1, 2, 3]) // => 6
sum([]) // => 0
```

### sumBy

Add up the given array of numbers, using the given function or key.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/sumBy.ts)

**API**

```ts
declare function sumBy<T extends Record<string, unknown>>(
  array: readonly T[],
  predicate: ((arg: T) => number) | { [K in keyof T]: T[K] extends number ? K : never }[keyof T]
): number
```

**Example**

```ts
const users = [
  { age: 1, name: 'user1' },
  { age: 2, name: 'user2' },
  { age: 3, name: 'user3' },
]
sumBy(users, (user) => user.age) // => 6
sumBy(users, 'age') // => 6
```

### toRange

Create an array of sequential numbers with end values.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/toRange.ts)

**API**

```ts
declare function toRange(start: number, end?: number, step?: number): number[]
```

**Example**

```ts
toRange(5) // => [0, 1, 2, 3, 4, 5]
toRange(1, 5) // => [1, 2, 3, 4, 5]
toRange(0, 10, 2) // => [0, 2, 4, 6, 8, 10]
```

### uniq

Create an array with duplicate elements removed.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/uniq.ts)

**API**

```ts
declare function uniq<T>(array: readonly T[]): T[]
```

**Example**

```ts
uniq([1, 2, 1, 1, 2, 3, 4]) // => [1, 2, 3, 4]
```

### uniqBy

Create an array by removing duplicate elements from the result of the given function.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/uniqBy.ts)

**API**

```ts
declare function uniqBy<T, K>(array: readonly T[], predicate: (arg: T) => K): T[]
```

**Example**

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

### zip

Creates an array of grouped elements.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/zip.ts)

**API**

```ts
declare function zip<T>(...arrayList: (readonly T[])[]): (T | undefined)[][]
```

**Example**

```ts
zip([1, 2], ['a', 'b']) // => [[1, 'a'], [2, 'b']]
```

### zipObject

Creates an object from array of keys and array of values.  
[source](https://github.com/KoichiKiyokawa/rhodash/blob/main/src/zipObject.ts)

**API**

```ts
declare function zipObject<K extends string | number | symbol, V>(
  keys: readonly K[],
  values: readonly V[]
): Record<K, V>
```

**Example**

```ts
zipObject(['a', 'b'], [1, 2]) // => { a: 1, b: 2 }
```
