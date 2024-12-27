import type { TransformLeafValues } from '@ui/util/types';
import type { Colors, MainSemanticColorType, SubSemanticColorType } from './color.type';

export const createSemanticColorContract = () => {
  const semanticKeys: (keyof Colors)[] = ['bg', 'border', 'content', 'overlay', 'surface'];
  const mainKeys: (keyof MainSemanticColorType)[] = ['primary', 'secondary', 'tertiary'];
  const subKeys: (keyof SubSemanticColorType)[] = ['error', 'info', 'success'];

  const contract: TransformLeafValues<Colors, string> = {} as TransformLeafValues<Colors, string>;

  semanticKeys.forEach((semanticKey) => {
    Object.assign(contract, { [semanticKey]: {} });

    if (!(semanticKey === 'overlay' || semanticKey === 'surface')) {
      mainKeys.forEach((mainKey) => {
        Object.assign(contract[semanticKey], {
          [mainKey]: {
            default: '',
            inverse: '',
            subtle: '',
            interact: {
              default: '',
              hover: '',
              pressed: '',
            },
          },
        });
      });

      subKeys.forEach((subKey) => {
        Object.assign(contract[semanticKey], {
          [subKey]: {
            default: '',
            subtle: '',
            interact: {
              default: '',
              hover: '',
              pressed: '',
            },
          },
        });
      });

      Object.assign(contract[semanticKey], {
        disable: '',
      });
    }

    if (semanticKey === 'overlay') {
      Object.assign(contract[semanticKey], {
        none: '',
        subtle: '',
        light: '',
        medium: '',
        deep: '',
        heavy: '',
        full: '',
      });
    }

    if (semanticKey === 'surface') {
      Object.assign(contract[semanticKey], {
        none: '',
        low: '',
        medium: '',
        raised: '',
        high: '',
        highest: '',
      });
    }
  });

  return contract;
};
