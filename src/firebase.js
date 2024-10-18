
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnSastqrkDMSAKWwcfHICwAnBg1HEVQHc",
    authDomain: "netflix-clone-3ca57.firebaseapp.com",
    projectId: "netflix-clone-3ca57",
    storageBucket: "netflix-clone-3ca57.appspot.com",
    messagingSenderId: "616626513389",
    appId: "1:616626513389:web:b174a6f08575cb3e0433e4",
    measurementId: "G-2JS49D5MJ0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;

