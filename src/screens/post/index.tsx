import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UserAvatar from '../../components/user/UserAvatar';
import Post from '../../components/post';
import config from '../../config';
import { posts } from '../../data';

const PostScreen = ({navigation}:any) => {
  navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
  const [props, setProps] = useState({
    title: 'Test post please ignore',
    image:
      'https://firebasestorage.googleapis.com/v0/b/kloud-resume-database.appspot.com/o/image.jpeg?alt=media&token=cc65d9e6-e7e2-4bda-87de-7f509a5498df',
    likes: 10,
    views: 37,
    totalAnswers: 6,
    postedOn: '2023-02-23T18:15:12.123Z',
    userImage:
      'https://firebasestorage.googleapis.com/v0/b/kloud-resume-database.appspot.com/o/image.jpeg?alt=media&token=cc65d9e6-e7e2-4bda-87de-7f509a5498df',
    name: 'Sachin Sharma',
    state: 'Uttar Pradesh',
  });
  console.log('rsetdfyghuigyftrdeswetfygu');
  return (
    <View>
      <View style={styles.post}>
        <View style={styles.innerPost}>
          <UserAvatar
            height={40}
            width={40}
            image={props.userImage || null}
            default={props.userImage}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.name}>{props.name || 'Farmer'}</Text>
            <Text style={{color: '#000'}}>
              {props.state || ''}
              {` | Posted on ${props.postedOn.split('T')[0]}`}
            </Text>
          </View>
        </View>
        {props.image && (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: props.image}}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
        <View style={{marginLeft: 10}}>
          <Text style={styles.description}>{props.title}</Text>

          <Text style={{color: '#d1cdcd'}}>
            {`${props.likes} likes`}
            {'  |  '}
            {`${props.views} views`}
            {'  |  '}
            {`${props.totalAnswers} Comments`}
          </Text>
        </View>
        <View style={styles.details}>
          <TouchableOpacity>
            <SimpleLineIcons name="like" size={25} color="#000" />
            <Text style={{textAlign: 'center'}}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="comment" size={35} color="#000" />
            <Text>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="share-google" size={35} color="#000" />
            <Text style={{textAlign: 'center'}}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {posts.map((post, idx) => {
          return (
            <Post
              userImage={post.image}
              onPostPress={() => {}}
              image={post.image || null}
              state="Uttar Pradesh"
              name="Sachin Sharma"
              title={post.title}
              likes={post.likes}
              views={post.views}
              totalAnswers={post.totalAnswers}
              postedOn={post.postedOn}
              key={idx}
            />
          );
        })}
      </ScrollView>
      <View style={styles.comment}>
        <Text>hevgeuyrhgueryg ruyeg rbuygv uyrguyrguyrtg btuy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
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
    aspectRatio: 2,
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
  },
  comment: {
    height: 50,
    backgroundColor: 'red',
    width: '100%',
    zIndex: 9999,
  }
});

export default PostScreen;
