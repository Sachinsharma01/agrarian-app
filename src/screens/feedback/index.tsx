import {
  Linking,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';

const Feedback = ({navigation}: any) => {
  useEffect(() => {
    Linking.openURL(config.feedbackURL);
  }, []);
  return (
    <>
      <SafeAreaView>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="#fff"
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>
              Back
            </Text>
          </View>
        </View>
        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          We're AGRARIAN, a startup, whose objective is to bring change in the
          agriculture sector. We provide a specific platform to the farmers that
          help them to get all the modern information and sustainable ways
          regarding crop cultivation practices from sowing to harvesting.
        </Text>
        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          We would love to hear from you. Please share your valuable feedback.
        </Text>

        <Text
          style={{marginHorizontal: '5%', marginVertical: '5%', color: '#000'}}>
          Join our farmer community on WhatsApp:
        </Text>
        <TouchableOpacity>
          <Text
          onPress={() => Linking.openURL(config.whatsappURL)}
            style={{
              marginHorizontal: '5%',
              marginVertical: '5%',
              padding: 10,
              color: '#fff',
              backgroundColor: config.constants.primaryColor,
              textAlign: 'center',
              borderRadius: 10,
            }}>
            Join
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
});
export default Feedback;
