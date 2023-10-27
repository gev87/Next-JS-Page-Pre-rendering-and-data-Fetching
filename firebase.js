// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyp2KGi8S3qONaZeMwOOuBMG4GI_5iwMc",
  authDomain: "next-js-lastsales.firebaseapp.com",
  databaseURL:
    "https://next-js-lastsales-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "next-js-lastsales",
  storageBucket: "next-js-lastsales.appspot.com",
  messagingSenderId: "201974351607",
  appId: "1:201974351607:web:ae2e924a4ec9b854e735f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
