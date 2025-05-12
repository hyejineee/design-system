import { baseSprinkles } from '@ui/theme/baseSprinkles.css';
import { baseTheme } from '@ui/theme/baseTheme.css';
import { setThemeConfig } from './src/system/createThemeConfig/createConfig';

console.log('style.config.ts2');
setThemeConfig({
  theme: baseTheme,
  sprinkles: baseSprinkles,
});
