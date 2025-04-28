import type { ComponentPropsWithRef, ElementType, ReactElement } from 'react';

// 조건부 타입을 사용하여 유니온 타입에 대해 분배적으로 동작하는 Omit
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
// 분배적으로 동작하는 Merge (B의 프로퍼티가 A의 프로퍼티를 덮어씁니다)
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

// /**
//  * as + 사용자 정의 props + 엘리먼트 props 정리하는 타입
//  * ref를 포함한 props에서 사용자가 정의한 props + as의 키를 제외하고 사용자의 props를 사용하도록 하는 타입
//  */
// export type AsProps<
//   Element extends ElementType, // 엘리먼트 타입
//   PermanentProps extends object, // 사용자가 정의한 컴포넌트의 props
// > = DistributiveMerge<ComponentPropsWithoutRef<Element>, PermanentProps> & { as?: Element };

// export type PolymorphicProps<
//   Default extends ElementType, // 기본 엘리먼트 타입(button, a)
//   Props extends object = {}, // 사용자가 정의한 컴포넌트의 props
// > = AsProps<Default, Props> & { ref?: ComponentProps<Default>['ref'] };

/**
 * 다형성(Polymorphic) 컴포넌트의 props 타입을 정의합니다.
 * `as` prop을 통해 렌더링될 엘리먼트 타입을 변경할 수 있으며,
 * 해당 엘리먼트 타입에 맞는 props와 ref 타입을 정확하게 추론합니다.
 *
 * @template E 렌더링될 실제 HTML 엘리먼트 타입 (예: 'button', 'a').
 * @template P 컴포넌트 고유의 커스텀 props 타입 (HTML 표준 속성과 겹치지 않도록 주의).
 */
export type PolymorphicProps<E extends ElementType, P extends object = {}> = DistributiveMerge<
  ComponentPropsWithRef<E>,
  P & { as?: E }
>;

/**
 * 다형성(Polymorphic) 컴포넌트 자체의 타입을 정의합니다.
 * `React.forwardRef`와 함께 사용하기 용이하도록 설계되었습니다.
 *
 * @template DefaultElement 기본적으로 렌더링될 HTML 엘리먼트 타입 (예: 'button').
 * @template CustomProps 컴포넌트 고유의 커스텀 props 타입.
 */
export type PolymorphicComponent<
  DefaultElement extends ElementType,
  CustomProps extends object = {},
> = <AsElement extends ElementType = DefaultElement>(
  // `props`는 `as` prop 값에 따라 동적으로 결정된 엘리먼트 타입(`AsElement`)과
  // 커스텀 props (`CustomProps`)를 기반으로 한 최종 props 타입을 가집니다.
  // `ref` 타입 또한 `AsElement`에 맞춰 정확하게 추론됩니다.
  props: PolymorphicProps<AsElement, CustomProps>
) => ReactElement | null;
