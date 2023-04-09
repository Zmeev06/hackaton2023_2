import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../globalStyles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {colors} from '../variables/colors';
import Header from '../components/Header';
import letter0 from '../assets/img/Alphabet/letters/letter_7.png'
import letter1 from '../assets/img/Alphabet/letters/letter_6.png'
import letter2 from '../assets/img/Alphabet/letters/letter_8.png'
import letter3 from '../assets/img/Alphabet/letters/letter_5.png'
import letter4 from '../assets/img/Alphabet/letters/letter_4.png'

const HoneyGame: React.FC = () => {
  const [rightAnswer, setRightAnswer] = React.useState(["Г", "Д", "Е", "Ё", "Ж"])
  const [unRightAnswer, setUnRightAnswer] = React.useState(["Ё", "Е", "Ж", "Д", "Г"])

  const navigation = useNavigation();
  const [letters, setLetters] = React.useState([letter0, letter1, letter2, letter3, letter4])
  const [letter, setLetter] = useState([]);
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="По порядку" color={colors.green_dark} />
      <View style={styles.enterBlock}>
        {[...Array(5)].map((item, index) => <View key={index} style={styles.letterLine}>{letter.map(e => <Image />)}</View>)}
      </View>
      <View style={styles.lettersBlock}>
        {unRightAnswer.map((item, index) => <TouchableOpacity onPress={() => {
          letter.push(item)
          setUnRightAnswer(unRightAnswer.filter(e => e !== item))
          }}><Image style={styles.letterImg} source={letters[index]} /></TouchableOpacity>)}
      </View>
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
    height: 2,
    borderWidth: 2,
    borderColor: '#333333',
    marginRight: 5
  },
  enterBlock: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center'
  }
});

export default HoneyGame;
