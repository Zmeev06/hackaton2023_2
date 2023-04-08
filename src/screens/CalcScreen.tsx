import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../globalStyles';
import {useNavigation} from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {font} from '../variables/font';
import {getExpressionData} from '../utils/getExpressionData';
import {MATH_EXPRESSIONS} from '../data/expressions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../interfaces/propsinterfaces';
import {randomSortStrings} from '../utils/randomSort';
import {getOperatorImage} from '../utils/getOperator';
import {getNumber} from '../utils/getNumber';

import QuestionImage from '../assets/img/question.png';
import EqulasImage from '../assets/img/operators/equals.png';
import QuestionOperatorImage from '../assets/img/operators/question.png';

import GoodImage from '../assets/img/good.png';
import BadImage from '../assets/img/bad.png';
import {getDeviceSizes} from '../utils/getDeviceSizes';
import Sound from 'react-native-sound';

import GoodSound from '../assets/sounds/like1.mp3';

const CalcScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CalcScreen'>
> = ({route}) => {
  const navigation = useNavigation();

  React.useEffect(() => {}, []);

  const [isGood, setIsGood] = React.useState(false);
  const [isBad, setIsBad] = React.useState(false);

  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const {type, diff} = route.params;

  const exp = randomSortStrings(MATH_EXPRESSIONS[type][diff])[0];
  const {answers, num_1, num_2, res} = React.useMemo(
    () => getExpressionData(exp, type),
    [],
  );

  const OperatoImage = getOperatorImage(type);

  const device = getDeviceSizes();

  React.useEffect(() => {
    console.log('USE EFFECT');
    console.log(isBad, isGood);
    if ((isBad || isGood) && !modalIsVisible) {
      setModalIsVisible(true);
    }
  }, [isBad, isGood]);

  const answerImages = answers.map(num => ({
    element: <NumImage num={num} answer={true} />,
    num,
  }));

  async function sendAnswer(answer: number) {
    'SEND ANSWER';
    //@ts-ignore
    const whoosh = new Sound(GoodSound, () => whoosh.play());
    // whoosh.play();
    if (answer === res) {
      setIsGood(true);
    } else {
      setIsBad(true);
    }
  }

  function handleCloseModal() {
    console.log('HANDLE');
    if (isBad) {
      setModalIsVisible(false);
      setTimeout(() => {
        setIsBad(false);
      }, 500);
    } else {
      setModalIsVisible(false);
      setTimeout(() => {
        setIsGood(false);
      }, 500);
      isGood && navigation.navigate('MathGame');
    }
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Посчитай" color={colors.green_dark} />
      <View style={[globalStyles.container, {marginTop: 20, flex: 1}]}>
        <View style={styles.commonTopContainer}>
          <View style={styles.expContainer}>
            <NumImage num={num_1} />
            <Image style={[styles.operatorImage]} source={OperatoImage} />
            <NumImage num={num_2} />
            <Image
              style={[styles.operatorImage, {maxWidth: 44}]}
              source={EqulasImage}
            />
            <Image style={[styles.image]} source={QuestionOperatorImage} />
          </View>
          <Image style={styles.questionImage} source={QuestionImage} />
        </View>
        <View style={styles.expContainer}>
          {answerImages.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => sendAnswer(item.num)}
              style={styles.answerBtn}>
              {item.element}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ReactNativeModal
        animationInTiming={500}
        animationIn={'bounceInLeft'}
        animationOut={'bounceOutRight'}
        backdropTransitionOutTiming={800}
        hasBackdrop={true}
        statusBarTranslucent
        deviceHeight={device.height + (StatusBar.currentHeight || 0)}
        coverScreen={true}
        isVisible={modalIsVisible}>
        <View style={styles.modalContainer}>
          <Text
            style={[
              styles.modalText,
              {color: isBad ? colors.error : colors.success},
            ]}>
            {isBad ? 'Попробуй ещё раз' : 'МОЛОДЕЦ'}
          </Text>
          <Image source={isBad ? BadImage : GoodImage} />
          <TouchableOpacity style={styles.modalBtn} onPress={handleCloseModal}>
            <Text style={styles.modalBtnText}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

const NumImage: React.FC<{num: number; answer?: true}> = ({num, answer}) => {
  if (num < 10) {
    return (
      <Image
        style={answer ? styles.answerImage : styles.image}
        source={getNumber(num)}
      />
    );
  } else {
    return (
      <View style={styles.rowNum}>
        <Image
          style={answer ? styles.answerImage : styles.image}
          source={getNumber(num === 20 ? 2 : 1)}
        />
        <Image
          style={answer ? styles.answerImage : styles.image}
          source={getNumber(num % 10)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
    paddingTop: 40,
    paddingBottom: 20,
  },
  modalText: {
    fontFamily: font.black,
    fontSize: 30,
    paddingBottom: 30,
  },
  modalBtn: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EABE4D',
    marginBottom: 10,
    alignSelf: 'stretch',
    marginTop: 30,
  },
  modalBtnText: {
    fontFamily: font.black,
    color: '#fff',
    fontSize: 18,
  },
  btn: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: 10,
  },
  questionImage: {
    maxHeight: 240,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 20,
  },
  commonTopContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: font.black,
    color: '#fff',
    fontSize: 18,
  },
  image: {
    maxHeight: 60,
    maxWidth: 43,
    resizeMode: 'contain',
  },
  answerImage: {
    maxHeight: 60,
    maxWidth: 44,
    resizeMode: 'contain',
  },
  answerBtn: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  operatorImage: {
    maxHeight: 30,
    maxWidth: 50,
    resizeMode: 'contain',
  },
  rowNum: {
    flexDirection: 'row',
  },
  expContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CalcScreen;
