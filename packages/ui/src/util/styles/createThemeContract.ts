import type { RecursiveStructure } from '../types';

export const createThemeContractObject = <T extends object>(
  obj: T
): RecursiveStructure<T, string> => {
  const themeContract: any = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      themeContract[key] = createThemeContractObject(obj[key] as object);
    } else {
      themeContract[key] = '';
    }
  }

  return themeContract as RecursiveStructure<T, string>;
};
