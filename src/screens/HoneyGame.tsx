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
  
  const HoneyGame: React.FC = () => {
    const navigation = useNavigation();
    const [letter, setLetter] = useState('');
    return (
      <SafeAreaView style={globalStyles.safeAreaView}>
        <Header title="Алфавит" color={colors.green_dark} />
        <View style={styles.letterMain}>
          <Image source={letters[Number(letter)].img} />
          <Image source={letters[Number(letter)].word} />
        </View>
        <View style={styles.lettersBlock}>
          {letters.map((item, index) => (
            <TouchableOpacity
              style={styles.letterBlock}
              key={index}
              onPress={() => {
                setLetter(`${index}`);
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
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
      paddingTop: 40
    },
  });
  
  export default HoneyGame;
  