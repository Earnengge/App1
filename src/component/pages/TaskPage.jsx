<<<<<<< HEAD
// import { useSocialSignup } from "../../hooks/useSocialSignup";
import { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import "../pages/TaskPage.css"
import BackgroundVideo from "../imagesLogo/video.mp4"; // Update this with the actual path to your video
=======
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import firebase from 'firebase/app';
import "firebase/firestore"
>>>>>>> e7e3fcdb6adbd286305edc7f219b81e1c741650f


const TaskPage = () => {

    const { user } = useAuthContext();
<<<<<<< HEAD
const [forminput,Setform]=useState();
=======
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
>>>>>>> e7e3fcdb6adbd286305edc7f219b81e1c741650f

    return (
        <div style={{ marginBlock: '4rem' }}>
          
          <video autoPlay loop muted className="background-video">
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  {
                user ?
                    <div style={{ marginInline: '5rem' }}>
                        <h3>How to participate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, repellat quasi alias molestias, voluptatum aliquid porro tempore quae vel sit nobis culpa cum neque eum esse et laboriosam possimus? Ad.</p>

                        <div>
                            <p>1. Follow <a href="">Earnengage on twitter</a></p>
<<<<<<< HEAD
                            <div className="insertTweetLink">
                         <label htmlFor="tweet">Tweet Link</label>
                            <input type="text" name="forminput" id="forminput" onChange={(e)=>{Setform(e.target.value);console.log(forminput)}}  />
                        </div>
=======

                            <input style={{padding: '1rem', color: "red"}} type="text" value={tweetText} onChange={(e)=> setTweetText(e.target.value)} />
                            <button style={{padding: '1rem'}} onClick={handleTweetSubmit}>submit</button>
>>>>>>> e7e3fcdb6adbd286305edc7f219b81e1c741650f
                        </div>
                    </div>
                    :
                    <div>Page only for authenticated users
                        
                    </div>
            }
        </div>
    )
}

export default TaskPage