import { initializeApp } from 'firebase/app';

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_IDREACT_APP_
// };

export const firebaseConfig = {
  apiKey: 'AIzaSyAQNyI3DJ7BrxB5_DEkjxlH7-ZIy4rwtBE',
  authDomain: 'sexytopp-9aaa6.firebaseapp.com',
  projectId: 'sexytopp-9aaa6',
  storageBucket: 'sexytopp-9aaa6.appspot.com',
  messagingSenderId: '752123626372',
  appId: '1:752123626372:web:2734afc18195058c4813d1',
  measurementId: 'G-112JL9JTVH'
};

export const app = initializeApp(firebaseConfig);
