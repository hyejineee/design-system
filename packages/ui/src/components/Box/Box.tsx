import { getThemeConfig } from '@ui/system/createThemeConfig/createConfig';
import { splitStyleProps } from '@ui/util/styles';
import type { UtilStyleProps } from '@ui/util/styles/style.types';

import { polyForwardRef } from '@ui/util/types/polymorphic';

interface BoxProps extends UtilStyleProps {}
export const Box = polyForwardRef<'div', BoxProps>(({ as: Element = 'div', ...props }, ref) => {
  const styleConfig = getThemeConfig();
  const { styleProps, restProps } = splitStyleProps(props, styleConfig.sprinkles);
  return <Element ref={ref} {...restProps} class={styleConfig.sprinkles({ ...styleProps })} />;
});
