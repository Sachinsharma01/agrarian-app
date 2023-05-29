// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGCBWhfrcHnxPctyTePpU3tr0XwtdF-yw',
  authDomain: 'agrarian-eed2f.firebaseapp.com',
  databaseURL: 'https://agrarian-eed2f-default-rtdb.firebaseio.com',
  projectId: 'agrarian-eed2f',
  storageBucket: 'agrarian-eed2f.appspot.com',
  messagingSenderId: '186026984794',
  appId: '1:186026984794:web:2c1978b49c362713ed1f63',
  measurementId: 'G-DRH15QL652',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
