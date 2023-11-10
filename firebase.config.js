// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
    apiKey: "AIzaSyBRDX435LFtN4uXTgBSAvDW2SpNUxjeyNA",
    authDomain: "otp-new-4d979.firebaseapp.com",
    projectId: "otp-new-4d979",
    storageBucket: "otp-new-4d979.appspot.com",
    messagingSenderId: "709889447318",
    appId: "1:709889447318:web:406e827612b3cc9e0039b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);