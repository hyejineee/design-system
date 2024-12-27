import type { Spaces } from '@ui/theme/space/space.types';
import type { TransformLeafValues } from '@ui/util/types';

export const createSpaceContract = (): TransformLeafValues<Spaces, string> => {
  return {
    0: '',
    4: '',
    8: '',
    10: '',
    12: '',
    16: '',
    20: '',
    24: '',
    32: '',
    36: '',
    40: '',
    48: '',
    52: '',
    56: '',
    60: '',
  };
};

export const space: Spaces = {
  0: 0,
  4: 4,
  8: 8,
  10: 10,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  36: 36,
  40: 40,
  48: 48,
  52: 52,
  56: 56,
  60: 60,
};
