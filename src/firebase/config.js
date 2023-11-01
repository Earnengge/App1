import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
    getAuth,
    TwitterAuthProvider,
} from "firebase/auth";

const apiKey = "AIzaSyA4ZvhRM8JcPvMD5lo4w6exFH2JiIGJNrM";
const authDomain = "earnnew-fae96.firebaseapp.com";
const projectId = "earnnew-fae96";
const storageBucket = "earnnew-fae96.appspot.com";
const messagingSenderId = "310277137837";
const appId = "1:310277137837:web:5beb285acca1237284ed24";
const measurementId = "G-LTEBXF6SDR";

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const twitterProvider = new TwitterAuthProvider();

export { auth, twitterProvider };
export const db = getFirestore(app);
