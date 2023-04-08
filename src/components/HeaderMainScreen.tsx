import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import StarImage from '../assets/img/star.png';
import RatingImage from '../assets/img/rating.png';
import ProfileImage from '../assets/img/profile_2.png';
import {font} from '../variables/font';

// import { Container } from './styles';

const HeaderMainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.firstBlock, styles.block]}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.profileImage}
            source={ProfileImage}
          />
          <Text style={styles.countText}>Коля</Text>
        </View>
        <View style={styles.container}>
          <Image resizeMode="contain" style={styles.image} source={StarImage} />
          <Text style={styles.countText}>1000</Text>
        </View>
      </View>
      <View style={[styles.block, styles.secondBlock]}>
        <Image resizeMode="contain" style={styles.image} source={RatingImage} />
        <Text style={styles.countText}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 38,
    width: 38,
  },
  image: {
    height: 30,
    width: 35,
  },
  firstBlock: {
    flex: 7,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  secondBlock: {
    flex: 3,
  },
  block: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  countText: {
    fontFamily: font.black,
    color: '#4C4C4C',
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default HeaderMainScreen;
