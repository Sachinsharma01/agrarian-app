import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ForecastItem from '../../components/weather/Forecast';

const Forecast = ({navigation}: any) => {
  const [isDay, setIsDay] = useState(false);
  // navigation
  //   .getParent()
  //   ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: any) => state.locationReducer);
  const [weather, setWeather]: any = useState({});

  useEffect(() => {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    setIsDay(isDayTime);
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    // console.log('##############################', data.weather.weather);
    setLoading(true);
    //  const weather = await getWeather(location.position, token as string);
    setWeather(data.weather.weather);
    setLoading(false);
    console.log('rrrrrr', weather);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={
          isDay
            ? require('../../assets/weather/day.jpeg')
            : require('../../assets/weather/night.jpeg')
        }
        style={{height: '100%', width: '100%'}}
        blurRadius={2}>
        <View style={styles.topSection}>
          <View>
            <Text style={{color: '#fff', fontSize: 100, textAlign: 'center'}}>
              {weather?.current?.temp_c}&deg;
            </Text>
            <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
              {weather?.location?.name}
            </Text>
            <Text style={{color: '#fff', fontSize: 15, textAlign: 'center'}}>
              {weather?.current?.condition?.text} |{' '}
              {'Feels Like ' + weather?.current?.feelslike_c}&deg;
            </Text>
          </View>
        </View>
        <ScrollView>
          {weather?.forecast?.forecastday.map((weather: any, idx:number) => {
            return <ForecastItem key={idx} weather={weather} />;
          })}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forecastDay: {
    height: 90,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    flex: 1,
  },
});

export default Forecast;
