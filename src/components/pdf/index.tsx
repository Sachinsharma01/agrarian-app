import { ActivityIndicator, Dimensions, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import config from '../../config';

const PDF = ({url}: any) => {
  return (
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
          uri: url || 'https://agrarian-dev.s3.ap-south-1.amazonaws.com/CHILLI.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYBLD6FOMT6FVJJ5H%2F20230328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230328T193059Z&X-Amz-Expires=216000&X-Amz-Signature=a9f2ec8428e8cc9da33cb815fd8ea0f5641379edbcec9c522fa8bc402e3548a1&X-Amz-SignedHeaders=host',
          cache: true,
        }}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: '#fff',
        }}
      />
    </View>
  );
};

export default PDF