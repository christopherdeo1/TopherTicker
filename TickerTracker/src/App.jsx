import React from 'react'
import Splash from './pages/Splash'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import About from './pages/About'
import Reports from './pages/Reports'
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="./" element={ <Home /> } />
        <Route path="./About" element={ <About /> } />
        <Route path="./Dashboard" element={ <Dashboard /> } />
        <Route path="./Reports" element={ <Reports /> } />
        <Route path="./Profile" element={ <Profile /> } />
      </Routes >
      <Splash />
      <div id="logins">
        <button id="loginBtn">Login</button >
        <div className="links">
          <p>Register</p>
          <p>Forgot Password</p>
        </div>

      </div >

    </>
  )
}

export default App