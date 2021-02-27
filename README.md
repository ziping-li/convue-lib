# Introduction

A collection of front-end tools based on Vue3.0. Including support for reactive css tool classes, reactive Ant Design Vue components and other commonly used components as well as commonly used tool methods.

## Install on demand

Which package is needed to install which package, such as the need for responsive css tools:

```bash
yarn add @convue-lib/styles -S
```

## Use

```typescript
import { createApp } from 'vue';
import App from './App.vue';
// Introduce the required components
import Container from '@convue-lib/container';
// Introduce the css tool library
import '@convue-lib/styles';
// Introduce tool method
import { deepmerge } from '@convue-lib/utils';

const app = createApp(App);
// Use components
app.use(Container);

app.mount('#app');
```

## Development Environment

-vite
-Typescript
-jsx
-Vue3
-Ant Design Vue
