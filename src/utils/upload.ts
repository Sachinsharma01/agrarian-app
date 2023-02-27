import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';

const upload = async (file: any) => {
  try {
    let filename = file.substring(file.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    console.log(filename + " " + extension + " " + name)
    const storageRef = await storage().ref(`agrarian/users/${filename}`);
    const task = await storageRef.putFile(file);
    const fileURL = await storageRef.getDownloadURL();
    return fileURL;
  } catch (err) {
    console.log('File Upload Error', err);
    Alert.alert('File Upload Error Please Try again Later!');
  }
};

export default upload;
