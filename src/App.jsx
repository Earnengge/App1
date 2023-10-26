import { useState } from 'react'
import Home from './component/pages/HomePage';

import HeaderComponent from './component/reusablecomponent/Header';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from './component/reusablecomponent/Sidebar';
import AboutPage from './component/pages/Aboutpage';
import Profile from './component/pages/Profile';
import Contact from './component/pages/contact';
import LeaderBoard from './component/pages/LeaderBoardPage';
function App() {
  
  return (
    <>
    
     <Router>
    <Routes>
    <Route
          path="/"
          element={
            <>
              <HeaderComponent />
             
              <Home />
            </>
          }
        />
      
        <Route    path='/about' element={<AboutPage/>}/>
        <Route    path='/Profile' element={
           <><HeaderComponent /><Profile/> </>}/>
        <Route    path='/contact' element={
        <>
         <HeaderComponent />
         <Contact/></>}/>
        <Route    path='/LeaderBoard' element={
        <>
         <HeaderComponent />
         <LeaderBoard/></>}/>
         

    </Routes>
    </Router>
    </>
  )
}

export default App
