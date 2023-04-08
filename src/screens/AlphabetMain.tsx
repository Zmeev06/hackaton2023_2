import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import SoundImage from '../assets/img/SVG/Sound';
  import SquareCard from '../components/UI/SquareCard';
  // import useSound from 'react-native-use-sound';
  // import SoundText from '../assets/rabbit.mp3';
  
  import GameIcon2 from '../assets/img/Alphabet/GameIcon2.png';
  import MinusImage from '../assets/img/operators/minus.png';
  import DevideImage from '../assets/img/operators/devide.png';
  import {colors} from '../variables/colors';
  import {font} from '../variables/font';
  import Header from '../components/Header';
  import {globalStyles} from '../globalStyles';
  
  import GameImage from '../assets/img/deer.png';
  import NumsImage from '../assets/img/nums.png';
  
  import SoundFile from '../assets/rabbit.mp3';
  import useSound from 'react-native-use-sound';
  import {useNavigation} from '@react-navigation/native';
  
  // import Sound from 'react-native-sound';
  // Sound.setCategory('Playback');
  
  const AlphabetMain: React.FC = () => {
    const [isPlaing, setIsPlaing] = React.useState(false);
    const [play, pause, stop, data] = useSound('../assets/rabbit.mp3');
  
    const navigation = useNavigation();
  
    React.useEffect(() => {
      setIsPlaing(true);
      play();
      return () => {
        // whoosh.release();
      };
    }, []);
  
    const handlePlay = () => {
      if (data.isPlaying) pause();
      else play();
    };
  
    return (
      <SafeAreaView style={globalStyles.safeAreaView}>
        <Header title="Алфавит" color={colors.green_dark} />
        <View style={[globalStyles.container, {flex: 1}]}>
          <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            <View style={[styles.row, {marginTop: 20}]}>
              <SquareCard
                onPress={() => navigation.navigate('AlphabetGame', {type: 'plus'})}>
                <View
                  style={[styles.cardContainer, {backgroundColor: '#f8daff'}]}>
                  <Image
                    style={styles.operandImage}
                    resizeMode="contain"
                    source={GameIcon2}
                  />
                  <Text style={styles.gameTitle}>Алфавит</Text>
                </View>
              </SquareCard>
              <SquareCard onPress={() => navigation.navigate('', {type: 'plus'})}>
                <View
                  style={[styles.cardContainer, {backgroundColor: '#ffe9c0'}]}>
                  <Image
                    style={styles.operandImage}
                    resizeMode="contain"
                    source={GameIcon2}
                  />
                  <Text style={styles.gameTitle}>Соты</Text>
                </View>
              </SquareCard>
            </View>
            <View style={styles.row}>
              <SquareCard>
                <View
                  style={[styles.cardContainer, {backgroundColor: '#daf3ff'}]}>
                  <Image
                    style={styles.operandImage}
                    resizeMode="contain"
                    source={MinusImage}
                  />
                  <Text style={styles.gameTitle}>Вычитание</Text>
                </View>
              </SquareCard>
              <SquareCard>
                <View
                  style={[styles.cardContainer, {backgroundColor: '#c9ffcb'}]}>
                  <Image
                    style={styles.operandImage}
                    resizeMode="contain"
                    source={DevideImage}
                  />
                  <Text style={styles.gameTitle}>Деление</Text>
                </View>
              </SquareCard>
            </View>
            <View style={styles.bottomBtn}>
              <Image
                source={NumsImage}
                style={{height: '90%', width: 100}}
                resizeMode="contain"
              />
              <Text style={[styles.gameTitle, {paddingTop: 0}]}>
                Что за цифра?
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                onPress={() => {
                  console.log(data);
                  handlePlay();
                }}
                style={styles.soundBtn}>
                <SoundImage />
              </TouchableOpacity>
              <Image source={GameImage} style={styles.bottomImage} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    soundBtn: {
      height: 60,
      width: 60,
      borderRadius: 30,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.green_dark,
      marginTop: 20,
    },
    bottomBtn: {
      flexDirection: 'row',
      height: 80,
      backgroundColor: '#ffcaca',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      alignItems: 'center',
      borderRadius: 20,
      paddingRight: 15,
    },
    bottomImage: {
      position: 'relative',
      resizeMode: 'contain',
      marginTop: 30,
    },
    content: {
      marginTop: 20,
    },
    backArrow: {
      width: 30,
      height: 30,
    },
    gameTitle: {
      color: colors.black,
      fontFamily: font.black,
      fontSize: 20,
      paddingTop: 10,
      textTransform: 'uppercase',
    },
    operandImage: {
      width: '60%',
      height: '60%',
    },
    cardContainer: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    bottomContainer: {
      flex: 1,
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'flex-end',
      paddingBottom: 20,
    },
  });
  
  export default AlphabetMain;
  