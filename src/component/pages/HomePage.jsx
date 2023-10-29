import React, { useEffect } from "react"
import "../home.css"
import VerticalSlider from "../components/slider"
import Logoimage from "../imagesLogo/logo1.png"
function Home() {
  return (
    <>
      <div>

        <div id="banner">
          <img src={Logoimage} loading="lazy" alt="company-logo" className="logos" />

          <h2>Are you ready to embark on a limitless crypto adventure with EarnEngage?</h2>



          <div className="boxtwo">


            <div id="banner-text">
              <p style={{ marginTop: "30px" }}> Join us in exploring boundless opportunities in the ever-evolving crypto world. Inspired by my past experiences, both the challenges and successes. We've crafted a unique social finance model that not only allows you to engage with the crypto world but also rewards you for your journey while Engaging in your Social Activities on a weekly bases. Let's redefine the way you experience crypto. Join us today.".</p>
              <div className="btn" style={{ marginTop: "30px" }}>
                <button className="buy-button">Buy</button>
                <button className="sell-button">Sell</button>
              </div>

            </div>
            <div className="image">

              <img src={Logoimage} loading="lazy" alt="company-logo" className="Logo" />  </div>

          </div>
        </div>
        <VerticalSlider />
      </div>
    </>
  )
}

export default Home