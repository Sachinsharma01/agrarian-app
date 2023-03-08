import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import config from '../../config';

const CreatePost = ({navigation}: any) => {
  const {crops} = useSelector((state: any) => state.cropReducer);
  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Description :{' '}
      </Text>
      <View style={{...styles.input}}>
        <TextInput
          onChangeText={() => {}}
          style={{color: 'black', width: '100%', height: 100}}
          multiline={true}
          placeholder="Post Description."
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Choose Crop :{' '}
      </Text>
      {crops?.map((crop: any, idx: number) => {
        return (
          <View>
            <Image source={{uri: crop?.image}} />
          </View>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    backgroundColor: config.constants.primaryColor,
    color: '#fff',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default CreatePost;
