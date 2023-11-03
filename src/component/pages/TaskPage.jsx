import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore related functions directly
import { doc, setDoc, Timestamp } from "firebase/firestore"; // Import other Firestore functions if needed
import "./TaskPage.css"


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
                    username:user?.displayName
                    // timestamp: firebase.firestore.FieldValue.serverTimestamp()
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
        <div style={{ marginBlock: '4rem',marginTop:'20%',display:"flex",alignContent:"center",justifyContent:"center" }}>
            {
                user ?
                    <div style={{ marginInline: '5rem' }}>
                        <h3>How to participate</h3>
                        <ol>
  <li>Go to Twitter.</li>
  <li>Make a tweet of your choice.</li>
  <li>Tag EarnEngage on X formerly twitter  with @ so we can see it.</li>
  <li>Use our hashtags:
    <ul>
      <li>#EarnEngage</li>
      <li>#SuccessIsSure</li>
      <li>#SiS</li>
    </ul>
  </li>
  <li>Copy and paste the retweet link below.</li>
</ol>

                        <div>

                            <input style={{padding: '1rem', color: "red"}} type="text" value={tweetText} onChange={(e)=> setTweetText(e.target.value)} />
                            <div className="button">
                            <button style={{padding: '1rem', }} onClick={handleTweetSubmit}>submit</button>

                            </div>
                        </div>
                    </div>
                    :
                    <div style={{display:"flex", fontSize:"30px",justifyContent:"center",alignContent:"center"}}>Page only for authenticated users</div>
            }
        </div>
    )
}

export default TaskPage;