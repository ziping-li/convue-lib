# 简介

基于Vue3.0的前端工具集合。 包括支持响应式的 css 工具类，响应式 Ant Design Vue 组件和其他常用组件以及常用的工具方法。

## 按需安装

需要用的哪一个包则安装哪一个包，比如需要响应式的 css 工具类：

```bash
yarn add @convue-lib/styles -S
```

## 使用

```typescript
import { createApp } from 'vue';
import App from './App.vue';
// 引入需要的组件
import Container from '@convue-lib/container';
// 引入 css 工具类库
import '@convue-lib/styles';
// 引入工具方法
import { deepmerge } from '@convue-lib/utils';

const app = createApp(App);
// 使用组件
app.use(Container);

app.mount('#app');
```

## 开发环境

- vite
- Typescript
- jsx
- Vue3
- Ant Design Vue
