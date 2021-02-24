const path = require('path');
const { build } = require('vite');

const entries = [
  'container/index.tsx',
  'data-table/index.tsx',
  'data-view/index.tsx',
  'enhance-alert/index.tsx',
  'formatted/index.tsx',
  'otp-input/index.tsx',
  'otp-send/index.tsx',
  'phone/index.tsx',
  'scroll/index.tsx',
  'style/index.less',
  'utils/index.ts',
];

(async () => {
  for (let entry of entries) {
    const name = entry.slice(0, entry.indexOf('/'));
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
    });
  }
})();
