import { createTheme, type BaseTheme } from '@repo/ui/system/createTheme';
import { createThemeSprinkles } from '@repo/ui/system/createThemeSprinkles';
import type { PartialDeep } from '@repo/ui/util/types';

export const customTheme: PartialDeep<BaseTheme> = {
  color: {
    bg: {
      error: {
        default: 'red.500',
      },
    },
  },
};
export const appTheme = createTheme(customTheme);
export const sprinkles = createThemeSprinkles(customTheme);
