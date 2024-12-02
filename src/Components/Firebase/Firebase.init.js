// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5nxzNyYHtCdLzClMNOpzTEaqnh2z6ztQ",
    authDomain: "m-56-5-coffee-store.firebaseapp.com",
    projectId: "m-56-5-coffee-store",
    storageBucket: "m-56-5-coffee-store.firebasestorage.app",
    messagingSenderId: "57917788181",
    appId: "1:57917788181:web:78da0f17b4eb585bfe7e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);