import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
                <ul className="nav-options">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Partners</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="navbar-right">
                <button className="donate-btn">Donate</button>
                <button className="get-started-btn">Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar