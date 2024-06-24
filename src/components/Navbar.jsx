import React from 'react';
import '../components/navbar/navbar.css';
import logo from '../Assets/logo.jpg' 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>Shaadi.com india</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Guide</a></li>
                <li><a href="#">Contract</a></li>
            </ul>
            <div className="auth-buttons">
                <button className="register">Registration</button>
                <button className="signin">Sign In</button>
            </div>
        </nav>
    );
}

export default Navbar;
