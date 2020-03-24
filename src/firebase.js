import firebase from 'firebase';

const config = {
    projectId: "beeru-35251",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.REACT_APP_FIREBASE_DATABASE,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  firebase.initializeApp(config);

  export default firebase;