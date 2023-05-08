import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserAvatar from '../user/UserAvatar';
import config from '../../config';

const Post = (props: any) => {
  const [liked, setLiked] = useState(false);
  const likeClickHandler = () => {
    props.onPostLike();
    setLiked(true);
  };
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
            {props.name || 'Farmer'}
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
            {` | Posted on ${props.postedOn.split('T')[0]}`}
          </Text>
        </View>
      </View>
      {props.image && (
        <View style={styles.imageContainer}>
          <Image
            source={props.image ? {uri: props.image} : props.default}
            style={styles.image}
            // resizeMode="contain"
          />
        </View>
      )}
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={props.onPostPress}>
          <Text style={styles.description}>{props.title}</Text>
        </TouchableOpacity>
        <Text style={{color: '#d1cdcd'}}>
          {`${props.likes} likes`}
          {'  |  '}
          {`${props.views} views`}
          {'  |  '}
          {`${props.totalAnswers} Comments`}
        </Text>
      </View>
      <View style={styles.details}>
        <TouchableOpacity onPress={likeClickHandler}>
          <AntDesign
            name={liked ? 'like1' : 'like2'}
            size={25}
            color={liked ? config.constants.primaryColor : '#000'}
          />
          <Text style={{textAlign: 'center', color: '#d1cdcd'}}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPostPress}>
          <EvilIcons name="comment" size={35} color="#000" />
          <Text style={{textAlign: 'center', color: '#d1cdcd'}}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="share-google" size={35} color="#000" />
          <Text style={{textAlign: 'center', color: '#d1cdcd'}}>Share</Text>
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
    backgroundColor: '#fff',
  },
  innerPost: {
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    borderRadius: 10,
    aspectRatio: 1,
    marginHorizontal: '2%',
  },
  details: {
    height: 50,
    margin: 10,
    borderTopColor: 'gray',
    borderTopWidth: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
    marginHorizontal: '2%',
  },
});

export default Post;
