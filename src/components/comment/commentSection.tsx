import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../user/UserAvatar';
import {user} from '../../assets';
import config from '../../config';

const CommentSection = (props: any) => {
  const farmer = useSelector((state: any) => state.metaDataReducer);
  return (
    <View style={styles.commentSection}>
      <UserAvatar
        height={40}
        width={40}
        image={farmer?.user?.image || null}
        default={user.image}
        marginLeft={10}
      />
      <View style={{...styles.input}}>
        <TextInput
          onChangeText={() => {}}
          style={{color: 'black'}}
          placeholder="Add Comment"
          multiline={true}
        />
      </View>
      <TouchableOpacity onPress={props.onPress} style={{marginRight: 10}}>
        <Ionicons
          name="ios-send-outline"
          color={config.constants.primaryColor}
          size={28}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commentSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    width: '70%',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
    marginTop: 10,
    // marginHorizontal: 10,
  },
});

export default CommentSection;
