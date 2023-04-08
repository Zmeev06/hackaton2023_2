import {Operations} from '../Types';

export const getExpressionData = (exp: string, type: Operations) => {
  let [num_1, num_2] = exp.split(' ').map(num => +num);

  let res: number;

  switch (type) {
    case '*':
      res = num_1 * num_2;
      break;
    case '+':
      res = num_1 + num_2;
      break;
    case '-':
      res = num_1 - num_2;
      break;
    case '/':
      res = num_1 / num_2;
      break;
  }

  const answers = [res, res - 1, res + 1].sort(() => Math.random() - 0.5);

  return {answers, num_1, num_2, res};
};
