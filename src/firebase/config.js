import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
    getAuth,
    TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.STORAGEBUCKET,
    messagingSenderId: import.meta.env.MESSAGINGSENDERID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.MESUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const twitterProvider = new TwitterAuthProvider();

export { auth, twitterProvider };
export const db = getFirestore(app);
