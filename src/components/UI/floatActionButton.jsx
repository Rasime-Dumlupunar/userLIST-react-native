//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={35} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.green,
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});

//make this component available to the app
export default FloatActionButton;
