import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import config from '../../config';
import {posts} from '../../data';
import Post from '../../components/post';
import {getAllPosts} from '../../request/index';
import { user } from '../../assets';

const KisanVedika = ({navigation}: any) => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    getAllPosts(token as string).then((data: any) => {
      setAllPosts(data)
    });
    ;
  }, []);
  console.log("pdkhfvbhfdbvfhbfv", allPosts);
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
      </View>
      <ScrollView style={{backgroundColor: '#e8e4e3'}}>
        {allPosts?.map((post:any, idx) => {
          return (
            <Post
              userImage={post?.postedBy?.userImage || null}
              onPostPress={() => navigation.navigate('PostScreen', {
                postId: post?._id
              })}
              image={post?.image || null}
              state={post?.state}
              name={post?.postedBy?.name}
              title={post.title}
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
