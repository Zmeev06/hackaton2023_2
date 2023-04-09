import {StyleSheet} from 'react-native';
import {colors} from './variables/colors';
import {font} from './variables/font';

export const globalStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  modalText: {
    fontFamily: font.black,
    fontSize: 30,
    paddingBottom: 30,
  },
  modalBtn: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EABE4D',
    marginBottom: 10,
    alignSelf: 'stretch',
    marginTop: 30,
  },
  modalBtnText: {
    fontFamily: font.black,
    color: '#fff',
    fontSize: 18,
  },
});
