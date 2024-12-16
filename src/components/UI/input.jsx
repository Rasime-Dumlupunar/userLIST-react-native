import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && (
        <Text style={{marginTop: 5, color: themeColors.red, fontSize: 11}}>
          {error}
        </Text>
      )}
    </View>
  );
};
const InputUpdate = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titletwo}>{title}</Text>
      <TextInput {...props} style={styles.inputUpdate} />
    </View>
  );
};

export {Input, InputUpdate};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4,
    color: themeColors.orange,
  },
  input: {
    padding: 8,
    backgroundColor: themeColors.input,
    fontSize: 15,
    borderRadius: 15,
    paddingVertical: 13,
  },
  inputUpdate: {
    padding: 10,
    backgroundColor: themeColors.green,
    fontSize: 16,
    borderRadius: 15,
    paddingVertical: 15,
  },
  titletwo: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 5,
    color: themeColors.black,
  },
});
