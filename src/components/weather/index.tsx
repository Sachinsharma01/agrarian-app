import {
  View,
  Text,
  PermissionsAndroid,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {getWeather} from '../../request';
import config from '../../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const Weather = ({token}: any) => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [weather, setWeather]: any = useState({});

  useEffect(() => {
    requestLocationPermission();
    getLocation();
  }, []);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocation(position);
        fetchWeather(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    console.log(location);
  };

  const fetchWeather = async (location: any) => {
    setLoading(true);
    const weather = await getWeather(location, token as string);
    setWeather(weather);
    setLoading(false);
    console.log('rrrrrr', weather);
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      ) : (
        <View style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
            }}>
            {weather?.location?.name}
          </Text>
          <View style={styles.weather}>
            <View>
              <Text style={{fontSize: 20, color: '#000'}}>
                {weather?.current?.temp_c} &deg;C
              </Text>
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  <FeatherIcons name="wind" size={20} color="skyblue" />
                  &nbsp; Wind {weather?.current?.wind_kph} km/h
                </Text>
                <Text style={{fontSize: 16, color: '#000'}}>
                  <FeatherIcons name="droplet" size={20} color="skyblue" />
                  &nbsp; Humidity {weather?.current?.humidity} %
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={{
                  uri: `https:${weather?.current?.condition?.icon}`,
                }}
                style={{height: 100, width: 100, marginLeft: 20}}
              />
            </View>
          </View>
          <View
            style={{
              marginRight: 10,
              gap: 10,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18, color: '#000'}}>Forecast</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="cloudy-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
  weather: {
    height: 110,
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  cropSection: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  crops: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 150,
  },
});

export default Weather;