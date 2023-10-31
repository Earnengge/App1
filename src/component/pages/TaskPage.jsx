// import { useSocialSignup } from "../../hooks/useSocialSignup";
import { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import "../pages/TaskPage.css"
import BackgroundVideo from "../imagesLogo/video.mp4"; // Update this with the actual path to your video


const TaskPage = () => {

    // const twitter = useSocialSignup(twitterProvider);
    const { user } = useAuthContext();
const [forminput,Setform]=useState();

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
                            <div className="insertTweetLink">
                         <label htmlFor="tweet">Tweet Link</label>
                            <input type="text" name="forminput" id="forminput" onChange={(e)=>{Setform(e.target.value);console.log(forminput)}}  />
                        </div>
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