import React, { useEffect } from "react"
import './profile.css'
function Profile() {
  return (
    <>

<div className="profile-for-web3">
    <div className="profile-avater" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <img className="img-responsive" loading="lazy" src="https://cdn.simplehash.com/assets/db17eebeede377614b156126590d5e4c521a80fef6bdce78e8e6563b4526b417.gif"/>
    <div className="profile-name">
        <h2>vitalik.eth</h2>
    </div>
    </div>
   

    </div>  
 </>
  )
}

export default Profile