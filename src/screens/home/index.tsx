import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Linking,
  Alert,
  FlatList,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getMetaData, getAllCrops, getUserCrops} from '../../request/index';
import {updateUser} from '../../redux/actions/metaDetaActions';
import config from '../../config';
import Weather from '../../components/weather';
import {updateCrops} from '../../redux/actions/cropActions';
import Soil from '../../components/soil';
import Carousal from '../../components/Banner';
import {logoNew} from '../../assets';
import {height} from '../../utils/getDimensions';
import CropHome from '../../components/crops/cropHome';
import {setLang, getLang} from '../../utils/lang';
import PopOverDialog from '../../components/PopOver';

const Home = ({navigation}: any) => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
    'Possible Unhandled Promise Rejection (id: 0):',
  ]);

  const {t, i18n} = useTranslation();
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const [loading, setLoading] = useState(false);
  const [cropLoading, setCropLoading] = useState(false);
  const [allUserCrops, setAllUsersCrops] = useState([]);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser().then((data: any) => {
      fetchUserCrops();
    });
    getAllCrops(token as string).then((data: any) => {
      dispatch(updateCrops(data));
    });
  }, []);
  const getUser = async () => {
    setLoading(true);
    const userData = await getMetaData(token);
    dispatch(updateUser(userData.data));
    setLoading(false);
  };
  useEffect(() => {
    fetchUserCrops();
  }, [reload]);

  const fetchUserCrops = async () => {
    setCropLoading(true);
    if (user) {
      const userCrops: any = await getUserCrops(
        user._id as string,
        token as string,
      );
      setAllUsersCrops(userCrops[0]?.crop);
      setCropLoading(false);
    }
  };

  const callHandler = () => {
    if (user?.isPaid === false) {
      Alert.alert(
        'Premium Required',
        'This feature is for Premium members only. Please buy Premium to avail this service.',
      );
    } else {
      Linking.openURL(`tel:${config.helplineNumber}`);
    }
  };

  const changeHandler = async () => {
    const value = await getLang();
    if (value === 'en') {
      await i18n.changeLanguage('hi');
      await setLang('hi');
    } else {
      await i18n.changeLanguage('en');
      await setLang('en');
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      {loading ? (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      ) : (
        <>
          <View style={{...styles.top}}>
            <Image
              source={logoNew.image}
              style={{height: 40, width: 120, marginLeft: 10}}
            />
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {user?.isPaid && (
                <AntDesign
                  name="star"
                  color={config.constants.secondaryColor}
                  size={20}
                  style={{paddingRight: 10}}
                />
              )}

              <TouchableOpacity
                onPress={changeHandler}
                style={{
                  paddingVertical: 15,
                }}>
                <FontAwesome
                  name="language"
                  size={20}
                  color="#fff"
                  style={{
                    paddingRight: 10,
                  }}
                />
                <PopOverDialog />
              </TouchableOpacity>

              <Ionicons
                onPress={() => {
                  navigation.navigate('Notifications');
                }}
                name="notifications"
                color="#fff"
                size={20}
                style={{marginRight: 10}}
              />
              <Ionicons
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                name="cart"
                color="#fff"
                size={22}
                style={{marginRight: 10}}
              />
              <Ionicons
                onPress={callHandler}
                name="ios-call"
                color="#fff"
                size={20}
                style={{marginRight: 10}}
              />
              <Ionicons
                onPress={() => {
                  navigation.openDrawer();
                }}
                name="ios-menu-outline"
                color="#fff"
                size={32}
                style={{marginRight: 10}}
              />
            </View>
          </View>
          <View style={{height: height - 130}}>
            <FlatList
              data={[
                <CropHome navigation={navigation} />,
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      color: '#000',
                      marginLeft: 10,
                    }}>
                    {t('Products')}
                  </Text>
                  <Carousal
                    onPress={() => {
                      navigation.navigate('Agristore');
                    }}
                  />
                </View>,
                <Weather
                  onPress={() => navigation.navigate('Weather')}
                  token={token}
                />,
                <Soil
                  onPress={() => {
                    user?.isPaid
                      ? navigation.navigate('SoilHealth')
                      : Alert.alert(
                          'Premium Required',
                          'You need to buy Premium to access this feature',
                        );
                  }}
                />,
              ]}
              renderItem={({item}) => item}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;

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
    height: 60,
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
    height: 120,
    borderBottomColor: config.constants.primaryColor,
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
  },
  cropScroll: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  greeting: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
