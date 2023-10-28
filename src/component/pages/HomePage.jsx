import React, { useEffect } from "react"
import "../home.css"
import VerticalSlider from "../components/slider"
function Home() {
  return (
    <>
<div id="banner">
<svg id="banner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 100">
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
<div id="banner-text">
<h2>Hi Friends </h2>
<p>A new project has emerged, drawing inspiration from my past experiences in the crypto space. It's the belief that we should all strive to profit and enjoy ourselves in this realm, making it even more exciting.</p>
<h3>Discord Server</h3>
<VerticalSlider/>
</div>
</div>
    </>
  )
}

export default Home