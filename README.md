[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/imomaliev/vue-ts/main.svg)](https://results.pre-commit.ci/latest/github/imomaliev/vue-ts/main)
![ci](https://github.com/imomaliev/vue-ts/actions/workflows/ci.yml/badge.svg)

# Vue 3 + Typescript + Vite + Jest

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

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

## About

This project is created as a part of a [dev.to](https://dev.to) series [Creating vite vue ts template](https://dev.to/imomaliev/series/13845).
