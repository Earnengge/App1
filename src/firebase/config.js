import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
    getAuth,
    TwitterAuthProvider,
} from "firebase/auth";

<<<<<<< HEAD
const apiKey = "AIzaSyA4ZvhRM8JcPvMD5lo4w6exFH2JiIGJNrM";
const authDomain = "earnnew-fae96.firebaseapp.com";
const projectId = "earnnew-fae96";
const storageBucket = "earnnew-fae96.appspot.com";
const messagingSenderId = "310277137837";
const appId = "1:310277137837:web:5beb285acca1237284ed24";
const measurementId = "G-LTEBXF6SDR";
=======
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.STORAGEBUCKET,
    messagingSenderId: import.meta.env.MESSAGINGSENDERID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.MESUREMENTID
};
>>>>>>> e7e3fcdb6adbd286305edc7f219b81e1c741650f

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
