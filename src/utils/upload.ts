import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';

const upload = async (file: any,userName: string) => {
  try {
    let filename = file.substring(file.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = userName + name + Date.now() + '.' + extension;
    // console.log(filename + " " + extension + " " + name)
    const storageRef = await storage().ref(`agrarian/users/${filename}`);
    const task = await storageRef.putFile(file);
    const fileURL = await storageRef.getDownloadURL();
    return fileURL;
  } catch (err) {
    // console.log('File Upload Error', err);
    Alert.alert('File Upload Error Please Try again Later!');
  }
};

const uploadPostImage = async (file: any, userName: string) => {
  try {
    // console.log("post image upload starts ", file, userName)
    let filename = file.substring(file.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = userName + name + new Date() + '.' + extension;
    // console.log(filename + ' ' + extension + ' ' + name);
    const storageRef = await storage().ref(`agrarian/posts/${userName}/${filename}`);
    const task = await storageRef.putFile(file);
    const fileURL = await storageRef.getDownloadURL();
    return fileURL;
  } catch(err) {
    // console.log('File Upload Error', err);
    Alert.alert("OOPS!", 'File Upload Error Please Try again Later!');
  }
}
export {upload, uploadPostImage};
