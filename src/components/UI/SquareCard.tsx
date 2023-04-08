import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {getDeviceSizes} from '../../utils/getDeviceSizes';

// import { Container } from './styles';

interface SquareCardProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const SquareCard: React.FC<SquareCardProps> = ({children, onPress}) => {
  const device = getDeviceSizes();

  const halfDevice = device.width / 2 - 15;

  const halfCardSizes = {
    width: halfDevice,
    height: halfDevice,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, halfCardSizes]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
});

export default SquareCard;
