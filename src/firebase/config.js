import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
    getAuth,
    TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA07T5h0fYiIwoD8M6cFU7eNfjDVguupAc",
    authDomain: "web3-bb325.firebaseapp.com",
    projectId: "web3-bb325",
    storageBucket: "web3-bb325.appspot.com",
    messagingSenderId: "244165396463",
    appId: "1:244165396463:web:d2d8d51fcb2d2b2c07d81a",
    measurementId: "G-MDZJXQG19J"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const twitterProvider = new TwitterAuthProvider();

export { auth, twitterProvider };
export const db = getFirestore(app);
