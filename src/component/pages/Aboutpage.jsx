import React, { useEffect } from "react"
import "../Aboutpage.css"
import BackgroundVideo from "../imagesLogo/video.mp4"; // Update this with the actual path to your video

import HeaderComponent from "../reusablecomponent/Header"
import Sidebar from "../reusablecomponent/Sidebar"
function AboutPage() {
  return (
    <>
    
    <HeaderComponent/>
    <Sidebar/>
   
      <div class="cards">
     <h2> About Us</h2>
At EarnEngage, we are committed to reshaping the world of social finance in the web3 space while infusing it with the everyday positive vibes of the digital world. Our journey began with a simple yet powerful idea: empower individuals to share their unique life stories, along with the daily positive experiences in the web3 realm, while engaging on Twitter, and in return, earn real rewards. EarnEngage isn't just about storytelling; it's about celebrating the positive spirit that makes the web3 space so vibrant.
</div>
<div class="cards">
  <h1>Our vision</h1>
Our vision is to create a more inclusive and transparent web3 ecosystem where individuals can share both their web3 experiences and the positive moments from their daily digital lives, all while being rewarded for their active engagement. We believe that web3 should be a place of technological innovation, but also a source of inspiration, positivity, financial inclusivity, and a thriving community.
</div>
<div class="cards">
<h1>Team and Leadership</h1>
Team and Leadership
EarnEngage is led by a dedicated team of blockchain enthusiasts, innovators, and educators who share a passion for combining the potential of blockchain with the spirit of positivity. Our team's expertise spans blockchain technology, social finance, and community building. We are committed to nurturing an environment that celebrates positivity, transparency, and innovation.
</div>
<div class="cards">
<h1>Our Community</h1>

Our community is the soul of EarnEngage. We are inspired by the stories and experiences shared by our users, as well as the daily positivity they bring to the web3 space. We value the diversity of our community and are dedicated to fostering an environment where every member can flourish and contribute to the positive culture of web3.
</div>

    </>
  )
}

export default AboutPage