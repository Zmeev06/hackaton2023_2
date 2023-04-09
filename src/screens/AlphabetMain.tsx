import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import SoundImage from '../assets/img/SVG/Sound';
import SquareCard from '../components/UI/SquareCard';
// import SoundText from '../assets/rabbit.mp3';

import GameIcon from '../assets/img/Alphabet/GameIcon.png';
import GameIcon2 from '../assets/img/Alphabet/GameIcon2.png';
import {colors} from '../variables/colors';
import {font} from '../variables/font';
import Header from '../components/Header';
import {globalStyles} from '../globalStyles';

import GameImage from '../assets/img/deer.png';

import SoundFile from '../assets/sounds/alphabet.mp3';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');
let sound = new Sound(SoundFile);
Sound.setCategory('Playback');

import {useNavigation, useNavigationState} from '@react-navigation/native';

const AlphabetMain: React.FC = () => {
  const [isPlaing, setIsPlaing] = React.useState(true);

  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  const firstRender = React.useRef(true);

  React.useEffect(() => {
    sound = new Sound(SoundFile, () => sound.play(() => setIsPlaing(false)));
    // sound.play(() => setIsPlaing(false));
    return () => {
      sound.release();
    };
  }, []);

  React.useEffect(() => {
    if (!firstRender.current) {
      setIsPlaing(false);
      sound.release();
    }
    firstRender.current = false;
  }, [state]);

  React.useEffect(() => {
    console.log('ISPLAING', isPlaing);
  }, [isPlaing]);

  const handlePlaySound = () => {
    if (!isPlaing) {
      sound = new Sound(SoundFile, () =>
        sound.play(() => {
          setIsPlaing(false);
          console.log('STOPPED');
        }),
      );
      setIsPlaing(true);
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Алфавит" color={colors.green_dark} />
      <View style={[globalStyles.container, {flex: 1}]}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={[styles.row, {marginTop: 30}]}>
            <SquareCard
              style={{width: 'auto', flex: 1}}
              onPress={() =>
                navigation.navigate('AlphabetGame', {type: 'plus'})
              }>
              <View
                style={[styles.cardContainer, {backgroundColor: '#f8daff'}]}>
                <Image
                  style={styles.operandImage}
                  resizeMode="contain"
                  source={GameIcon}
                />
                <Text style={styles.gameTitle}>Алфавит</Text>
              </View>
            </SquareCard>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              disabled={isPlaing}
              onPress={() => {
                handlePlaySound();
              }}
              style={styles.soundBtn}>
              <SoundImage />
            </TouchableOpacity>
            <Image source={GameImage} style={styles.bottomImage} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  soundBtn: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green_dark,
    marginTop: 20,
    position: 'absolute',
    left: 0,
    top: 150,
  },
  bottomBtn: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#ffcaca',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 15,
  },
  bottomImage: {
    resizeMode: 'contain',
    marginTop: 30,
    right: 0,
  },
  content: {
    marginTop: 20,
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  gameTitle: {
    color: colors.black,
    fontFamily: font.black,
    fontSize: 20,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
  operandImage: {
    width: '60%',
    height: '60%',
  },
  cardContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default AlphabetMain;
