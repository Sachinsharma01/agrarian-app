import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import { getMetaData } from '../../request/index';
import { updateUser } from '../../redux/actions/metaDetaActions';

const Home = () => {
  const {token} = useSelector((state:any) => state.tokenReducer)
  const {user} = useSelector((state:any) => state.metaDataReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    getUser();
  }, [])
  const getUser = async () => {
    const userData = await getMetaData(token)
    dispatch(updateUser(userData.data))
    
    console.log("User details from get meta data$$$", userData);
  }
  return (
    <SafeAreaView style={styles.main}>
      <Text style={{color: '#000'}}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
