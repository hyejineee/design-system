import { createTheme } from '../system/createTheme';
import { color } from './color';
import { palette } from './palettes';
import { space } from './space';

export const { theme: baseTheme, sprinkles: baseSprinkles } = createTheme({
  color,
  space,
  palette,
});
