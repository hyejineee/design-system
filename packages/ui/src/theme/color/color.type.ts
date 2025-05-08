import type { OverridableStringUnion } from '@ui/util';

export type HexColorKey =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export interface OverridePrimitiveColorToken {}
type DefaultPrimitiveColorToken =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'teal'
  | 'green'
  | 'blue'
  | 'purple'
  | 'lime';
export type PrimitiveColorToken = OverridableStringUnion<
  DefaultPrimitiveColorToken,
  OverridePrimitiveColorToken
>;
export type PrimitiveColorTokenKey =
  | `${PrimitiveColorToken}.${HexColorKey}`
  | 'common.white'
  | 'common.black';

export interface OverrideSemanticColorToken {}
export type DefaultSemanticColorToken =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning';
export type SemanticColorToken = OverridableStringUnion<
  DefaultSemanticColorToken,
  OverrideSemanticColorToken
>;
export type SemanticColorTokenKey = `${SemanticColorToken}.${HexColorKey}`;

export type VariantToken = 'solid' | 'soft' | 'outline' | 'ghost';
export type VariantColorVariable =
  | 'Color'
  | 'ActiveColor'
  | 'Bg'
  | 'HoverBg'
  | 'ActiveBg'
  | 'Border'
  | 'HoverBorder'
  | 'ActiveBorder';

export type ElevationLevel = 'none' | 'low' | 'medium' | 'raised' | 'high' | 'highest';

export interface PrimitiveColor extends Record<PrimitiveColorToken, Record<HexColorKey, string>> {
  common: {
    white: string;
    black: string;
  };
}
export interface SemanticColor extends Record<SemanticColorToken, Record<HexColorKey, string>> {}

export interface Palettes extends PrimitiveColor, SemanticColor {}

export type VariantColorTokenKey<Pick extends VariantColorVariable> =
  `${SemanticColorToken}.${VariantToken}${Pick}`;

export type ContentColor = Record<
  | SemanticColorToken
  | 'inverse'
  | VariantColorTokenKey<'Color' | 'ActiveColor'>
  | `disabled.${VariantToken}${'Color'}`,
  SemanticColorTokenKey | PrimitiveColorTokenKey | 'transparent'
>;
export type ContentColorTokenKey = `content.${keyof ContentColor}`;

export type BgColor = Record<
  | SemanticColorToken
  | `disabled.${VariantToken}${'Bg'}`
  | VariantColorTokenKey<'Bg' | 'ActiveBg' | 'HoverBg'>,
  SemanticColorTokenKey | PrimitiveColorTokenKey | 'transparent'
>;
export type BgColorTokenKey = `bg.${keyof BgColor}`;

export type BorderColor = Record<
  | SemanticColorToken
  | `disabled.${VariantToken}${'Border'}`
  | VariantColorTokenKey<'Border' | 'ActiveBorder' | 'HoverBorder'>,
  SemanticColorTokenKey | PrimitiveColorTokenKey | 'transparent'
>;
export type BorderColorTokenKey = `border.${keyof BorderColor}`;

export interface Colors {
  content: ContentColor;
  bg: BgColor;
  border: BorderColor;
  surface: {
    [key in ElevationLevel]: string;
  };
  overlay: {
    [key in ElevationLevel]: string;
  };
}
