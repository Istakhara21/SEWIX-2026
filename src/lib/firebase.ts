// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfkbYYYK1N-cNEBTglZMdrAmC8GOMkF9w",
  authDomain: "sewix-2.firebaseapp.com",
  projectId: "sewix-2",
  storageBucket: "sewix-2.firebasestorage.app",
  messagingSenderId: "482669596891",
  appId: "1:482669596891:web:8ba65763dc35b08a487cfe",
  measurementId: "G-F34YEJXJYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
