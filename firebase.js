// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6uLZa8J1f26IStUtxaL5wZ4-yJ9yeKWQ",
  authDomain: "instinst1987.firebaseapp.com",
  projectId: "instinst1987",
  storageBucket: "instinst1987.appspot.com",
  messagingSenderId: "14758899437",
  appId: "1:14758899437:web:4575cb6d714aa9cb0b26e4"};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };
