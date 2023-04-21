import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import UserAvatar from '../user/UserAvatar';
import config from '../../config';

const Comment = (props: any) => {
  console.log();
  return (
    <View style={styles.post}>
      <View style={styles.innerPost}>
        <UserAvatar
          height={40}
          width={40}
          image={props.userImage || null}
          default={props.userImage}
        />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>
            {props.name || 'Agrarian Farmer'}
            {props.isPaid && (
              <Text
                style={{
                  color: config.constants.secondaryColor,
                  paddingLeft: 10,
                }}>
                {' '}
                VIP
              </Text>
            )}
          </Text>
          <Text style={{color: '#000'}}>
            {props.state || ''}
            {`Posted on ${props.postedOn.split('T')[0]}`}
          </Text>
        </View>
      </View>
      {props.image && (
        <View style={styles.imageContainer}>
          <Image
            source={props.image ? {uri: props.image} : props.default}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={props.onPostPress}>
          <Text style={styles.description}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    // backgroundColor: 'red',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 2,
    backgroundColor: '#ededed',
  },
  innerPost: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  name: {
    fontWeight: 'bold',
    color: config.constants.primaryColor,
  },
  imageContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  image: {
    flex: 1,
    borderRadius: 10,
    aspectRatio: 1.8,
  },
  details: {
    height: 50,
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  description: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#ededed',
  },
});

export default Comment;
