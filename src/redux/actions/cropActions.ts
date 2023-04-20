import config from '../../config';

export const updateCrops = (crops: any) => {
  return {
    crops: crops,
    type: config.actionTypes.UPDATE_CROPS,
  };
};

export const removeCrops = () => {
  return {
    crops: {},
    type: config.actionTypes.REMOVE_CROPS,
  };
};
