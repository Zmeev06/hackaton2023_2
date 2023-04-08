import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

import BackArrowImage from '../../assets/img/backArrow.png';

const BackButton: React.FC<{bgColor: string}> = ({bgColor}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bgColor}]}
      onPress={() => navigation.goBack()}>
      <Image source={BackArrowImage} style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  arrow: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default BackButton;
