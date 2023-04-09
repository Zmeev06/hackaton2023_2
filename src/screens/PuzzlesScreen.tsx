import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {globalStyles} from '../globalStyles';

import SquareCard from '../components/UI/SquareCard';

//puzzles
import Puzzle_1 from '../assets/img/puzzles/puzzle_1.png';
import Puzzle_2 from '../assets/img/puzzles/puzzle_3.png';
import Puzzle_3 from '../assets/img/puzzles/puzzle_3.png';
import Puzzle_4 from '../assets/img/puzzles/puzzle_4.png';

import EnotImage from '../assets/img/enot.png';
import SoundBtn from '../components/UI/SoundBtn';
import {useNavigation} from '@react-navigation/native';

const PuzzlesScreen: React.FC = () => {
  function handlePlaySound() {}
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Выбери пазл" color={colors.green_dark} />
      <ScrollView style={{flex: 1, flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.row}>
            <SquareCard
              onPress={() => navigation.navigate('Puzzle', {image: Puzzle_1})}>
              <Image style={styles.imageStyle} source={Puzzle_1} />
            </SquareCard>
            <SquareCard
              onPress={() => navigation.navigate('Puzzle', {image: Puzzle_2})}>
              <Image style={styles.imageStyle} source={Puzzle_2} />
            </SquareCard>
          </View>
          <View style={styles.row}>
            <SquareCard
              onPress={() => navigation.navigate('Puzzle', {image: Puzzle_3})}>
              <Image style={styles.imageStyle} source={Puzzle_3} />
            </SquareCard>
            <SquareCard
              onPress={() => navigation.navigate('Puzzle', {image: Puzzle_4})}>
              <Image style={styles.imageStyle} source={Puzzle_4} />
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
              source={EnotImage}
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

export default PuzzlesScreen;
