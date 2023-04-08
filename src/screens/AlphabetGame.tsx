import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../globalStyles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {colors} from '../variables/colors'
import Header from '../components/Header';
import { letters } from '../variables/letters';


const AlphabetGame: React.FC = () => {
  const navigation = useNavigation();
  return (
  <SafeAreaView style={globalStyles.safeAreaView}>
    <Header title="Алфавит" color={colors.green_dark} />
    <View></View>
    <View style={styles.lettersBlock}>
        {letters.map((item, index) => <TouchableOpacity style={styles.letterBlock} key={index}><Image style={styles.letterImg} source={item} /></TouchableOpacity>)}
    </View>
  </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  lettersBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  letterBlock: {
    width: 40,
    height: 40,

  },
  letterImg: {
    width: 30,
    height: 30
  }
});

export default AlphabetGame;
