import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA3Cs1_wcOkDjpCms2D40FIlRJS9xFBAV4",
  authDomain: "netflix-clone-shankar.firebaseapp.com",
  projectId: "netflix-clone-shankar",
  storageBucket: "netflix-clone-shankar.appspot.com",
  messagingSenderId: "611017412020",
  appId: "1:611017412020:web:8a21ecf06f571a9d5c76e1",
  measurementId: "G-SED34EWX0E"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth }
export default db;

