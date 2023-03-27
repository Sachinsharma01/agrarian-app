import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import config from '../../config';

const CropItem = ({
  idx,
  crop,
  onCancel,
  showCancel
}: {
  idx: number;
  crop: any;
  onCancel: any;
  showCancel: boolean
}) => {
  return (
    <>
      <View key={idx} style={styles.cropItem}>
        <Image
          key={idx}
          source={{uri: crop?.image}}
          style={{height: 40, width: 40}}
        />
        <Text key={idx + '1t'} style={styles.cropName}>
          {crop?.name}
        </Text>
      </View>
      {showCancel && (
        <TouchableOpacity
          key={idx + '1'}
          style={styles.cancelIcon}
          onPress={onCancel}>
          <Ionicons name="remove-circle-outline" size={25} color="salmon" />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cropItem: {
    width: 120,
    height: 60,
    // backgroundColor: 'red',
    borderColor: config.constants.borderColor,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 10,
  },
  cropName: {
    color: config.constants.primaryColor,
    marginRight: 20,
    fontSize: 15,
  },
  cancelIcon: {position: 'relative', top: 15, left: -22},
});
export default CropItem;
