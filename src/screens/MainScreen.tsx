import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MainScreenProps} from '../interfaces/propsinterfaces';
import MiniContainer from '../components/UI/MiniContainer';
import profile from '../assets/img/MainScreenImgs/profile.png';
import game1 from '../assets/img/MainScreenImgs/game1.png';
import game2 from '../assets/img/MainScreenImgs/game2.png';
import game3 from '../assets/img/MainScreenImgs/game3.png';
import game4 from '../assets/img/MainScreenImgs/game4.png';
import game5 from '../assets/img/MainScreenImgs/game5.png';
import game6 from '../assets/img/MainScreenImgs/game6.png';
import SubjectHorizontal from '../components/UI/SubjectHorizontal';
import SubjectMusic from '../components/SubjectMusic';
import SubjectCharter from '../components/SubjectCharter';
import {globalStyles} from '../globalStyles';
import {font} from '../variables/font';

import Logo from '../assets/img/logo.png';
import HeaderMainScreen from '../components/HeaderMainScreen';

const MainScreen: React.FC<MainScreenProps> = ({}) => {
  const [subjects, setSubjects] = useState([
    {img: game1, title: 'Математика', colorGradient: ['#99E087', '#C9FFBB']},
    {img: game2, title: 'Алфавит', colorGradient: ['#9CADEB', '#FCD9E6']},
  ]);
  const [subjects2, setSubjects2] = useState([
    {img: game5, title: 'Английский', colorGradient: ['#B8C14A', '#F8FFA9']},
    {img: game6, title: 'Логика', colorGradient: ['#AB9CE4', '#DFD7FF']},
  ]);
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
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
          <View style={styles.horizontalSubjects}>
            <SubjectMusic
              img={game3}
              title={'Музыка'}
              colorGradient={['#2C9F7D', '#76E2C2']}
            />
            <SubjectCharter
              img={game4}
              title={'Грамота'}
              colorGradient={['#C74646', '#E27676']}
            />
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
});

export default MainScreen;
