/**
 * primitive 컬러 토큰 생성하기
 * - 일단 gray, red, blue, 등등 기본 적인 컬러에 대한 값이 필요함.
 */

import type { CSSProperties } from 'react';

type PrimitiveColorKey =
  | 'brand'
  | 'brandSubtle'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'teal'
  | 'green'
  | 'blue';
type HexColorKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'light' | 'dark';
export interface HexColorType extends Record<HexColorKey, string> {}

export interface Palettes extends Record<PrimitiveColorKey, HexColorType> {}
type PrimitiveColorUnit = `${PrimitiveColorKey}.${keyof HexColorType}`;

type SemanticTokenKey = 'content' | 'bg' | 'border' | 'surface' | 'overlay';

type InteractStatusKey = 'hover' | 'active' | 'pressed';
export interface InteractType extends Record<InteractStatusKey, PrimitiveColorUnit> {}
type InteractUnit = `interact.${InteractStatusKey}`;

type StatusKey = 'default' | 'inverse' | 'subtle' | 'interact';
type StatusKeyWithoutInverse = Exclude<StatusKey, 'inverse'>;

type MainSemanticColorKey = 'primary' | 'secondary' | 'tertiary';
type SubSemanticColorKey = 'info' | 'error' | 'success';

export interface MainSemanticColorType
  extends Record<
    MainSemanticColorKey,
    Record<Exclude<StatusKey, 'interact'>, PrimitiveColorUnit> & { interact: InteractType }
  > {}
export interface SubSemanticColorType
  extends Record<
    SubSemanticColorKey,
    Record<Exclude<StatusKey, 'interact'>, PrimitiveColorUnit> & { interact: InteractType }
  > {}
type DisabledColorType = {
  disable: PrimitiveColorUnit;
};

type SurfaceKey = 'none' | 'low' | 'medium' | 'raised' | 'high' | 'highest';
type SurfaceType = Record<SurfaceKey, CSSProperties['boxShadow']>;

type OverlayKey = 'none' | 'subtle' | 'light' | 'medium' | 'deep' | 'heavy' | 'full';
type OverlayType = Record<OverlayKey, string>;

export interface SemanticColorType
  extends MainSemanticColorType,
    SubSemanticColorType,
    DisabledColorType {}
type SemanticColorSubUnit =
  | `${MainSemanticColorKey}.${Exclude<StatusKey, 'interact'> | InteractUnit}`
  | `${SubSemanticColorKey}.${Exclude<StatusKeyWithoutInverse, 'interact'> | InteractUnit}`
  | 'disable'
  | `surface.${SurfaceKey}`
  | `overlay.${OverlayKey}`;

export type SemanticColorUnit = `${SemanticTokenKey}.${SemanticColorSubUnit}`;

type ColorType = Record<Exclude<SemanticTokenKey, 'surface' | 'overlay'>, SemanticColorType> & {
  surface: SurfaceType;
  overlay: OverlayType;
};
export interface Colors extends ColorType {}
