import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const BannerSlide = ({data}: any) => {
  return (
    <>
      <View>
        <Image source={data.image} style={styles.image} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 350,
    borderRadius: 10,
  },
});

export default BannerSlide;
