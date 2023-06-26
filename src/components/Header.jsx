import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setSearchText } from "../store/searchSlice";
import "../styles/header.css";
import "../styles/common/colors.css";

const Header = () => {

    const [input, setInput] = useState();
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchText(input));
        if(location.pathname !== "/") {
            navigate("/");
        }
    }

    return (
        <div className="top-bar-container">
            <nav className="top-bar">
            <Link to={"/"}><div className="title">GROCERIES</div></Link>
                <form className="top-search" action="" onSubmit={handleSubmit}><input type="text" className="top-search-input" placeholder="Search" onChange={handleChange} value={input}/></form>
                <ul className="side-nav">
                    <li><div className="icon-container"><img className="side-nav-icon" src="./assets/heart.svg" alt="" /><div className="notification-badge badge-wishlist">8</div></div></li>
                    <li><div className="icon-container"><img className="side-nav-icon avatar-icon" src="./assets/avatar.png" alt="" /></div></li>
                    <Link to={"/checkout"}><li><div className="icon-container"><img className="side-nav-icon" src="./assets/cart.svg" alt="" /><div className="notification-badge badge-cart">{cart.length>10?"10+":cart.length}</div></div></li></Link>
                </ul>
            </nav> 
        </div>
    )
}

export default Header