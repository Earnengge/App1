import React, { useState,useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  twitterProvider,
} from "../../firebase/config";
import { useSocialSignup } from "../../hooks/useSocialSignup";
import { useAuthContext } from "../../context/authContext";
function Sidebar({isOpen}) {
   
        const handleLinkClick = (e) => {
          // Prevent the click event from propagating and closing the sidebar
          e.stopPropagation();
        };
      
        const twitter = useSocialSignup(twitterProvider);
        const { user } = useAuthContext();
      
        useEffect(() => console.log(user), [user]);
  return (
    <>

<div id="sidebar"   className={isOpen ? "expanded" : "collapsed"}>
<div id="title">
<svg id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<g transform="matrix(.2 0 0 .2 0 6.67266)">
<path d="M44.296 446.293s150.017 135.58 408.206 135.58 408.206-135.58 408.206-135.58 235.57 320.8-35.64 425.43-372.567-289.85-372.567-289.85" fill="none" stroke="var(--main-color)" stroke-width="88.592" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="200.422" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
<circle cx="752.323" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
</g>
</svg>
<p>Pages</p>
</div>
<div id="pages">
<Link id="page-home" to="/" className={isOpen?"sidebar-active":"not-active"}  onClick={handleLinkClick}>Home</Link>

<div class="sidebar-collapsible"  onClick={handleLinkClick}>
Tasks
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<g transform="matrix(.2 0 0 .2 0 6.67266)">
<path d="M44.296 446.293s150.017 135.58 408.206 135.58 408.206-135.58 408.206-135.58 235.57 320.8-35.64 425.43-372.567-289.85-372.567-289.85" fill="none" stroke="var(--main-color)" stroke-width="88.592" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="200.422" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
<circle cx="752.323" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
</g>
</svg>
<div class="sidebar-content">
<Link to="/taskPage" onClick={handleLinkClick}> Join Leaderboard</Link>

<Link id="page-leaderboard" to="/leaderBoard"  onClick={handleLinkClick}> Leaderboard</Link>

</div>
</div>
<Link id="social">
          {
            user ? <span style={{marginInlineEnd: '1rem'}}>{user?.displayName}</span> : <span onClick={twitter.signInWithSocial}  style={{ color: "white" }}>Get started</span>
          }

         
            
         
        </Link>
        <a id="page-playercount" href="/playercount"  onClick={handleLinkClick}>LaunchPad</a>

<Link id="page-about" to="/about"  onClick={handleLinkClick}>About</Link>
<Link id="page-about" to="/Profile"  onClick={handleLinkClick}>Profile</Link>
</div>
</div>
    </>
  );
}

export default Sidebar;
