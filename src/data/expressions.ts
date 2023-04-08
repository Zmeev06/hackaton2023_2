import {Expression} from '../Types';

export const MATH_EXPRESSIONS: {
  plus: Expression;
  minus: Expression;
} = {
  plus: {
    easy: ['1 2', '3 2', '6 1', '4 3', '2 5'],
    medium: ['2 9', '3 6', '7 2', '6 5', '4 7'],
    hard: ['10 7', '5 12', '4 16', '13 5', '8 9'],
  },
  minus: {
    easy: ['6 1', '4 2', '5 5', '5 3', '7 5'],
    medium: ['12 3', '9 9', '10 8', '8 5', '11 6'],
    hard: ['20 12', '18 10', '17 9', '20 2', '17 15'],
  },
};
