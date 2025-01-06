import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ReactElement,
} from 'react';
import { forwardRef } from 'react';

// 조건부 타입을 사용하여 유니온 타입에 대해 분배적으로 동작하는 Omit
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
// 두 타입을 병합하되, B의 속성이 A의 속성을 덮어쓰도록 함.
type Merge<A, B> = Omit<A, keyof B> & B;
// 분배적으로 동작하는 Merge
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

/**
 * as + 사용자 정의 props + 엘리먼트 props 정리하는 타입
 * ref를 포함한 props에서 사용자가 정의한 props + as의 키를 제외하고 사용자의 props를 사용하도록 하는 타입
 */
export type AsProps<
  Component extends ElementType, // 엘리먼트 타입
  PermanentProps extends object, // 사용자가 정의한 컴포넌트의 props
  ComponentProps extends object, // ref를 포함한 사용자 정의 컴포넌트의 props
> = DistributiveMerge<ComponentProps, PermanentProps & { as?: Component }>;

/**
 * 다형성 컴포넌트를 만들기 위한 타입
 * ref를 전달할 수 있으며, as props으로 엘리먼트 타입을 변경할 수 있는 컴포넌트 타입
 */
export type PolymorphicWithRef<
  Default extends OnlyAs, // 기본 엘리먼트 타입(button, a)
  Props extends object = {}, // 사용자가 정의한 컴포넌트의 props
  OnlyAs extends ElementType = ElementType, // 허용되는 엘리먼트 타입.
> = <T extends OnlyAs = Default>(
  props: AsProps<T, Props, ComponentPropsWithRef<T>> // 기본 엘리먼트 props에서 사용자가 정의한 컴포넌트의 props + ref를 뒤집어 씌우는 타입
) => ReactElement | null;

/**
 * 다형성과 ref 전달이 모두 가능한 컴포넌트 타입
 * ForwardRefExoticComponent와 PolymorphicWithRef타입을 merge함.
 * -> forwardRef 함수를 통해 만들어진 컴포넌트의 props에서 다형 타입 컴포넌트의 props를 제거하고 오버라이드함.
 * - ForwardRefExoticComponent : forwardRef 함수를 통해서 반환되는 컴포넌트의 타입
 * - forwardRef로 생성된 컴포넌트의 타입 특성 유지 (defaultProps, propTypes 등)
 * - as prop을 통한 엘리먼트 변환 기능 제공
 */
export type PolyForwardComponent<
  Default extends OnlyAs, // 기본 엘리먼트 타입
  Props extends object = {}, // 사용자가 정의한 컴포넌트의 props
  OnlyAs extends ElementType = ElementType,
> = Merge<
  ForwardRefExoticComponent<Merge<ComponentPropsWithoutRef<Default>, Props & { as?: Default }>>,
  PolymorphicWithRef<Default, Props, OnlyAs>
>;

/**
 * forwardRef 함수의 타입을 오버라이드하여 타입 물일치 문제를 해결함.
 */
export type PolyRefFunction = <
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
>(
  Component: ForwardRefRenderFunction<any, Props & { as?: OnlyAs }>
) => PolyForwardComponent<Default, Props, OnlyAs>;

export const polyForwardRef = forwardRef as PolyRefFunction;
