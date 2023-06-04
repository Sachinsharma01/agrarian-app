import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RefreshControl} from 'react-native-gesture-handler';
import {getAllPosts, updatePost} from '../../request/index';
import Post from '../../components/post';
import config from '../../config';
import {user} from '../../assets';

const KisanVedika = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllPosts(token as string).then((data: any) => {
      setAllPosts(data);
      setLoading(false);
      setShowButton(true);
    });
  }, []);

  const onRefresh = useCallback(() => {
    setLoading(true);
    getAllPosts(token as string).then((data: any) => {
      setAllPosts(data);
      setLoading(false);
      setShowButton(true);
    });
  }, []);

  const likePosHandler = async (postId: string) => {
    await updatePost(token as string, postId as string);
    ToastAndroid.show('You Liked The Post', 0.3);
  };
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
          <Ionicons name="pencil-sharp" size={20} color="yellow" />
          <Text style={{color: '#fff'}}>{t('Ask')}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        style={{...styles.main, height: '91%'}}>
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
              isPaid={post?.postedBy?.isPaid}
              title={post.description || post.title}
              likes={post.likes}
              views={post.views}
              totalAnswers={post.totalAnswers}
              postedOn={post.createdAt}
              default={user.image}
              key={idx}
              onPostLike={() => likePosHandler(post?._id)}
            />
          );
        })}
      </ScrollView>
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
});

export default KisanVedika;
