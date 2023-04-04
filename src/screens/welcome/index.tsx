import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {welcomeLogo} from '../../assets';
import First from '../../components/onboarding/First';
import Second from '../../components/onboarding/Second';

const Welcome = ({navigation}: any) => {
  const [screen, setScreen] = useState(1);
  return (
    <>
      {screen === 1 && (
        <SafeAreaView style={styles.container}>
          <View style={styles.imageView}>
            <Image source={welcomeLogo.image} style={styles.image} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen(2)}>
            <Text style={styles.buttonText}>Let's Begin</Text>
            <Ionicons name="arrow-forward-outline" color="#fff" size={22} />
          </TouchableOpacity>
        </SafeAreaView>
      )}
      {screen === 2 && <First onPress={() => setScreen(3)} />}
      {screen === 3 && <Second onPress={() => navigation.navigate('Login')} />}
    </>
  );
};

export default Welcome;

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
