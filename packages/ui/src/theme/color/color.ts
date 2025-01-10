import type { Colors } from './color.type';

const bg: Colors['bg'] = {
  primary: {
    default: 'brand.500',
    inverse: 'brand.100',
    subtle: 'brand.700',
    interact: {
      hover: 'brand.800',
      pressed: 'brand.900',
      default: 'brand.500',
    },
  },
  secondary: {
    default: 'brandSubtle.900',
    inverse: 'brandSubtle.100',
    subtle: 'brandSubtle.700',
    interact: {
      hover: 'brandSubtle.800',
      pressed: 'brandSubtle.900',
      default: 'brandSubtle.900',
    },
  },
  tertiary: {
    default: 'gray.900',
    inverse: 'gray.100',
    subtle: 'gray.700',
    interact: {
      hover: 'gray.800',
      pressed: 'gray.900',
      default: 'brandSubtle.900',
    },
  },
  info: {
    default: 'blue.900',
    subtle: 'blue.700',
    interact: {
      hover: 'blue.800',
      pressed: 'blue.900',
      default: 'brandSubtle.900',
    },
  },
  error: {
    default: 'red.900',
    subtle: 'red.700',
    interact: {
      hover: 'red.800',
      pressed: 'red.900',
      default: 'brandSubtle.900',
    },
  },
  success: {
    default: 'green.900',
    subtle: 'green.700',
    interact: {
      hover: 'green.800',
      pressed: 'green.900',
      default: 'brandSubtle.900',
    },
  },
  disable: 'gray.400',
};

const content: Colors['content'] = {
  primary: {
    default: 'brand.900',
    inverse: 'brand.100',
    subtle: 'brand.700',
    interact: {
      hover: 'brand.800',
      pressed: 'brand.900',
      default: 'blue.100',
    },
  },
  secondary: {
    default: 'brandSubtle.900',
    inverse: 'brandSubtle.100',
    subtle: 'brandSubtle.700',
    interact: {
      hover: 'brandSubtle.800',
      pressed: 'brandSubtle.900',
      default: 'blue.100',
    },
  },
  tertiary: {
    default: 'gray.900',
    inverse: 'gray.100',
    subtle: 'gray.700',
    interact: {
      hover: 'gray.800',
      default: 'blue.100',
      pressed: 'gray.900',
    },
  },
  info: {
    default: 'blue.900',
    subtle: 'blue.700',
    interact: {
      hover: 'blue.800',
      default: 'blue.100',
      pressed: 'blue.900',
    },
  },
  error: {
    default: 'red.900',
    subtle: 'red.700',
    interact: {
      hover: 'red.800',
      default: 'blue.100',
      pressed: 'red.900',
    },
  },
  success: {
    default: 'green.900',
    subtle: 'green.700',
    interact: {
      hover: 'green.800',
      default: 'blue.100',
      pressed: 'green.900',
    },
  },
  disable: 'gray.400',
};

const border: Colors['border'] = {
  primary: {
    default: 'brand.300',
    inverse: 'brand.600',
    subtle: 'brand.200',
    interact: {
      hover: 'brand.400',
      default: 'blue.100',
      pressed: 'brand.600',
    },
  },
  secondary: {
    default: 'brandSubtle.300',
    inverse: 'brandSubtle.600',
    subtle: 'brandSubtle.200',
    interact: {
      hover: 'brandSubtle.400',
      default: 'blue.100',
      pressed: 'brandSubtle.600',
    },
  },
  tertiary: {
    default: 'gray.300',
    inverse: 'gray.600',
    subtle: 'gray.200',
    interact: {
      hover: 'gray.400',
      default: 'blue.100',
      pressed: 'gray.600',
    },
  },
  info: {
    default: 'blue.300',
    subtle: 'blue.200',
    interact: {
      hover: 'blue.400',
      default: 'blue.100',
      pressed: 'blue.600',
    },
  },
  error: {
    default: 'red.300',
    subtle: 'red.200',
    interact: {
      hover: 'red.400',
      default: 'blue.100',
      pressed: 'red.600',
    },
  },
  success: {
    default: 'green.300',

    subtle: 'green.200',
    interact: {
      hover: 'green.400',
      default: 'blue.100',
      pressed: 'green.600',
    },
  },
  disable: 'gray.200',
};

const surface: Colors['surface'] = {
  none: 'none',
  low: '0 1px 3px rgba(0,0,0,0.12)',
  medium: '0 4px 6px rgba(0,0,0,0.15)',
  raised: '0 6px 12px rgba(0,0,0,0.18)',
  high: '0 12px 24px rgba(0,0,0,0.22)',
  highest: '0 24px 38px rgba(0,0,0,0.25)',
};

const overlay: Colors['overlay'] = {
  none: 'rgba(0, 0, 0, 0)',
  subtle: 'rgba(0, 0, 0, 0.15)',
  light: 'rgba(0, 0, 0, 0.3)',
  medium: 'rgba(0, 0, 0, 0.5)',
  deep: 'rgba(0, 0, 0, 0.7)',
  heavy: 'rgba(0, 0, 0, 0.9)',
  full: 'rgba(0, 0, 0, 1)',
};

export const color: Colors = {
  bg,
  content,
  border,
  surface,
  overlay,
};
