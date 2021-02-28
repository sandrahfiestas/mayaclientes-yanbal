import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeAM2rdDUnHI5yDebH-074HTLsz-7mxZE",
  authDomain: "maya-clientes-dos-3a343.firebaseapp.com",
  projectId: "maya-clientes-dos-3a343",
  storageBucket: "maya-clientes-dos-3a343.appspot.com",
  messagingSenderId: "428462534669",
  appId: "1:428462534669:web:0146af15320d6f530ca544"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
