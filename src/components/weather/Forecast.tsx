import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Forecast = ({weather}: any) => {
  const getDay = (date: string) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var d = new Date(date);
    var dayName = days[d.getDay()];
    return dayName;
  };
  return (
    <View style={styles.forecastDay}>
      <View
        style={{
          width: '30%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {getDay(weather?.date)}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 10
          }}>
          {weather?.day?.condition?.text}
        </Text>
      </View>
      <View
        style={{
          width: '30%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 80,
            width: 80,
          }}
          source={{
            uri: `https:${weather?.day?.condition?.icon}`,
          }}
        />
      </View>
      <View
        style={{
          width: '30%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            textAlign: 'left',
            fontWeight: 'bold',
          }}>
          <FontAwesome name="temperature-low" size={18} color="#fff" />
          {parseInt(weather?.day?.mintemp_c)}&deg;
          {'     '}
          <FontAwesome name="temperature-high" size={18} color="#fff" />
          {parseInt(weather?.day?.maxtemp_c)}&deg;
        </Text>
      </View>
    </View>
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
