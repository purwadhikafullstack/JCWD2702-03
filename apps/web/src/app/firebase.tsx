// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHXNokrG5JH2sDVo35pcokE0aq7ss_h1U",
  authDomain: "final-project-auth-abbe5.firebaseapp.com",
  projectId: "final-project-auth-abbe5",
  storageBucket: "final-project-auth-abbe5.appspot.com",
  messagingSenderId: "693508118134",
  appId: "1:693508118134:web:8e36204bf9e554cfeeb157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);