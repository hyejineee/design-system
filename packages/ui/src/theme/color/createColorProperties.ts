import { defineProperties } from '@vanilla-extract/sprinkles';
import type {
  BgPath,
  BorderPath,
  Colors,
  ContentPath,
  HexColorKey,
  HexColorType,
  InteractType,
  Palettes,
  PrimitiveColorUnit,
} from './color.type';
import { getPaletteColor } from './util';

export const createColorProperties = (colors: Colors, palettes: Palettes) => {
  const contentTokens: Record<ContentPath | PrimitiveColorUnit, string> = {} as Record<
    ContentPath | PrimitiveColorUnit,
    string
  >;
  const bgTokens: Record<BgPath | PrimitiveColorUnit, string> = {} as Record<
    BgPath | PrimitiveColorUnit,
    string
  >;
  const borderTokens: Record<BorderPath | PrimitiveColorUnit, string> = {} as Record<
    BorderPath | PrimitiveColorUnit,
    string
  >;

  (['content', 'bg', 'border'] as const).forEach((semanticKey) => {
    const target =
      semanticKey === 'content' ? contentTokens : semanticKey === 'bg' ? bgTokens : borderTokens;

    const tokenGroup = colors[semanticKey as keyof typeof colors];

    Object.entries(tokenGroup).forEach(([key, value]) => {
      if (key === 'disable') {
        const colorValue = getPaletteColor(value, palettes);

        if (colorValue) {
          Object.assign(target, { [`${semanticKey}.disable`]: colorValue });
        }
        return;
      }

      ['default', 'inverse', 'subtle'].forEach((status) => {
        const colorValue = getPaletteColor(value[status], palettes);
        if (colorValue) {
          Object.assign(target, { [`${semanticKey}.${key}.${status}`]: colorValue });
        }
      });

      if (value.interact) {
        const interactColors: InteractType = value.interact;
        (Object.entries(interactColors) as Array<[keyof InteractType, PrimitiveColorUnit]>).forEach(
          ([interactKey, interactValue]) => {
            const colorValue = getPaletteColor(interactValue, palettes);
            if (colorValue) {
              Object.assign(target, {
                [`${semanticKey}.${key}.interact.${interactKey}`]: colorValue,
              });
            }
          }
        );
      }
    });
  });

  // palettes 컬러 추가
  (Object.entries(palettes) as Array<[keyof Palettes, HexColorType]>).forEach(
    ([paletteKey, shades]) => {
      (Object.entries(shades) as Array<[HexColorKey, string]>).forEach(([shade, hexValue]) => {
        const tokeKey = `${paletteKey}.${shade}`;

        Object.assign(contentTokens, { [tokeKey]: hexValue });
        Object.assign(bgTokens, { ...bgTokens, [tokeKey]: hexValue });
        Object.assign(borderTokens, { [tokeKey]: hexValue });
      });
    }
  );

  const colorProperties = defineProperties({
    properties: {
      color: contentTokens,
      backgroundColor: bgTokens,
      borderColor: borderTokens,
    },
    shorthands: {
      bgColor: ['backgroundColor'],
      brColor: ['borderColor'],
    },
  });

  return colorProperties;
};
