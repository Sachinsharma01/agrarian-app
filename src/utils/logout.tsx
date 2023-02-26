import {removeToken} from '../redux/actions/tokenActions';
import {removeNumber} from '../redux/actions/phoneNumberActions';
import {removeUser} from '../redux/actions/metaDetaActions';

export const signOut = (dispatch:any) => {
  dispatch(removeToken());
  dispatch(removeNumber());
  dispatch(removeUser());
};
