import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import config from '../../config';
import {TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import {addPost} from '../../request';

const CreatePost = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [selectedCrop, setSelectedCrop] = useState(
    {} as any,
  );
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const onCreatePostSubmitHandler = async () => {
    setLoading(true);
    const payload = {
      description: description,
      crop: {
        cropName: selectedCrop?.name,
        cropImage: selectedCrop?.image,
        cropId: selectedCrop?.id,
      },
    };
    console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', payload)
    const response = await addPost(token, payload);
    setLoading(false), navigation.goBack();
  };
  const {crops} = useSelector((state: any) => state.cropReducer);
  return (
    <SafeAreaView>
      {loading && (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      )}
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
          onChangeText={e => {
            setDescription(e);
          }}
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
          <TouchableOpacity
            onPress={() =>
              setSelectedCrop({
                name: crop.name,
                image: crop.image,
                id: crop._id,
              })
            }
            key={idx}
            style={{height: 100, width: 100, marginRight: 10}}>
            <Image
              key={idx}
              style={{height: 70, width: 70, aspectRatio: 1, marginHorizontal: 5}}
              source={{uri: crop?.image}}
            />
          </TouchableOpacity>
        );
      })}
      <Button label="Submit" onPress={onCreatePostSubmitHandler} />
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
