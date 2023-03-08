import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KisanVedika from '../screens/kisanVedika';
import PostScreen from '../screens/post';
import CreatePost from '../screens/post/createPost';

const Stack = createNativeStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Kisan Vedika"
        component={KisanVedika}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{headerTitle: 'Kisan Vedika'}}
      />
      <Stack.Screen
        name="createPost"
        component={CreatePost}
        options={{headerTitle: 'Kisan Vedika'}}
      />
    </Stack.Navigator>
  );
};

export default PostStack;
