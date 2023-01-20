// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjuKIgdOuSJcZHOX62pTO-qYNH0-z9ivw",
  authDomain: "test-8737e.firebaseapp.com",
  projectId: "test-8737e",
  storageBucket: "test-8737e.appspot.com",
  messagingSenderId: "932479866863",
  appId: "1:932479866863:web:a686da6a19f9abbf2f481a",
  measurementId: "G-04ERKNX31K",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();

export { app, db, storage, analytics };
