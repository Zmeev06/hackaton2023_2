import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {getDeviceSizes} from '../../utils/getDeviceSizes';
import {font} from '../../variables/font';

// import { Container } from './styles';

const CustomModal: React.FC<{
  isVisible: boolean;
  children: React.ReactNode;
}> = ({isVisible, children}) => {
  const device = getDeviceSizes();

  return (
    <ReactNativeModal
      animationInTiming={500}
      animationIn={'bounceInLeft'}
      animationOut={'bounceOutRight'}
      backdropTransitionOutTiming={800}
      hasBackdrop={true}
      statusBarTranslucent
      deviceHeight={device.height + (StatusBar.currentHeight || 0)}
      coverScreen={true}
      isVisible={isVisible}>
      <View style={styles.modalContainer}>{children}</View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
    paddingTop: 40,
    paddingBottom: 20,
  },
});

export default CustomModal;
