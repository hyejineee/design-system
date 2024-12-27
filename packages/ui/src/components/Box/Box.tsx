import type { BaseSprinkles } from '@ui/system/createTheme';
import type { ReactNode } from 'react';

interface BoxProps
  extends Pick<
    BaseSprinkles,
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

import { baseSprinkles } from '@ui/theme/theme.css';
import { splitStyleProps } from '@ui/util/styles';

// }
// interface BoxProps {}

export const Box = (props: BoxProps) => {
  const { styleProps, restProps } = splitStyleProps(props, baseSprinkles);
  return <div className={baseSprinkles({ ...styleProps })}>sdf</div>;
};
