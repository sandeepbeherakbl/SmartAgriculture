import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyA2TT-HyFAGrs0R6UUdGki5cOuQUMN75gU",
  authDomain: "agriculture-50185.firebaseapp.com",
  databaseURL: "https://agriculture-50185-default-rtdb.firebaseio.com",
  projectId: "agriculture-50185",
  storageBucket: "agriculture-50185.appspot.com",
  messagingSenderId: "892651543578",
  appId: "1:892651543578:web:f6461f88fadf823c9fc5a3",
  measurementId: "G-BPSDQYYYDF",
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;
