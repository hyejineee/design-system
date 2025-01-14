import type { TransformLeafValues } from '@ui/util/types';
import type { HexColorType, Palettes } from './color.type';

type ColorValue = string | number | { [key: string]: ColorValue };

export const resolveColorObject = <T extends ColorValue>(
  obj: T,
  palette: Palettes
): TransformLeafValues<T, string> => {
  if (typeof obj === 'string') {
    return getPaletteColor(obj, palette) as TransformLeafValues<T, string>;
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = {} as TransformLeafValues<T, string>;

    Object.entries(obj as Record<string, ColorValue>).forEach(([key, value]) => {
      Object.assign(result, { [key]: resolveColorObject(value, palette) });
    });

    return result;
  }

  return obj as TransformLeafValues<T, string>;
};

export const getPaletteColor = (colorToken: string, palettes: Palettes) => {
  if (!colorToken) return undefined;

  if (colorToken.startsWith('#')) return colorToken;

  const [palette, shade] = colorToken.split('.');

  const isPaletteKey = (key: string): key is keyof Palettes => {
    return key in palettes;
  };

  const isHexColorKey = (key: string): key is keyof HexColorType => {
    const shades = Object.keys(palettes.brand);
    return shades.includes(key as (typeof shades)[number]);
  };

  if (!isPaletteKey(palette) || !isHexColorKey(shade)) {
    return undefined;
  }

  const hexColor = palettes[palette][shade];

  return hexColor;
};
