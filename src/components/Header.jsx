import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/header.css";

const Header = () => {

    const [searchText, setSearchText] = useState();
    const cart = useSelector(state => state.cart.value);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="top-bar-container">
            <nav className="top-bar">
            <Link to={"/"}><div className="title">GROCERIES</div></Link>
                <input type="text" className="top-search" placeholder="Search" onChange={handleChange} value={searchText}/>
                <ul className="side-nav">
                    <li><div className="icon-container"><img className="side-nav-icon" src="./assets/heart.svg" alt="" /><div className="notification-badge">8</div></div></li>
                    <li><div className="icon-container"><img className="side-nav-icon avatar-icon" src="./assets/avatar.png" alt="" /></div></li>
                    <Link to={"/checkout"}><li><div className="icon-container"><img className="side-nav-icon" src="./assets/cart.svg" alt="" /><div className="notification-badge">{cart.length>10?"10+":cart.length}</div></div></li></Link>
                </ul>
            </nav> 
        </div>
    )
}

export default Header