// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp  } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

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
let app: any
let auth: any
let provider: any

if (typeof window !== "undefined") {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app)

    provider = new GoogleAuthProvider()
}

export { app, auth, provider }