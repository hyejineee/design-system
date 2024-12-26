import { baseTheme } from '@ui/theme/theme';
import { layoutProperties } from '@ui/theme/token';
import { colorProperties } from '@ui/theme/token/color/colorProperties.css';

import type { BaseTheme } from '@ui/types/token';
import { createSprinkles as createVanillaSprinkles } from '@vanilla-extract/sprinkles';

/**
 * TODO
 * - border에 대한 properties 있으면 좋을 듯
 * - 파라미터 타입 BaseTheme 괜찮은지 검토
 *
 */
export const createSprinkles = (mergedTheme: BaseTheme) => {
  const sprinkles = createVanillaSprinkles(layoutProperties, colorProperties);

  return sprinkles;
};

export type Sprinkles = Parameters<ReturnType<typeof createSprinkles>>[0];

export const baseSprinkles = createSprinkles(baseTheme);
