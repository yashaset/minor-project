import React from 'react';

import './App.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    
    return (
        <nav>
            <a href="/"className="logo" style={{color:'white'}}>Podium.com</a>
            <ul className="nav-links">
                <Link style={{fontWeight: '500',color: 'white', textDecoration: 'none'}} to="/about">
                    <li>About</li>
                </Link>
                <Link style={{fontWeight: '500',color: 'white', textDecoration: 'none'}} to="/register">
                    <li>Register</li>
                </Link>
                <Link style={{fontWeight: '500',color: 'white', textDecoration: 'none'}} to="/organiseMeeting">
                    <li>Organise</li>
                </Link>
                <Link style={{fontWeight: '500',color: 'white', textDecoration: 'none'}} to="/meetings">
                    <li>Meetings</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Nav;
