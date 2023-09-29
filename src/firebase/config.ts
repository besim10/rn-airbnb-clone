// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb_kUMVPPcy7t_SxJUCPZZ-EhPRECfjLA",
  authDomain: "airbnb-clone-f21a0.firebaseapp.com",
  projectId: "airbnb-clone-f21a0",
  storageBucket: "airbnb-clone-f21a0.appspot.com",
  messagingSenderId: "94084434148",
  appId: "1:94084434148:web:b227857a3a9e8b9ed884f1",
  measurementId: "G-YF1J3Y91NK",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
