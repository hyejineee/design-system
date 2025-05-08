import { color, palette } from '@ui/theme/color';
import { createColorProperties } from '@ui/theme/color/createColorProperties';
import { createLayoutProperties, space } from '@ui/theme/space';
import { deepMerge } from '@ui/util/functions';
import type { PartialDeep } from '@ui/util/types';
import { createSprinkles } from '@vanilla-extract/sprinkles';
import type { BaseTheme } from '../createTheme/types';

export const createThemeSprinkles = (theme?: PartialDeep<BaseTheme>) => {
  const baseTheme = {
    color,
    space,
    palette,
  };

  const _theme = deepMerge(baseTheme, theme);

  const colorProperties = createColorProperties(_theme.color, _theme.palette || baseTheme.palette);
  const layoutProperties = createLayoutProperties(_theme.space || baseTheme.space);
  const _sprinkles = createSprinkles(layoutProperties, colorProperties);

  return _sprinkles;
};
