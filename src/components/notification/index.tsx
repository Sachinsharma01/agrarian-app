import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import config from '../../config';

const NotificationItem = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      key={props?.idx}
      style={styles.notif}>
      <View style={styles.content}>
        <Text style={styles.text}>{props?.content}</Text>
        <Text style={styles.descriptionText}>{props?.description}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.dText}>
          {dayjs(new Date(props?.createdAt)).format('DD MMMM YYYY hh:mm A')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  notif: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: config.constants.ternaryColor,
    backgroundColor: '#CAD5E2',
    // height: 110,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#000',
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 7,
  },
  description: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
    height: 10
  },
  dText: {
    position: 'absolute',
    marginVertical: 10,
    // bottom: -35
  },
  descriptionText: {
    color: "#000"
  }
});

export default NotificationItem;
