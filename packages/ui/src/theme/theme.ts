import { createTheme } from '@ui/system/createTheme';
import type { BaseTheme } from '@ui/types/token';
import { createThemeContractObject } from '@ui/util/styles';
import { color, palette, space } from './token';

export const baseTheme = createTheme<BaseTheme>({
  palette,
  color,
  space,
} as BaseTheme);
export const baseThemeContract = createThemeContractObject(baseTheme);
