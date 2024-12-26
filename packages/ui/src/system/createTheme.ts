import { baseTheme } from '@ui/theme/theme';
import type { BaseTheme } from '@ui/types/token';
import { createThemeContractObject } from '@ui/util/styles';
import type { PartialDeep } from '@ui/util/types';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { deepMerge } from '../util/object';
import { createSprinkles } from './createSprinkles/createSprinkles';

export const createTheme = <T>(newTheme: T & PartialDeep<BaseTheme>) => {
  const mergedTheme = deepMerge(baseTheme, newTheme);
  const contract = createThemeContractObject(mergedTheme);
  const token = createThemeContract(contract);

  createGlobalTheme(':root', token, mergedTheme as any);

  const sprinkles = createSprinkles(mergedTheme);

  return {
    theme: contract,
    sprinkles,
  };
};
