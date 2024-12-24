/* eslint-disable @typescript-eslint/no-explicit-any */

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
/**
 * 주어진 항목이 평범한 객체(plain object)인지 확인
 * @param item - 확인할 항목
 * @returns 평범한 객체면 true, 아니면 false
 */
export function isPlainObject(item: unknown): item is Record<keyof any, unknown> {
  if (typeof item !== 'object' || item === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(item);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in item) &&
    !(Symbol.iterator in item)
  );
}

/**
 * deepMerge 함수의 옵션을 위한 인터페이스
 */
export interface DeepmergeOptions {
  clone?: boolean; // 깊은 복사를 할지 여부 (기본값: true)
}

/**
 * 객체를 깊은 복사하는 함수
 * @param source - 복사할 소스 객체
 * @returns 깊은 복사된 객체
 */
function deepClone<T>(source: T): T | Record<keyof any, unknown> {
  if (!isPlainObject(source)) {
    return source;
  }

  const output: Record<keyof any, unknown> = {};

  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });

  return output;
}

/**
 * 두 객체를 깊은 병합하는 함수
 * @param target - 병합의 대상이 될 객체
 * @param source - target에 병합될 소스 객체
 * @param options - 병합 옵션 (clone: 깊은 복사 여부)
 * @returns 병합된 새로운 객체
 */
export function deepMerge<T>(
  target: T,
  source: unknown,
  options: DeepmergeOptions = { clone: true }
): T {
  // 옵션에 따라 target의 깊은 복사를 수행하거나 원본을 사용
  const output = options.clone ? { ...target } : target;

  // target과 source가 둘 다 평범한 객체일 때 병합 수행
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // 프로토타입 오염 방지
      if (key === '__proto__') {
        return;
      }

      // 두 객체의 동일한 키가 평범한 객체일 경우 재귀적으로 병합
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        (output as Record<keyof any, unknown>)[key] = deepMerge(target[key], source[key], options);
      } else if (options.clone) {
        (output as Record<keyof any, unknown>)[key] = isPlainObject(source[key])
          ? deepClone(source[key])
          : source[key];
      } else {
        (output as Record<keyof any, unknown>)[key] = source[key];
      }
    });
  }

  return output;
}
