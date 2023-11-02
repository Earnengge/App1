import React, { useEffect, useState } from "react"
import "./header.css"
import Sidebar from "./Sidebar";
import logo from "../imagesLogo/logo5.png"
import menu from "../imagesLogo/menu.png"
import close from "../imagesLogo/letter-x.png"
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

        <div   className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="white" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>              )
        :     (    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="white" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/></svg>              ) }

          <Sidebar isOpen={isOpen} />
        </div>

<img src={logo} alt="logo" width="70px" height="70px" className="img" />
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