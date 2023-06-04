import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import config from '../../config';

const ProductItem = ({data}: any) => {
  return (
    <View style={styles.container} key={data.id}>
      <View style={styles.imageContainer}>
        <Image source={data?.image?.image} style={styles.image} />
      </View>
      <View>
        <Text style={{color: config.constants.primaryColor, marginLeft: '5%'}}>
          {data?.name}
        </Text>
        <Text style={{color: config.constants.primaryColor, marginLeft: '5%'}}>
          Price: ₹ {data?.price}
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
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderLeftWidth: 0.2,
    borderBottomWidth: 0.2,
    borderLeftColor: config.constants.primaryColor,
    borderBottomColor: config.constants.primaryColor,
    height: 300,
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
