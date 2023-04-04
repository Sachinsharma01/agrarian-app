import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CropProgress from '../../components/crops/cropProgress';
import PDF from '../../components/pdf/index';
import config from '../../config';

const OngoingCrop = ({route, navigation}: any) => {
  console.log(
    'crrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooooooooooo',
    route.params,
  );
  const [crop, setCrop] = useState(route.params.crop);
  const [activeTab, setActiveTab]: any = useState(1);
  return (
    <>
      <CropProgress crop={crop} />
      <View style={{height: 50, backgroundColor: '#fff'}}>
        <ScrollView horizontal={true} >
          <TouchableOpacity
            onPress={() => setActiveTab(1)}
            style={{
              marginHorizontal: 25,
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: `${
                activeTab === 1 ? config.constants.borderColor : '#fff'
              }`,
            }}>
            <Text style={{color: 'grey'}}>Crop Advisory</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab(2)}
            style={{
              marginHorizontal: 25,
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: `${
                activeTab === 2 ? config.constants.borderColor : '#fff'
              }`,
            }}>
            <Text style={{color: 'grey'}}>Crop Care</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab(3)}
            style={{
              marginHorizontal: 25,
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor:
                activeTab === 3 ? config.constants.borderColor : '#fff',
            }}>
            <Text style={{color: 'grey'}}>Crop Protection</Text>
          </TouchableOpacity>
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
      <PDF />
    </>
    // </View>
  );
};

export default OngoingCrop;
