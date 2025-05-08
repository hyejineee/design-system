import { baseSprinkles } from '@ui/theme/baseSprinkles.css';
import { baseTheme } from '@ui/theme/baseTheme.css';
import { setThemeConfig } from './src/system/createThemeConfig/createConfig';

setThemeConfig({
  theme: baseTheme,
  sprinkles: baseSprinkles,
});
