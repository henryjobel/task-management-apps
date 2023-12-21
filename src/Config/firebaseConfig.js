// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV7RN3L1uUVColgWmpGr3oKnQ1rt73BfI",
  authDomain: "task-management-app-c4b3c.firebaseapp.com",
  projectId: "task-management-app-c4b3c",
  storageBucket: "task-management-app-c4b3c.appspot.com",
  messagingSenderId: "940938417220",
  appId: "1:940938417220:web:390e93bb6ffbcd06a61811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;