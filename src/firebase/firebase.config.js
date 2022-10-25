// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: 'geekhub-a9522.firebaseapp.com',
  projectId: 'geekhub-a9522',
  storageBucket: 'geekhub-a9522.appspot.com',
  messagingSenderId: '825366894434',
  appId: '1:825366894434:web:74b9ad4ca5afc7d1467e3b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
