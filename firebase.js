// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt5z90aTxz6H0KvFJyHJ2Nl7Q0panDDSc",
  authDomain: "ponfepadel.firebaseapp.com",
  projectId: "ponfepadel",
  storageBucket: "ponfepadel.firebasestorage.app",
  messagingSenderId: "597918497404",
  appId: "1:597918497404:web:0d8ec6b53fd1015a4867f9",
  measurementId: "G-W1EVEKJ07T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);