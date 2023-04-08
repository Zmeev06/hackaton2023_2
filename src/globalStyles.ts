import {StyleSheet} from 'react-native';

interface GlobaStyles {
  safeAreaView: {
    [key: string]: string | number;
  };
}

export const globalStyles: GlobaStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
