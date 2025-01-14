import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { getDirectoryEntries } from './build-util';

// ES 모듈에서 __dirname 대체하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = resolve(__dirname, '../src');

// package.json 읽기
const packageJsonPath = resolve(__dirname, '../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

// exports 생성
const exports: Record<string, any> = {};

// Components exports
const componentEntries = getDirectoryEntries(resolve(srcDir, 'components'), 'components');
Object.keys(componentEntries).forEach((key) => {
  exports[`./${key}`] = {
    types: `./dist/@types/${key}/index.d.ts`,
    import: `./dist/${key}.js`,
  };
});

const systemEntries = getDirectoryEntries(resolve(srcDir, 'system'), 'system');
Object.keys(systemEntries).forEach((key) => {
  exports[`./${key}`] = {
    types: `./dist/@types/${key}/index.d.ts`,
    import: `./dist/${key}.js`,
  };
});

// Theme exports
const themeEntries = getDirectoryEntries(resolve(srcDir, 'theme'), 'theme');
Object.keys(themeEntries).forEach((key) => {
  exports[`./${key}`] = {
    types: `./dist/@types/${key}/index.d.ts`,
    import: `./dist/${key}.js`,
  };
});

// Utils exports
const utilEntries = getDirectoryEntries(resolve(srcDir, 'util'), 'util');
Object.keys(utilEntries).forEach((key) => {
  exports[`./${key}`] = {
    types: `./dist/${key}.d.ts`,
    import: `./dist/${key}.js`,
  };
});

// package.json 업데이트
packageJson.exports = exports;

// 파일 쓰기
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('Exports generated successfully!');
