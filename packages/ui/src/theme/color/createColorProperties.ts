import { defineProperties } from '@vanilla-extract/sprinkles';
import type {
  BgColorTokenKey,
  BorderColorTokenKey,
  Colors,
  ContentColorTokenKey,
  ElevationLevel,
  Palettes,
  PrimitiveColorTokenKey,
  SemanticColorTokenKey,
} from './color.type';

export const createColorProperties = (colors: Colors, palettes: Palettes) => {
  const paletteTokens = {} as Record<PrimitiveColorTokenKey | SemanticColorTokenKey, string>;
  const bgTokens = {} as Record<
    BgColorTokenKey | `surface.${ElevationLevel}` | `overlay.${ElevationLevel}`,
    string
  >;
  const contentTokens = {} as Record<ContentColorTokenKey, string>;
  const borderTokens = {} as Record<BorderColorTokenKey, string>;

  Object.entries(palettes).forEach(([token, group]) => {
    Object.entries(group).forEach(([unit, value]) => {
      const tokenKey = `${token}.${unit}` as keyof typeof paletteTokens;
      paletteTokens[tokenKey] = value as string;
    });
  });

  ['content', 'bg', 'border'].forEach((semanticKey) => {
    const tokenGroup = colors[semanticKey as keyof typeof colors];

    Object.entries(tokenGroup).forEach(([key, value]) => {
      console.log('key', semanticKey, key, value);
      if (semanticKey === 'content') {
        const tokenKey = `content.${key}` as keyof typeof contentTokens;
        contentTokens[tokenKey] = value;
      }

      if (semanticKey === 'bg') {
        const tokenKey = `bg.${key}` as keyof typeof bgTokens;
        bgTokens[tokenKey] = value;
      }

      if (semanticKey === 'border') {
        const tokenKey = `border.${key}` as keyof typeof borderTokens;
        borderTokens[tokenKey] = value;
      }
    });
  });

  const colorProperties = defineProperties({
    properties: {
      color: { ...contentTokens, ...paletteTokens },
      backgroundColor: { ...bgTokens, ...paletteTokens },
      borderColor: { ...borderTokens, ...paletteTokens },
    },
    shorthands: {
      bgColor: ['backgroundColor'],
      brColor: ['borderColor'],
    },
  });

  return colorProperties;
};
