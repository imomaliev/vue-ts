[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/imomaliev/vue-ts/main.svg)](https://results.pre-commit.ci/latest/github/imomaliev/vue-ts/main)
![ci](https://github.com/imomaliev/vue-ts/actions/workflows/ci.yml/badge.svg)

# Vue 3 + Typescript + Vite + Jest

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Project setup

Clone project with [`degit`](https://github.com/Rich-Harris/degit)

```
degit user/repo
```

### Install dependencies

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Preview build

```
npm run serve
```

### Run your unit tests

```
npm run test
```

### Lint

```
npm run lint
```

### Fix files

```
npm run format
```

## Install pre-commit hooks

```
pre-commit install
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## About

This project is created as a part of a [dev.to](https://dev.to) series [Creating vite vue ts template](https://dev.to/imomaliev/series/13845).
