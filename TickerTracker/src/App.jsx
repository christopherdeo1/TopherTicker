import Splash from './pages/Splash'
import './App.css'


function App() {
  return (
    <>
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