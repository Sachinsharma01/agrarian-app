import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CropProgress from '../../components/crops/cropProgress';
import config from '../../config';
import {getCropDetails} from '../../request';
import {height} from '../../utils/getDimensions';
import FertilizerCalculator from '../../components/fertilizer';
import getOngoingCrop from '../../utils/crop';

const OngoingCrop = ({route, navigation}: any) => {
  const [t, i18n] = useTranslation();
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const [currentCrop, setCurrentCrop]: any = useState();
  const [crop, setCrop] = useState(route?.params?.crop);
  const [activeTab, setActiveTab]: any = useState(0);
  const [loading, setLoading]: any = useState(false);
  const [tab, setTab] = useState(1);
  const [URL, setURL] = useState('');
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
  const getData = async () => {
    const data: any = await getCropDetails(
      token as string,
      route?.params?.crop?._id as string,
    );
    setCurrentCrop(data);
    setLoading(false);
    setURL(data?.english[data?.categories[0]]);
  };

  const cropDiseasesClickHandler = () => {
    if (user?.isPaid) {
      setActiveTab(5);
    } else {
      Alert.alert(
        'Premium Required',
        'This feature is for Premium members only. Please buy Premium to avail this service.',
      );
    }
  };

  const ongoingCropComponent = useMemo(
    () => getOngoingCrop(currentCrop?.name as string, tab as number),
    [tab, currentCrop],
  );
  return (
    <>
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
            {t('On Going Crop')}
          </Text>
        </View>
      </View>
      <View style={{height: height, backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#fff'}}>
          <CropProgress crop={crop} />
        </View>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={config.constants.primaryColor}
          />
        ) : (
          <>
            <View style={{height: 55, backgroundColor: '#fff'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {currentCrop?.categories?.map(
                  (category: string, idx: number) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setActiveTab(idx);
                          setTab(idx + 1);
                        }}
                        key={idx}
                        style={{
                          marginHorizontal: 25,
                          padding: 15,
                          borderBottomWidth: 1,
                          borderBottomColor: `${
                            activeTab === idx
                              ? config.constants.borderColor
                              : '#fff'
                          }`,
                        }}>
                        <Text
                          style={{color: 'grey', textTransform: 'capitalize'}}>
                          {category}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                )}
                <TouchableOpacity
                  onPress={() => {
                    setActiveTab(4);
                    setTab(4);
                  }}
                  style={{
                    marginHorizontal: 25,
                    padding: 15,
                    borderBottomWidth: 1,
                    borderBottomColor:
                      activeTab === 4 ? config.constants.borderColor : '#fff',
                  }}>
                  <Text style={{color: 'grey'}}>Fertilizer Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={cropDiseasesClickHandler}
                  style={{
                    marginHorizontal: 25,
                    padding: 15,
                    borderBottomWidth: 1,
                    borderBottomColor:
                      activeTab === 5 ? config.constants.borderColor : '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text style={{color: 'grey'}}>Crop Diseases</Text>
                  {!user?.isPaid && (
                    <Ionicons
                      name="lock-closed-outline"
                      color={config.constants.primaryColor}
                      size={20}
                      style={{marginLeft: 5}}
                    />
                  )}
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View
              style={{
                marginHorizontal: '6%',
                marginTop: 10,
                backgroundColor: '#fff',
              }}>
              {tab >= 1 && tab <= 3 && ongoingCropComponent}
              {tab === 4 && <FertilizerCalculator />}
            </View>
          </>
        )}
      </View>
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

export default OngoingCrop;
