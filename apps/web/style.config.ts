import { createTheme } from '@repo/ui/system/createTheme';
import { setThemeConfig } from '@repo/ui/system/createThemeConfig';
import { createThemeSprinkles } from '@repo/ui/system/createThemeSprinkles';

const theme = createTheme();
const sprinkles = createThemeSprinkles();

setThemeConfig({
  theme: theme,
  sprinkles: sprinkles,
});
