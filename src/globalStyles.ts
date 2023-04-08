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
});
