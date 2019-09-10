import React from 'react';
import '../styles/styles.scss'
import mainLogo from '../images/logo.png'
import {NavLink} from "react-router-dom";

const Header =() =>{
    return (
        <header className="header">
            <nav>
                <div className="mainLogo">
                    <img src={mainLogo} alt="" width="50px" height="50px"/>
                    <h3>Logo</h3>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;