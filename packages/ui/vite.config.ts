import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    dts({
      include: ['src'],
      outDir: 'dist/@types',
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],

  build: {
    emptyOutDir: true,
    lib: {
      entry: entries,
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    cssCodeSplit: true,
    // vite가 내부적으로 사용하는 rollup 번들러의 설정을 직접 제어할 수 있게 해줌.
    rollupOptions: {
      external: externals,
      input: entries,
      output: {
        // 각 파일을 개별적으로 번들링
        preserveModules: true,
        preserveModulesRoot: 'src',
        // 번들링된 파일 이름 형식
        entryFileNames: '[name].js',
        // CSS 파일 처리
        assetFileNames: 'assets/[name][extname]',
      },
    },
    // 소스맵 생성
    sourcemap: true,
    // 최신 JavaScript 타겟
    target: 'esnext',
    // 번들 사이즈 리포트 생성
    reportCompressedSize: true,
    // 청크 사이즈 경고 제한
    chunkSizeWarningLimit: 1000,
  },
});
