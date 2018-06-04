import firebase from "firebase";
var config = {
  apiKey: "AIzaSyC0_XE8iqAjUu4O2T6eP5jKgFIcOOvXxxM",
  authDomain: "contracts-redo.firebaseapp.com",
  databaseURL: "https://contracts-redo.firebaseio.com",
  projectId: "contracts-redo",
  storageBucket: "contracts-redo.appspot.com",
  messagingSenderId: "452126864260"
};
firebase.initializeApp(config);
export default firebase;
