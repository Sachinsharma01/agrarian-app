import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import Home from '../screens/home/index';
import AppStack from './AppStack';

const AppNavContainer = () => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  // console.log("MAINNNNNNNN", token)
  const loggedIn = token === null || token === undefined
  return (
    <NavigationContainer>
      {loggedIn ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );  
};

export default AppNavContainer;
