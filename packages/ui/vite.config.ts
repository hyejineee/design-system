import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';
import { getDirectoryEntries } from './script/build-util';

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id: string) => pattern.test(id);
};

const externals = makeExternalPredicate(Object.keys(pkg.peerDependencies));

// 각 최상위 디렉토리별 entry points 생성
const entries = {
  ...getDirectoryEntries(resolve(__dirname, 'src/components'), 'components'),
  ...getDirectoryEntries(resolve(__dirname, 'src/system'), 'system'),
  ...getDirectoryEntries(resolve(__dirname, 'src/theme'), 'theme'),
  ...getDirectoryEntries(resolve(__dirname, 'src/util'), 'util'),
};

console.log('entries', entries);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ['src'],
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
    }),
  ],

  build: {
    emptyOutDir: true,
    lib: {
      entry: entries,
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: externals,
      output: {
        // 각 파일을 개별적으로 번들링
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames({ name }) {
          return name?.replace(/\.css\.ts\.css$/, '.css') ?? '';
        },
      },
    },
    sourcemap: true,
    target: 'esnext',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },

  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          browsers: ['> 0.2% and not dead'],
          features: {
            'color-mix': true,
            'light-dark-function': true,
            'media-query-ranges': true,
            'cascade-layers': true,
          },
        }),
      ],
    },
  },
});
