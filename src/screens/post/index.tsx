import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import UserAvatar from '../../components/user/UserAvatar';
import config from '../../config';
import {getPostDetails, addComment} from '../../request/index';
import {user} from '../../assets';
import Comment from '../../components/comment';
import CommentSection from '../../components/comment/commentSection';

const PostScreen = ({route, navigation}: any) => {
  navigation?.setOptions({tabBarStyle: {display: 'none'}});
  const {postId} = route.params;
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [postDetails, setPostDetails]: any = useState({});
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPostDetails(token as string, postId as string).then((data: any) => {
      setPostDetails(data);
      setComments(data?.comments?.comments);
      setLoading(false);
    });
  }, []);
  const addCommentHandler = () => {
    setComment('');
    setLoading(true);
    addComment(token, {
      postId: postId,
      comment: comment,
    }).then(data => {
      setComments(data?.comments);
      setLoading(false);
    });
  };
  console.log('pdkhfvbhfdbvfhbfv', postDetails);
  console.log('rsetdfyghuigyftrdeswetfygu', postId);
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      ) : (
        <>
          <View style={styles.post}>
            <View style={styles.innerPost}>
              <UserAvatar
                height={40}
                width={40}
                image={postDetails?.post?.postedBy?.userImage || null}
                default={user.image}
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.name}>
                  {postDetails?.post?.name || 'Farmer'}
                </Text>
                <Text style={{color: '#000'}}>
                  {postDetails?.post?.state || ''}
                  {` | Posted on ${postDetails?.post?.createdAt.split('T')[0]}`}
                </Text>
              </View>
            </View>
            {postDetails?.post?.image && (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: postDetails?.post?.image}}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
            <View style={{marginLeft: 10}}>
              <Text style={styles.description}>{postDetails?.post?.title}{postDetails?.post?.description}</Text>
              <Text style={{color: '#d1cdcd'}}>
                {`${postDetails?.post?.likes} likes`}
                {'  |  '}
                {`${postDetails?.post?.views} views`}
                {'  |  '}
                {`${postDetails?.post?.totalAnswers} Comments`}
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
          <ScrollView style={{height: '70%'}}>
            <CommentSection
              value={comment}
              onPress={addCommentHandler}
              onChange={(e: any) => setComment(e)}
            />
            {postDetails?.comments?.comments ? (
              comments?.map((comment: any, idx: number) => {
                return (
                  <Comment
                    userImage={comment?.commentedBy?.image}
                    onPostPress={() => {}}
                    image={comment?.image || null}
                    name={comment.commentedBy?.name}
                    title={comment?.comment}
                    postedOn={comment.commentedOn}
                    key={idx}
                  />
                );
              })
            ) : (
              <Text style={{textAlign: 'center', color: 'black'}}>
                No comments on this post
              </Text>
            )}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 2,
    backgroundColor: '#fff',
    width: '100%',
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
  },
  commentSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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

export default PostScreen;
