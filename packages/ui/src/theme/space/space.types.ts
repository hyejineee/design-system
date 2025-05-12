export type SpaceKey = 0 | 4 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 52 | 56 | 60;
export interface Spaces extends Record<SpaceKey, `${SpaceKey}px`> {}
