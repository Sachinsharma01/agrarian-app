import {View, Text, Dimensions, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';
import {ActivityIndicator} from 'react-native-paper';
import config from '../../config';

const OngoingCrop = ({route, navigation}: any) => {
  console.log(
    'crrrrrrrrrrrrrrrrrrrrroooooooooooooooooooooooooooooooooo',
    route.params,
  );
  const [crop, setCrop] = useState(route.params.crop)
  return (
    <>
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: route.params.crop.image}}
        />
        <View>
          <Text style={{fontSize: 10, fontFamily: 'bold'}}>{crop?.name}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Pdf
          renderActivityIndicator={() => (
            <ActivityIndicator
              size="large"
              color={config.constants.primaryColor}
            />
          )}
          trustAllCerts={false}
          onLoadComplete={(numberOfPages, filePath) => {
            // Alert.alert(`Number of pages: ${numberOfPages}`);
          }}
          source={{
            uri: 'https://agrarian-dev.s3.ap-south-1.amazonaws.com/CHILLI.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYBLD6FOMT6FVJJ5H%2F20230328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230328T193059Z&X-Amz-Expires=216000&X-Amz-Signature=a9f2ec8428e8cc9da33cb815fd8ea0f5641379edbcec9c522fa8bc402e3548a1&X-Amz-SignedHeaders=host',
            cache: true,
          }}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#fff'
          }}
        />
      </View>
    </>
    // </View>
  );
};

export default OngoingCrop;
