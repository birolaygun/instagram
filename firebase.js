// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWP7n32j0uPfHtKSS4IqG3bpe73EGz_5M",
  authDomain: "insta3-14.firebaseapp.com",
  projectId: "insta3-14",
  storageBucket: "insta3-14.appspot.com",
  messagingSenderId: "870275982369",
  appId: "1:870275982369:web:e7cde995400696c1d12f60",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
