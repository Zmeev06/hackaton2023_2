import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../globalStyles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {colors} from '../variables/colors';
import Header from '../components/Header';
import letter3 from '../assets/img/Alphabet/letters/letter_7.png';
import letter2 from '../assets/img/Alphabet/letters/letter_6.png';
import letter4 from '../assets/img/Alphabet/letters/letter_8.png';
import letter1 from '../assets/img/Alphabet/letters/letter_5.png';
import letter0 from '../assets/img/Alphabet/letters/letter_4.png';
import CustomModal from '../components/UI/CustomModal';

import GoodImage from '../assets/img/good.png';
import BadImage from '../assets/img/bad.png';

import GoodSound from '../assets/sounds/like1.mp3';
import BadSound from '../assets/sounds/retry.mp3';

import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const objs = [
  {
    letter: 'Г',
    image: letter0,
  },
  {
    letter: 'Д',
    image: letter1,
  },
  {
    letter: 'Е',
    image: letter2,
  },
  {
    letter: 'Ё',
    image: letter3,
  },
  {
    letter: 'Ж',
    image: letter4,
  },
];

const HoneyGame: React.FC = () => {
  const [letters, setLetters] = React.useState(
    objs.sort(() => Math.random() - 0.5),
  );
  const [answer, setAnswer] = React.useState<any>([]);

  const current = 'ГДЕЁЖ';

  const [isVisible, setIsVisible] = React.useState(false);

  const [isGood, setIsGood] = React.useState(false);
  const [isBad, setIsBad] = React.useState(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    if (answer.length === 5) {
      checkAnswer();
    }
  }, [answer]);

  React.useEffect(() => {
    if ((isBad || isGood) && !isVisible) {
      setIsVisible(true);
    }
  }, [isBad, isGood]);

  async function checkAnswer() {
    'SEND ANSWER';
    //@ts-ignore
    // whoosh.play();
    if (answer.map((item: any) => item.letter).join('') === current) {
      console.log('YES YES');
      const whoosh = new Sound(GoodSound, () => whoosh.play());
      setIsGood(true);
    } else {
      const whoosh = new Sound(BadSound, () => whoosh.play());
      setIsBad(true);
    }
  }

  function handleCloseModal() {
    if (isBad) {
      setIsVisible(false);
      setAnswer([]);
      setLetters(objs.sort(() => Math.random() - 0.5));
    }

    if (isGood) {
      setIsVisible(false);
      navigation.navigate('Home');
    }

    setTimeout(() => {
      setIsBad(false);
      setIsGood(false);
    }, 400);
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="По порядку" color={colors.green_dark} />
      <View style={styles.enterBlock}>
        {[...Array(5)].map((item, index) => (
          <View key={index} style={styles.letterLine}>
            <Image
              style={{width: 40, height: 50, resizeMode: 'contain'}}
              source={answer[index]?.image}
            />
          </View>
        ))}
      </View>
      <View style={styles.lettersBlock}>
        {letters.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setLetters(letters.filter(ob => ob.letter !== item.letter));
              setAnswer((prev: any) => [...prev, item]);
            }}>
            <Image style={styles.letterImg} source={letters[index].image} />
          </TouchableOpacity>
        ))}
      </View>

      <CustomModal isVisible={isVisible}>
        <Text
          style={[
            globalStyles.modalText,
            {color: isBad ? colors.error : colors.success},
          ]}>
          {isBad ? 'Попробуй ещё раз' : 'МОЛОДЕЦ'}
        </Text>
        <Image source={isBad ? BadImage : GoodImage} />
        <TouchableOpacity
          style={globalStyles.modalBtn}
          onPress={handleCloseModal}>
          <Text style={globalStyles.modalBtnText}>Закрыть</Text>
        </TouchableOpacity>
      </CustomModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lettersBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  letterBlock: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  letterImg: {
    maxWidth: 50,
    maxHeight: 50,
    resizeMode: 'contain',
  },
  letterMain: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
  },
  letterLine: {
    width: 50,
    height: 58,
    borderBottomWidth: 3,
    borderBottomColor: '333333',
    marginHorizontal: 5,
  },
  enterBlock: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
  },
});

export default HoneyGame;
