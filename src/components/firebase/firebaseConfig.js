import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from 'firebase/auth'

// Your web  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBez1XvQ5aFvyno05grVKljfy99BjmA9LY",
  authDomain: "parking-web-fa669.firebaseapp.com",
  projectId: "parking-web-fa669",
  storageBucket: "parking-web-fa669.appspot.com",
  messagingSenderId: "609164343226",
  appId: "1:609164343226:web:cedfd4fff1bca7287d8f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export default  app  

 