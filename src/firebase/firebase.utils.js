import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBY5Ii2Pliji7URhj7CiBRn8G0H8EzG2zk",
    authDomain: "react-store-d6995.firebaseapp.com",
    databaseURL: "https://react-store-d6995.firebaseio.com",
    projectId: "react-store-d6995",
    storageBucket: "react-store-d6995.appspot.com",
    messagingSenderId: "502589729247",
    appId: "1:502589729247:web:c156ba5329a388fe83bc6a",
    measurementId: "G-C74WN92D98"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;