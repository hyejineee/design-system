import { color, palette, space, type Colors, type Palettes } from '@ui/theme';
import { deepMerge } from '@ui/util/functions';
import { createThemeContractObject } from '@ui/util/styles';
import type { PartialDeep, TransformLeafValues } from '@ui/util/types';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import type { BaseTheme } from './types';

export const createTheme = (theme?: PartialDeep<BaseTheme>) => {
  const baseTheme = {
    color,
    space,
    palette,
  };

  const mergedTheme = deepMerge(baseTheme, theme);

  const paletteContract = createThemeContract(
    mergedTheme.palette as unknown as TransformLeafValues<Palettes, string>
  );

  ['bg', 'content', 'border'].forEach((semanticKey) => {
    Object.entries(mergedTheme.color[semanticKey as keyof typeof mergedTheme.color]).forEach(
      ([key, value]) => {
        if (typeof value === 'string' && !value.includes('transparent')) {
          const [token, hex] = value.split('.');
          //@ts-ignore
          mergedTheme.color[semanticKey][key] = paletteContract[token][hex];
        }
      }
    );
  });

  const contract = createThemeContractObject(mergedTheme);
  const themeContract = createThemeContract({
    ...(contract as unknown as TransformLeafValues<BaseTheme, string>),
  });

  createGlobalTheme(
    ':root',
    { ...themeContract, palette: paletteContract },
    {
      ...(mergedTheme as unknown as TransformLeafValues<BaseTheme, string>),
      color: mergedTheme.color as unknown as TransformLeafValues<Colors, string>,
    }
  );

  return themeContract as unknown as BaseTheme;
};
