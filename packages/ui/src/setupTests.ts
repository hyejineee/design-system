import '@testing-library/jest-dom';
import { setThemeConfig } from '@ui/system/createThemeConfig';
import { baseSprinkles } from './theme/baseSprinkles.css';
import { baseTheme } from './theme/baseTheme.css';

setThemeConfig({
  theme: baseTheme,
  sprinkles: baseSprinkles,
});
