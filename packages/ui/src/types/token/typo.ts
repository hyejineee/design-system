type TypoKey = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption1' | 'caption2';
export interface TypoSizeType extends Record<TypoKey, string> {}

type TypoWeightKey = 'regular' | 'medium' | 'bold';
export interface TypoWeightType extends Record<TypoWeightKey, string> {}
type TypoLineHeightKey = TypoKey;
export interface TypoLineHeightType extends Record<TypoLineHeightKey, string> {}

export type TypoUnit = `${TypoKey}.${TypoWeightKey}`;
type TypoType = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};
export interface Typo extends Record<TypoKey, TypoType> {}
