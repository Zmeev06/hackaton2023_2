import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MainScreenProps} from '../interfaces/propsinterfaces';
import game1 from '../assets/img/MainScreenImgs/game1.png';
import game2 from '../assets/img/MainScreenImgs/game2.png';
import game3 from '../assets/img/MainScreenImgs/game3.png';
import game4 from '../assets/img/MainScreenImgs/game4.png';
import game5 from '../assets/img/MainScreenImgs/game5.png';
import game6 from '../assets/img/MainScreenImgs/game6.png';
import SubjectHorizontal from '../components/UI/SubjectHorizontal';
import {globalStyles} from '../globalStyles';
import {font} from '../variables/font';

import Logo from '../assets/img/logo.png';
import HeaderMainScreen from '../components/HeaderMainScreen';
import {colors} from '../variables/colors';
import {getDeviceSizes} from '../utils/getDeviceSizes';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen: React.FC<MainScreenProps> = ({}) => {
  const [subjects, setSubjects] = useState([
    {img: game1, title: 'Математика', colorGradient: ['#99E087', '#C9FFBB']},
    {img: game2, title: 'Алфавит', colorGradient: ['#9CADEB', '#FCD9E6']},
  ]);
  const [subjects2, setSubjects2] = useState([
    {img: game5, title: 'Английский', colorGradient: ['#dce485', '#F8FFA9']},
    {img: game6, title: 'Логика', colorGradient: ['#AB9CE4', '#DFD7FF']},
  ]);

  const device = getDeviceSizes();

  const halfDevice = device.width / 2 - 15;

  const halfCardSizes = {
    width: halfDevice,
    height: halfDevice,
  };

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.bg} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={{height: 25, width: 25}} source={Logo} />
          <Text style={styles.title}>Умняшка</Text>
        </View>
        <HeaderMainScreen />
        <View style={styles.content}>
          {subjects.map((item, index) => (
            <SubjectHorizontal
              img={item.img}
              title={item.title}
              colorGradient={item.colorGradient}
              key={index}
            />
          ))}

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={[styles.halfCard, halfCardSizes]}>
              <LinearGradient
                colors={['#2C9F7D', '#76E2C2']}
                style={{width: '100%', height: '100%'}}
                start={{x: 0.6, y: 0}}>
                <Image source={game3} style={styles.imageFirstHalfCard} />
                <Text style={styles.textFirstHalfCard}>Музыка</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.halfCard, halfCardSizes]}>
              <LinearGradient
                colors={['#C74646', '#E27676']}
                style={{width: '100%', height: '100%'}}
                start={{x: 0.6, y: 0}}>
                <Image
                  source={game4}
                  style={styles.imageSecondHalfCard}
                  resizeMode="contain"
                />
                <Text style={styles.textSecondHalfCard}>Грамота</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {subjects2.map((item, index) => (
            <SubjectHorizontal
              img={item.img}
              title={item.title}
              colorGradient={item.colorGradient}
              key={index}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  content: {
    marginTop: 20,
  },
  img: {
    position: 'absolute',
    top: 5,
    left: 0,
    maxWidth: 140,
    maxHeight: 100,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    height: 50,
  },
  title: {
    color: '#43AA8B',
    fontSize: 22,
    fontFamily: font.black,
    paddingLeft: 5,
  },
  pointsNumber: {
    fontSize: 14,
    fontWeight: '700',
  },
  lvlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  horizontalSubjects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  textFirstHalfCard: {
    color: '#fff',
    fontFamily: font.black,
    position: 'absolute',
    fontSize: 25,
    bottom: 20,
    left: 23,
  },
  imageFirstHalfCard: {
    width: '75%',
    height: '75%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  imageSecondHalfCard: {
    width: '75%',
    height: '75%',
    position: 'absolute',
    right: -5,
    bottom: 0,
  },
  textSecondHalfCard: {
    color: '#fff',
    fontFamily: font.black,
    fontSize: 25,
    position: 'absolute',
    left: 23,
    top: 20,
  },
});

export default MainScreen;
