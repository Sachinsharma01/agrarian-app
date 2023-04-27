import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import config from '../../config';

const Soil = ({onPress}: any) => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather]: any = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [reload]);
  return (
    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      ) : (
        <>
          <View style={styles.place}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                marginTop: 10,
                marginRight: 10,
                marginLeft: 10,
              }}>
              Soil Health
            </Text>
            <TouchableOpacity onPress={() => setReload(!reload)}>
              <FeatherIcons
                name="refresh-cw"
                size={20}
                color={config.constants.primaryColor}
                style={{marginTop: 13}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.soil}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: config.constants.primaryColor,
                  fontWeight: 'bold',
                }}>
                pH Status:
              </Text>
              <Text
                style={{color: '#000', fontWeight: '500', marginHorizontal: 5}}>
                10
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: config.constants.primaryColor,
                  fontWeight: 'bold',
                }}>
                Moisture:
              </Text>
              <Text
                style={{color: '#000', fontWeight: '500', marginHorizontal: 5}}>
                14%
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: config.constants.primaryColor,
                  fontWeight: 'bold',
                }}>
                Humidity:
              </Text>
              <Text
                style={{color: '#000', fontWeight: '500', marginHorizontal: 5}}>
                75%
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
            }}
            onPress={onPress}>
            <Text style={styles.buttonText}>Check Health</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

// ToastAndroid.show(
//   'This feature is coming soon. Sorry for the inconvenience caused',
//   1,
// )
const styles = StyleSheet.create({
  main: {
    height: 180,
    borderBottomColor: config.constants.primaryColor,
    width: '100%',
    borderBottomWidth: 1,
    backgroundColor: '#ededed',
  },
  soil: {
    height: 80,
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  place: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: config.constants.ternaryColor,
    padding: 5,
    borderRadius: 10,
    // marginBottom: 30,
    width: '30%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    color: '#fff',
    backgroundColor: config.constants.primaryColor,
    padding: 15,
    borderRadius: 10,
  },
});

export default Soil;
