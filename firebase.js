import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBt5z90aTxz6H0KvFJyHJ2Nl7Q0panDDSc",
  authDomain: "ponfepadel.firebaseapp.com",
  projectId: "ponfepadel",
  storageBucket: "ponfepadel.firebasestorage.app",
  messagingSenderId: "597918497404",
  appId: "1:597918497404:web:0d8ec6b53fd1015a4867f9",
  measurementId: "G-W1EVEKJ07T"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getDatabase(app);
const dbRef = ref(db, 'ponfepadel_data');

export { app, db, dbRef, onValue, set, analytics };