// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyg_GmmBF6rUcWc1O_qVVtF6KSU07b6PU",
    authDomain: "chat-app-40e5e.firebaseapp.com",
    projectId: "chat-app-40e5e",
    storageBucket: "chat-app-40e5e.appspot.com",
    messagingSenderId: "994382360806",
    appId: "1:994382360806:web:fb94bcd6357a22eefe0b27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();