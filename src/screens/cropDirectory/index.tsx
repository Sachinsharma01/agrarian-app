import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {cropsData} from '../../assets/data';

const CropDirectory = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView>
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
            {t('Crop Directory')}
          </Text>
        </View>
      </View>
      <Text style={styles.head}>Choose a Crop</Text>
      <ScrollView>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          {cropsData?.map((crop: any, idx: number) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ShowCrop', {
                    ...crop,
                  });
                }}
                key={idx}
                style={{height: 100, width: 100, marginRight: 10}}>
                <Image
                  key={idx + 'i'}
                  style={{
                    height: 70,
                    width: 70,
                    aspectRatio: 1,
                    marginHorizontal: 10,
                  }}
                  source={{uri: crop?.image}}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: config.constants.primaryColor,
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

export default CropDirectory;
