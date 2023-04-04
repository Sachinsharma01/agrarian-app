export default {
  baseURL: 'https://quiz-backend-rewamp.onrender.com/api',
  // baseURL: 'http://ec2-43-204-102-117.ap-south-1.compute.amazonaws.com:9000/api',
  constants: {
    primaryColor: '#01423A',
    borderColor: '#01423A',
    secondaryColor: '#EDC126',
    ternaryColor: '#32612D'
  },
  defaultErrorMessage: 'Something Went Wrong!. Please try again later',
  actionTypes: {
    UPDATE_TOKEN: 'UPDATE_TOKEN',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    GET_USER: 'GET_USER',
    REMOVE_USER: 'REMOVE_USER',
    UPDATE_PHONE_NUMBER: 'UPDATE_PHONE_NUMBER',
    REMOVE_PHONE_NUMER: 'REMOVE_PHONE_NUMER',
    UPDATE_CROPS: 'UPDATE_CROPS',
    REMOVE_CROPS: 'REMOVE_CROPS',
    SET_LOCATION: 'SET_LOCATION',
    REMOVE_LOCATION: 'REMOVE_LOCATION',
    UPDATE_USER_CROPS: 'UPDATE_USER_CROPS',
    REMOVE_USER_CROPS: 'REMOVE_USER_CROPS'
  },
  websiteURL: 'https://agrarianthetrustforgrowth.com/about',
  development: 'dev',
  // development: 'prod',
};
