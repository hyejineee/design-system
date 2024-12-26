import type { createSprinkles, Sprinkles } from '@ui/system/createSprinkles';

export type StyleProps<T> = Sprinkles & T;
export const splitStyleProps = <T extends object>(
  props: StyleProps<T>,
  sprinkles: ReturnType<typeof createSprinkles>
) => {
  const keys = new Set<string>(sprinkles.properties);

  const styleProps: Partial<Sprinkles> = {};
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
