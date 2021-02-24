declare module '*.vue' {
  import type { DefineComponent } from '../../packages/node_modules/vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  import { DefineComponent } from '../../packages/node_modules/vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
