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
   
      <div class="card">
     
<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 100">
<title>Plotzes</title>
<g transform="matrix(0 -.1 .1 0 0 100)">
<path d="M44.296 446.293s150.017 135.58 408.206 135.58 408.206-135.58 408.206-135.58 235.57 320.8-35.64 425.43-372.567-289.85-372.567-289.85" fill="none" stroke="var(--main-color)" stroke-width="88.59" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="200.422" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
<circle cx="752.323" cy="82.397" r="82.397" fill="var(--main-color)"></circle>
</g>
<text transform="matrix(12.59846 0 0 12.59846 -1445.293 -307.27)" font-size="10.583" font-family="Quicksand" fill="var(--main-color)">
<tspan x="122.645" y="32.221">lotzes</tspan>
</text>
</svg>
</div>
<div class="card">
<h1>Hobbies</h1>
<p>
One of my favourite things to do is to play TNT Wizards on the Hypixel Minecraft server.
I also love to code. That's why I made this whole website from scratch without any frameworks.
Sometimes I upload YouTube video's which you can check out by clicking on the YouTube icon at the top right
or by clicking <a href="https://youtube.com/channel/UCatx9Oa2Y55Q4A9lvTS5KYw" target="_blank">here</a>.
</p>
</div>
<div class="card">
<h1>Contact</h1>
<p>
If you want to contact me then I <b>highly</b> recommend to send me a message in Discord.
My Discord tag is <span class="highlight">plotzes</span>.
If that doesn't work then you can also try sending me a DM via Twitter.
My username for Twitter is <span class="highlight">@ImPlotzes</span>.<br/>
</p>
</div>
<div class="card">
<h1>Site information</h1>
<ul>
<li>Developer: Plotzes</li>
<li>Languages: HTML, CSS &amp; JavaScript</li>
<li>Version: 2.5.4</li>
<li>Last updated: October 25th, 2022</li>
<br/>
<li>
Additional notes:<br/>
This website uses no frameworks, and only one page uses a JavaScript library.
The <a href="/playercount">player count page</a> uses <a href="https://developers.google.com/chart" target="_blank">Google Charts</a> for showing the data history.</li>
</ul>
</div>

    </>
  )
}

export default AboutPage