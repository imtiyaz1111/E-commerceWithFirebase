// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDbIp-9dhzgwWAq90KxujNUDwufJ-sg0I",
  authDomain: "e-commerce-880f7.firebaseapp.com",
  projectId: "e-commerce-880f7",
  storageBucket: "e-commerce-880f7.firebasestorage.app",
  messagingSenderId: "433913128506",
  appId: "1:433913128506:web:e1226723641e8025177703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;