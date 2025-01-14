import type { createThemeSprinkles } from './createThemSprinkles';

export type BaseSprinkles = Parameters<ReturnType<typeof createThemeSprinkles>>[0];
