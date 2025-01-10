import type { BaseTheme } from '@ui/theme/base';
import { createColorProperties, resolveColorObject } from '@ui/theme/color';
import { createLayoutProperties } from '@ui/theme/space';
import { createThemeContractObject } from '@ui/util/styles';
import type { TransformLeafValues } from '@ui/util/types';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { createSprinkles } from '@vanilla-extract/sprinkles';

export const createTheme = (theme: BaseTheme) => {
  const _theme = {
    ...theme,
    color: {
      bg: resolveColorObject(theme.color.bg as any, theme.palette),
      content: resolveColorObject(theme.color.content as any, theme.palette),
      border: resolveColorObject(theme.color.border as any, theme.palette),
      surface: resolveColorObject(theme.color.surface as any, theme.palette),
      overlay: resolveColorObject(theme.color.overlay as any, theme.palette),
    },
  };

  const themeContract = createThemeContract({
    ...(createThemeContractObject(_theme) as unknown as TransformLeafValues<BaseTheme, string>),
  });

  const sprinkles = createSprinkles(
    createColorProperties(theme.color, theme.palette),
    createLayoutProperties(theme.space)
  );

  createGlobalTheme(
    ':root',
    themeContract,
    _theme as unknown as TransformLeafValues<BaseTheme, string>
  );

  return {
    theme: themeContract,
    sprinkles,
  };
};

export type BaseSprinkles = Parameters<ReturnType<typeof createTheme>['sprinkles']>[0];
