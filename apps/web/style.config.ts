import { setThemeConfig } from '@repo/ui/system/createThemeConfig';
import { baseSprinkles, baseTheme } from '@repo/ui/theme/base';

console.log('setThemeConfig call');
setThemeConfig({
  theme: baseTheme,
  sprinkles: baseSprinkles,
});
