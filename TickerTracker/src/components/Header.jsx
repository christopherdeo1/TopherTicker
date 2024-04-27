import React from 'react'
import Navigation from '../components/Navigation'
import heartLogo from '../assets/heart.jpg'
import '../css/Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={ heartLogo } />
                <h1 className="title">Topher's Ticker Tracker</h1>
            </div >
            <Navigation />
        </>
    )
}

export default Header
