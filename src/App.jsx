import { useState } from 'react'
import Home from './component/pages/HomePage';

import HeaderComponent from './component/reusablecomponent/Header';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from './component/reusablecomponent/Sidebar';
import AboutPage from './component/pages/Aboutpage';
import Profile from './component/pages/Profile';
import LeaderBoard from './component/pages/LeaderBoardPage';
import TaskPage from './component/pages/TaskPage';
import Footer from "./component/pages/footer"



function App() {

  return (
    <>
<div id="changer">
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

          <Route path='/about' element={<AboutPage />} />
          <Route path='/TaskPage' element={<>
                <HeaderComponent />
                < TaskPage/>
              </>} />

          <Route
          path="/Profile/:username"
            element={
              <>
                <HeaderComponent />
                <Profile />
              </>
            }
          />

          <Route
            path='/task'
            element={
              <>
                <HeaderComponent />
                <TaskPage />
              </>
            }
          />


          <Route path='/LeaderBoard' element={
            <>
              <HeaderComponent />
              <LeaderBoard />
            </>}
          />

        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
