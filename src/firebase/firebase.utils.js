import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhkJVlPH_ympFLPJIepkO1MM_XuuHufCI",
    authDomain: "e-clothingdb.firebaseapp.com",
    databaseURL: "https://e-clothingdb.firebaseio.com",
    projectId: "e-clothingdb",
    storageBucket: "e-clothingdb.appspot.com",
    messagingSenderId: "384161200822",
    appId: "1:384161200822:web:4d41efd276b78a10b9c417",
    measurementId: "G-YLYY9GC3FJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;