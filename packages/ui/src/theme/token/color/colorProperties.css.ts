/**
 * TODO
 * - COLOR_PROPERTIES_KEY 이거 상수로 선언해도 괜찮은지...? 어쩔 수 없는 건가? -> sprinkles.properties로 사용할 수 있음.
 * -
 */

import { defineProperties } from '@vanilla-extract/sprinkles';
import { createColorProperties } from './createColorProperties';

export const colorProperties = defineProperties({
  properties: createColorProperties(),
  shorthands: {
    bgColor: ['backgroundColor'],
    brColor: ['borderColor'],
  },
});
