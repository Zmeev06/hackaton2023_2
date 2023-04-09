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

import PlusImage from '../assets/img/operators/plus.png';
import MinusImage from '../assets/img/operators/minus.png';
import MultipleImage from '../assets/img/operators/multiple.png';
import DevideImage from '../assets/img/operators/devide.png';
import {colors} from '../variables/colors';
import {font} from '../variables/font';
import Header from '../components/Header';
import {globalStyles} from '../globalStyles';

import GameImage from '../assets/img/rabbit.png';
import NumsImage from '../assets/img/nums.png';

import SoundFile from '../assets/sounds/rabbit.mp3';
import Sound from 'react-native-sound';
// Sound.setCategory('Playback');
let sound = new Sound(SoundFile);

import {useNavigation, useNavigationState} from '@react-navigation/native';
import SoundBtn from '../components/UI/SoundBtn';

const MathGame: React.FC = () => {
  const [isPlaing, setIsPlaing] = React.useState(false);

  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  React.useEffect(() => {
    sound = new Sound(SoundFile, () => sound.play());
    // setIsPlaing(true);
    // sound.play(() => setIsPlaing(false));
    return () => {
      sound.release();
    };
  }, []);

  React.useEffect(() => {
    setIsPlaing(false);
    sound.release();
  }, [state]);

  const handlePlaySound = () => {
    if (!isPlaing) {
      sound = new Sound(SoundFile, () =>
        sound.play(() => {
          setIsPlaing(false);
          console.log('STOPPED');
        }),
      );
    }
    setIsPlaing(true);
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Математика" color={colors.green_dark} />
      <View style={[globalStyles.container, {flex: 1}]}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={[styles.row, {marginTop: 20}]}>
            <SquareCard
              onPress={() => navigation.navigate('Difficult', {type: 'plus'})}>
              <View
                style={[styles.cardContainer, {backgroundColor: '#f8daff'}]}>
                <Image
                  style={styles.operandImage}
                  resizeMode="contain"
                  source={PlusImage}
                />
                <Text style={styles.gameTitle}>Сложение</Text>
              </View>
            </SquareCard>
            <SquareCard
              onPress={() =>
                navigation.navigate('Difficult', {type: 'multiple'})
              }>
              <View
                style={[styles.cardContainer, {backgroundColor: '#ffe9c0'}]}>
                <Image
                  style={styles.operandImage}
                  resizeMode="contain"
                  source={MultipleImage}
                />
                <Text style={styles.gameTitle}>Умножение</Text>
              </View>
            </SquareCard>
          </View>
          <View style={styles.row}>
            <SquareCard
              onPress={() => navigation.navigate('Difficult', {type: 'minus'})}>
              <View
                style={[styles.cardContainer, {backgroundColor: '#daf3ff'}]}>
                <Image
                  style={styles.operandImage}
                  resizeMode="contain"
                  source={MinusImage}
                />
                <Text style={styles.gameTitle}>Вычитание</Text>
              </View>
            </SquareCard>
            <SquareCard
              onPress={() =>
                navigation.navigate('Difficult', {type: 'devide'})
              }>
              <View
                style={[styles.cardContainer, {backgroundColor: '#c9ffcb'}]}>
                <Image
                  style={styles.operandImage}
                  resizeMode="contain"
                  source={DevideImage}
                />
                <Text style={styles.gameTitle}>Деление</Text>
              </View>
            </SquareCard>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WhatIsNumber')}
            style={styles.bottomBtn}>
            <Image
              source={NumsImage}
              style={{height: '90%', width: 100}}
              resizeMode="contain"
            />
            <Text style={[styles.gameTitle, {paddingTop: 0}]}>
              Что за цифра?
            </Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <SoundBtn handle={handlePlaySound} />
            <Image source={GameImage} style={styles.bottomImage} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    position: 'relative',
    resizeMode: 'contain',
    marginTop: 30,
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
    // alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default MathGame;
