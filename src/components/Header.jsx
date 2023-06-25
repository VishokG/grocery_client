import React from 'react';
import { useState } from 'react';
import "../styles/header.css";

const Header = () => {

    const [searchText, setSearchText] = useState();

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="top-bar-container">
            <nav className="top-bar">
                <div className="title">GROCERIES</div>
                <input type="text" className="top-search" placeholder="Search" onChange={handleChange} value={searchText}/>
                <ul className="side-nav">
                    <li><div className="icon-container"><img className="side-nav-icon" src="./assets/heart.svg" alt="" /><div className="notification-badge">8</div></div></li>
                    <li><div className="icon-container"><img className="side-nav-icon avatar-icon" src="./assets/avatar.png" alt="" /></div></li>
                    <li><div className="icon-container"><img className="side-nav-icon" src="./assets/cart.svg" alt="" /><div className="notification-badge">10+</div></div></li>
                </ul>
            </nav> 
        </div>
    )
}

export default Header