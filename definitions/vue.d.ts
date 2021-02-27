declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'cleave.js';

declare module 'style-inject';

declare module '*.json';

declare module '*.less';
