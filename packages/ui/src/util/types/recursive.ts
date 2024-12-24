export type RecursiveStructure<T, V> = {
  [K in keyof T]: T[K] extends object ? RecursiveStructure<T[K], V> : V;
};
