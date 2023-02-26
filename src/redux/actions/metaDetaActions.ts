import config from '../../config';

const updateUser = (user: any) => {
  return {
    user: user,
    type: config.actionTypes.GET_USER,
  };
};

const removeUser = () => {
  return {
    user: {},
    type: config.actionTypes.REMOVE_USER,
  };
};

export { updateUser, removeUser };
