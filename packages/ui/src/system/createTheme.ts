import { baseTheme } from '@ui/theme/theme';
import { createLayoutProperties } from '@ui/theme/token/layout.css';
import type { BaseTheme } from '@ui/types/token';
import type { PartialDeep, RecursiveStructure } from '@ui/util/types';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { deepMerge } from '../util';

type NullableTokens = {
  [key: string]: string | NullableTokens | null;
};

const createThemeContractObject = <T extends object>(obj: T): RecursiveStructure<T, string> => {
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

export const createTheme = <T>(newTheme: T & PartialDeep<BaseTheme>) => {
  const mergedTheme = deepMerge(baseTheme, newTheme);
  const contract = createThemeContractObject(mergedTheme);
  const token = createThemeContract(contract);
  const theme = createGlobalTheme(':root', token, mergedTheme as any);

  const properties = defineProperties({});

  // 추후에 기본 시스템 완성하고 작업할 것. 단순 값 추가는 우선순위가 낮음.
  // const spaceToken = createThemeContract({ ...defaultSpace });
  // const elevationToken = createThemeContract({ ...defaultElevation });
  // const zIndexToken = createThemeContract({ ...defaultZIndex });
  // const radiusToken = createThemeContract({ ...defaultRadius });
  // const sizeToken = createThemeContract({ ...defaultSize });

  // sprinkles도 여기서 만들어야 하나??
  const sprinkles = createSprinkles(createLayoutProperties(mergedTheme));

  return {
    theme,
  };
};
