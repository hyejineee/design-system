import { getThemeConfig } from '@ui/system/createThemeConfig';
import { splitStyleProps } from '@ui/util/styles';
import type { UtilStyleProps } from '@ui/util/styles/style.types';
import type { ChildrenProps, PolymorphicProps } from '@ui/util/types';
import clsx from 'clsx';
import type { ElementType } from 'react';

interface ColumnProps extends UtilStyleProps, ChildrenProps {}

export const Column = <T extends ElementType = 'div'>(props: PolymorphicProps<T, ColumnProps>) => {
  const { as, ref, className, ...rest } = props;
  const Element = as || 'div';
  const styleConfig = getThemeConfig();
  const { styleProps, restProps } = splitStyleProps(rest, styleConfig.sprinkles);

  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
  } as const;

  const finalClassName = clsx(styleConfig.sprinkles({ ...baseStyles, ...styleProps }), className);

  return <Element ref={ref} {...restProps} className={finalClassName} />;
};
