import { setThemeConfig } from './src/system/createThemeConfig/createConfig';
import { baseSprinkles, baseTheme, type BaseTheme } from './src/theme/base';

setThemeConfig({
  theme: baseTheme as unknown as BaseTheme,
  sprinkles: baseSprinkles,
});
