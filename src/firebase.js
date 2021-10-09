import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAi_EwJO-zrNY3FXKzOLS9Hsxkw3ngMs",
  authDomain: "firestore-react-todo.firebaseapp.com",
  projectId: "firestore-react-todo",
  storageBucket: "firestore-react-todo.appspot.com",
  messagingSenderId: "65697558274",
  appId: "1:65697558274:web:845d93e907a0e5b1459c1b"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

// initializing firestore and exporting
export const db = getFirestore();