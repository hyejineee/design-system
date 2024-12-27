import { baseTheme } from '@ui/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const boxStyle = style({
  color: baseTheme.color.content.primary.default,
  backgroundColor: baseTheme.color.bg.disable,
});
