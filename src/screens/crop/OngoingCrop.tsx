import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CropProgress from '../../components/crops/cropProgress';
import PDF from '../../components/pdf/index';
import config from '../../config';
import {getCropDetails} from '../../request';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';

const OngoingCrop = ({route, navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [currentCrop, setCurrentCrop]: any = useState();
  const [crop, setCrop] = useState(route?.params?.crop);
  const [activeTab, setActiveTab]: any = useState(0);
  const [loading, setLoading]: any = useState(false);
  const [URL, setURL] = useState('');
  console.log(
    'crrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooooooooooo',
    route.params,
  );
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

  const setUrlOnSelect = (category: string) => {
    const data = currentCrop?.english;
    const url: string = data[category];
    setURL(url);
  };
  return (
    <>
      <CropProgress crop={crop} />
      {loading ? (
        <ActivityIndicator size="small" color={config.constants.primaryColor} />
      ) : (
        <>
          <View style={{height: 50, backgroundColor: '#fff'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {currentCrop?.categories?.map((category: string, idx: number) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setActiveTab(idx);
                      setUrlOnSelect(category);
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
                    <Text style={{color: 'grey', textTransform: 'capitalize'}}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => setActiveTab(4)}
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
                onPress={() => setActiveTab(5)}
                style={{
                  marginHorizontal: 25,
                  padding: 15,
                  borderBottomWidth: 1,
                  borderBottomColor:
                    activeTab === 5 ? config.constants.borderColor : '#fff',
                }}>
                <Text style={{color: 'grey'}}>Crop Diseases</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <PDF url={URL} />
        </>
      )}
    </>
  );
};

export default OngoingCrop;
