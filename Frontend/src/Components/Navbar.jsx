import { Fragment, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <Fragment>
            <div className="navbar">
                <div className="logo">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                <div className={`nav-links ${showNavLinks ? 'active' : ''}`}>
                    <input type="text" placeholder='Search for courses' />
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="search-bar">
                    <NavLink className="login" to="/loginStudent">Login</NavLink>
                </div>
                <div className="menu-toggle" onClick={toggleNavLinks}>
                    {showNavLinks ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;
