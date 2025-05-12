import { getThemeConfig } from '@ui/system';
import type { BgColor, BorderColor, ContentColor } from '@ui/theme';
import { recipe } from '@vanilla-extract/recipes';
import type { ColorVariant, ShapeVariant } from './types';

const createButtonStyle = () => {
  const { theme } = getThemeConfig();

  const createVariantStyle = (variant: ShapeVariant, colorVariant: ColorVariant) => {
    if (colorVariant === 'disabled') {
      const bgColor = `disabled.${variant}Bg` as keyof BgColor;
      const color = `disabled.${variant}Color` as keyof ContentColor;
      const borderColor = `disabled.${variant}Border` as keyof BorderColor;
      console.log('disabled', bgColor, color, borderColor);

      return {
        variants: {
          colorVariant,
          variant,
        },
        style: [
          {
            cursor: 'not-allowed',
            backgroundColor: theme.color.bg[bgColor],
            color: theme.color.content[color],
            borderColor: theme.color.border[borderColor],
          },
        ],
      };
    }

    const bgColor = `${colorVariant}.${variant}Bg` as keyof BgColor;
    const hoverBgColor = `${colorVariant}.${variant}HoverBg` as keyof BgColor;
    const activeBgColor = `${colorVariant}.${variant}ActiveBg` as keyof BgColor;

    const color = `${colorVariant}.${variant}Color` as keyof ContentColor;
    const activeColor = `${colorVariant}.${variant}ActiveColor` as keyof ContentColor;

    const borderColor = `${colorVariant}.${variant}Border` as keyof BorderColor;
    const hoverBorderColor = `${colorVariant}.${variant}HoverBorder` as keyof BorderColor;
    const activeBorderColor = `${colorVariant}.${variant}ActiveBorder` as keyof BorderColor;

    return {
      variants: {
        colorVariant,
        variant,
      },
      style: [
        {
          cursor: 'pointer',
          backgroundColor: theme.color.bg[bgColor],
          color: theme.color.content[color],
          borderColor: theme.color.border[borderColor],
          ':hover': {
            backgroundColor: theme.color.bg[hoverBgColor],
            color: theme.color.content[color],
            borderColor: theme.color.border[hoverBorderColor],
          },
          ':active': {
            backgroundColor: theme.color.bg[activeBgColor],
            color: theme.color.content[activeColor],
            borderColor: theme.color.border[activeBorderColor],
          },
        },
      ],
    };
  };

  return recipe({
    base: {
      display: 'flex',
      border: '1px solid',
    },

    variants: {
      variant: {
        solid: {},
        outline: {},
        ghost: {},
        soft: {},
      },
      colorVariant: {
        primary: {},
        secondary: {},
        tertiary: {},
        info: {},
        error: {},
        success: {},
        warning: {},
        disabled: {},
      },
      size: {
        xs: { height: '1.25rem', padding: '0 0.75rem', fontSize: '0.75rem' },
        sm: { height: '1.5rem', padding: '0 1rem', fontSize: '0.875rem' },
        md: { height: '2rem', padding: '0 1rem', fontSize: '0.875rem' },
        lg: { height: '2.5rem', padding: '0 1.5rem', fontSize: '1rem' },
        xl: { height: '3rem', padding: '0 1.5rem', fontSize: '1.25rem' },
      },
      isRound: {
        true: { borderRadius: '9999px' },
      },
      hasIcon: {
        true: {},
      },
    },

    compoundVariants: [
      createVariantStyle('solid', 'primary'),
      createVariantStyle('soft', 'primary'),
      createVariantStyle('outline', 'primary'),
      createVariantStyle('ghost', 'primary'),

      createVariantStyle('solid', 'secondary'),
      createVariantStyle('soft', 'secondary'),
      createVariantStyle('outline', 'secondary'),
      createVariantStyle('ghost', 'secondary'),

      createVariantStyle('solid', 'tertiary'),
      createVariantStyle('soft', 'tertiary'),
      createVariantStyle('outline', 'tertiary'),
      createVariantStyle('ghost', 'tertiary'),

      createVariantStyle('solid', 'info'),
      createVariantStyle('soft', 'info'),
      createVariantStyle('outline', 'info'),
      createVariantStyle('ghost', 'info'),

      createVariantStyle('solid', 'error'),
      createVariantStyle('soft', 'error'),
      createVariantStyle('outline', 'error'),
      createVariantStyle('ghost', 'error'),

      createVariantStyle('solid', 'success'),
      createVariantStyle('soft', 'success'),
      createVariantStyle('outline', 'success'),
      createVariantStyle('ghost', 'success'),

      createVariantStyle('solid', 'warning'),
      createVariantStyle('soft', 'warning'),
      createVariantStyle('outline', 'warning'),
      createVariantStyle('ghost', 'warning'),

      createVariantStyle('solid', 'disabled'),
      createVariantStyle('soft', 'disabled'),
      createVariantStyle('outline', 'disabled'),
      createVariantStyle('ghost', 'disabled'),
    ],
  });
};

export const buttonStyles = createButtonStyle();
