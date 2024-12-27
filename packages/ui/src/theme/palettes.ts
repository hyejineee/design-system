import type { Palettes } from '@ui/types/token';
import type { TransformLeafValues } from '@ui/util/types';

export const brand = {
  100: '#B3FEBB',
  200: '#99FDA4',
  300: '#66FC76',
  400: '#33FB49',
  50: '#CCFED1',
  500: '#00FA1B',
  600: '#00C816',
  700: '#009610',
  800: '#00640B',
  900: '#003205',
  light: '#E6FFE8',
  dark: '#001903',
};
export const brandSubtle = {
  100: '#DDB3FD',
  200: '#D19AFD',
  300: '#BA67FB',
  400: '#A335FA',
  50: '#E8CCFE',
  500: '#8C02F9',
  600: '#7002C7',
  700: '#540195',
  800: '#380164',
  900: '#1C0032',
  light: '#F4E6FE',
  dark: '#0E0019',
};
export const red = {
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  50: '#fef2f2',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  dark: '#450a0a',
  light: '##fee2e2',
};
export const gray = {
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  50: '#fafafa',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  light: '#ffffff',
  dark: '#0a0a0a',
};
export const yellow = {
  100: '#FFF9C4',
  200: '#FFF59D',
  300: '#FFF176',
  400: '#FFEE58',
  50: '#FFFDE7',
  500: '#FFEB3B',
  600: '#FDD835',
  700: '#FBC02D',
  800: '#F9A825',
  900: '#F57F17',
  light: '#F57F17',
  dark: '#F57F17',
};
export const green = {
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  50: '#f0fdf4',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  light: '#052e16',
  dark: '#052e16',
};
export const teal = {
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  50: '#f0fdfa ',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  light: '#134e4a',
  dark: '#134e4a',
};

const blue = {
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  50: '#eff6ff',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  light: '#eff6ff',
  dark: '#1e3a8a',
};

export const createPaletteContract = (): TransformLeafValues<Palettes, string> => {
  return {
    brand,
    brandSubtle,
    gray,
    red,
    yellow,
    teal,
    green,
    blue,
  };
};

export const palette: Palettes = {
  brand,
  brandSubtle,
  gray,
  red,
  yellow,
  teal,
  green,
  blue,
};
