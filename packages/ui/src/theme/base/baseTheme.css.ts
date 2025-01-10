import { createTheme } from '@ui/system/createThemeConfig/createTheme';
import { color } from '../color';
import { palette } from '../color/palette';
import { space } from '../space';

export const { theme: baseTheme, sprinkles: baseSprinkles } = createTheme({
  color,
  space,
  palette,
});
