import {Image, StyleSheet, Text, View} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>лесная братва</Text>
      </View>
      <View style={styles.topContainers}>
        <MiniContainer width={170} height={50}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImgContainer}>
              <Image source={profile} style={styles.profileImg} />
            </View>
            <View>
              <Text style={styles.nameText}>Коля</Text>
              <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>Очков: </Text>
                <Text style={styles.pointsNumber}>1000</Text>
              </View>
            </View>
          </View>
        </MiniContainer>
        <MiniContainer width={130} height={50}>
          <View style={styles.lvlsContainer}>
            <Text style={styles.lvlsText}>Пройдено уровней</Text>
            <Text style={styles.lvlsNumber}>5</Text>
          </View>
        </MiniContainer>
      </View>
      <View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    color: '#21AB69',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  topContainers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImgContainer: {
    borderRadius: 100,
    backgroundColor: '#FF6F6F',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: '70%',
    height: '70%',
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
  },
  pointsText: {
    color: '#727272',
    fontSize: 14,
  },
  pointsNumber: {
    fontSize: 14,
    fontWeight: '700',
  },
  lvlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lvlsText: {
    color: '#727272',
    fontSize: 10,
    width: 70,
  },
  lvlsNumber: {
    fontSize: 22,
    fontWeight: '700',
  },
  horizontalSubjects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainScreen;
