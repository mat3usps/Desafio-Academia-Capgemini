import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBPkVnW0nYskaVM3T9GG_VyCvtxOLNHt5g",
  authDomain: "desafio---capgemini.firebaseapp.com",
  projectId: "desafio---capgemini",
  storageBucket: "desafio---capgemini.appspot.com",
  messagingSenderId: "1052463918500",
  appId: "1:1052463918500:web:428b780f68e1d357066531",
  measurementId: "G-9YXDJSZQ6W",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
