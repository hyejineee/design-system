import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';
import { mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

// 현재 디렉토리를 기준으로 상대 경로를 절대 경로로 변환
const resolveRoot = (dir: string) => resolve(__dirname, '..', dir);

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
      resolve: {
        alias: {
          '@ui/types': resolveRoot('src/types'),
          '@ui/theme': resolveRoot('src/theme'),
          '@ui/system': resolveRoot('src/system'),
          '@ui/util': resolveRoot('src/util'),
        },
      },
      optimizeDeps: {
        include: [...(config.optimizeDeps?.include || []), '../style.config.ts'],
      },
    });
  },
};
export default config;
