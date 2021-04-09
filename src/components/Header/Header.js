import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.png'
const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt=""/>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Login">Signup</Link>
            </div>
            
        </div>
    );
};

export default Header;