// eslint-disable-next-line no-unused-vars
import React from 'react'
import heartLogo from '../assets/heart.jpg'
import '../css/Splash.css'

const Splash = () => {
    return (
        <div className="splash">
            <img src={ heartLogo } className="logo react" alt="React logo" />
            <h1>Topher&apos;s Ticker Tracker</h1>
        </div >
    )
}

export default Splash