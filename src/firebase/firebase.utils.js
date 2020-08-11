import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtY46VRvXFzXiDWfQgGG8_fKQzok3xeYA",
    authDomain: "clothing-aaa82.firebaseapp.com",
    databaseURL: "https://clothing-aaa82.firebaseio.com",
    projectId: "clothing-aaa82",
    storageBucket: "clothing-aaa82.appspot.com",
    messagingSenderId: "1021332863377",
    appId: "1:1021332863377:web:1238719499bac8bbba8230",
    measurementId: "G-4HSYEW7513"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;