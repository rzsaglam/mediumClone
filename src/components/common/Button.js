import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.green,
    padding: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginHorizontal: 50,
  },
  buttonTitle: {
    color: colors.white,
    textAlign: 'center',
  },
});
