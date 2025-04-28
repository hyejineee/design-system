// packages/ui/vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config'; // vite.config.ts 임포트

// vite.config.ts 설정을 확장
export default mergeConfig(
  viteConfig, // 기본 Vite 설정 로드
  defineConfig({
    // Vitest 관련 설정만 남김
    test: {
      globals: true, // describe, it, expect 등을 전역으로 사용
      environment: 'jsdom', // 테스트 환경 설정
      setupFiles: './src/setupTests.ts', // 테스트 실행 전 설정 파일
      css: true, // 만약 CSS Modules나 다른 CSS 처리 방식 사용 시 필요할 수 있음
      // alias는 vite.config.ts에서 가져오므로 제거
    },
  })
);
