export const createThemeContractObject = <T extends Record<string, any>>(obj: T): T => {
  const result: any = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        // 객체인 경우 재귀적으로 처리
        result[key] = createThemeContractObject(obj[key]);
      } else {
        // 객체가 아닌 경우 빈 문자열로 설정
        result[key] = '';
      }
    }
  }

  return result as T;
};
