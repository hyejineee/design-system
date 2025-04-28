// export type PolyComponent<T extends ElementType, P extends object> = (
//   props: PolyComponentProps<T, P>
// ) => ReactElement | null;

import type { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

// 조건부 타입을 사용하여 유니온 타입에 대해 분배적으로 동작하는 Omit
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
// 분배적으로 동작하는 Merge
type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B;

/**
 * as + 사용자 정의 props + 엘리먼트 props 정리하는 타입
 * ref를 포함한 props에서 사용자가 정의한 props + as의 키를 제외하고 사용자의 props를 사용하도록 하는 타입
 */
export type AsProps<
  Component extends ElementType, // 엘리먼트 타입
  PermanentProps extends object, // 사용자가 정의한 컴포넌트의 props
> = DistributiveMerge<ComponentPropsWithoutRef<Component>, PermanentProps & { as?: Component }>;

export type PolymorphicProps<
  Default extends ElementType, // 기본 엘리먼트 타입(button, a)
  Props extends object = {}, // 사용자가 정의한 컴포넌트의 props
> = AsProps<Default, Props> & { ref?: Ref<Default> };
