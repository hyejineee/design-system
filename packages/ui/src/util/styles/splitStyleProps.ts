import type { BaseSprinkles, createTheme } from '@ui/system/createTheme';

export type StyleProps<T> = BaseSprinkles & T;
export const splitStyleProps = <T extends object>(
  props: StyleProps<T>,
  sprinkles: ReturnType<typeof createTheme>['sprinkles']
) => {
  const keys = new Set<string>(sprinkles.properties);

  const styleProps: Partial<BaseSprinkles> = {};
  const restProps: Partial<T> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (keys.has(key)) {
      Object.assign(styleProps, { [key]: value });
    } else {
      Object.assign(restProps, { [key]: value });
    }
  });

  return { styleProps, restProps };
};
