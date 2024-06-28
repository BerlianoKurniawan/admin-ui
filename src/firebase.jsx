import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-6cd44.firebaseapp.com",
  projectId: "store-tutorial-6cd44",
  storageBucket: "store-tutorial-6cd44.appspot.com",
  messagingSenderId: "89732755199",
  appId: "1:89732755199:web:f40a5b586e50f45b23a6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);