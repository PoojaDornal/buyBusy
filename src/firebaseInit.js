// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHBM8DTvLq6k4OFZnH0FraDl5EToWMzuc",
  authDomain: "buybusyapp.firebaseapp.com",
  projectId: "buybusyapp",
  storageBucket: "buybusyapp.appspot.com",
  messagingSenderId: "52810172350",
  appId: "1:52810172350:web:e784b6b073059cecf8dbef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);