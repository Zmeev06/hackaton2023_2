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
import {letters} from '../variables/letters';

const AlphabetGame: React.FC = () => {
  const navigation = useNavigation();
  const [letter, setLetter] = useState('')
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Алфавит" color={colors.green_dark} />
      <View style={styles.letterMain}>
        <Image />
      </View>
      <View style={styles.lettersBlock}>
        {letters.map((item, index) => (
          <TouchableOpacity style={styles.letterBlock} key={index} onPress={() => setLetter(index)}>
            <Image style={styles.letterImg} source={item} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lettersBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterBlock: {
    width: 40,
    height: 40,
  },
  letterImg: {
    width: 30,
    height: 30,
  },
  letterMain: {
    height: '70%'
  }
});

export default AlphabetGame;
