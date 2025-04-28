import { color, palette, resolveColorObject, space } from '@ui/theme';
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

  const _merged = deepMerge(baseTheme, theme);

  const mergedTheme = {
    ...baseTheme,
    color: {
      bg: resolveColorObject(_merged.color.bg as any, _merged.palette),
      content: resolveColorObject(_merged.color.content as any, _merged.palette),
      border: resolveColorObject(_merged.color.border as any, _merged.palette),
      surface: resolveColorObject(_merged.color.surface as any, _merged.palette),
      overlay: resolveColorObject(_merged.color.overlay as any, _merged.palette),
    },
  };

  const themeContract = createThemeContract({
    ...(createThemeContractObject(mergedTheme) as unknown as TransformLeafValues<
      BaseTheme,
      string
    >),
  });

  createGlobalTheme(
    ':root',
    themeContract,
    mergedTheme as unknown as TransformLeafValues<BaseTheme, string>
  );

  return mergedTheme as unknown as BaseTheme;
};
