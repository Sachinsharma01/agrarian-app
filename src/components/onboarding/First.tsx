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
import {onBoardLogoOne} from '../../assets';
import config from '../../config';

const First = ({onPress}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={onBoardLogoOne.image} style={styles.image} />
      </View>
      <View style={{marginHorizontal: 20,}}>
        <Text style={{textAlign: 'justify', fontSize: 15, color: 'gray'}}>
          Our AI platform enables livestock, crop producers and processors to
          quickly and easily increase efficiency, improve decision making, and
          increase the revenue. We empower businesses across the value chain to
          quickly and easily provide all the essential inputs for increasing the
          crops yields. Our team provides all inputs at the time of sowing and
          also provides method of using materials. There will be less loss and
          farmers will get benefited as the inputs from the team will provide
          knowledge for systematic crop cultivation. Our team provides knowledge
          for maximum land utilization and how to increase the
          productivity of land.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons name="arrow-forward-outline" color={config.constants.primaryColor} size={22} />
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
    marginTop: 20
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

export default First;
