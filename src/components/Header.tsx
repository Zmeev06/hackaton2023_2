import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from './UI/BackButton';
import {font} from '../variables/font';
import {colors} from '../variables/colors';

// import { Container } from './styles';

const Header: React.FC<{color: string; title: string; disable?: boolean}> = ({
  color,
  title,
  disable,
}) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton disable={disable} bgColor={color} />
      <Text style={styles.title}>{title}</Text>
      <View style={{width: 50}} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontFamily: font.black,
    textTransform: 'uppercase',
  },
});

export default Header;
