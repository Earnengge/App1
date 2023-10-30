import React, { useEffect, useState } from "react"
import "./header.css"
import LogoIMmg3 from "../imagesLogo/logo1.png"
import Sidebar from "./Sidebar";

import {
  twitterProvider,
} from "../../firebase/config";
import { useSocialSignup } from "../../hooks/useSocialSignup";
import { useAuthContext } from "../../context/authContext";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const twitter = useSocialSignup(twitterProvider);
  const { user } = useAuthContext();

  useEffect(() => console.log(user), [user]);

  return (
    <>
      <div id="header">

        <div id="collapse-sidebar" onClick={toggleSidebar}>
          <Sidebar isOpen={isOpen} />
ini
        </div>

        <div id="theme-selector" class="theme-circle">

        </div>
        <div id="social">
          {
            user ? <span style={{marginInlineEnd: '1rem'}}>{user?.displayName}</span> : <button onClick={twitter.signInWithSocial} className="buy-button" style={{ color: "white" }}>Get started</button>
          }

         
            
         
        </div>
      </div>

    </>
  )
}

export default HeaderComponent