# rhodash (ρ🏃)

[![CI](https://github.com/KoichiKiyokawa/rhodash/actions/workflows/ci.yml/badge.svg)](https://github.com/KoichiKiyokawa/rhodash/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/KoichiKiyokawa/rhodash/branch/main/graph/badge.svg?token=WHSEI5ACVJ)](https://codecov.io/gh/KoichiKiyokawa/rhodash)
[![Version](https://img.shields.io/npm/v/rhodash.svg)](https://www.npmjs.com/package/rhodash)
![](https://badgen.net/bundlephobia/minzip/rhodash?cache=300)
![](https://badgen.net/npm/dt/rhodash?cache=300)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A deadly simple alternative to lodash.

## Feature

- 🚀 No dependencies
- ⚡️ Lightweight
- 💪 Typescript first(written in TypeScript and suitable for TypeScript users)
- 🍃 Tree shakable
- 📝 JSDoc available (easy to use).

![image](https://user-images.githubusercontent.com/40315079/135570757-ac335439-f7a5-4525-9d2b-e30d7990887f.png)

- 🗺️ Sourcemap and declarationMap is available (You can jump directly to the `.ts` file of this library instead of `d.ts`).

![jump-to-ts-file](https://user-images.githubusercontent.com/40315079/151918966-01c74eb4-c1bb-45bd-83d6-1c82b6a8e3b1.gif)

## Install

```sh
npm install rhodash
# or yarn add rhodash
```

## Usage

You can simply try [here](https://stackblitz.com/edit/typescript-ze7myy?file=index.ts).

### ES Module

```ts
import { pick, omit } from 'rhodash'

pick({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { a: 1, b: 2 }
omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { c: 3 }
```

### CommonJS

```ts
const { pick, omit } = require('rhodash')

pick({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { a: 1, b: 2 }
omit({ a: 1, b: 2, c: 3 }, ['a', 'b']) // { c: 3 }
```

### Browser

```html
<script src="https://unpkg.com/rhodash@2.2.0"></script>
<script>
  document.write(rhodash.pick({ a: 1, b: 2, c: 3 }, ['a', 'b']))
</script>
```

## API

You can see utility methods document [here](https://rhodash.vercel.app/).

## Comparison

| &nbsp;                                    | [rhodash](https://github.com/KoichiKiyokawa/rhodash)          | [Lodash](https://github.com/lodash/lodash)                   | [just](https://github.com/angus-c/just)                                                                          | [rambda](https://github.com/selfrefactor/rambda)                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ️📦️ Size of whole the package            | ![](https://badgen.net/bundlephobia/minzip/rhodash?cache=300) | ![](https://badgen.net/bundlephobia/minzip/lodash?cache=300) | -<br>You should install each packages one by one.                                                                | ![](https://badgen.net/bundlephobia/minzip/rambda?cache=300)                                                                                                                                |
| 📚 Easy-to-understand JSDoc               | ✅ <br>(It has both description and example)                  | ❌                                                           | ❌                                                                                                               | :warning: <br>(It only has description)                                                                                                                                                     |
| 🦘 Ease of jumping to the original source | 👍                                                            | 🤔<br>(You can, but it is complex)                           | ❌                                                                                                               | ❌                                                                                                                                                                                          |
| :pencil2: Remarks                         | This library                                                  | Most popular, but huge.                                      | You need to install the corresponding packages one by one. It will increase the number of lines in package.json. | Designed for functional programming, so it has many extra functions for those who do not need functional programming. In addition, some of the functions have a different API than Lodash's |
