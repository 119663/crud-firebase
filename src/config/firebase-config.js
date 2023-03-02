// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDlP0shdzyCpHZ48L3mdTRN4imyOykYCI",
  authDomain: "crud2-fa19c.firebaseapp.com",
  projectId: "crud2-fa19c",
  storageBucket: "crud2-fa19c.appspot.com",
  messagingSenderId: "237466589008",
  appId: "1:237466589008:web:a8b5d8db37138a431c7e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google=new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, google, db}