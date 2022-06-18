[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/imomaliev/vue-ts/main.svg)](https://results.pre-commit.ci/latest/github/imomaliev/vue-ts/main)
![ci](https://github.com/imomaliev/vue-ts/actions/workflows/ci.yaml/badge.svg)

# Vue 3 + TypeScript + Vite + Jest

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://vuejs.org/api/sfc-script-setup.html) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

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
