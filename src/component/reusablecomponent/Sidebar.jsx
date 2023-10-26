import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({isOpen}) {
  

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
<Link id="page-home" to="/" class="sidebar-active">Home</Link>
<div class="sidebar-collapsible">
TNT Games
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<g transform="matrix(.2 0 0 .2 0 6.67266)">
<path d="M44.296 446.293s150.017 135.58 408.206 135.58 408.206-135.58 408.206-135.58 235.57 320.8-35.64 425.43-372.567-289.85-372.567-289.85" fill="none" stroke="var(--main-color)" stroke-width="88.592" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="200.422" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
<circle cx="752.323" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
</g>
</svg>
<div class="sidebar-content">
<a id="page-stats" href="/stats">Stats</a>
<a id="page-playercount" href="/playercount">Player Count</a>
<a id="page-leaderboard" href="/leaderboard">Wizards Leaderboards</a>
</div>
</div>
<Link id="page-about" to="/about">About</Link>
<Link id="page-about" to="/about">Profile</Link>
<a id="page-contact" href="/contact">Contact</a>
</div>
</div>
    </>
  );
}

export default Sidebar;
