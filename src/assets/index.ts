import {ImageSourcePropType} from 'react-native';

type data = {
  image: ImageSourcePropType;
};

export const logo: data = {
  image: require('./images/logo.png'),
};

export const menu: data = {
  image: require('../assets/images/menu.jpg')
}

export const user: data = {
  image: require('../assets/images/user-profile.jpg')
}

export const camera: data = {
  image: require('../assets/modals/camera.png')
}
export const gallery: data = {
  image: require('../assets/modals/image.jpg')
}