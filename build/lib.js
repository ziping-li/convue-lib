const path = require('path');
const { build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const postcssImport = require('postcss-import');

const entries = [
  'container/index',
  'data-table/index',
  'data-view/index',
  'enhance-alert/index',
  'formatted/index',
  'otp-input/index',
  'otp-send/index',
  'phone/index',
  'scroll/index',
  'style/index.less',
  'utils/index',
];

(async () => {
  for (let entry of entries) {
    const name = entry.slice(0, entry.lastIndexOf('/'));
    build({
      root: path.resolve(__dirname, `../packages/${name}/`),
      build: {
        outDir: path.resolve(__dirname, `../packages/${name}/dist`),
        lib: {
          entry: path.resolve(__dirname, `../packages/${entry}`),
          name,
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
      plugins: [vue(), vueJsx()],
    });
  }
})();
