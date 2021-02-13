import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAop9xbj4nHYo9JEPLoB5iE4m7d_dQIj1E",
    authDomain: "react-app-56deb.firebaseapp.com",
    projectId: "react-app-56deb",
    storageBucket: "react-app-56deb.appspot.com",
    messagingSenderId: "154551953914",
    appId: "1:154551953914:web:750d88be25059a09c05c43"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }