import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore related functions directly
import { doc, setDoc, Timestamp } from "firebase/firestore"; // Import other Firestore functions if needed
import "./TaskPage.css"
// Initialize Firebase
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


const TaskPage = () => {

    const { user } = useAuthContext();
    const [tweetText, setTweetText] = useState('');

    const handleTweetSubmit = async () => {
        console.log(tweetText)
        try {

            if (user) {
                const docRef = await addDoc(collection(db, 'tweets'), {
                    twit_link: tweetText,
                    userid: user.uid,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  });
                  console.log("Document written with ID: ", docRef.id);

                setTweetText('');
            } else {
                // Handle the case when the user is not authenticated.
                console.log("NOT AUTHENTICATED")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div style={{ marginBlock: '4rem',marginTop:'9rem' }}>
            {
                user ?
                    <div style={{ marginInline: '5rem' }}>
                        <h3>How to participate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellat quasi alias molestias, voluptatum aliquid porro tempore quae vel sit nobis culpa cum neque eum esse et laboriosam possimus? Ad.</p>

                        <div>
                            <p>1. Follow <a href="">Earnengage on twitter</a></p>

                            <input style={{padding: '1rem', color: "red"}} type="text" value={tweetText} onChange={(e)=> setTweetText(e.target.value)} />
                            <div className="button">
                            <button style={{padding: '1rem', }} onClick={handleTweetSubmit}>submit</button>

                            </div>
                        </div>
                    </div>
                    :
                    <div>Page only for authenticated users</div>
            }
        </div>
    )
}

export default TaskPage;