import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BLUE_GROTTO, SPACE_CADET } from '../../../assets/Color';

const OutlineRoundedButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: BLUE_GROTTO,
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 5
  },
  buttonText: {
    color: BLUE_GROTTO,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default OutlineRoundedButton;