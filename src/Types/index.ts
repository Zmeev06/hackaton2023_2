export type Difficult = 'hard' | 'medium' | 'easy';

export type Operations = '+' | '-' | '/' | '*';

export type ArrayString = string[];

export type Expression = {
  easy: ArrayString;
  medium: ArrayString;
  hard: ArrayString;
};
