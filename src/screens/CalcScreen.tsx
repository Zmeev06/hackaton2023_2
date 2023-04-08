import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../globalStyles';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {font} from '../variables/font';
import {getExpressionData} from '../utils/getExpressionData';
import {MATH_EXPRESSIONS} from '../data/expressions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../interfaces/propsinterfaces';

// import { Container } from './styles';
//@ts-ignore
const CalcScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'CalcScreen'>
> = ({route}) => {
  const navigation = useNavigation();

  const {type, diff} = route.params;

  // const {answers, num_1, num_2, res} = getExpressionData(
  //   MATH_EXPRESSIONS[type],
  //   diff,
  // );

  console.log(type);

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Посчитайте" color={colors.green_dark} />
      <View style={[globalStyles.container, {marginTop: 20}]}></View>
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

export default CalcScreen;
