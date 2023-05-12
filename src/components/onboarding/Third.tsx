import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cropDoctor} from '../../assets';
import config from '../../config';

const Third = ({onPress}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={cropDoctor.image} style={styles.image} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{textAlign: 'justify', fontSize: 15, color: 'gray'}}>
          Crop Doctor is an android based mobile application for the farmers in
          national level. The objective of this application is to wider reach
          and easy accessibility of crop information and service among farmers.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons
          name="arrow-forward-outline"
          color={config.constants.primaryColor}
          size={22}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: '100%',
    // marginTop: 20
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
    textTransform: 'uppercase',
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonText: {
    color: config.constants.primaryColor,
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 30,
    position: 'absolute',
    bottom: 120,
    right: 10,
  },
});

export default Third;
