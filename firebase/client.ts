// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbZpvYeALg4nwoXR0NXXnP8j4hMOHMerY",
  authDomain: "prepwise-cab11.firebaseapp.com",
  projectId: "prepwise-cab11",
  storageBucket: "prepwise-cab11.firebasestorage.app",
  messagingSenderId: "1049666539453",
  appId: "1:1049666539453:web:7b9f9bc3aee681019c0cd4",
  measurementId: "G-BNYDWDTNNF"
};

// Initialize Firebase
const app = !getApps.length?  initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);