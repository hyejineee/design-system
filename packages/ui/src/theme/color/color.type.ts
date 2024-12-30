/**
 * primitive 컬러 토큰 생성하기
 * - 일단 gray, red, blue, 등등 기본 적인 컬러에 대한 값이 필요함.
 */

import type { CSSProperties } from 'react';

export type PrimitiveColorKey =
  | 'brand'
  | 'brandSubtle'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'teal'
  | 'green'
  | 'blue';

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
  | '900'
  | 'light'
  | 'dark';

/**
 * 사용자가 오버라이딩 할 수 있는 타입. HexColorKey를 추가할 수 있음.
 * 예 : 100과 200 토큰 사이에 150을 추가할 수 있음.
 */
export interface HexColorType extends Record<HexColorKey, string> {}

/**
 * 사용자가 오버라이딩 할 수 있는 타입. PrimitiveColor 토큰을 추가할 수 있음.
 * 예 : orange, pink를 추가할 수 있음.
 */
export interface Palettes extends Record<PrimitiveColorKey, HexColorType> {}
export type PrimitiveColorUnit = `${PrimitiveColorKey}.${keyof HexColorType}`;

type SemanticTokenKey = 'content' | 'bg' | 'border' | 'surface' | 'overlay';

type InteractStatusKey = 'default' | 'hover' | 'pressed';
export interface InteractType extends Record<InteractStatusKey, PrimitiveColorUnit> {}
type InteractUnit = `interact.${InteractStatusKey}`;

type StatusKey = 'default' | 'inverse' | 'subtle' | 'interact';
type StatusKeyWithoutInverse = Exclude<StatusKey, 'inverse'>;

type MainSemanticColorKey = 'primary' | 'secondary' | 'tertiary';
type SubSemanticColorKey = 'info' | 'error' | 'success';

/**
 * 사용자가 오버라이딩 할 수 있는 타입. MainSemanticColor를 추가할 수 있음.
 * 예 : quaternary를 추가할 수 있음.
 */
export interface MainSemanticColorType
  extends Record<
    MainSemanticColorKey,
    Record<Exclude<StatusKey, 'interact'>, PrimitiveColorUnit> & { interact: InteractType }
  > {}

/**
 * 사용자가 오버라이딩 할 수 있는 타입. SubSemanticColor를 추가할 수 있음.
 * 예 : warning을 추가할 수 있음.
 */
export interface SubSemanticColorType
  extends Record<
    SubSemanticColorKey,
    Record<Exclude<StatusKey, 'interact' | 'inverse'>, PrimitiveColorUnit> & {
      interact: InteractType;
    }
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

export type SemanticColorSubUnit =
  | `${keyof MainSemanticColorType}.${Exclude<StatusKey, 'interact'> | InteractUnit}`
  | `${keyof SubSemanticColorType}.${Exclude<StatusKeyWithoutInverse, 'interact'> | InteractUnit}`
  | 'disable';

export type ContentPath = `content.${SemanticColorSubUnit}`;
export type BgPath = `bg.${SemanticColorSubUnit}`;
export type BorderPath = `border.${SemanticColorSubUnit}`;

export type SemanticColorUnit =
  | ContentPath
  | BgPath
  | BorderPath
  | `surface.${SurfaceKey}`
  | `overlay.${OverlayKey}`;

type ColorType = Record<Exclude<SemanticTokenKey, 'surface' | 'overlay'>, SemanticColorType> & {
  surface: SurfaceType;
  overlay: OverlayType;
};
// 사용자가 오버라이딩 할 수 있는 타입
export interface Colors extends ColorType {}
