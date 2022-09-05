import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "unichat-83b41.firebaseapp.com",
  projectId: "unichat-83b41",
  storageBucket: "unichat-83b41.appspot.com",
  messagingSenderId: "1004532262225",
  appId: "1:1004532262225:web:4d0601d3d1fe9e9a225f70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
