import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import config from '../../config';
import {kisanVedika} from '../../assets/index';

const Services = ({navigation}: any) => {
  const [activeTab, setActiveTab]: any = useState(1);

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 5, marginVertical: 10}}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveTab(1);
          }}
          style={styles.view}>
          <Image source={kisanVedika?.image} style={{height: 50, width: 50}} />
          <Text style={styles.text}>Kisan Vedika</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // flexDirection: 'row',
  },
  text: {
    color: '#000',
    textTransform: 'capitalize',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default Services;
