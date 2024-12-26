import { baseTheme } from '@ui/theme/theme';
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
} from '@ui/types/token';

export const getPaletteColor = (colorToken: string | null, palettes: Palettes) => {
  if (!colorToken) return undefined;
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

  return palettes[palette][shade];
};

export const createColorProperties = () => {
  const colors = baseTheme.color as Colors;
  const palette = baseTheme.palette as Palettes;

  const contentTokens: Record<ContentPath, string> = {} as Record<ContentPath, string>;
  const bgTokens: Record<BgPath, string> = {} as Record<BgPath, string>;
  const borderTokens: Record<BorderPath, string> = {} as Record<BorderPath, string>;

  (['content', 'bg', 'border'] as const).forEach((semanticKey) => {
    const target =
      semanticKey === 'content' ? contentTokens : semanticKey === 'bg' ? bgTokens : borderTokens;

    const tokenGroup = colors[semanticKey as keyof typeof colors];

    Object.entries(tokenGroup).forEach(([key, value]) => {
      if (key === 'disable') {
        const colorValue = getPaletteColor(value, palette);
        if (colorValue) {
          Object.assign(target, { [`${semanticKey}.disable`]: colorValue });
        }
        return;
      }

      ['default', 'inverse', 'subtle'].forEach((status) => {
        const colorValue = getPaletteColor(value[status], palette);
        if (colorValue) {
          Object.assign(target, { [`${semanticKey}.${key}.${status}`]: colorValue });
        }
      });

      if (value.interact) {
        const interactColors: InteractType = value.interact;
        (Object.entries(interactColors) as Array<[keyof InteractType, PrimitiveColorUnit]>).forEach(
          ([interactKey, interactValue]) => {
            const colorValue = getPaletteColor(interactValue, palette);
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
  (Object.entries(palette) as Array<[keyof Palettes, HexColorType]>).forEach(
    ([paletteKey, shades]) => {
      (Object.entries(shades) as Array<[HexColorKey, string]>).forEach(([shade, hexValue]) => {
        const tokeKey = `${paletteKey}.${shade}`;

        Object.assign(contentTokens, { [tokeKey]: hexValue });
        Object.assign(bgTokens, { [tokeKey]: hexValue });
        Object.assign(borderTokens, { [tokeKey]: hexValue });
      });
    }
  );

  return {
    color: contentTokens,
    backgroundColor: bgTokens,
    borderColor: borderTokens,
  };
};
