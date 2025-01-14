import { createTheme } from '@repo/ui/system/createTheme';
import { createThemeSprinkles } from '@repo/ui/system/createThemeSprinkles';

export const appTheme: ReturnType<typeof createTheme> = createTheme();
export const sprinkles = createThemeSprinkles();
