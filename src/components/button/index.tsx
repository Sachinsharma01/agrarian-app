import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import config from '../../config';

const Button = ({label, onPress}:any) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: config.constants.secondaryColor,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '90%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
});
export default Button;
