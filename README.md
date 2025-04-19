![GitHub](https://img.shields.io/github/license/dnncommunity/dnn-elements)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![npm (scoped with tag)](https://img.shields.io/npm/v/@dnncommunity/dnn-elements/latest)
![npm (scoped with tag)](https://img.shields.io/npm/v/@dnncommunity/dnn-elements/next)

# dnn-elements (HTML Custom Elements)
This is a collection of reusable HTML custom elements (WebComponents) for Dnn.

## DEMO
A [demo site](https://dnncommunity.github.io/dnn-elements/) is available as a playground for all current components, along with documentation.

## Stencil
Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Usage (No Framework)
### npm
`npm install @dnncommunity/dnn-elements`

### yarn
`yarn add @dnncommunity/dnn-elements`

## Usage (React)
### npm
`npm install @dnncommunity/dnn-elements-react`

### yarn
`yarn add @dnncommunity/dnn-elements-react`

## Usage (Angular)
Stay tuned - coming soon.

## Usage (Individual Components)
Usage of each component is documented within the component folder right here on GitHub, along with some code samples too.

## Usage (eslint-plugin)
To help handle breaking changes and provide advise about usage, we have a custom eslint plugin as part of this very package. Some breaking changes have auto-fixes. Until we release a v1.0.0, it is advisable to upgrade one minor version at a time and if you use eslint/tslint, you can get some of the autofixes apply automatically for you. We currently only support the flat config format so you will need of of those setups:
- eslint v8 (with the option to use the flat config type)
- eslint v9 (flat config is already mandatory)
- typescript-eslint (flat config is already mandatory) **recommended if you use typescript**

No extra package is needed, just use the already installed `@dnncommunity/dnn-elements`, import the `eslint-plugin` and use it in your config:

```diff
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
+import dnnelements from '@dnncommunity/dnn-elements/eslint-plugin';

export default tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  stencil.configs.flat.recommended,
+ dnnelements.configs.flat.recommended,
  {
    files: [
      "src/**/*.{ts,tsx}",
    ],
  },
  {
      ignores: [
        "dist/",
        "www/",
      ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        project: './tsconfig.json',
      }
    }
  },
)
```