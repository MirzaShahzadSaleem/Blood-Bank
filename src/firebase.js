import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo3i8h1VJGFTZeMCBusXLaGSuwooBAMKc",
  authDomain: "blood-bank-62aac.firebaseapp.com",
  projectId: "blood-bank-62aac",
  storageBucket: "blood-bank-62aac.appspot.com",
  messagingSenderId: "798863221314",
  appId: "1:798863221314:web:ab32218581234983d5c3db",
  measurementId: "G-6RDJ31QZ4Z"
};


// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fire);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
export default fire;
