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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;