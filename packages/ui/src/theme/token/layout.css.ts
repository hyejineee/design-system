import type { BaseTheme } from '@ui/types/token';
import type { PartialDeep } from '@ui/util/types';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const createLayoutProperties = <T>(theme: T & PartialDeep<BaseTheme>) => {
  return defineProperties({
    properties: {
      display: ['none', 'flex', 'block', 'inline'],
      flexDirection: ['row', 'column'],
      justifyContent: [
        'stretch',
        'flex-start',
        'center',
        'flex-end',
        'space-around',
        'space-between',
      ],
      alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
      gap: theme.space,
      padding: theme.space,
      paddingTop: theme.space,
      paddingBottom: theme.space,
      paddingLeft: theme.space,
      paddingRight: theme.space,
      margin: theme.space,
      marginTop: theme.space,
      marginBottom: theme.space,
      marginLeft: theme.space,
      marginRight: theme.space,
    },
    shorthands: {
      p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
      px: ['paddingLeft', 'paddingRight'],
      py: ['paddingTop', 'paddingBottom'],
      pt: ['paddingTop'],
      pb: ['paddingBottom'],
      pl: ['paddingLeft'],
      pr: ['paddingRight'],
      m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
      mx: ['marginLeft', 'marginRight'],
      my: ['marginTop', 'marginBottom'],
      mt: ['marginTop'],
      mb: ['marginBottom'],
      ml: ['marginLeft'],
      mr: ['marginRight'],
      placeItems: ['justifyContent', 'alignItems'],
    },
    conditions: {
      mobile: {},
      tablet: { '@media': 'screen and (min-width: 768px)' },
      desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
  });
};
