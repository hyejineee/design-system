import {
  color,
  palette,
  space,
  type Colors,
  type SemanticColorToken,
  type VariantColor,
} from '@ui/theme';
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

  console.log('mergedTheme', mergedTheme.color);

  const paletteContract = createThemeContract(
    mergedTheme.palette as unknown as TransformLeafValues<BaseTheme, string>
  );

  Object.entries(mergedTheme.color.variant).forEach(([variantKey, variant]) => {
    Object.entries(variant).forEach(([key, value]) => {
      console.log('key', key);
      console.log('value', value);
      if (typeof value === 'string' && !value.includes('transparent')) {
        const [token, hex] = value.split('.');
        mergedTheme.color.variant[variantKey as SemanticColorToken][key] =
          paletteContract[token as unknown as VariantColor][hex];
      }
    });
  });

  console.log('mergedTheme', mergedTheme.color);

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

  console.log('themeContract', themeContract);

  return themeContract as unknown as BaseTheme;
};
