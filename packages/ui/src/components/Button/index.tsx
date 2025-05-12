import { getThemeConfig } from '@ui/system';
import { PolymorphicProps, splitStyleProps } from '@ui/util';
// import {  PolymorphicProps} from '@ui/util/types';
import clsx from 'clsx';
import type { ElementType } from 'react';
import { buttonStyles } from './style.css';
import type { ButtonOptions } from './types';

export const Button = <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, ButtonOptions>
) => {
  const {
    as,
    ref,
    className,
    children,
    variant = 'solid',
    colorVariant = 'primary',
    size = 'md',
    isRound = false,
    disabled = false,
  } = props;
  const Element = as || 'button';
  const styleConfig = getThemeConfig();
  const { styleProps, restProps } = splitStyleProps(props, styleConfig.sprinkles);

  const buttonVariantStyle = buttonStyles({
    colorVariant: disabled ? 'disabled' : colorVariant,
    variant,
    size,
    isRound,
  });
  const sprinklesStyle = styleConfig.sprinkles({
    alignItems: 'center',
    justifyContent: 'center',
    br: 4,
    ...styleProps,
  });

  const finalClassName = clsx(className, sprinklesStyle, buttonVariantStyle);

  return (
    <Element ref={ref} disabled={disabled} {...restProps} className={finalClassName}>
      {children}
    </Element>
  );
};
