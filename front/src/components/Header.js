import React from 'react';
import '../style/style.css'
import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header" style={{height:'90px'}}>
        <div className="logo">
            <img src={logo} alt="Love_Bakery Logo"/>
            <h2 className="m-3">Love_Bakery</h2>
        </div>
        <div className="menu">
            <ul>
                <li><Link id="Sign_Up" to="/login">Login</Link></li>
                <li><Link id="Benefits" to="/register">Register</Link></li>
                <li><Link id="AboutUs" to="/about-us">About US</Link></li>
                <li className="dropdown">
                    <Link id="Products" to="/menu">Menu</Link>
                    <div className="dropdown-content">
                        <Link to="/menu">Desserts</Link>
                        <Link to="/about-us">Cakes</Link>
                        <Link to="/contact">Support</Link>
                    </div>
                </li>
                <li><Link id="Contacts" to="/contact">Contacts</Link></li>
                <li><Link id="Home" to="/">Home Page</Link></li>
            </ul>
        </div>

    </div>
);

export default Header;