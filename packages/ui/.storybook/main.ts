import type { StorybookConfig } from '@storybook/react-vite';
import { pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'path';
import { mergeConfig, type ViteDevServer } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

// 현재 디렉토리를 기준으로 상대 경로를 절대 경로로 변환
const resolveRoot = (dir: string) => resolve(__dirname, '..', dir);
const styleConfigAbsolutePath = resolveRoot('style.config.css.ts');

const runStyleConfigPlugin = () => {
  return {
    name: 'run-style-config-early',
    configureServer: async (server: ViteDevServer) => {
      console.log(
        `[Vite Plugin - Dev] configureServer 훅 시작. ${styleConfigAbsolutePath} 실행 시도.`
      );
      try {
        await server.ssrLoadModule(styleConfigAbsolutePath);
        console.log(
          `[Vite Plugin - Dev] 성공: ${styleConfigAbsolutePath} 를 ssrLoadModule로 실행했습니다.`
        );
      } catch (error) {
        console.error(
          `[Vite Plugin - Dev] 오류: ${styleConfigAbsolutePath} 를 ssrLoadModule로 실행 중 에러 발생:`,
          error
        );
      }
    },
    buildStart: async () => {
      console.log(
        `[Vite Plugin - Build] buildStart 훅 시작. ${styleConfigAbsolutePath} 실행 시도.`
      );
      try {
        const styleConfigModuleFileUrl = pathToFileURL(styleConfigAbsolutePath).href;
        await import(styleConfigModuleFileUrl);
        console.log(
          `[Vite Plugin - Build] 성공: ${styleConfigAbsolutePath} 를 동적 import로 실행했습니다.`
        );
      } catch (error) {
        console.error(
          `[Vite Plugin - Build] 오류: ${styleConfigAbsolutePath} 를 동적 import로 실행 중 에러 발생. Node.js가 .ts 확장자를 직접 처리하도록 설정되지 않았을 수 있습니다. 에러 상세:`,
          error
        );
      }
    },
  };
};

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        paths: {
          '@ui/types': ['../src/types'],
          '@ui/types/*': ['../src/types/*'],
          '@ui/theme': ['../src/theme'],
          '@ui/theme/*': ['../src/theme/*'],
          '@ui/system': ['../src/system'],
          '@ui/system/*': ['../src/system/*'],
          '@ui/util': ['../src/util'],
          '@ui/util/*': ['../src/util/*'],
        },
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      // plugins: [runStyleConfigPlugin()],
      resolve: {
        alias: {
          '@ui/types': resolveRoot('src/types'),
          '@ui/theme': resolveRoot('src/theme'),
          '@ui/system': resolveRoot('src/system'),
          '@ui/util': resolveRoot('src/util'),
        },
      },
      optimizeDeps: {
        exclude: [...(config.optimizeDeps?.exclude || []), resolveRoot('style.config.css.ts')],
      },
    });
  },
};
export default config;
