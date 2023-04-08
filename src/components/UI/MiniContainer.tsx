import {View, StyleSheet} from 'react-native';
import React from 'react';
import {miniContainerProps} from '../../interfaces/propsinterfaces';

const MiniContainer: React.FC<miniContainerProps> = ({
  children,
  width,
  height,
}) => {
  return (
    <View style={[styles.container, {width: width, height: height}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default MiniContainer;
