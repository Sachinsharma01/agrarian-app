import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavContainer = () => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const [t, i18n] = useTranslation();
  (function () {
    AsyncStorage.getItem('language').then((value: any) => {
      i18n.changeLanguage(value).then((data: any) => {});
    });
  })();
  const loggedIn = token === null || token === undefined;
  return (
    <NavigationContainer>
      {loggedIn ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
