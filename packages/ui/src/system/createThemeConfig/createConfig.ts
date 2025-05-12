import { baseSprinkles } from '@ui/theme/baseSprinkles.css';
import { baseTheme } from '@ui/theme/baseTheme.css';
import type { BaseTheme } from '../createTheme/types';
import type { createThemeSprinkles } from '../createThemeSprinkles/createThemSprinkles';

export interface ThemeConfig {
  theme: BaseTheme;
  sprinkles: ReturnType<typeof createThemeSprinkles>;
}

let currentConfig: ThemeConfig | null = null;

export const setThemeConfig = (config?: ThemeConfig) => {
  console.log('setThemeConfig');

  const defaultConfig: ThemeConfig = {
    theme: baseTheme as unknown as BaseTheme,
    sprinkles: baseSprinkles,
  };

  if (!config) return defaultConfig;

  currentConfig = config;
};

export const getThemeConfig = (): ThemeConfig => {
  if (!currentConfig) {
    throw new Error('Theme configuration has not been set. Please call setThemeConfig first.');
  }

  return currentConfig;
};
