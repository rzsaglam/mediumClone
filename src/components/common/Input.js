import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  placeholder: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    color: colors.white,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: colors.white,
    marginHorizontal: 50,
  },
});
