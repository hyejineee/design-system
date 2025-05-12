import type { ChildrenProps, OverridableStringUnion, PolymorphicProps } from '@ui/util';
import type { UtilStyleProps } from '@ui/util/styles/style.types';
import type { ElementType } from 'react';

export interface OverrideShapeVariant {}
export type DefaultShapeVariant = 'solid' | 'outline' | 'ghost' | 'soft';
export type ShapeVariant = OverridableStringUnion<DefaultShapeVariant, OverrideShapeVariant>;

export interface OverrideColorVariant {}
export type DefaultColorVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning'
  | 'disabled';
export type ColorVariant = OverridableStringUnion<DefaultColorVariant, OverrideColorVariant>;

export interface OverrideSizeVariant {}
export type DefaultSizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SizeVariant = OverridableStringUnion<DefaultSizeVariant, OverrideSizeVariant>;

export interface ButtonOptions extends ChildrenProps, UtilStyleProps {
  variant?: ShapeVariant;
  colorVariant?: ColorVariant;
  size?: SizeVariant;
  isRound?: boolean;
}

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<T, ButtonOptions>;
