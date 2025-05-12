import { defineProperties } from '@vanilla-extract/sprinkles';
import type { Spaces } from './space.types';

export const createLayoutProperties = (space: Spaces) => {
  const layoutProperties = defineProperties({
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
      gap: space,
      padding: space,
      paddingTop: space,
      paddingBottom: space,
      paddingLeft: space,
      paddingRight: space,
      margin: space,
      marginTop: space,
      marginBottom: space,
      marginLeft: space,
      marginRight: space,
      borderRadius: space,
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
      br: ['borderRadius'],
    },
    conditions: {
      mobile: {},
      tablet: { '@media': 'screen and (min-width: 768px)' },
      desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
  });

  return layoutProperties;
};
