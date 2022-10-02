// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeTtf-4wCcGe2jagurI5Bz6_EaayOdDo0",
    authDomain: "doctors-portal-c4592.firebaseapp.com",
    projectId: "doctors-portal-c4592",
    storageBucket: "doctors-portal-c4592.appspot.com",
    messagingSenderId: "485319954819",
    appId: "1:485319954819:web:8a0c3ee1f8ed21141fe6b6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;