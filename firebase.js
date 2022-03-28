// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp3ZxRMLuJsA0MgXcqk9LTvpq-xK5DwR4",
  authDomain: "wsreal-41422.firebaseapp.com",
  projectId: "wsreal-41422",
  storageBucket: "wsreal-41422.appspot.com",
  messagingSenderId: "836193148741",
  appId: "1:836193148741:web:3d60a573ea5e6ecd76e82c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };
