import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;
  const setColors = () => {
    switch (status) {
      case 'success':
        return themeColors.orange;
      case 'warning':
        return themeColors.green;
      case 'info':
        return themeColors.orange;
      default:
        return themeColors.black;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColors()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default Button;
