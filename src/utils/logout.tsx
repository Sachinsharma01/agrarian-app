import {removeToken} from '../redux/actions/tokenActions';
import {removeNumber} from '../redux/actions/phoneNumberActions';
import {removeUser} from '../redux/actions/metaDetaActions';
import { removeCrops } from '../redux/actions/cropActions';
import { removeUserLocation } from '../redux/actions/locationActions';

export const signOut = (dispatch:any) => {
  dispatch(removeToken());
  dispatch(removeNumber());
  dispatch(removeUser());
  dispatch(removeCrops());
  dispatch(removeUserLocation());
};
