import React, { useEffect } from "react"
import "./Horiizontal.css"
function Horizontal() {
 
  return (
    <>
    <div className="bodies" >
    <h2 style={{fontFamily:"DISCOVERY",fontWeight:"200"}}>OUR ROADMAP</h2>

    <div class="containers">
<div className="card-container">
  <ul class="cardess">
    <li class="cardes">
    <div className="roundedcards">1</div>

        
      <div>
        <h3 class="cardes-title">Website Launch: </h3>
        <div class="cardes-content">
          <p>
In Q4 2023, we'll unveil the EarnEngage website, marking the start of our web3 social finance journey.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
      Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">2</div>
      <div>
        <h3 class="cardes-title">Marketing and Fair Launch:</h3>
        <div class="cardes-content">
          <p>We'll kick off an inclusive marketing strategy to build excitement and awareness.
</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">3</div>
      <div>
        <h3 class="cardes-title">Community Engagement: </h3>
        <div class="cardes-content">
          <p>Focusing on early adopters, we aim to create a strong and supportive community</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">4</div>
      <div>
        <h3 class="cardes-title">Marketing Campaigns</h3>
        <div class="cardes-content">
          <p>Targeted campaigns to promote the platform, rewards, and positive atmosphere.
 We'll reduce token supply to enhance scarcity and utility for long-term value.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    
    <li class="cardes">
      <div>
      <div className="roundedcards">5</div>
        <h3 class="cardes-title">Burning Event:</h3>
        <div class="cardes-content">
          <p>We'll reduce token supply to enhance scarcity and utility for long-term value.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">6</div>
      <div>
        <h3 class="cardes-title">Weekly Rewards:</h3>
        <div class="cardes-content">
          <p>Top users on the leaderboard will receive weekly payouts.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">7</div>

      <div>
        <h3 class="cardes-title">Market Cap Goal: </h3>
        <div class="cardes-content">
          <p> Our goal is a market capitalization of 5-20 million.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q4 2023
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">8</div>

      <div>
        <h3 class="cardes-title">Scholarship Award: </h3>
        <div class="cardes-content">
          <p> Launching in Q1 2024, our scholarship program offers educational resources.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q1 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">9</div>

      <div>
        <h3 class="cardes-title">
Website Upgrade: </h3>
        <div class="cardes-content">
          <p>Enhancing user experience with improved features and smoother navigation.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q1 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">10</div>

      <div>
        <h3 class="cardes-title">Market Expansion:</h3>
        <div class="cardes-content">
          <p>In Q1 2024, we expand to new markets for inclusivity.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q1 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">11</div>

      <div>
        <h3 class="cardes-title">Startup Launchpad: </h3>
        <div class="cardes-content">
          <p>We'll support aligned startup projects with a growth platform.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q1 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">12</div>

      <div>
        <h3 class="cardes-title"> Added Features: </h3>
        <div class="cardes-content">
          <p> Q2 2024 brings more features, enhancing user engagement and interactions.</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
      Q2 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">13</div>

      <div>
        <h3 class="cardes-title"> Enhanced Social Features: </h3>
        <div class="cardes-content">
          <p> In Q3 2024, we introduce social features to foster community interaction</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q2 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">14</div>

      <div>
        <h3 class="cardes-title"> Enhanced Social Features: </h3>
        <div class="cardes-content">
          <p> In Q3 2024, we introduce social features to foster community interaction</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q3 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">15</div>

      <div>
        <h3 class="cardes-title">
Advanced Analytics:  </h3>
        <div class="cardes-content">
          <p>Users get advanced analytics for performance tracking and impact understanding.
</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q3 2024
      </div>
    </li>
    <li class="cardes">
    <div className="roundedcards">16</div>

      <div>
        <h3 class="cardes-title">
        Network Integration:</h3>
        <div class="cardes-content">
          <p>Expanding by integrating with more web3 networks for broader engagement.
</p>
        </div>
      </div>
      <div class="cardes-link-wrapper">
     Q3 2024
      </div>
    </li>
  </ul>
</div>
</div>
</div>


      
    </>
  )
}

export default Horizontal