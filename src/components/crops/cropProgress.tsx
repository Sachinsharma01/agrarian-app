import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import dayjs from 'dayjs';
import config from '../../config';

const CropProgress = ({crop}: any) => {
  let date = dayjs(new Date(crop?.sowingDate)).format('DD MMMM YYYY');
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: config.constants.borderColor,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // marginVertical: 10,
        paddingVertical: 15,
      }}>
      <Image style={{width: 50, height: 50}} source={{uri: crop?.image}} />
      <View style={{marginLeft: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: config.constants.primaryColor,
            textTransform: 'capitalize',
          }}>
          {crop?.name}
        </Text>
        <Text
          style={{
            color: config.constants.primaryColor,
            textTransform: 'capitalize',
          }}>
          {'Crop Planted On ' +
            date +
            '    Progress : ' +
            parseInt(crop.progress * 100 + '', 10) +
            '%'}
        </Text>
        <ProgressBar
          progress={crop.progress}
          color={config.constants.primaryColor}
          style={{
            marginTop: 15,
            width: Dimensions.get('window').width - 100,
            height: 5,
            marginLeft: 5,
          }}
        />
      </View>
    </View>
  );
};

export default CropProgress;
