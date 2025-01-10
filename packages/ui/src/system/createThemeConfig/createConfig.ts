import { type BaseTheme } from '@ui/theme/base';
import type { createTheme } from './createTheme';

export interface ThemeConfig {
  theme: BaseTheme;
  sprinkles: ReturnType<typeof createTheme>['sprinkles'];
}

let currentConfig: ThemeConfig | null = null;

export const setThemeConfig = (config: ThemeConfig) => {
  currentConfig = config;
};

export const getThemeConfig = (): ThemeConfig => {
  if (!currentConfig) {
    throw new Error('Theme configuration has not been set. Please call setThemeConfig first.');
  }

  return currentConfig;
};
