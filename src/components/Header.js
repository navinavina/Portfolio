// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS styles for the header
import Footer from './Footer';

const Header = () => {
    return (
        <div>
        <header className="header">
            {/* <div className="logo">
                <h1>Navina's Portfolio</h1> {/* Replace with your logo if you have one 
            </div> */}
            
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Footer/>
        
        </div>
    );
};

export default Header;
