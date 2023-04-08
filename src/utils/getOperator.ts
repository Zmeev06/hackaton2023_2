import PlusImage from '../assets/img/operators/plus.png';
import MinusImage from '../assets/img/operators/minus.png';
import DevideImage from '../assets/img/operators/devide.png';
import MultipleImage from '../assets/img/operators/multiple.png';
import {Operations} from '../Types';

export const getOperatorImage = (operator: Operations) => {
  switch (operator) {
    case 'plus':
      return PlusImage;
    case 'minus':
      return MinusImage;
    case 'devide':
      return DevideImage;
    case 'multiple':
      return MultipleImage;
  }
};
