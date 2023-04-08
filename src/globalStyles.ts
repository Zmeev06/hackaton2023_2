import {StyleSheet} from 'react-native';
import {colors} from './variables/colors';

interface GlobaStyles {
  safeAreaView: {
    [key: string]: string | number;
  };
}

export const globalStyles: GlobaStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.bg,
    flex: 1,
  },
});
