// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl26TvBZkdq2WzsYfbxEbetnXnCvVz4jg",
  authDomain: "album-ad39e.firebaseapp.com",
  projectId: "album-ad39e",
  storageBucket: "album-ad39e.firebasestorage.app",
  messagingSenderId: "995565216200",
  appId: "1:995565216200:web:791caacce37351ad72e0fd",
  measurementId: "G-Z3VDFLMFG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
