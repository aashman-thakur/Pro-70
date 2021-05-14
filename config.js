import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyC4dT1dvGYmmxa9ir1lZMk-OgIQPwjkPGQ",
    authDomain: "storyhubproject.firebaseapp.com",
    projectId: "storyhubproject",
    storageBucket: "storyhubproject.appspot.com",
    messagingSenderId: "212086774860",
    appId: "1:212086774860:web:520170cb62d248bccba8e9"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()