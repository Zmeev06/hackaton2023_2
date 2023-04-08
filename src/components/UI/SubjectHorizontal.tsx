import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SubjectHorizontalProps} from '../../interfaces/propsinterfaces';
import LinearGradient from 'react-native-linear-gradient';
import {font} from '../../variables/font';
import {colors} from '../../variables/colors';

const SubjectHorizontal: React.FC<SubjectHorizontalProps> = ({
  img,
  title,
  onPress,
  colorGradient,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={colorGradient}
        style={styles.container}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.title}>{title}</Text>
        <Image source={img} style={styles.img} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    borderRadius: 20,
    marginBottom: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: font.black,
    fontSize: 25,
    color: colors.black,
  },
  img: {
    maxWidth: 140,
    maxHeight: 100,
  },
});

export default SubjectHorizontal;
