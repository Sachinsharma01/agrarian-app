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
import {diseaseDiagnosis} from '../../assets';
import config from '../../config';

const Fourth = ({onPress}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={diseaseDiagnosis.image} style={styles.image} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{textAlign: 'justify', fontSize: 15, color: 'gray'}}>
          In views of all things we develop a software that provides all the
          information from sowing to harvesting . Via this software we will
          provide weather forecasting data that helps to choose suitable crop ,
          crop pattern, time of irrigation and all needed information regarding
          cultivation practice.
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

export default Fourth;
