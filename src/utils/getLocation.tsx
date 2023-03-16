import {useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';

const requestGeoLocation = async () => {
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
};

export const getLocation = () => {
  const [location, setLocation] = useState({});
  (async function(){
    const granted: Boolean = await requestGeoLocation();
    if (granted) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setLocation(position);
        },
        () => {},
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }())
//   return location;
};
