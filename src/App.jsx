import { useState } from 'react'
import Home from './component/pages/HomePage';

import HeaderComponent from './component/reusablecomponent/Header';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from './component/reusablecomponent/Sidebar';
import AboutPage from './component/pages/Aboutpage';
import Profile from './component/pages/Profile';
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
        <Route    path='/Profile' element={<Profile/>}/>

    </Routes>
    </Router>
    </>
  )
}

export default App
