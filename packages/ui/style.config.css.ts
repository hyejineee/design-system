import { baseSprinkles } from '@ui/theme/baseSprinkles.css';
import { baseTheme } from '@ui/theme/baseTheme.css';
import { style } from '@vanilla-extract/css';
import { setThemeConfig } from './src/system/createThemeConfig/createConfig';

console.log('style.config.ts');

setThemeConfig({
  theme: baseTheme,
  sprinkles: baseSprinkles,
});

export const dummyStyle = style({
  // 이 더미 스타일이 실제로 CSS를 생성하지 않도록 매우 간단하게 유지합니다.
  // 예를 들어, 사용되지 않는 CSS 변수를 설정할 수 있습니다.
  vars: {
    '--dummy-for-init-theme': '1',
  },
});
