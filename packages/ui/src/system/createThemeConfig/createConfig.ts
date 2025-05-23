import { baseSprinkles } from '@ui/theme/baseSprinkles.css';
import { baseTheme } from '@ui/theme/baseTheme.css';
import { deepMerge } from '@ui/util/functions';
import type { BaseTheme } from '../createTheme/types';
import type { createThemeSprinkles } from '../createThemeSprinkles/createThemSprinkles';

export interface ThemeConfig {
  theme: BaseTheme;
  sprinkles: ReturnType<typeof createThemeSprinkles>;
}

let currentConfig: ThemeConfig | null = null;

export const setThemeConfig = (config?: Partial<ThemeConfig>) => {
  const defaultConfig: ThemeConfig = {
    theme: baseTheme as unknown as BaseTheme,
    sprinkles: baseSprinkles,
  };

  const merged = deepMerge(defaultConfig, config);
  currentConfig = merged;
};

export const getThemeConfig = (): ThemeConfig => {
  if (!currentConfig) {
    throw new Error('Theme configuration has not been set. Please call setThemeConfig first.');
  }

  return currentConfig;
};
