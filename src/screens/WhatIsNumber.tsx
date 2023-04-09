import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../globalStyles';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {font} from '../variables/font';
import {randomSort} from '../utils/randomSort';
import {getNumber} from '../utils/getNumber';

import GoodImage from '../assets/img/good.png';
import BadImage from '../assets/img/bad.png';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

import GoodSound from '../assets/sounds/like1.mp3';
import BadSound from '../assets/sounds/retry.mp3';

import CustomModal from '../components/UI/CustomModal';
import {numbers, string_numbers} from '../data/static';

import GameSound from '../assets/sounds/what.mp3';

const WhatIsNumber: React.FC = () => {
  const [isGood, setIsGood] = React.useState(false);
  const [isBad, setIsBad] = React.useState(false);

  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    if ((isBad || isGood) && !modalIsVisible) {
      setModalIsVisible(true);
    }
  }, [isBad, isGood]);

  const [randomNum, setRandomNum] = React.useState(randomSort(numbers)[0]);

  const arrayWithoutNum = numbers.filter(item => item !== randomNum);
  const answers = React.useMemo(
    () =>
      randomSort([
        randomSort(arrayWithoutNum)[0],
        randomSort(arrayWithoutNum)[0],
        randomNum,
      ]),
    [randomNum],
  );

  React.useEffect(() => {
    const playSound = new Sound(GameSound, () => {
      playSound.play(() => setIsPlaying(false));
    });
  }, []);

  async function sendAnswer(answer: number) {
    'SEND ANSWER';
    //@ts-ignore
    // whoosh.play();
    setIsPlaying(true);
    if (answer === randomNum) {
      const whoosh = new Sound(GoodSound, () =>
        whoosh.play(() => setIsPlaying(false)),
      );
      setIsGood(true);
    } else {
      const whoosh = new Sound(BadSound, () =>
        whoosh.play(() => setIsPlaying(false)),
      );
      setIsBad(true);
    }
  }

  function handleCloseModal() {
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
      setRandomNum(randomSort(numbers)[0]);
      setTimeout(() => {
        const playSound = new Sound(GameSound, () =>
          playSound.play(() => setIsPlaying(false)),
        );
      }, 500);
      // isGood && navigation.navigate('MathGame');
    }
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Что за цифра?" color={colors.green_dark} />
      <View style={[globalStyles.container, {marginTop: 20, flex: 1}]}>
        <View style={styles.commonTopContainer}>
          <View
            style={[
              styles.expContainer,
              {justifyContent: 'center', alignItems: 'center', flex: 1},
            ]}>
            <NumImage num={randomNum} />
          </View>
        </View>
        <View style={styles.expContainer}>
          {answers.map((item, index) => (
            <TouchableOpacity
              disabled={isPlaying}
              key={index}
              onPress={() => sendAnswer(item)}
              style={styles.answerBtn}>
              <Text
                style={{
                  fontFamily: font.black,
                  fontSize: 18,
                  textTransform: 'uppercase',
                  color: '#000',
                }}>
                {string_numbers[item]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <CustomModal isVisible={modalIsVisible}>
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
      </CustomModal>
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
    maxHeight: 140,
    maxWidth: 100,
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
    marginHorizontal: 5,
    marginBottom: 10,
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
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default WhatIsNumber;
