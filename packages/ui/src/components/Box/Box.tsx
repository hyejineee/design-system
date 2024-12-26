import { baseSprinkles, type Sprinkles } from '@ui/system/createSprinkles';
import { splitStyleProps } from '@ui/util/styles';
import type { ReactNode } from 'react';

interface BoxProps
  extends Pick<
    Sprinkles,
    | 'bgColor'
    | 'borderColor'
    | 'color'
    | 'p'
    | 'px'
    | 'py'
    | 'pt'
    | 'pb'
    | 'pl'
    | 'pr'
    | 'm'
    | 'mx'
    | 'my'
    | 'mt'
    | 'mb'
    | 'ml'
    | 'mr'
  > {
  children?: ReactNode;
}

export const Box = (props: BoxProps) => {
  const { styleProps } = splitStyleProps(props, baseSprinkles);
  return <div className={baseSprinkles({ ...styleProps })}></div>;
};
