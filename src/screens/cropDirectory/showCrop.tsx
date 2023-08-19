import React, {useMemo} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import getOngoingCrop from '../../utils/crop';
import { height, width } from '../../utils/getDimensions';

const ShowCrop = ({route, navigation}: any) => {
  const {name, image} = route.params;
  const {t, i18n} = useTranslation();
  const chosenCropComponent = useMemo(
    () => getOngoingCrop(name as string, 1 as number),
    [name],
  );
  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={config.constants.primaryColor}
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Image
            style={{
              height: 50,
              width: 50,
              aspectRatio: 1,
              marginLeft: '50%',
            }}
            source={{uri: image}}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 2,
          backgroundColor: '#fff',
          width: width,
          height: height
        }}>
        {chosenCropComponent}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    color: '#fff',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ShowCrop;
