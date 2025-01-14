import { readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

interface EntryPoint {
  [key: string]: string;
}

export function hasIndexFile(dir: string): boolean {
  try {
    return statSync(join(dir, 'index.ts')).isFile();
  } catch {
    return false;
  }
}

export function getDirectoryEntries(baseDir: string, prefix: string = ''): EntryPoint {
  const entries: EntryPoint = {};

  const items = readdirSync(baseDir, { withFileTypes: true });

  for (const item of items) {
    if (!item.isDirectory()) continue;

    const fullPath = join(baseDir, item.name);
    const entryName = prefix ? `${prefix}/${item.name}` : item.name;

    // 디렉토리에 index.ts 파일이 있는 경우
    if (hasIndexFile(fullPath)) {
      entries[`${entryName}`] = resolve(fullPath, 'index.ts');
    } else {
      // index.ts 파일이 없는 경우 하위 파일들을 개별 entry point로 등록
      const subFiles = readdirSync(fullPath, { withFileTypes: true });
      for (const file of subFiles) {
        if (file.isFile() && file.name.endsWith('.ts') && file.name !== 'index.ts') {
          const name = file.name.replace('.ts', '');
          entries[`${entryName}/${name}`.toLowerCase()] = resolve(fullPath, file.name);
        }
      }
    }

    // 재귀적으로 하위 디렉토리 처리
    const subEntries = getDirectoryEntries(fullPath, entryName);
    Object.assign(entries, subEntries);
  }

  console.log('entries', entries);

  return entries;
}
