import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginVuedoc from 'vite-plugin-vuedoc';

export default defineConfig({
  root: 'examples/',
  base: './',
  plugins: [
    vitePluginVuedoc({
      highlight: {
        theme: 'one-dark',
      },
    }),
    vue(),
    vueJsx(),
  ],
  build: {
    outDir: '../docs'
  }
});
