import {Operations} from '../Types';
import {randomSort} from './randomSort';

export const getExpressionData = (exp: string, type: Operations) => {
  let [num_1, num_2] = exp.split(' ').map(num => +num);

  let res: number;

  switch (type) {
    case 'multiple':
      res = num_1 * num_2;
      break;
    case 'plus':
      res = num_1 + num_2;
      break;
    case 'minus':
      res = num_1 - num_2;
      break;
    case 'devide':
      res = num_1 / num_2;
      break;
  }

  const answers = randomSort([res, res - 1, res + 1]);

  return {answers, num_1, num_2, res};
};
