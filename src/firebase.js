import firebase from 'firebase';

const config = {
    projectId: "beeru-35251",
    apiKey: process.env.API_KEY,
    authDomain: process.FIREBASE_DOMAIN,
    databaseURL: process.FIREBASE_DATABASE,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.APP_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;