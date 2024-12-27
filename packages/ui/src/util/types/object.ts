export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

export type TransformLeafValues<T, V> = {
  [K in keyof T]: T[K] extends object ? TransformLeafValues<T[K], V> : V;
};
