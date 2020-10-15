import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCm-w-DMQBq10Xn2QzzM-KZ7GdLtOfx218',
  authDomain: 'maya-clientes-55c0f.firebaseapp.com',
  databaseURL: 'https://maya-clientes-55c0f.firebaseio.com',
  projectId: 'maya-clientes-55c0f',
  storageBucket: 'maya-clientes-55c0f.appspot.com',
  messagingSenderId: '753767093893',
  appId: '1:753767093893:web:55b7c863ce6920a1a97bec',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
