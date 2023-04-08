import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SubjectHorizontalProps} from '../interfaces/propsinterfaces';
import LinearGradient from 'react-native-linear-gradient';

const SubjectMusic: React.FC<SubjectHorizontalProps> = ({
  img,
  title,
  pressHandler,
  colorGradient,
}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={colorGradient}
        style={styles.container}
        start={{x: 0.6, y: 0}}>
        <Image source={img} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 20,
    width: 180,
    height: 180,
    position: 'relative',
  },
  title: {
    fontWeight: '900',
    fontSize: 23,
    color: '#fff',
  },
  img: {
    position: 'absolute',
    top: 5,
    left: 0,
    maxWidth: 140,
    maxHeight: 100,
  },
});

export default SubjectMusic;
