import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAKYmx4hYSX5ITy6ML9UtnKDJCv9vQJq5k",
  authDomain: "flames-game-a1299.firebaseapp.com",
  projectId: "flames-game-a1299",
  storageBucket: "flames-game-a1299.firebasestorage.app",
  messagingSenderId: "240761498295",
  appId: "1:240761498295:web:9c5ea0bd0a7f354e9d7b32",
  measurementId: "G-T27LDF581B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };
