import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProgressBar} from 'react-native-paper';
import React from 'react';
import config from '../../config';

const CropItem = ({
  idx,
  crop,
  onCancel,
  showCancel,
  onPress
}: {
  idx: number;
  crop: any;
  onCancel: any;
  showCancel: boolean;
  onPress: any
}) => {
  return (
    <>
      <Pressable key={idx + 'p'} onPress={onPress}
        style={styles.cropWrapper}>
        <View key={idx} style={styles.cropItem}>
          <Image
            key={idx + '1i'}
            source={{uri: crop?.image}}
            style={{height: 40, width: 40}}
          />
          <Text key={idx + '1t'} style={styles.cropName}>
            {crop?.name}
          </Text>
        </View>
        <ProgressBar
          progress={crop.progress}
          color={config.constants.primaryColor}
          style={{marginTop: 15, width: 130, height: 5, marginLeft: 5}}
        />
        {showCancel && (
          <TouchableOpacity
            key={idx + '1'}
            style={styles.cancelIcon}
            onPress={onCancel}>
            <Ionicons
              key={idx + '1c'}
              name="remove-circle-outline"
              size={25}
              color="salmon"
            />
          </TouchableOpacity>
        )}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cropWrapper: {
    borderColor: config.constants.borderColor,
    borderWidth: 1,
    borderRadius: 7,
    height: 70,
    marginTop: 25,
    marginHorizontal: 10,
  },
  cropItem: {
    width: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 2,
    marginHorizontal: 10,
  },
  cropName: {
    color: config.constants.primaryColor,
    marginRight: 20,
    fontSize: 15,
  },
  cancelIcon: {position: 'relative', top: -75, right: -120},
});
export default CropItem;
