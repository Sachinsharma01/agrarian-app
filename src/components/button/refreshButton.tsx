import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import config from '../../config';

const RefreshButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={{color: '#fff', lineHeight: 50, textAlign: 'center'}}>
          Load More
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: config.constants.secondaryColor,
    width: 100,
    borderRadius: 20,
  },
});

export default RefreshButton;
