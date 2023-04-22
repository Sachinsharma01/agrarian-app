import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React, {useState, useCallback} from 'react';
import dayjs from 'dayjs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import {user} from '../../assets';
import UserAvatar from '../../components/user/UserAvatar';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button';
import {updateUserDetails} from '../../request/index';
import {updateUser} from '../../redux/actions/metaDetaActions';
import {ImagePickerModal} from '../../modals/ImagePickerModal';
import {upload} from '../../utils/upload';

const Profile = ({navigation}: any) => {
  const [showLoader, setShowLoader] = useState(false);
  const farmer = useSelector((state: any) => state.metaDataReducer);
  const {token} = useSelector((state: any) => state.tokenReducer);
  const dispatch = useDispatch();
  const [pickerResponse, setPickerResponse]: any = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(farmer?.user?.name);
  const [email, setEmail] = useState(farmer?.user?.email);
  const [address, setAddress] = useState(farmer?.user?.address);
  const [state, setState] = useState(farmer?.user?.state);
  const [city, setCity] = useState(farmer?.user?.city);
  const [pincode, setPincode] = useState(farmer?.user?.pincode);

  const editDetailsHandler = async () => {
    setEditable(false);
    setShowLoader(true);
    setEditable(false);
    const updateData: any = {
      name,
      email,
      address,
      city,
      state,
      pincode,
    };
    if (pickerResponse !== null) {
      const fileUrl = await upload(
        pickerResponse,
        farmer?.user?.name as string,
      );
      console.log('fileUrlll', fileUrl);
      updateData.image = fileUrl;
    }
    const response = await updateUserDetails(updateData, token);
    if (response.error) {
      Alert.alert(config.defaultErrorMessage);
    } else {
      dispatch(updateUser(response?.data));
      setShowLoader(false);
      ToastAndroid.show('User details updated', 1);
      setPickerResponse(null);
    }
  };
  const onImageLibraryPress = useCallback(async () => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    await launchImageLibrary(options, (response: any) =>
      setPickerResponse(response?.assets && response?.assets[0]?.uri),
    );
    setShowModal(false);
  }, []);
  const onCameraPress = useCallback(async () => {
    const options: any = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    await launchCamera(options, (response: any) =>
      setPickerResponse(response?.assets && response?.assets[0]?.uri),
    );
    setShowModal(false);
  }, []);
  console.log('picker@@@@@@@@@@@', pickerResponse);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="#fff"
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>
            Back
          </Text>
        </View>
      </View>
      {showLoader && (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      )}
      <ImagePickerModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
      <ScrollView style={{height: '32%'}}>
        <View style={styles.user}>
          <UserAvatar image={farmer?.user?.image || null} default={user?.image} />
          {editable && (
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <MaterialIcon name="edit" color="#000" size={28} />
            </TouchableOpacity>
          )}
          <Text style={styles.userName}>{farmer?.user?.name || 'Farmer'}</Text>
          <Text style={styles.userName}>
            Member since{' '}
            {dayjs(new Date(farmer.user.createDrawerNavigator)).format(
              'DD MMMM YYYY',
            )}
          </Text>
        </View>
        <View style={{height: 10}}></View>
      </ScrollView>
      <ScrollView style={styles.details}>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Name : </Text>
          <TextInput
            onChangeText={e => setName(e)}
            editable={editable}
            value={name}
            style={{color: 'black'}}
          />
        </View>
        <View style={{...styles.input, opacity: 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Role : </Text>
          <TextInput
            onChangeText={e => {}}
            editable={false}
            value={farmer?.user?.role}
            style={{color: 'black'}}
          />
        </View>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Email : </Text>
          <TextInput
            onChangeText={e => setEmail(e)}
            editable={editable}
            value={email}
            style={{color: 'black'}}
          />
        </View>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Adddress : </Text>
          <TextInput
            onChangeText={e => setAddress(e)}
            multiline={true}
            editable={editable}
            value={address}
            style={{color: 'black', width: '80%'}}
          />
        </View>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>State : </Text>
          <TextInput
            onChangeText={e => setState(e)}
            editable={editable}
            value={state}
            style={{color: 'black'}}
          />
        </View>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>City : </Text>
          <TextInput
            onChangeText={e => setCity(e)}
            editable={editable}
            value={city}
            style={{color: 'black'}}
          />
        </View>
        <View style={{...styles.input, opacity: editable ? 1 : 0.5}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Pincode : </Text>
          <TextInput
            onChangeText={e => setPincode(e)}
            editable={editable}
            value={pincode}
            style={{color: 'black'}}
          />
        </View>
      </ScrollView>
      {!editable ? (
        <Button label="Edit" onPress={() => setEditable(true)} />
      ) : (
        <Button label="Submit" onPress={editDetailsHandler} />
      )}
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
  main: {
    flex: 1,
    flexDirection: 'column',
    // position: 'absolute'
  },
  user: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  details: {
    height: '55%',
    // backgroundColor: 'red',
    borderTopColor: config.constants.borderColor,
    borderTopWidth: 2,
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

export default Profile;
