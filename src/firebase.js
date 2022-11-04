// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7PWPFnoXUGJtrIh_Dc7m9oj9wL3Wmy2o",
  authDomain: "capstone-auth-a45a5.firebaseapp.com",
  projectId: "capstone-auth-a45a5",
  storageBucket: "capstone-auth-a45a5.appspot.com",
  messagingSenderId: "885972282577",
  appId: "1:885972282577:web:195245cc9e86c60eb069f0",
  measurementId: "G-5S1G1N2ZJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
