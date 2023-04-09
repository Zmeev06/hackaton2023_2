import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {globalStyles} from '../globalStyles';

import SquareCard from '../components/UI/SquareCard';

//puzzles
import Music_1 from '../assets/img/music/music_1.png';
import Music_2 from '../assets/img/music/music_3.png';
import Music_3 from '../assets/img/music/music_3.png';
import Music_4 from '../assets/img/music/music_4.png';

import MonkeyImage from '../assets/img/monkey.png';

import SoundBtn from '../components/UI/SoundBtn';
import {useNavigation} from '@react-navigation/native';

const MusicScreen: React.FC = () => {
  function handlePlaySound() {}
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Выбери пазл" color={colors.green_dark} />
      <ScrollView style={{flex: 1, flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.row}>
            <SquareCard onPress={() => {}}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_1} />
              </View>
            </SquareCard>
            <SquareCard onPress={() => {}}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_2} />
              </View>
            </SquareCard>
          </View>
          <View style={styles.row}>
            <SquareCard onPress={() => {}}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={Music_3} />
              </View>
            </SquareCard>
            <SquareCard onPress={() => {}}>
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
            <SoundBtn handle={() => console.log('ok')} />
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
