import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import BackArrow from '../assets/img/SVG/BackArrow';
import {StartGameProps} from '../interfaces/propsinterfaces';
import gameImg from '../assets/img/rabbit.png';
import message from '../assets/img/message.png';
import Sound from '../assets/img/SVG/Sound';
import useSound from 'react-native-use-sound';
import SoundText from '../assets/rabbit.mp3';

const StartGameScreen: React.FC<StartGameProps> = ({
  img,
  color,
  title,
  text,
  sound,
}) => {
  const [play, pause, stop, data] = useSound(SoundText);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <BackArrow style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Математика</Text>
          <View style={{width: 50}} />
        </View>
        <View style={styles.content}>
          <View style={styles.ContentBlocks}>
            <TouchableOpacity
              style={[styles.gameContainer, {backgroundColor: '#333333'}]}>
              <Text style={styles.gameTitle}>Сложение</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.gameContainer, {backgroundColor: '#71CCFF'}]}>
              <Text style={styles.gameTitle}>Умножение</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ContentBlocks}>
            <TouchableOpacity
              style={[styles.gameContainer, {backgroundColor: '#FFD771'}]}>
              <Text style={styles.gameTitle}>ВЫЧИТАНИЕ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.gameContainer, {backgroundColor: '#E371FF'}]}>
              <Text style={styles.gameTitle}>ДЕЛЕНИЕ</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>
            Привет! Меня зовут кролик-попрыгун, я очень сильно люблю математику.
            Умею считать до 20. Мне сказали, что ты сможешь решить мои самые
            сложные примеры. Давай проверим это!
          </Text>
          <TouchableOpacity style={styles.gameImgElips} onPress={() =>play()}>
            <Sound />
          </TouchableOpacity>
          <Image style={styles.gameImg} source={gameImg} />
          <Image style={styles.message} source={message} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8FFE5',
    height: '100%',
  },
  container: {
    padding: 20,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#4D4D4D',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  backArrow: {
    width: 30,
    height: 30,
  },
  gameImgElips: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    backgroundColor: '#8BE276',
    width: 46,
    height: 46,
    position: 'absolute',
    top: 50,
    right: 15,
    zIndex: 6,
  },
  gameImg: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    right: 0,
  },
  message: {
    width: 290,
    height: 140,
    position: 'absolute',
    top: 65,
    right: 35,
    zIndex: 2,
  },
  contentTextContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
    height: 350,
    width: '100%',
  },
  contentTitle: {
    color: '#393939',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  contentText: {
    width: 270,
    color: '#393939',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
    position: 'absolute',
    zIndex: 5,
    top: 85,
  },
  ContentBlocks: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  gameContainer: {
    width: 165,
    height: 165,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  gameTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default StartGameScreen;
