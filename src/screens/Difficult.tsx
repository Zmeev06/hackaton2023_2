import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../globalStyles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {font} from '../variables/font';

// import { Container } from './styles';
//@ts-ignore
const Difficult: React.FC = ({route}) => {
  const navigation = useNavigation();

  const {type} = route.params;

  console.log(type);

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Сложность" color={colors.green_dark} />
      <View style={[globalStyles.container, {marginTop: 20}]}>
        <TouchableOpacity
          onPress={() =>
            //@ts-ignore
            navigation.navigate('CalcScreen', {type: type, diff: 'easy'})
          }
          style={[styles.btn, {backgroundColor: colors.success}]}>
          <Text style={styles.text}>ЛЕГКО</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            //@ts-ignore
            navigation.navigate('CalcScreen', {type: type, diff: 'medium'})
          }
          style={[styles.btn, {backgroundColor: colors.warning}]}>
          <Text style={styles.text}>СРЕДНЕ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            //@ts-ignore
            navigation.navigate('CalcScreen', {type: type, diff: 'hard'})
          }
          style={[styles.btn, {backgroundColor: colors.error}]}>
          <Text style={styles.text}>СЛОЖНО</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: 10,
  },
  text: {
    fontFamily: font.black,
    color: '#fff',
    fontSize: 18,
  },
});

export default Difficult;
