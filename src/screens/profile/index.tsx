import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import config from '../../config';
import {user} from '../../assets';
import UserAvatar from '../../components/user/UserAvatar';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Button from '../../components/button';

let canEdit = false;

const Profile = () => {
  const farmer = useSelector((state: any) => state.metaDataReducer);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(farmer.user.name);
  const [email, setEmail] = useState(farmer.user.email);
  const [address, setAddress] = useState(farmer.user.address);
  const [state, setState] = useState(farmer.user.state);
  const [city, setCity] = useState(farmer.user.city);
  const [pincode, setPincode] = useState(farmer.user.pincode);
  canEdit = editable;
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{height: '32%'}}>
        <View style={styles.user}>
          <UserAvatar image={farmer.user.image || null} default={user.image} />
          <Text style={styles.userName}>{farmer.user.name || 'Farmer'}</Text>
          <Text style={styles.userName}>
            Member since {farmer.user.createdAt.split('T')[0]}
          </Text>
        </View>
      </ScrollView>
      <ScrollView style={styles.details}>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Name : </Text>
          <TextInput
            placeholder="Name"
            editable={editable}
            value={name}
            style={{color: 'black'}}
          />
        </View>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Email : </Text>
          <TextInput
            editable={editable}
            value={email}
            style={{color: 'black'}}
          />
        </View>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Adddress : </Text>
          <TextInput
            multiline={true}
            editable={editable}
            value={address}
            style={{color: 'black', width: '80%'}}
          />
        </View>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>State : </Text>
          <TextInput
            editable={editable}
            value={state}
            style={{color: 'black'}}
          />
        </View>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>City : </Text>
          <TextInput
            editable={editable}
            value={city}
            style={{color: 'black'}}
          />
        </View>
        <View style={styles.input}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Pincode : </Text>
          <TextInput
            editable={editable}
            value={pincode}
            style={{color: 'black'}}
          />
        </View>
      </ScrollView>
      {!editable ? (
        <Button label="Edit" onPress={() => setEditable(true)} />
      ) : (
        <Button label="Submit" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    opacity: canEdit ? 1 : .5,
  },
});

export default Profile;
