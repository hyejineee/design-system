import { baseTheme } from '../createTheme/baseTheme.css';
import type { BaseTheme } from '../createTheme/types';
import { createThemeSprinkles } from './createThemSprinkles';

export const baseSprinkles = createThemeSprinkles(baseTheme as unknown as BaseTheme);
