// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,addDoc,updateDoc,doc,deleteDoc,getDocs} from "firebase/firestore";
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Izj5IgpqDx9v4ZoCCDghaD4jDrPuhyE",
  authDomain: "firbasebasics-74454.firebaseapp.com",
  databaseURL: "ttps://firbasebasics-74454-default-rtdb.firebaseio.com",
  projectId: "firbasebasics-74454",
  storageBucket: "firbasebasics-74454.appspot.com",
  messagingSenderId: "1056255034471",
  appId: "1:1056255034471:web:fc633926e36cc3035740c2",
  measurementId: "G-68QZFFMFFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const  db = getFirestore(app)
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();
export  {signInWithPopup,db,auth,provider,collection,addDoc,signOut,deleteDoc,updateDoc,getDocs,doc}