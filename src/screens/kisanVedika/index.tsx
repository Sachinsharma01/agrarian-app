import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllPosts, getAllCrops} from '../../request/index';
import {updateCrops} from '../../redux/actions/cropActions';
import Post from '../../components/post';
import config from '../../config';
import {user} from '../../assets';

const KisanVedika = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    getAllPosts(token as string).then((data: any) => {
      setAllPosts(data);
    });
    getAllCrops(token as string).then((data: any) => {
      dispatch(updateCrops(data));
    });
  }, []);
  console.log('pdkhfvbhfdbvfhbfv', allPosts);
  return (
    <SafeAreaView>
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
            Kisan Vedika
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('createPost');
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            position: 'absolute',
            right: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="pencil-sharp" size={25} color="yellow" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{backgroundColor: '#e8e4e3', height: '90%'}}>
        {allPosts?.map((post: any, idx) => {
          return (
            <Post
              userImage={post?.postedBy?.userImage || null}
              onPostPress={() =>
                navigation.navigate('PostScreen', {
                  postId: post?._id,
                })
              }
              image={post?.image || null}
              state={post?.state}
              name={post?.postedBy?.name}
              title={post.description || post.title}
              likes={post.likes}
              views={post.views}
              totalAnswers={post.totalAnswers}
              postedOn={post.createdAt}
              default={user.image}
              key={idx}
            />
          );
        })}
      </ScrollView>
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
});

export default KisanVedika;
