import Image_1 from '../assets/img/numbers/1.png';
import Image_2 from '../assets/img/numbers/2.png';
import Image_3 from '../assets/img/numbers/3.png';
import Image_4 from '../assets/img/numbers/4.png';
import Image_5 from '../assets/img/numbers/5.png';
import Image_6 from '../assets/img/numbers/6.png';
import Image_7 from '../assets/img/numbers/7.png';
import Image_8 from '../assets/img/numbers/8.png';
import Image_9 from '../assets/img/numbers/9.png';
import Image_0 from '../assets/img/numbers/0.png';

export const getNumber = (num: number) => {
  switch (num) {
    case 0:
      return Image_0;
    case 1:
      return Image_1;
    case 2:
      return Image_2;
    case 3:
      return Image_3;
    case 4:
      return Image_4;
    case 5:
      return Image_5;
    case 6:
      return Image_6;
    case 7:
      return Image_7;
    case 8:
      return Image_8;
    case 9:
      return Image_9;
  }
};
