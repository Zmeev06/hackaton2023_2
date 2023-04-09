import {
  View,
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
import {letters} from '../data/letters';

import Sound from 'react-native-sound';
import {alphabetSounds} from '../data/alphabetSounds';
Sound.setCategory('Playback');

const AlphabetGame: React.FC = () => {
  const navigation = useNavigation();
  const [letter, setLetter] = useState('');

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = React.useState(null);

  function playSound(index) {
    if (!isPlaying) {
      setCurrent(index);
      const sound = new Sound(alphabetSounds[index], () =>
        sound.play(() => {
          setIsPlaying(false);
          setCurrent(null);
        }),
      );
    }
    setIsPlaying(true);
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Алфавит" color={colors.green_dark} />
      <View style={styles.letterMain}>
        <Image
          style={{width: 100, height: 130, resizeMode: 'contain'}}
          source={letters[Number(letter)].img}
        />
        <Image
          style={{width: 140, height: 160, resizeMode: 'contain'}}
          source={letters[Number(letter)].word}
        />
      </View>
      <View style={styles.lettersBlock}>
        {letters.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.letterBtn,
              current !== index && current !== null && {opacity: 0.4},
            ]}
            key={index}
            disabled={isPlaying}
            onPress={() => {
              setLetter(`${index}`);
              playSound(index);
            }}>
            <Image style={styles.letterImg} source={item.img} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lettersBlock: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterBtn: {
    maxWidth: 50,
    maxHeight: 50,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  letterImg: {
    zIndex: 100,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  letterMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default AlphabetGame;
