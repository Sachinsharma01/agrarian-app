import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import KisanVedika from '../screens/kisanVedika';
import PostScreen from '../screens/post';

const Stack = createNativeStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Kisan Vedika"
        component={KisanVedika}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PostStack;
