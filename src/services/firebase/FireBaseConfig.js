// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD--qxKO5LPHwb5URnaZUg21Vk-Eh4LYI",
  authDomain: "lista-de-productos-gamers.firebaseapp.com",
  projectId: "lista-de-productos-gamers",
  storageBucket: "lista-de-productos-gamers.appspot.com",
  messagingSenderId: "904702207308",
  appId: "1:904702207308:web:76fe6b90cfa71ecc87dbe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)