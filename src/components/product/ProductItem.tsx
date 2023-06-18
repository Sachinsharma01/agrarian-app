import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import config from '../../config';

const ProductItem = ({data}: any) => {
  const[t, i18n] = useTranslation();
  return (
    <View style={{...styles.container, borderRightWidth : data?.index % 2 !== 0 ? 0 : 0.7}} key={data?.index}>
      <View style={styles.imageContainer}>
        <Image source={data?.item?.image?.image} style={styles.image} />
      </View>
      <View>
        <Text style={{color: config.constants.primaryColor, marginLeft: '5%'}}>
          {data?.item?.name}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{color: '#fff', textAlign: 'center'}}
            onPress={() => {
              ToastAndroid.show(
                'We are sorry, We are building our logistics till then this feature is not available.',
                1,
              );
            }}>
            {t('Buy Now')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderRightWidth: 0.7,
    borderTopWidth: 0.7,
    borderRightColor: config.constants.primaryColor,
    borderTopColor: config.constants.primaryColor,
    height: 300,
    backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: config.constants.secondaryColor,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
export default ProductItem;
