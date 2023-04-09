import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import SoundImage from '../../assets/img/SVG/Sound';
import {colors} from '../../variables/colors';

const SoundBtn: React.FC<{handle: () => void}> = ({handle}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handle();
      }}
      style={styles.soundBtn}>
      <SoundImage />
    </TouchableOpacity>
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
});

export default SoundBtn;
