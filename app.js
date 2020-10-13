import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDEJT0L9tzltTboF5A2r8asfOCG-THWFnI",
  authDomain: "react-burger-queen.firebaseapp.com",
  databaseURL: "https://react-burger-queen.firebaseio.com",
  projectId: "react-burger-queen",
  storageBucket: "react-burger-queen.appspot.com",
  messagingSenderId: "854719954286",
  appId: "1:854719954286:web:c84bb1ec4cd7932688557f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}
