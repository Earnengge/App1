import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
    getAuth,
    TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const twitterProvider = new TwitterAuthProvider();

export { auth, twitterProvider };
export const db = getFirestore(app);