import {Image} from 'react-native';
import React from 'react';

const UserAvatar = (props: any) => {
  return (
    <Image
      source={props.image ? {uri: props.image} : props.default}
      style={{
        height: props.height || 120,
        width: props.width || 120,
        borderRadius: props.bordder || 60,
      }}
    />
  );
};

export default UserAvatar;
