export const randomSort = (array: number[]) =>
  array.sort(() => Math.random() - 0.5);

export const randomSortStrings = (array: string[]) =>
  array.sort(() => Math.random() - 0.5);
