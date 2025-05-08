export * from './object';
export * from './polymorphic';
export * from './props';
export * from './recursive';

/**
 * 주어진 문자열 또는 숫자 타입 T와 유니온 U를 받아, T를 기반으로 한 문자열 유니온 타입을 생성하고, U로 오버라이드
 * @template T - 기본 문자열 또는 숫자 타입
 * @template U - T를 오버라이드할 추가적인 타입 (선택적)
 * @returns T와 U를 합쳐서 생성된 문자열 유니온 타입
 */
export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<
  Overwrite<Record<T, true>, U>
>;

/**
 * 타입 T에서 K 키를 제외한 타입을 분배적으로 생성
 * @template T - 대상 타입
 * @template K - 제외할 키
 * @returns K를 제외한 T의 타입
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * 타입 T를 U로 오버라이드
 * @template T - 오버라이드 될 타입
 * @template U - T에 적용될 오버라이드 타입
 * @returns U로 오버라이드된 새로운 타입
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

/**
 * 주어진 타입 T에서 true로 평가되는 키만을 추출하여 문자열 유니온 타입을 생성
 * @template T - 대상이 되는 타입
 * @returns true로 평가되는 키만을 포함하는 문자열 유니온 타입
 */
type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;
