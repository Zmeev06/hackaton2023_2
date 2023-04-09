import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {colors} from '../variables/colors';
import {globalStyles} from '../globalStyles';
import {PicturePuzzle} from 'react-native-picture-puzzle';

import {PuzzlePieces} from 'react-native-picture-puzzle/dist/types';

import {getDeviceSizes} from '../utils/getDeviceSizes';
import {RootStackParamList} from '../interfaces/propsinterfaces';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {randomSort} from '../utils/randomSort';
import CustomModal from '../components/UI/CustomModal';
import {useNavigation} from '@react-navigation/native';

import GoodImage from '../assets/img/good.png';

// import { Container } from './styles';

const Puzzle: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Puzzle'>
> = ({route}) => {
  const [pieces, setPieces] = React.useState<PuzzlePieces>(
    randomSort([...Array(9)].map((_, num) => num)),
  );
  const [hidden, setHidden] = React.useState<number | null>(pieces[0]);

  const navigation = useNavigation();

  const [modalIsVisible, setModalIsVizible] = React.useState(false);

  const {image} = route.params;

  const devise = getDeviceSizes();

  const renderLoading = React.useCallback(
    (): JSX.Element => <ActivityIndicator />,
    [],
  );
  const onChange = React.useCallback(
    (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
      setPieces(nextPieces);
      setHidden(nextHidden);
    },
    [setPieces, setHidden],
  );

  React.useEffect(() => {
    console.log(checkArray());
    if (checkArray()) {
      setModalIsVizible(true);
    }
  }, [pieces]);

  function checkArray() {
    return pieces.reduce(
      (value, currValue) => {
        if (currValue === value.num + 1 && value.check) {
          return {
            num: currValue,
            check: true,
          };
        } else {
          return {
            num: currValue,
            check: false,
          };
        }
      },
      {
        num: -1,
        check: true,
      },
    ).check;
  }

  function handleCloseModal() {
    navigation.navigate('PuzzlesScreen');
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="Собери пазл" color={colors.green_dark} />
      <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
        <PicturePuzzle
          size={Math.floor(devise.width - 20)}
          pieces={pieces}
          hidden={hidden}
          onChange={onChange}
          source={image}
          renderLoading={renderLoading}
        />
      </View>
      <CustomModal isVisible={modalIsVisible}>
        <Text style={[globalStyles.modalText, {color: colors.success}]}>
          МОЛОДЕЦ
        </Text>
        <Image source={GoodImage} />
        <TouchableOpacity
          style={globalStyles.modalBtn}
          onPress={handleCloseModal}>
          <Text style={globalStyles.modalBtnText}>Закрыть</Text>
        </TouchableOpacity>
      </CustomModal>
    </SafeAreaView>
  );
};

export default Puzzle;
