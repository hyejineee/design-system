import { createThemeSprinkles, type BaseTheme } from '../system';
import { baseTheme } from './baseTheme.css';

export const baseSprinkles = createThemeSprinkles(baseTheme as unknown as BaseTheme);
