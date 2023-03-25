import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getMetaData} from '../../request/index';
import {updateUser} from '../../redux/actions/metaDetaActions';
import config from '../../config';
import Weather from '../../components/weather';

const Home = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    setLoading(true);
    const userData = await getMetaData(token);
    dispatch(updateUser(userData.data));
    setLoading(false);
    console.log('User details from get meta data$$$', userData);
  };
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      ) : (
        <>
          <View style={{...styles.top}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 22,
                marginLeft: 10,
              }}>
              Agrarian
            </Text>
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
          <ScrollView>
            <View>
              <View style={styles.cropSection}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#000',
                    marginLeft: 5,
                  }}>
                  My Crops
                </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Crop')}}>
                  <Ionicons
                    name="add"
                    color={config.constants.primaryColor}
                    size={30}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.crops}>
                {user?.crops?.length !== 0 ? (
                  <></>
                ) : (
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: 5,
                    }}>
                    No Crops Please Add One.
                  </Text>
                )}
              </View>
            </View>
            <Weather
              onPress={() => navigation.navigate('Weather')}
              token={token}
            />
          </ScrollView>
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
    height: 150,
    borderBottomColor: config.constants.primaryColor,
    borderBottomWidth: 0.5,
  },
});
