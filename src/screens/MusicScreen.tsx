import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {globalStyles} from '../globalStyles';

import SquareCard from '../components/UI/SquareCard';

//puzzles
import Music_1 from '../assets/img/music/music_1.png';
import Music_2 from '../assets/img/music/music_2.png';
import Music_3 from '../assets/img/music/music_3.png';
import Music_4 from '../assets/img/music/music_4.png';

import MonkeyImage from '../assets/img/monkey.png';

import SoundBtn from '../components/UI/SoundBtn';
import {useNavigation, useNavigationState} from '@react-navigation/native';

import Sound from 'react-native-sound';
Sound.setCategory('Playback');

import Sound_1 from '../assets/sounds/music/music_1.mp3';
import Sound_2 from '../assets/sounds/music/music_2.mp3';
import Sound_3 from '../assets/sounds/music/music_3.mp3';
import Sound_4 from '../assets/sounds/music/music_4.mp3';

import MonkeySound from '../assets/sounds/monkey.mp3';

let startSound = new Sound(MonkeySound);

const MusicScreen: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const [isActive, setIsActive] = React.useState(null);

  const state = useNavigationState(state => state);

  React.useEffect(() => {
    startSound = new Sound(MonkeySound, () => {
      startSound.play(() => setIsPlaying(false));
    });

    return () => {
      startSound.release();
    };
  }, []);

  React.useEffect(() => {
    startSound.release();
  }, [state]);

  function startPlay() {
    if (!isPlaying) {
      setIsPlaying(true);
      startSound = new Sound(MonkeySound, () => {
        startSound.play(() => setIsPlaying(false));
      });
    }
  }

  function handlePlayMusic(music, inst) {
    if (!isPlaying) {
      setIsActive(inst);
      setIsPlaying(true);
      const sound = new Sound(music, () =>
        sound.play(() => {
          setIsPlaying(false);
          setIsActive(null);
        }),
      );
    }
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Музыка" color={colors.green_dark} />
      <ScrollView style={{flex: 1, flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.row}>
            <SquareCard
              style={
                isActive !== null && isActive !== 'accordion' && {opacity: 0.4}
              }
              onPress={() => handlePlayMusic(Sound_1, 'accordion')}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_1} />
              </View>
            </SquareCard>
            <SquareCard
              style={
                isActive !== null && isActive !== 'marakas' && {opacity: 0.4}
              }
              onPress={() => handlePlayMusic(Sound_2, 'marakas')}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_2} />
              </View>
            </SquareCard>
          </View>
          <View style={styles.row}>
            <SquareCard
              style={
                isActive !== null && isActive !== 'baraban' && {opacity: 0.4}
              }
              onPress={() => handlePlayMusic(Sound_3, 'baraban')}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_3} />
              </View>
            </SquareCard>
            <SquareCard
              style={
                isActive !== null && isActive !== 'guitar' && {opacity: 0.4}
              }
              onPress={() => handlePlayMusic(Sound_4, 'guitar')}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_4} />
              </View>
            </SquareCard>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <SoundBtn handle={() => startPlay()} />
            <Image
              style={{height: 180, resizeMode: 'contain', maxWidth: 200}}
              source={MonkeyImage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffdcbe',
    padding: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MusicScreen;
