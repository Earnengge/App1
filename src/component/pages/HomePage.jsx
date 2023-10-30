import React, { useEffect } from "react";
import "../home.css";
import VerticalSlider from "../components/slider"
import Logoimage from "../imagesLogo/logo1.png";
import { Link } from "react-router-dom";
import Testimonials from "../components/how";
import BackgroundVideo from "../imagesLogo/video.mp4"; // Update this with the actual path to your video

function Home() {
  return (
    <>
      <div>
        <div id="banner" className="video-background">
          <video autoPlay loop muted className="background-video">
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

         
          <div className="headertwo">
          <h2>Are you ready to embark on a limitless crypto adventure with EarnEngage?</h2>
          </div>
          <div className="boxtwo">
            
            <div id="banner-text">
              <p style={{ marginTop: "30px" }}>
                Join us in exploring boundless opportunities in the ever-evolving
                crypto world. Inspired by my past experiences, both the challenges
                and successes. We've crafted a unique social finance model that
                not only allows you to engage with the crypto world but also
                rewards you for your journey while Engaging in your Social
                Activities on a weekly basis. Let's redefine the way you experience
                crypto. Join us today.
              </p>
              <div className="btn" style={{ marginTop: "30px" }}>
                <button className="buy-button">Buy</button>
          <Link to="http://docs.earnengage.club/">    <button className="sell-button">whitepaper</button>
          </Link>     </div>
            </div>
            <div className="image">
              <img
                src={Logoimage}
                loading="lazy"
                alt="company-logo"
                className="Logo"
              />
            </div>
          </div>
        </div>
       <VerticalSlider/>
        <div className="HowItworks">
          <div className="heading">
            <h1>How it works</h1>
            <p>
              At EarnEngage, our platform is designed to make participating in
              the web3 space both rewarding and exciting. Here's a step-by-step
              guide on how it all comes together:
            </p>
          </div>
          <Testimonials />
        </div>
       
      </div>
    </>
  );
}

export default Home;
