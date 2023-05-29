import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImagePickerModal} from '../../modals/ImagePickerModal';
import {TouchableOpacity} from 'react-native';
import config from '../../config';
import Button from '../../components/button';
import {addPost} from '../../request';
import {camera} from '../../assets';
import {uploadPostImage} from '../../utils/upload';

const CreatePost = ({navigation}: any) => {
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {crops} = useSelector((state: any) => state.cropReducer);

  const [pickerResponse, setPickerResponse]: any = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState({} as any);
  const [description, setDescription] = useState('');
  const [postImageURL, setPostImageURL]: any = useState(null);

  const [loading, setLoading] = useState(false);
  const onCreatePostSubmitHandler = async () => {
    setLoading(true);
    const payload: any = {
      description: description,
      crop: {
        cropName: selectedCrop?.name,
        cropImage: selectedCrop?.image,
        cropId: selectedCrop?.id,
      },
    };
    if (pickerResponse !== null && postImageURL !== null) {
      payload.image = postImageURL;
    }
    // console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', payload);
    const response = await addPost(token, payload);
    setLoading(false), navigation.goBack();
  };

  const onImageLibraryPress = useCallback(async () => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    await launchImageLibrary(options, async (response: any) => {
      setPickerResponse(response?.assets && response?.assets[0]?.uri);
    });
    setShowModal(false);
  }, []);

  const onCameraPress = useCallback(async () => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    await launchCamera(options, async (response: any) => {
      setPickerResponse(response?.assets && response?.assets[0]?.uri);
    });
    setShowModal(false);
  }, []);

  (async function imageUpload(){
    if (pickerResponse !== null && postImageURL === null) {
      const imageURL = await uploadPostImage(pickerResponse, user?.name);
      setPostImageURL(imageURL);
    }
  })()
  // console.log('hbvebvhvebjebvhvebejhbv', pickerResponse);
  return (
    <SafeAreaView style={styles.main}>
      {loading && (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      )}
      {pickerResponse && postImageURL && (
        <>
          <Text style={styles.text}>Image :</Text>
          <Image style={styles.postImage} source={{uri: pickerResponse}} />
        </>
      )}
      <Text style={styles.text}>Ask your Question : </Text>
      <View style={{...styles.input}}>
        <TextInput
          onChangeText={e => {
            setDescription(e);
          }}
          style={styles.inputText}
          multiline={true}
          placeholder="Tell us more about your question."
        />
      </View>
      <Text style={styles.text}>Add Photo :</Text>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Image style={styles.image} source={camera?.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Choose Crop : </Text>
      <ImagePickerModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
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
            <Image key={idx} style={styles.image} source={{uri: crop?.image}} />
            <Text style={{ marginLeft: 17, textTransform: 'capitalize'}}>
              {crop?.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      <Button label="Submit" onPress={onCreatePostSubmitHandler} />
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
  text: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    height: 70,
    width: 70,
    aspectRatio: 1,
    marginHorizontal: 5,
  },
  postImage: {
    // height: 70,
    // width: 70,
    aspectRatio: 2,
    marginHorizontal: 10,
  },
  inputText: {color: 'black', width: '100%', height: 100},
});

export default CreatePost;
