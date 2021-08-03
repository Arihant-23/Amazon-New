// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDsoIM4aG4CoBLVhIUzJ5bxTudesaXDxTE",
    authDomain: "clone-4edb9.firebaseapp.com",
    projectId: "clone-4edb9",
    storageBucket: "clone-4edb9.appspot.com",
    messagingSenderId: "335671934427",
    appId: "1:335671934427:web:fc3d9659bed5836290bbfe",
    measurementId: "G-BN1Y8K5W7K"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  export { db , auth};