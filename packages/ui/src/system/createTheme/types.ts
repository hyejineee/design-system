import type { Colors, Palettes } from '@ui/theme/color';
import type { Spaces } from '@ui/theme/space';
import type { createTheme } from './createTheme';

export interface BaseTheme {
  palette: Palettes;
  color: Colors;
  space: Spaces;
}

export type VETheme = ReturnType<typeof createTheme>;
