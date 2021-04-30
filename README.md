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
- ✏️ Less code
- 💪 Typescript first(Written in TypeScript)
- <img src=https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg height=18 /> Includes type definitions
- 🍃 Tree shakable

## Install

```sh
npm install rhodash
# or yarn install rhodash
```

## Comparison

### [Lodash](https://github.com/lodash/lodash)

As you know, Lodash is the most popular utility library in npm, but it's size is huge(see [here](https://bundlephobia.com/result?p=lodash)). So, Lodash is not suitable for frontend development.

### [just](https://github.com/angus-c/just)

just is alternative to lodash. The philosophy of just is "just one thing". Therefore, if you want to use the functions, you need to install the corresponding packages one by one. It will increase the number of lines in package.json.

### [rambda]()

rambda is "faster and smaller alternative to Ramda". It includes type definittion, treeshakable and minimal size. However, some of the functions have a different API than Lodash's. For example, the argument for `pick` is the opposite of Lodash. This is confusing. In addition, since rambda is designed for functional programming, it has many extra functions for those who do not need functional programming.

## Run tests

```sh
npm run test
```
