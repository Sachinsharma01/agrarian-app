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

const Second = ({onPress}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/agrarian-app.appspot.com/o/agrarian%2Fusers%2Fwindmill.gif?alt=media&token=884222ce-53ff-4597-8cf5-f333da3b8a0f',
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
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
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: {
    backgroundColor: config.constants.primaryColor,
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    borderRadius: 10,
  },
});

export default Second;
