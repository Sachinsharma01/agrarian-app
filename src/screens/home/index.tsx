import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  getMetaData,
  getAllCrops,
  getUserCrops,
  removeUserCrop,
} from '../../request/index';
import {updateUser} from '../../redux/actions/metaDetaActions';
import config from '../../config';
import Weather from '../../components/weather';
import {updateCrops} from '../../redux/actions/cropActions';
import CropItem from '../../components/crops/cropItem';

const Home = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const [loading, setLoading] = useState(false);
  const [cropLoading, setCropLoading] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [allUserCrops, setAllUsersCrops] = useState([]);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
    getAllCrops(token as string).then((data: any) => {
      dispatch(updateCrops(data));
    });
  }, []);
  const getUser = async () => {
    setLoading(true);
    const userData = await getMetaData(token);
    dispatch(updateUser(userData.data));
    setLoading(false);
    console.log('User details from get meta data$$$', userData);
  };
  useEffect(() => {
    fetchUserCrops();
  }, [reload]);
  const fetchUserCrops = async () => {
    setCropLoading(true);
    const userCrops: any = await getUserCrops(
      user._id as string,
      token as string,
    );
    setAllUsersCrops(userCrops[0]?.crop);
    setCropLoading(false);
  };
  const removeCrop = async (cropDetails: any) => {
    setCropLoading(true);
    const removed: any = await removeUserCrop(
      {
        userId: user._id,
        crop: {
          ...cropDetails,
        },
      },
      token as string,
    );
    setAllUsersCrops(removed?.crop);
    setCropLoading(false);
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Crop');
                  }}>
                  <Ionicons
                    name="add"
                    color={config.constants.primaryColor}
                    size={30}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setShowCancel(!showCancel);
                  }}>
                  <Feather
                    name="edit"
                    color={config.constants.primaryColor}
                    size={23}
                    style={{marginLeft: 10, marginTop: 2}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setReload(!reload)}>
                  <Feather
                    name="refresh-cw"
                    size={23}
                    color={config.constants.primaryColor}
                    style={{marginLeft: 13, marginTop: 2}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.crops}>
                {allUserCrops?.length !== 0 ? (
                  <>
                    {cropLoading ? (
                      <ActivityIndicator
                        size="large"
                        color={config.constants.primaryColor}
                      />
                    ) : (
                      <ScrollView horizontal={true} style={styles.cropScroll}>
                        {allUserCrops.map((crop: any, idx: number) => {
                          return (
                            <CropItem
                              idx={idx}
                              crop={crop}
                              onCancel={() => removeCrop(crop)}
                              showCancel={showCancel}
                              onPress={() =>
                                navigation.navigate('OngoingCrop', {
                                  crop: {
                                    ...crop,
                                  },
                                })
                              }
                            />
                          );
                        })}
                      </ScrollView>
                    )}
                  </>
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
});
