import { getThemeConfig } from '@ui/system/createThemeConfig';
import { splitStyleProps } from '@ui/util/styles';
import type { UtilStyleProps } from '@ui/util/styles/style.types';
import type { ChildrenProps, PolymorphicProps } from '@ui/util/types';
import clsx from 'clsx';
import type { ElementType } from 'react';
interface BoxProps extends UtilStyleProps, ChildrenProps {}

export const Box = <T extends ElementType = 'div'>(props: PolymorphicProps<T, BoxProps>) => {
  const { as, ref, className } = props;
  const Element = as || 'div';
  const styleConfig = getThemeConfig();
  const { styleProps, restProps } = splitStyleProps(props, styleConfig.sprinkles);

  const finalClassName = clsx(styleConfig.sprinkles({ ...styleProps }), className);

  return <Element ref={ref} {...restProps} className={finalClassName} />;
};
